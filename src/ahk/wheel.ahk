wheel := {
  boostSpeed: Map(
    "up", 0,
    "down", 0
  ),
  scrolling: Map(
    "up", 0,
    "down", 0
  ),
  pressCount: Map(
    "up", 0,
    "down", 0
  ),
}

wheelScroll(dir, key) {
  global

  if wheel.scrolling.get(dir)
    return

  if wheel.pressCount.get(dir)
    wheel.pressCount.set(dir, 2)
  else {
    wheel.pressCount.set(dir, 1)
    SetTimer(() => wheel_boostSpeed_timer(dir), -300)
  }

  local hot_key := dir = "up" ? "WheelUp" : "WheelDown"
  SendInput('{Blind}{' . hot_key . '}')

  if KeyWait(key, 'T.2') {
    wheel.boostSpeed.set(dir, 0)
    return
  }

  wheel.scrolling.set(dir, 1)
  wheelDelay := wheelDelay_default
    
  if wheel.boostSpeed.get(dir) {
    wheelDelay *= wheelDelay_multiplier
    wheel.boostSpeed.set(dir, 0)
  }

  setTimer(() => wheel_scrolling_timer(dir, key), wheelDelay)
}

wheel_scrolling_timer(dir, key) {
  global

  if GetKeyState(extendKey, "P") || GetKeyState(key, "P") && (layers.get("ext")) {
    local hot_key := dir = "up" ? "WheelUp" : "WheelDown"
    SendInput('{Blind}{' . hot_key . '}')
    return
  }

  wheelDelay := wheelDelay_default
  wheel.scrolling.set(dir, 0)
  setTimer( , 0)
}

wheel_boostSpeed_timer(dir) {
  global

  if wheel.pressCount.get(dir) = 2
    wheel.boostSpeed.set(dir, 1)
  wheel.pressCount.set(dir, 0)
}