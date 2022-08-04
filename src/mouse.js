
function mouse(mouseU, mouseR, mouseD, mouseL, combination = '', speed = 0) {
  function mouseKey(mouseDirection) {
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
    return `\t${combination ? combination + ' & ' : ''}${mouseDirection}::
    If !hold_${combination}_${mouseDirection} {


      if !GetKeyState("${mouseDirection == mouseL || mouseDirection == mouseR ? mouseU : mouseL}","P") && !GetKeyState("${mouseDirection == mouseL || mouseDirection == mouseR ? mouseD : mouseR}","P") && !GetKeyState("${opposite(mouseDirection)}","P") {


        If press_${combination}_${mouseDirection}
          press_${combination}_${mouseDirection} = 2
        Else {
          press_${combination}_${mouseDirection} = 1
          SetTimer, fast_${combination}_${mouseDirection}_timer, -250
        }
        MouseMove, ${coords(mouseDirection)},, R


        
        KeyWait, ${mouseDirection}, T.2
        if ErrorLevel {
          ErrorLevel = 0
          hold_${combination}_${mouseDirection} := holdOverride + 1
          holdOverride++
          If fast_${combination}_${mouseDirection} {
            x *= x_multiple_fast
            y *= y_multiple_fast
            fast_${combination}_${mouseDirection} = 0
          }
          SetTimer, hold_${combination}_${mouseDirection}_timer, %A_MouseDelay%
        } Else
          fast_${combination}_${mouseDirection} = 0
      
      
      } else {
        hold_${combination}_${mouseDirection} := holdOverride + 1
        holdOverride++
        SetTimer, hold_${combination}_${mouseDirection}_timer, %A_MouseDelay%
      }
    }
    return

  hold_${combination}_${mouseDirection}_timer:
    If GetKeyState("${mouseDirection}","P") ${combination ? `&& GetKeyState("RAlt","P") ` : ''}{
      if (hold_${combination}_${mouseDirection} = holdOverride){
        If !GetKeyState("${mouseDirection == mouseL || mouseDirection == mouseR ? mouseU : mouseL}","P") && !GetKeyState("${mouseDirection == mouseL || mouseDirection == mouseR ? mouseD : mouseR}","P")
        MouseMove, ${coords(mouseDirection)},, R
        else if GetKeyState("${mouseDirection == mouseL || mouseDirection == mouseR ? mouseU : mouseL}","P")
        MouseMove, ${coords(mouseDirection, 1)},, R
        else if GetKeyState("${mouseDirection == mouseL || mouseDirection == mouseR ? mouseD : mouseR}","P")
        MouseMove, ${coords(mouseDirection, 2)},, R
      } ;else do nothing
    }Else {
      if !GetKeyState("${mouseDirection == mouseL || mouseDirection == mouseR ? mouseU : mouseL}","P") && !GetKeyState("${mouseDirection == mouseL || mouseDirection == mouseR ? mouseD : mouseR}","P") && !GetKeyState("${opposite(mouseDirection)}","P"){
        resetSpeed()
        holdOverride = 0
      }Else {
        holdOverride--
        if (hold_${combination}_${mouseDirection} = 1) {
          if hold_${combination}_${mouseDirection == mouseL || mouseDirection == mouseR ? mouseU : mouseL} > 1
            hold_${combination}_${mouseDirection == mouseL || mouseDirection == mouseR ? mouseU : mouseL}--
          if hold_${combination}_${mouseDirection == mouseL || mouseDirection == mouseR ? mouseD : mouseR} > 1
            hold_${combination}_${mouseDirection == mouseL || mouseDirection == mouseR ? mouseD : mouseR}--
          if hold_${combination}_${opposite(mouseDirection)} > 1
            hold_${combination}_${opposite(mouseDirection)}--
        }Else if (hold=${combination}_${mouseDirection} = 2) {
          if hold_${combination}_${mouseDirection == mouseL || mouseDirection == mouseR ? mouseU : mouseL} > 2
            hold_${combination}_${mouseDirection == mouseL || mouseDirection == mouseR ? mouseU : mouseL}--
          if hold_${combination}_${mouseDirection == mouseL || mouseDirection == mouseR ? mouseD : mouseR} > 2
            hold_${combination}_${mouseDirection == mouseL || mouseDirection == mouseR ? mouseD : mouseR}--
          if hold_${combination}_${opposite(mouseDirection)} > 2
            hold_${combination}_${opposite(mouseDirection)}--
        }
      }
        hold_${combination}_${mouseDirection} = 0
      SetTimer,, Off
    }
    Return

  fast_${combination}_${mouseDirection}_timer:
    if(press_${combination}_${mouseDirection} = 2) {
      fast_${combination}_${mouseDirection} = 1
    }
    press_${combination}_${mouseDirection} = 0
    Return\n`
    
  }
  return mouseKey(mouseU) + mouseKey(mouseD) + mouseKey(mouseR) + mouseKey(mouseL)
}
export default mouse





























/*

function mouse(mouseU, mouseR, mouseD, mouseL, combination = '', speed = 0) {
  function mouseKey(mouseDirection) {
    function coords(mouseDirection, cross = 0) {
      if (!cross) {
        if (mouseDirection == mouseU) {
          return '0, -%y%'
        } else if (mouseDirection == mouseR) {
          return '%x%, 0'
        } else if (mouseDirection == mouseD) {
          return '0, %y%'
        } else if (mouseDirection == mouseL) {
          return '-%x%, 0'
        }
      } else if (cross == 1) {
        if (mouseDirection == mouseU || mouseDirection == mouseL) {
          return '-%x%, -%y%'
        } else if (mouseDirection == mouseR) {
          return '%x%, -%y%'
        } else if (mouseDirection == mouseD) {
          return '-%x%, %y%'
        }
      } else if (cross == 2) {
        if (mouseDirection == mouseU) {
          return '%x%, -%y%'
        } else if (mouseDirection == mouseR || mouseDirection == mouseD) {
          return '%x%, %y%'
        } else if (mouseDirection == mouseL) {
          return '-%x%, %y%'
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
    return `\t${combination ? combination + ' & ' : ''}${mouseDirection}::
		if ${mouseDirection}_${combination}_presses
    {
      speedx3 = 1
      x *= 3
      y *= 3
    }
		Else if !speedx3
    {
      ${mouseDirection}_${combination}_presses = 1
      SetTimer, Key_${combination}_${mouseDirection}, -250
      If False
      {
        Key_${combination}_${mouseDirection}:
          ${mouseDirection}_${combination}_presses = 0
          Return
      }
    }
	  While GetKeyState("${mouseDirection}","P"){
      If !GetKeyState("${mouseDirection == mouseL || mouseDirection == mouseR ? mouseU : mouseL}","P") && !GetKeyState("${mouseDirection == mouseL || mouseDirection == mouseR ? mouseD : mouseR}","P")
      {
        MouseMove, ${coords(mouseDirection)}, ${speed}, R
        if (A_Index = 1) && !GetKeyState("${opposite(mouseDirection)}","P")
          sleep mousePreDelay
      }
      else if GetKeyState("${mouseDirection == mouseL || mouseDirection == mouseR ? mouseU : mouseL}","P")
        MouseMove, ${coords(mouseDirection, 1)}, ${speed}, R
      else if GetKeyState("${mouseDirection == mouseL || mouseDirection == mouseR ? mouseD : mouseR}","P")
        MouseMove, ${coords(mouseDirection, 2)}, ${speed}, R
      sleep A_Index = 1 ? 0 : mouseDelaySpeed
		}
    If speedx3 && (!GetKeyState("${mouseU}", "P") || !GetKeyState("${mouseD}", "P")|| !GetKeyState("${mouseL}", "P")|| !GetKeyState("${mouseR}", "P"))
    {
      speedx3 = 0
      If toggle
      {
        x := x1
        y := y1
      }
      Else
      {
        x := x2
        y := y2
      }
    }
      return\n`
  }
  return mouseKey(mouseU) + mouseKey(mouseD) + mouseKey(mouseR) + mouseKey(mouseL)
}
export default mouse
*/