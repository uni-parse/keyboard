
export const mouse = { getWheel, getHover }

function getWheel(combo, key, hotKey) {
  return `\tpress_${key} := 0
  scroll_${key} := 0
  speed_${key} := 0
  *${key}:: {
    global
    if scroll_${key}
      return
    If !press_${key} {
      press_${key} := 1
      SetTimer(speed_${key}_timer, -300)
    } Else
      press_${key} := 2
    SendInput '{Blind}{${hotKey}}'
    if KeyWait('${key}', 'T.2') 
      speed_${key} := 0
    Else{
      scroll_${key} := 1
      scroll_speed := scroll_default_speed
      If speed_${key} {
        scroll_speed *= scroll_speed_multiplier
        speed_${key} := 0
      }
      setTimer(scroll_${key}_timer, scroll_speed)
    }   
  }
  scroll_${key}_timer() {
    global
    if GetKeyState("${key}","P") && (layer_ext || GetKeyState("${combo}","P"))
      SendInput '{Blind}{${hotKey}}'
    Else {
      scroll_speed := scroll_default_speed
      scroll_${key} := 0
      setTimer( , 0)
    }
  }
  speed_${key}_timer() {
    global
    if press_${key} = 2
      speed_${key} := 1
    press_${key} := 0
  }\n`
}

function getHover(combo, mouseU, mouseR, mouseD, mouseL) {
  return getMouseKeyHtk(mouseU) + getMouseKeyHtk(mouseD) + getMouseKeyHtk(mouseR) + getMouseKeyHtk(mouseL)

  function getMouseKeyHtk(key) {
    return `\tmove_${key} := 0
  press_${key} := 0
  ${key}:: {
    global

    If move_${key}
      return

    if GetKeyState("${isHorizontal(key) ? mouseU : mouseL}","P") || GetKeyState("${isHorizontal(key) ? mouseD : mouseR}","P") || GetKeyState("${getOpposite(key)}","P") {
      move_${key} := ++move__nth
      SetTimer(move_${key}_timer, A_MouseDelay)
      
      return
    }

    If !press_${key} {
      press_${key} := 1
      SetTimer(speed_${key}_timer, -300)
    } Else
      press_${key} := 2

    MouseMove(${getCoords(key)},, 'R')

    if KeyWait('${key}', 'T.1')
      speed_move := 0
    Else {
      move_${key} := ++move__nth

      ;triple clicks
      If speed_move {
        x *= x_triple
        y *= y_triple
      }

      SetTimer(move_${key}_timer, A_MouseDelay)
    }
  }

  move_${key}_timer() {
    global

    If GetKeyState("${key}","P") && (layer_ext || GetKeyState("${combo}","P")) {
      if (move_${key} != move__nth)
        return

      ;double clicks
      if speed_move && x <= x_max {
        x *= x_double
        y *= y_double
      }

      If !GetKeyState("${isHorizontal(key) ? mouseU : mouseL}","P") && !GetKeyState("${isHorizontal(key) ? mouseD : mouseR}","P")
        MouseMove(${getCoords(key)},, 'R')
      else if GetKeyState("${isHorizontal(key) ? mouseU : mouseL}","P")
        MouseMove(${getCoords(key, 1)},, 'R')
      else if GetKeyState("${isHorizontal(key) ? mouseD : mouseR}","P")
        MouseMove(${getCoords(key, 2)},, 'R')

      return
    }

    if !GetKeyState("${isHorizontal(key) ? mouseU : mouseL}","P") && !GetKeyState("${isHorizontal(key) ? mouseD : mouseR}","P") && !GetKeyState("${getOpposite(key)}","P") {
      resetSpeed()
      speed_move := 0
      move__nth := 0
    } Else if (move_${key} = 1) {
      move__nth--
      if move_${isHorizontal(key) ? mouseU : mouseL} > 1
        move_${isHorizontal(key) ? mouseU : mouseL}--
      if move_${isHorizontal(key) ? mouseD : mouseR} > 1
        move_${isHorizontal(key) ? mouseD : mouseR}--
      if move_${getOpposite(key)} > 1
        move_${getOpposite(key)}--
    } Else if (move_${key} = 2) {
      move__nth--
      if move_${isHorizontal(key) ? mouseU : mouseL} > 2
        move_${isHorizontal(key) ? mouseU : mouseL}--
      if move_${isHorizontal(key) ? mouseD : mouseR} > 2
        move_${isHorizontal(key) ? mouseD : mouseR}--
      if move_${getOpposite(key)} > 2
        move_${getOpposite(key)}--
    }

    move_${key} := 0
    SetTimer( , 0)
  }

  speed_${key}_timer() {
    global
    if press_${key} = 2
      speed_move := 1
    press_${key} := 0
  }\n`


    //helpers
    function isHorizontal(key) {
      return key == mouseL || key == mouseR
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
}

