
function mouse(mouseU, mouseR, mouseD, mouseL, combination) {
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
      } else if (mouseDirection == mouseR){
        return mouseL
      } else if (mouseDirection == mouseU){
        return mouseD
      } else if (mouseDirection == mouseD){
        return mouseU
      }
    }
    return `\t${key}::
  ${combination} & ${key}::
    If !move_${key} {
      if !GetKeyState("${key == mouseL || key == mouseR ? mouseU : mouseL}","P") && !GetKeyState("${key == mouseL || key == mouseR ? mouseD : mouseR}","P") && !GetKeyState("${opposite(key)}","P") {
        If press_${key}
          press_${key} = 2
        Else {
          press_${key} = 1
          SetTimer, speed_${key}_timer, -300
        }
        MouseMove, ${coords(key)},, R
        KeyWait, ${key}, T.2
        if ErrorLevel {
          ErrorLevel = 0
          move_${key} := move__nth + 1
          move__nth++
          If speed_${key} {
            x *= x_multiplayer
            y *= y_multiplayer
            speed_${key} = 0
          }
          SetTimer, move_${key}_timer, %A_MouseDelay%
        } Else
          speed_${key} = 0
      } else {
        move_${key} := move__nth + 1
        move__nth++
        SetTimer, move_${key}_timer, %A_MouseDelay%
      }
    }
    return
  move_${key}_timer:
    If GetKeyState("${key}","P") && (layer_ext ? 1 : GetKeyState("RAlt","P")) {
      if (move_${key} = move__nth) {
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
      speed_${key} = 1
    press_${key} = 0
    Return\n`
    
  }
  return mouseKey(mouseU) + mouseKey(mouseD) + mouseKey(mouseR) + mouseKey(mouseL)
}


function wheel(dir, key, combination) {
  return `\t${combination ? combination + ' & ' : ''}${key}::
    if !move_${combination}_${key} {
      SendInput {Blind}{Wheel${dir}}
      KeyWait, ${key}, T.2
      if ErrorLevel {
        ErrorLevel = 0
        move_${combination}_${key} = 1
        setTimer, move_${combination}_${key}_timer, 50
      }

    }
    return

    move_${combination}_${key}_timer:
      if GetKeyState("${key}","P") ${combination ? `&& GetKeyState("RAlt","P") ` : ''}{

        SendInput {Blind}{Wheel${dir}}
      } Else
        move_${combination}_${key} = 0
      return


    While GetKeyState("q","P") && GetKeyState("RAlt","P"){
      SendInput {Blind}{WheelUp}
      sleep A_Index = 1 ? mousePreDelay : mouseDelaySpeed
    }
    return

`
}
export default mouse
export { mouse, wheel }
