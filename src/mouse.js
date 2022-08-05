
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
    If !hold_${key} {
      if !GetKeyState("${key == mouseL || key == mouseR ? mouseU : mouseL}","P") && !GetKeyState("${key == mouseL || key == mouseR ? mouseD : mouseR}","P") && !GetKeyState("${opposite(key)}","P") {
        If press_${key}
          press_${key} = 2
        Else {
          press_${key} = 1
          SetTimer, fast_${key}_timer, -300
        }
        MouseMove, ${coords(key)},, R
        KeyWait, ${key}, T.2
        if ErrorLevel {
          ErrorLevel = 0
          hold_${key} := holdOverride + 1
          holdOverride++
          If fast_${key} {
            x *= x_multiple_fast
            y *= y_multiple_fast
            fast_${key} = 0
          }
          SetTimer, hold_${key}_timer, %A_MouseDelay%
        } Else
          fast_${key} = 0
      } else {
        hold_${key} := holdOverride + 1
        holdOverride++
        SetTimer, hold_${key}_timer, %A_MouseDelay%
      }
    }
    return
  hold_${key}_timer:
    If GetKeyState("${key}","P") && (extendLayer ? 1 : GetKeyState("RAlt","P")) {
      if (hold_${key} = holdOverride) {
        If !GetKeyState("${key == mouseL || key == mouseR ? mouseU : mouseL}","P") && !GetKeyState("${key == mouseL || key == mouseR ? mouseD : mouseR}","P")
          MouseMove, ${coords(key)},, R
        else if GetKeyState("${key == mouseL || key == mouseR ? mouseU : mouseL}","P")
          MouseMove, ${coords(key, 1)},, R
        else if GetKeyState("${key == mouseL || key == mouseR ? mouseD : mouseR}","P")
          MouseMove, ${coords(key, 2)},, R
      } ;else do nothing
    } Else {
      if !GetKeyState("${key == mouseL || key == mouseR ? mouseU : mouseL}","P") && !GetKeyState("${key == mouseL || key == mouseR ? mouseD : mouseR}","P") && !GetKeyState("${opposite(key)}","P"){
        resetSpeed()
        holdOverride = 0
      } Else {
        holdOverride--
        if (hold_${key} = 1) {
          if hold_${key == mouseL || key == mouseR ? mouseU : mouseL} > 1
            hold_${key == mouseL || key == mouseR ? mouseU : mouseL}--
          if hold_${key == mouseL || key == mouseR ? mouseD : mouseR} > 1
            hold_${key == mouseL || key == mouseR ? mouseD : mouseR}--
          if hold_${opposite(key)} > 1
            hold_${opposite(key)}--
        } Else if (hold_${key} = 2) {
          if hold_${key == mouseL || key == mouseR ? mouseU : mouseL} > 2
            hold_${key == mouseL || key == mouseR ? mouseU : mouseL}--
          if hold_${key == mouseL || key == mouseR ? mouseD : mouseR} > 2
            hold_${key == mouseL || key == mouseR ? mouseD : mouseR}--
          if hold_${opposite(key)} > 2
            hold_${opposite(key)}--
        }
      }
      hold_${key} = 0
      SetTimer,, Off
    }
    Return
  fast_${key}_timer:
    if press_${key} = 2
      fast_${key} = 1
    press_${key} = 0
    Return\n`
    
  }
  return mouseKey(mouseU) + mouseKey(mouseD) + mouseKey(mouseR) + mouseKey(mouseL)
}


function wheel(dir, key, combination) {
  return `\t${combination ? combination + ' & ' : ''}${key}::
    if !hold_${combination}_${key} {
      SendInput {Blind}{Wheel${dir}}
      KeyWait, ${key}, T.2
      if ErrorLevel {
        ErrorLevel = 0
        hold_${combination}_${key} = 1
        setTimer, hold_${combination}_${key}_timer, 50
      }

    }
    return

    hold_${combination}_${key}_timer:
      if GetKeyState("${key}","P") ${combination ? `&& GetKeyState("RAlt","P") ` : ''}{

        SendInput {Blind}{Wheel${dir}}
      } Else
        hold_${combination}_${key} = 0
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
