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
  ),
  keys: Map(
    'up', '${mouseU}',
    'down', '${mouseD}',
    'right', '${mouseR}',
    'left', '${mouseL}',
  )
}

mouse_move(dir) {
  global
  local vertical := dir == 'up' || dir == 'down'

  If mouse.moveCount.get(dir)
    return

  if GetKeyState(mouse.keys.get(vertical ? 'left' : 'up'), 'P')
  || GetKeyState(mouse.keys.get(vertical ? 'right' : 'down'), 'P')
  || GetKeyState(mouse.keys.get(oppositeDir(dir)), 'P') {
    mouse.moveCount.set(dir, ++mouse.moveCount_total)
    SetTimer(mouse_moveCount_timer.bind(dir), A_MouseDelay)
    
    return
  }

  If mouse.pressCount.get(dir) {
    mouse.pressCount.set(dir, 1)
    SetTimer(mouse_boostSpeed_timer.bind(dir), -300)
  } Else
    mouse.pressCount.set(dir, 2)

  MouseMove(getX(dir), getY(dir),, 'R')

  if KeyWait(mouse.keys.get(dir), 'T.1')
    mouse.boostSpeed := 0
  Else {
    mouse.moveCount.set(dir, ++mouse.moveCount_total)

    ;triple clicks
    If mouse.boostSpeed {
      x *= x_tripleMultiply
      y *= y_tripleMultiply
    }

    SetTimer(mouse_moveCount_timer.bind(dir), A_MouseDelay)
  }
}

mouse_moveCount_timer(dir) {
  global
  local vertical := dir == 'up' || dir == 'down'

  If GetKeyState(mouse.keys.get(dir), 'P') && (
    layer_ext
    || GetKeyState('${combo}', 'P')
  ) {
    if mouse.moveCount.get(dir) != mouse.moveCount_total
      return

    ;single/double clicks
    multiplyMouseSpeed(mouse.boostSpeed)

    if GetKeyState(mouse.keys.get(vertical ? 'left' : 'up'), 'P')
      MouseMove(getX(dir, 1), getY(dir, 1),, 'R')
    else if GetKeyState(mouse.keys.get(vertical ? 'right' : 'down'), 'P')
      MouseMove(getX(dir, 2), getY(dir, 2),, 'R')
    else
      MouseMove(getX(dir), getY(dir),, 'R')

    return
  }

  if GetKeyState(mouse.keys.get(vertical ? 'left' : 'up'),'P')
  || GetKeyState(mouse.keys.get(vertical ? 'right' : 'down'),'P')
  || GetKeyState(mouse.keys.get(oppositeDir(dir)),'P')
    mouseMoveCountersDecrement(dir)
  Else {
    resetMouseSpeed()
    mouse.boostSpeed := 0
    mouse.moveCount_total := 0
  }

  mouse.moveCount.set(dir, 0)
  SetTimer( , 0)
}

mouse_boostSpeed_timer(dir) {
  global
  if mouse.pressCount.set(dir, 2)
    mouse.boostSpeed := 1
  mouse.pressCount.set(dir, 0)
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
}

oppositeDir(dir) {
  switch dir {
    case 'up': return 'down'
    case 'down': return 'up'
    case 'left': return 'right'
    case 'right': return 'left'
  }
}

getCoords(dir, cross := 0) {
  switch cross {
    case 0:
      switch dir {
        case 'up': return [0, -y]
        case 'right': return [x, 0]
        case 'down': return [0, y]
        case 'left': return [-x, 0]
      }
    case 1:
      switch dir {
        case 'up', 'left': return [-x, -y]
        case 'right': return [x, -y]
        case 'down': return [-x, y]
      }
    case 2:
      switch dir {
        case 'up': return [x, -y]
        case 'right', 'down': return [x, y]
        case 'left': return [-x, y]
      }
  }
}

getX(dir, cross := 0) {
  return getCoords(dir, cross)[1]
}

getY(dir, cross := 0) {
  return getCoords(dir, cross)[2]
}
`
}