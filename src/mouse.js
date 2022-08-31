
const mouse = {
  move: (mouseU, mouseR, mouseD, mouseL, combination) => {
    function mouseKey(key) {
      function coords(mouseDirection, cross = 0) {
        if (!cross) {
          if (mouseDirection == mouseU) {
            return '0, -y'
          } else if (mouseDirection == mouseR) {
            return 'x, 0'
          } else if (mouseDirection == mouseD) {
            return '0, y'
          } else if (mouseDirection == mouseL) {
            return '-x, 0'
          }
        } else if (cross == 1) {
          if (mouseDirection == mouseU || mouseDirection == mouseL) {
            return '-x, -y'
          } else if (mouseDirection == mouseR) {
            return 'x, -y'
          } else if (mouseDirection == mouseD) {
            return '-x, y'
          }
        } else if (cross == 2) {
          if (mouseDirection == mouseU) {
            return 'x, -y'
          } else if (mouseDirection == mouseR || mouseDirection == mouseD) {
            return 'x, y'
          } else if (mouseDirection == mouseL) {
            return '-x, y'
          }
        }
      }
      function opposite(mouseDirection) {
        if (mouseDirection == mouseL) {
          return mouseR
        } else if (mouseDirection == mouseR) {
          return mouseL
        } else if (mouseDirection == mouseU) {
          return mouseD
        } else if (mouseDirection == mouseD) {
          return mouseU
        }
      }
      return `\t${key}::
    If !move_${key} {
      if !GetKeyState("${key == mouseL || key == mouseR ? mouseU : mouseL}","P") && !GetKeyState("${key == mouseL || key == mouseR ? mouseD : mouseR}","P") && !GetKeyState("${opposite(key)}","P") {
        If press_${key}
          press_${key} = 2
        Else {
          press_${key} = 1
          SetTimer, speed_${key}_timer, -300
        }
        MouseMove, ${coords(key)},, R
        KeyWait, ${key}, T.1
        if ErrorLevel {
          ErrorLevel = 0
          move_${key} := move__nth + 1
          move__nth++
          If speed_move {
            x *= x_multiplier
            y *= y_multiplier
          }
          SetTimer, move_${key}_timer, %A_MouseDelay%
        } Else
          speed_move = 0
      } else {
        move_${key} := move__nth + 1
        move__nth++
        SetTimer, move_${key}_timer, %A_MouseDelay%
      }
    }
    return
  move_${key}_timer:
    If GetKeyState("${key}","P") && (layer_ext ? 1 : GetKeyState("${combination}","P")) {
      if (move_${key} = move__nth) {
        if speed_move {
          x *= x_increment
          y *= y_increment
        }
        If !GetKeyState("${key == mouseL || key == mouseR ? mouseU : mouseL}","P") && !GetKeyState("${key == mouseL || key == mouseR ? mouseD : mouseR}","P")
          MouseMove, ${coords(key)},, R
        else if GetKeyState("${key == mouseL || key == mouseR ? mouseU : mouseL}","P")
          MouseMove, ${coords(key, 1)},, R
        else if GetKeyState("${key == mouseL || key == mouseR ? mouseD : mouseR}","P")
          MouseMove, ${coords(key, 2)},, R
      } ;else do nothing
    } Else {
      if !GetKeyState("${key == mouseL || key == mouseR ? mouseU : mouseL}","P") && !GetKeyState("${key == mouseL || key == mouseR ? mouseD : mouseR}","P") && !GetKeyState("${opposite(key)}","P") {
        resetSpeed()
        speed_move = 0
        move__nth = 0
      } Else {
        move__nth--
        if (move_${key} = 1) {
          if move_${key == mouseL || key == mouseR ? mouseU : mouseL} > 1
            move_${key == mouseL || key == mouseR ? mouseU : mouseL}--
          if move_${key == mouseL || key == mouseR ? mouseD : mouseR} > 1
            move_${key == mouseL || key == mouseR ? mouseD : mouseR}--
          if move_${opposite(key)} > 1
            move_${opposite(key)}--
        } Else if (move_${key} = 2) {
          if move_${key == mouseL || key == mouseR ? mouseU : mouseL} > 2
            move_${key == mouseL || key == mouseR ? mouseU : mouseL}--
          if move_${key == mouseL || key == mouseR ? mouseD : mouseR} > 2
            move_${key == mouseL || key == mouseR ? mouseD : mouseR}--
          if move_${opposite(key)} > 2
            move_${opposite(key)}--
        }
      }
      move_${key} = 0
      SetTimer,, Off
    }
    Return
  speed_${key}_timer:
    if press_${key} = 2
      speed_move = 1
    press_${key} = 0
    Return\n`
    }
    return mouseKey(mouseU) + mouseKey(mouseD) + mouseKey(mouseR) + mouseKey(mouseL)
  },
  wheel: (dir, key, combination) => `\t*${key}::
    if !scroll_${key} {
      If press_${key}
        press_${key} = 2
      Else {
        press_${key} = 1
        SetTimer, speed_${key}_timer, -300
      }
      SendInput {Blind}{${dir}}
      KeyWait, ${key}, T.2
      if ErrorLevel {
        ErrorLevel = 0
        scroll_${key} = 1
        scroll_speed := scroll_defualt_speed
        If speed_${key} {
          scroll_speed *= scroll_speed_multiplier
          speed_${key} = 0
        }
        setTimer, scroll_${key}_timer, %scroll_speed%
      } Else
          speed_${key} = 0
    }
    return
  scroll_${key}_timer:
    if GetKeyState("${key}","P")  && (layer_ext ? 1 : GetKeyState("${combination}","P"))
      SendInput {Blind}{${dir}}
    Else {
      scroll_speed := scroll_defualt_speed
      scroll_${key} = 0
      setTimer,, Off
    }
    return
  speed_${key}_timer:
    if press_${key} = 2
      speed_${key} = 1
    press_${key} = 0
    Return\n`
}
export default mouse
