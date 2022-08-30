function config(s, e) {
  /**  goal
    s symbol            e shift symbol
    ss↑ toggle symbol   e temp extend
    ss↓ sym2            e alt || ctrl
    
    s↓e↓ shift symbol   
    e↓s↓ shift symbol   
    s↓e↑ nothing        
    e↓s↑ nothign        
  
    e extend            s shift symbol
    ee↑ toggle extend   s temp symbol
    ee↓ ext2            s nothing

    .....................................

    symbol              s
    shift symbol        s↓e↓ e↓s↓
    toggle symbol       ss↑
    !toggle symbol      s ee↑
    sym2                ss↓

    extend              e
    toggle extend       ee↑
    !toggle extend      e ss↑
    ext2                ee↓

   */
  return `;config..........................................

  F23::
    if !hold_F23 {
      If press_F23 {
        press_F23 = 2
      }
      Else {
        press_F23 = 1
        SetTimer, double_F23_timer, -300
      }

      if layer_sym {
        layer_sym = 0
        ;MsgBox, !sym
      }

      KeyWait, F23, T.2
      if ErrorLevel {
        ErrorLevel = 0
        hold_F23 = 1
        If double_F23 {
          double_F23 = 0
          layer_sym2 = 1
          ;MsgBox, sym2
        }
        KeyWait, F23
        hold_F23 = 0
        If layer_sym2 {
          layer_sym2 = 0
          ;MsgBox !sym2
        }
      }
    }
    return
  double_F23_timer:
    if (press_F23 = 2) {
      press_F23 = 0
      If !GetKeyState("F23", "P") {
        if layer_ext {
          layer_ext = 0
          ;MsgBox, !ext
        }
        layer_sym = 1
        ;MsgBox, sym
      } else
        double_F23 = 1
    } else
      press_F23 = 0
    Return



  F24::
    if !hold_F24 {
      If press_F24 {
        press_F24 = 2
      }
      Else {
        press_F24 = 1
        SetTimer, double_F24_timer, -300
      }

      if layer_ext {
        layer_ext = 0
        ;MsgBox, !ext
      }

      KeyWait, F24, T.2
      if ErrorLevel {
        ErrorLevel = 0
        hold_F24 = 1
        If double_F24 {
          double_F24 = 0
          layer_ext2 = 1
          ;MsgBox, ext2
        }
        KeyWait, F24
        hold_F24 = 0
        If layer_ext2 {
          layer_ext2 = 0
          ;MsgBox !ext2
        }
      }
    }
    return
  double_F24_timer:
    if (press_F24 = 2) {
      press_F24 = 0
      If !GetKeyState("F24", "P") {
        if layer_sym {
          layer_sym = 0
          ;MsgBox, !sym
        }
        layer_ext = 1
        ;MsgBox, ext
      } else
        double_F24 = 1
    } else
      press_F24 = 0
    Return




\n\n`
}
export default config


/*
`\n\n;config
#Persistent
SetCapsLockState, AlwaysOff

#If !layer_ext
  F24 & F23::
    layer_sym = 0
    layer_ext = 1
    KeyWait F24
    KeyWait F24, D
    layer_ext = 0
    return
  F24::
    if press_F24 {
      layer_sym = 0
      layer_ext = 1
      KeyWait F24
      KeyWait F24, D
      layer_ext = 0
    } Else
      press_F24 = 1
    SetTimer, KeyF24timer, -300
    return
  KeyF24timer:
    press_F24 = 0
    return
#if

#If !layer_sym
  F23 & F24::
    layer_ext = 0
    layer_sym2 = 1
    KeyWait F23
    layer_sym2 = 0
    return
  F23::
    if press_F23 {
        layer_ext = 0
        layer_sym = 1
        KeyWait F23
        KeyWait F23, D
        layer_sym = 0
    } Else
      press_F23 = 1
    SetTimer, KeyF23timer, -300
    Return
  KeyF23timer:
    press_F23 = 0
    Return
#If\n\n`

*/