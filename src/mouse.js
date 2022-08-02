
function mouse(mouseU, mouseR, mouseD, mouseL, combination = '', speed = 0) {
  function mouseKey(mouseDirection) {
    function coordr(mouseDirection, cross = 0) {
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
    return `\t${combination ? combination + ' & ' : ''}${mouseDirection}::
		if ${mouseDirection}_${combination}_presses
			${mouseDirection}_${combination}_presses = 2
		Else
		  ${mouseDirection}_${combination}_presses = 1
		SetTimer, Key_${combination}_${mouseDirection}, -250
		While GetKeyState("${mouseDirection}","P"){
      If !GetKeyState("${mouseDirection == mouseL || mouseDirection == mouseR ? mouseU : mouseL}","P") && !GetKeyState("${mouseDirection == mouseL || mouseDirection == mouseR ? mouseD : mouseR}","P")
        MouseMove, ${coordr(mouseDirection)}, ${speed}, R
      else if GetKeyState("${mouseDirection == mouseL || mouseDirection == mouseR ? mouseU : mouseL}","P")
        MouseMove, ${coordr(mouseDirection, 1)}, ${speed}, R
      else if GetKeyState("${mouseDirection == mouseL || mouseDirection == mouseR ? mouseD : mouseR}","P")
        MouseMove, ${coordr(mouseDirection, 2)}, ${speed}, R
      sleep mouseDelaySpeed
			If False
			{
				Key_${combination}_${mouseDirection}:
				if ${mouseDirection}_${combination}_presses = 2
				{
					x *= 3
					y *= 3
				}
        ${mouseDirection}_${combination}_presses = 0
				Return
			}
		}
		KeyWait ${mouseDirection}
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
    return\n`
  }
  return mouseKey(mouseU) + mouseKey(mouseD) + mouseKey(mouseR) + mouseKey(mouseL)
}
export default mouse