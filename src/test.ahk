
press = 0

RAlt & PgUp:: 
PgUp::
    send 1
  Return
PgDn::
    send 1
  Return
  [::
    if !hold_F23 {
      hold_F23 = 1
      If press_F23
        press_F23 = 2
      Else {
        press_F23 = 1
        SetTimer, double_F23_timer, -200
      }

      KeyWait, [, T.2
      if ErrorLevel {
        ErrorLevel = 0
        If double_F23 {

          double_F23 = 0
          ;MsgBox, double_F23 activated
          ; extendLayer = 0
          ; symbil2Layer = 1
          KeyWait, [
          hold_F23 = 0
          MsgBox, 0 hold double
          ; symbil2Layer = 0
        }Else{
          KeyWait, [
          hold_F23 = 0
          MsgBox, 0 hold no double
        }
      } Else {
        double_F23 = 0
        KeyWait, [
        hold_F23 = 0
        ;MsgBox, 0 click
      }
    }
    return

  double_F23_timer:
    if press_F23 = 2
      double_F23 = 1
    press_F23 = 0
    Return
    
    Return

  ]::
  if !hold{
    hold = 1
    If press
      press = 2
    Else {
      press = 1
      SetTimer, double_timer, -200
    }

    KeyWait, ], T.2
    if ErrorLevel {
      ErrorLevel = 0
      If double {
        
        double = 0
        MsgBox, double activated
        ; extendLayer = 0
        ; symbil2Layer = 1
        KeyWait, ]
        hold = 0
        ; symbil2Layer = 0
      }Else{
        KeyWait, ]
        hold = 0
      }
    } Else {
      double = 0
      KeyWait, ]
      hold = 0
    }
  }
    return

  double_timer:
    if(press = 2) {

      double = 1

    }
    press = 0
    Return