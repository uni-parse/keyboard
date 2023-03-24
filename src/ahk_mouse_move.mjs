export function move(combo, mouseU, mouseR, mouseD, mouseL) {
  return `mouse := {
  boostSpeed: 0, ; on double/triple click  
  moveCount_total: 0,
  moveCount: Map(
    "up", 0,
    "down", 0,
    "right", 0,
    "left", 0,
  ),
  pressCount: Map(
    "up", 0,
    "down", 0,
    "right", 0,
    "left", 0,
  ),
  keys: Map(
    "up", "${mouseU}",
    "down", "${mouseD}",
    "right", "${mouseR}",
    "left", "${mouseL}",
  )
}

mouse_move(dir) {
  global

  ;ignore auto press repeat of holding.
  If mouse.moveCount.get(dir)
    return

  if isCombo(dir) {
    mouse.moveCount.set(dir, ++mouse.moveCount_total)
    SetTimer(mouse_moveCount_timer.bind(dir), A_MouseDelay)
    return
  }

  if !mouse.pressCount.get(dir) {
    mouse.pressCount.set(dir, 1)
    SetTimer(mouse_boostSpeed_timer.bind(dir), -300)
  } else
    mouse.pressCount.set(dir, 2)

  moveMove_switch(dir) ;no combo

  if KeyWait(mouse.keys.get(dir), "T.1")
    mouse.boostSpeed := 0
  Else {
    ;triple clicks
    If mouse.boostSpeed {
      x *= x_tripleMultiply
      y *= y_tripleMultiply
    }
    
    mouse.moveCount.set(dir, ++mouse.moveCount_total)
    SetTimer(mouse_moveCount_timer.bind(dir), A_MouseDelay)
  }
}

mouse_boostSpeed_timer(dir) {
  global
  if mouse.pressCount.get(dir) == 2
    mouse.boostSpeed := 1
  mouse.pressCount.set(dir, 0)
}

mouse_moveCount_timer(dir) {
  global
  
  If GetKeyState(mouse.keys.get(dir), "P") && (
    layer_ext
    || GetKeyState("${combo}", "P")
    ) {
    if mouse.moveCount.get(dir) != mouse.moveCount_total
      return
    
    multiplyMouseSpeed(mouse.boostSpeed) ;single/double clicks
    moveMove_switch(dir)

    return
  }

  if isCombo(dir)
    mouseMoveCountersDecrement(dir)
  Else {
    resetMouseSpeed()
    mouse.boostSpeed := 0
    mouse.moveCount_total := 0
  }

  mouse.moveCount.set(dir, 0)
  SetTimer( , 0)
}

isCombo(dir) {
  for key, value in mouse.keys
    if key != dir && GetKeyState(value, "p")
      return true
  return false
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

  if x <= x_max {
    x *= boost ? x_doubleMultiply : x_defaultMultiply
    if x > x_max
      x := x_max
  }

  if y <= y_max {
    y *= boost ? y_doubleMultiply : y_defaultMultiply
    if y > y_max
      y := y_max
  }
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

moveMove_switch(dir) {      
  vertical := dir == "up" || dir == "down"
  if GetKeyState(mouse.keys.get(vertical ? "left" : "up"), "P")
    switch dir {
      case "up", "left": MouseMove(-x, -y,, "R")
      case "right": MouseMove(x, -y,, "R")
      case "down": MouseMove(-x, y,, "R")
    }
  else if GetKeyState(mouse.keys.get(vertical ? "right" : "down"), "P")
    switch dir {
      case "up": MouseMove(x, -y,, "R")
      case "right", "down": MouseMove(x, y,, "R")
      case "left": MouseMove(-x, y,, "R")
    }
  else
    switch dir {
      case "up": MouseMove(0, -y,, "R")
      case "right": MouseMove(x, 0,, "R")
      case "down": MouseMove(0, y,, "R")
      case "left": MouseMove(-x, 0,, "R")
    }
}
`
}