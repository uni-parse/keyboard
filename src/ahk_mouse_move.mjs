export function move(combo, mouseU, mouseR, mouseD, mouseL) {
  return `mouse := {
  boostSpeed : 0, ; on double/triple click  
  moveCount : 0,
  moveCount_up : 0,
  moveCount_down : 0,
  moveCount_right : 0,
  moveCount_left : 0,
  pressCount_up : 0,
  pressCount_down : 0,
  pressCount_right : 0,
  pressCount_left : 0,
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

  If mouse.moveCount_${dir}
    return

  if GetKeyState("${isHorizontal ? mouseU : mouseL}","P") || GetKeyState("${isHorizontal ? mouseD : mouseR}","P") || GetKeyState("${getOpposite(key)}","P") {
    mouse.moveCount_${dir} := ++mouse.moveCount
    SetTimer(mouse_${dir}_moveCount_timer, A_MouseDelay)
    
    return
  }

  If !mouse.pressCount_${dir} {
    mouse.pressCount_${dir} := 1
    SetTimer(mouse_${dir}_boostSpeed_timer, -300)
  } Else
    mouse.pressCount_${dir} := 2

  MouseMove(${getCoords(key)},, 'R')

  if KeyWait('${key}', 'T.1')
    mouse.boostSpeed := 0
  Else {
    mouse.moveCount_${dir} := ++mouse.moveCount

    ;triple clicks
    If mouse.boostSpeed {
      x *= x_triple
      y *= y_triple
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

  If GetKeyState("${key}","P") && (layer_ext || GetKeyState("${combo}","P")) {
    if (mouse.moveCount_${dir} != mouse.moveCount)
      return

    ;double clicks
    if mouse.boostSpeed && x <= x_max {
      x *= x_double
      y *= y_double
    }

    if GetKeyState("${isHorizontal ? mouseU : mouseL}","P")
      MouseMove(${getCoords(key, 1)},, 'R')
    else if GetKeyState("${isHorizontal ? mouseD : mouseR}","P")
      MouseMove(${getCoords(key, 2)},, 'R')
    else
      MouseMove(${getCoords(key)},, 'R')

    return
  }

  if !GetKeyState("${isHorizontal ? mouseU : mouseL}","P") && !GetKeyState("${isHorizontal ? mouseD : mouseR}","P") && !GetKeyState("${getOpposite(key)}","P") {
    resetMouseSpeed()
    mouse.boostSpeed := 0
    mouse.moveCount := 0
  } Else if (mouse.moveCount_${dir} = 1) {
    mouse.moveCount--
    if mouse.moveCount_${getDir(isHorizontal ? mouseU : mouseL)} > 1
      mouse.moveCount_${getDir(isHorizontal ? mouseU : mouseL)}--
    if mouse.moveCount_${getDir(isHorizontal ? mouseD : mouseR)} > 1
      mouse.moveCount_${getDir(isHorizontal ? mouseD : mouseR)}--
    if mouse.moveCount_${getDir(key, 'opposite')} > 1
      mouse.moveCount_${getDir(key, 'opposite')}--
  } Else if (mouse.moveCount_${dir} = 2) {
    mouse.moveCount--
    if mouse.moveCount_${getDir(isHorizontal ? mouseU : mouseL)} > 2
      mouse.moveCount_${getDir(isHorizontal ? mouseU : mouseL)}--
    if mouse.moveCount_${getDir(isHorizontal ? mouseD : mouseR)} > 2
      mouse.moveCount_${getDir(isHorizontal ? mouseD : mouseR)}--
    if mouse.moveCount_${getDir(key, 'opposite')} > 2
      mouse.moveCount_${getDir(key, 'opposite')}--
  }

  mouse.moveCount_${dir} := 0
  SetTimer( , 0)
}

mouse_${dir}_boostSpeed_timer() {
  global
  if mouse.pressCount_${dir} = 2
    mouse.boostSpeed := 1
  mouse.pressCount_${dir} := 0
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