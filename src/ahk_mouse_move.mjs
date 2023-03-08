export function move(combo, mouseU, mouseR, mouseD, mouseL) {
  return `mouse := {
  boostSpeed: 0, ; on double/triple click  
  moveCount_total: 0,
  moveCount: Map(
    'up', 0,
    'down', 0,
    'right', 0,
    'left', 0,
  ),
  pressCount: Map(
    'up', 0,
    'down', 0,
    'right', 0,
    'left', 0,
  )
}

resetMouseSpeed() {
  global
  x := mouse_speed_lvl ? x_slow : x_default
  y := mouse_speed_lvl ? y_slow : y_default
}

toggleMouseSpeed() {
  global
  mouse_speed_lvl := !mouse_speed_lvl
  resetMouseSpeed()
}

multiplyMouseSpeed(boost) {
  global

  if x <= x_max
    x *= boost ? x_doubleMultiply : x_defaultMultiply

  if y <= y_max
    y *= boost ? y_doubleMultiply : y_defaultMultiply
}

mouseMoveCountersDecrement(dir) {
  global

  if mouse.moveCount.get(dir) != 1
  && mouse.moveCount.get(dir) != 2
    return

  mouse.moveCount_total--

  for key, value in mouse.moveCount
    if key != dir && value > mouse.moveCount.get(dir)
      mouse.moveCount.set(key, --value)
}\n`
    + getBundle(mouseU)
    + getBundle(mouseD)
    + getBundle(mouseR)
    + getBundle(mouseL)


  //ahk bundle of function timer1 timer2
  function getBundle(key) {
    const dir = getDir(key)
    const isHorizontal = key == mouseL || key == mouseR
    return func(key, dir, isHorizontal)
      + timers(key, dir, isHorizontal)
  }

  //ahk function
  function func(key, dir, isHorizontal) {
    return `
mouseMove_${dir}() {
  global

  If mouse.moveCount.get('${dir}')
    return

  if GetKeyState("${isHorizontal ? mouseU : mouseL}","P")
  || GetKeyState("${isHorizontal ? mouseD : mouseR}","P")
  || GetKeyState("${getOpposite(key)}","P") {
    mouse.moveCount.set('${dir}', ++mouse.moveCount_total)
    SetTimer(mouse_${dir}_moveCount_timer, A_MouseDelay)
    
    return
  }

  If !mouse.pressCount.get('${dir}') {
    mouse.pressCount.set('${dir}', 1)
    SetTimer(mouse_${dir}_boostSpeed_timer, -300)
  } Else
    mouse.pressCount.set('${dir}', 2)

  MouseMove(${getCoords(key)},, 'R')

  if KeyWait('${key}', 'T.1')
    mouse.boostSpeed := 0
  Else {
    mouse.moveCount.set('${dir}', ++mouse.moveCount_total)

    ;triple clicks
    If mouse.boostSpeed {
      x *= x_tripleMultiply
      y *= y_tripleMultiply
    }

    SetTimer(mouse_${dir}_moveCount_timer, A_MouseDelay)
  }
}\n`
  }

  //ahk timer1 timer2
  function timers(key, dir, isHorizontal) {
    return `
mouse_${dir}_moveCount_timer() {
  global

  If GetKeyState("${key}","P") && (
    layer_ext
    || GetKeyState("${combo}","P")
  ) {
    if mouse.moveCount.get('${dir}') != mouse.moveCount_total
      return

    ;single/double clicks
    multiplyMouseSpeed(mouse.boostSpeed)

    if GetKeyState("${isHorizontal ? mouseU : mouseL}","P")
      MouseMove(${getCoords(key, 1)},, 'R')
    else if GetKeyState("${isHorizontal ? mouseD : mouseR}","P")
      MouseMove(${getCoords(key, 2)},, 'R')
    else
      MouseMove(${getCoords(key)},, 'R')

    return
  }

  if GetKeyState("${isHorizontal ? mouseU : mouseL}","P")
  || GetKeyState("${isHorizontal ? mouseD : mouseR}","P")
  || GetKeyState("${getOpposite(key)}","P")
    mouseMoveCountersDecrement('${dir}')
  Else {
    resetMouseSpeed()
    mouse.boostSpeed := 0
    mouse.moveCount_total := 0
  }

  mouse.moveCount.set('${dir}', 0)
  SetTimer( , 0)
}

mouse_${dir}_boostSpeed_timer() {
  global
  if mouse.pressCount.set('${dir}', 2)
    mouse.boostSpeed := 1
  mouse.pressCount.set('${dir}', 0)
}\n`
  }


  //helpers
  function getDir(key, opposite = false) {
    switch (key) {
      case mouseU: return !opposite ? 'up' : 'down'
      case mouseD: return !opposite ? 'down' : 'up'
      case mouseL: return !opposite ? 'left' : 'right'
      case mouseR: return !opposite ? 'right' : 'left'
    }
  }
  function getOpposite(key) {
    switch (key) {
      case mouseL: return mouseR
      case mouseR: return mouseL
      case mouseD: return mouseU
      case mouseU: return mouseD
    }
  }
  function getCoords(key, cross = 0) {
    if (!cross) switch (key) {
      case mouseU: return '0, -y'
      case mouseR: return 'x, 0'
      case mouseD: return '0, y'
      case mouseL: return '-x, 0'
    } else if (cross == 1) switch (key) {
      case mouseU:
      case mouseL: return '-x, -y'
      case mouseR: return 'x, -y'
      case mouseD: return '-x, y'
    } else if (cross == 2) switch (key) {
      case mouseU: return 'x, -y'
      case mouseR:
      case mouseD: return 'x, y'
      case mouseL: return '-x, y'
    }
  }
}