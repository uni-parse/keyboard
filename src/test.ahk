
x1 = 4
y1 = 4
x2 = 18
y2 = 18
x := x1
y := y1
toggle = 0
resetSpeed(){
  global
  If !toggle {
    x := x1
    y := y1
  } Else {
    x := x2
    y := y2
  }
}
mouseDir(){
  global
  If !hold && (anyOtherHold) {
    ;no delay
  }
  else If !hold { ;prevent auto key loop
    If press
      press = 2
    Else {
      press = 1
      SetTimer, double, -200
    }
    MouseMove, -%x%, 0,, R
    KeyWait, [, T.2
    if ErrorLevel {
      ErrorLevel = 0
      hold = 1
      If (double){
        x *= 3
        y *= 3
        ;MsgBox, double activated
        double = 0
      }
      SetTimer, hold, %A_MouseDelay%
    } Else
      double = 0
  }

  if 0 {
    hold:
    If GetKeyState("[","P")
      MouseMove, -%x%, 0,, R
    Else {
      resetSpeed()
      hold = 0
      SetTimer,, Off
    }
    Return
    double:
    if(press = 2) {
      double = 1
    }
    press = 0
    Return
  }
}

  [::
    mouseDir()
    Return

  ]::
    If !hold {
      
    }