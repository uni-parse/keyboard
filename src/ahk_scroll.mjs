export function scroll(combo, scrollU, scrollD) {
  return `wheel := {
  boostSpeed_up: 0,
  boostSpeed_down: 0,
  scrolling_up: 0,
  scrolling_down: 0,
  pressCount_up: 0,
  pressCount_down: 0,
}\n`
    + getBundle(scrollU)
    + getBundle(scrollD)


  //ahk bundle function timer1 timer2
  function getBundle(key) {
    const dir = getDir(key)
    return func(key, dir) + timers(key, dir)
  }

  //ahk function
  function func(key, dir) {
    return `
wheelScroll_${dir}() {
  global

  if wheel.scrolling_${dir}
    return

  If !wheel.pressCount_${dir} {
    wheel.pressCount_${dir} := 1
    SetTimer(wheel_${dir}_boostSpeed_timer, -300)
  } Else
    wheel.pressCount_${dir} := 2

  SendInput '{Blind}{${getHotkey(key)}}'

  if KeyWait('${key}', 'T.2') 
    wheel.boostSpeed_${dir} := 0
  Else{
    wheel.scrolling_${dir} := 1
    wheelDelay := wheelDelay_default
    
    If wheel.boostSpeed_${dir} {
      wheelDelay *= wheelDelay_multiplier
      wheel.boostSpeed_${dir} := 0
    }

    setTimer(wheel_${dir}_scrolling_timer, wheelDelay)
  }   
}\n`
  }

  //ahk timer1 + timer2
  function timers(key, dir) {
    return `
wheel_${dir}_scrolling_timer() {
  global
  if GetKeyState("${key}","P") && (layer_ext || GetKeyState("${combo}","P"))
    SendInput '{Blind}{${getHotkey(key)}}'
  Else {
    wheelDelay := wheelDelay_default
    wheel.scrolling_${dir} := 0
    setTimer( , 0)
  }
}

wheel_${dir}_boostSpeed_timer() {
  global
  if wheel.pressCount_${dir} = 2
    wheel.boostSpeed_${dir} := 1
  wheel.pressCount_${dir} := 0
}\n`
  }


  //helper
  function getDir(key) {
    switch (key) {
      case scrollU: return 'up'
      case scrollD: return 'down'
    }
  }
  function getHotkey(key) {
    switch (key) {
      case scrollU: return 'WheelUp'
      case scrollD: return 'WheelDown'
    }
  }
}