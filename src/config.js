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
  
      symbol              s && !e || layer_sym
      shift symbol        s↓e↓ e↓s↓
      toggle symbol       ss↑
      !toggle symbol      s ee↑
      sym2                ss↓
  
      extend              e
      toggle extend       ee↑
      !toggle extend      e ss↑
      ext2                ee↓
  
     */
const symbolKey = 'F23', extendKey = 'F24',
  config = {
    switchers: () => `;config..........................................

  ${symbolKey}::
    if !hold_${symbolKey} {
      If press_${symbolKey} {
        press_${symbolKey} = 2
      }
      Else {
        press_${symbolKey} = 1
        SetTimer, double_${symbolKey}_timer, -300
      }

      if layer_sym {
        layer_sym = 0
        ;MsgBox, !sym
      }

      KeyWait, ${symbolKey}, T.2
      if ErrorLevel {
        ErrorLevel = 0
        hold_${symbolKey} = 1
        If double_${symbolKey} {
          double_${symbolKey} = 0
          layer_sym2 = 1
          ;MsgBox, sym2
        }
        KeyWait, ${symbolKey}
        hold_${symbolKey} = 0
        If layer_sym2 {
          layer_sym2 = 0
          ;MsgBox !sym2
        }
      } else if double_${symbolKey}
        double_${symbolKey} = 0
    }
    return
  double_${symbolKey}_timer:
    if (press_${symbolKey} = 2) {
      If !GetKeyState("${symbolKey}", "P") {
        if layer_ext {
          layer_ext = 0
          ;MsgBox, !ext
        }
        layer_sym = 1
        ;MsgBox, sym
      } else
        double_${symbolKey} = 1
    }
    press_${symbolKey} = 0
    Return



  ${extendKey}::
    if !hold_${extendKey} {
      If press_${extendKey} {
        press_${extendKey} = 2
      }
      Else {
        press_${extendKey} = 1
        SetTimer, double_${extendKey}_timer, -300
      }

      if layer_ext {
        layer_ext = 0
        ;MsgBox, !ext
      }

      KeyWait, ${extendKey}, T.2
      if ErrorLevel {
        ErrorLevel = 0
        hold_${extendKey} = 1
        If double_${extendKey} {
          double_${extendKey} = 0
          layer_ext2 = 1
          ;MsgBox, ext2
        }
        KeyWait, ${extendKey}
        hold_${extendKey} = 0
        If layer_ext2 {
          layer_ext2 = 0
          ;MsgBox !ext2
        }
      } else if double_${extendKey}
        double_${extendKey} = 0
    }
    return
  double_${extendKey}_timer:
    if (press_${extendKey} = 2) {
      If !GetKeyState("${extendKey}", "P") {
        if layer_sym {
          layer_sym = 0
          ;MsgBox, !sym
        }
        layer_ext = 1
        ;MsgBox, ext
      } else
        double_${extendKey} = 1
    }
    press_${extendKey} = 0
    Return\n\n`,
    layer_condition: {
      sym: `!layer_sym2 && ((layer_sym && !GetKeyState("${extendKey}", "P")) || (!layer_sym && GetKeyState("${symbolKey}", "P") && !GetKeyState("${extendKey}", "P")) || (layer_ext && GetKeyState("${symbolKey}", "P")))`,
      sym2: `layer_sym2`,
      ext: `!layer_ext2 && ((layer_ext && !GetKeyState("${symbolKey}", "P")) || (!layer_ext && GetKeyState("${extendKey}", "P") && !GetKeyState("${symbolKey}", "P")) || (layer_sym && GetKeyState("${extendKey}", "P")))`,
      ext2: `layer_ext2`
    }
  }
export default config
export {extendKey,symbolKey,config}