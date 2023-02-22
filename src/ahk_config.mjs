const
  symbolKey = 'F23',
  extendKey = 'F24',
  delay = [-400, 2]

export const config = {
  symKey: symbolKey,
  extKey: extendKey
}

config.intro = `;
;
;   made by UniParse
;   github.com/TheUniParse
;   twitter.com/UniParse
;
;
#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
Process, Priority,, High\n
x_slow = 4
y_slow := x_slow
x_default = 18
y_default := x_default
x_multiplier = 3
y_multiplier := x_multiplier
x_increment = 1.1
y_increment := x_increment
x := x_default
y := y_default
scroll_default_speed = 40
scroll_speed_multiplier = .25
speed_switcher = 0
move__nth = 0

resetSpeed() {
  global
  If speed_switcher {
    x := x_slow
    y := y_slow
  } Else {
    x := x_default
    y := y_default
  }
}

brightnessJump = 10
CurrentBrightness := GetCurrentBrightNess()
; ChangeBrightness(0)
; minimumBrightness := GetCurrentBrightNess()
; ChangeBrightness(CurrentBrightness)

ChangeBrightness( ByRef brightness := 50, timeout = 1 ) {
	For property in ComObjGet( "winmgmts:\\\\.\\root\\WMI" ).ExecQuery("SELECT * FROM WmiMonitorBrightnessMethods" )
		property.WmiSetBrightness( timeout, brightness)
}

GetCurrentBrightNess() {
	For property in ComObjGet( "winmgmts:\\\\.\\root\\WMI" ).ExecQuery( "SELECT * FROM WmiMonitorBrightness" )
		currentBrightness := property.CurrentBrightness	
	return currentBrightness
}

#Persistent
SetCapsLockState, AlwaysOff
\n\n`

config.switchers = `\t${symbolKey}::
    if !hold_${symbolKey} {
      hold_${symbolKey} = 1
      if layer_sym {
        layer_sym = 0
        ;MsgBox, !sym
      }
      If press_${symbolKey} {
        KeyWait, ${symbolKey}, T.${delay[1]}
        if ErrorLevel {
          ErrorLevel = 0
          layer_sym2 = 1
          ;MsgBox, sym2
          KeyWait, ${symbolKey}
          layer_sym2 = 0
          ;MsgBox !sym2
          hold_${symbolKey} = 0
        } else {
          if layer_ext {
            layer_ext = 0
            ;MsgBox, !ext
          }
          layer_sym = 1
          ;MsgBox, sym
          press_${symbolKey} = 0
          hold_${symbolKey} = 0
        }
      } Else {
        press_${symbolKey} = 1
        SetTimer, double_${symbolKey}_timer, ${delay}
        KeyWait ${symbolKey}
        hold_${symbolKey} = 0
      }
    }
    return
  double_${symbolKey}_timer:
    press_${symbolKey} = 0
    Return

  ${extendKey}::
    if !hold_${extendKey} {
      hold_${extendKey} = 1
      if layer_ext {
        layer_ext = 0
        ;MsgBox, !ext
      }
      If press_${extendKey} {
        KeyWait, ${extendKey}, T.${delay[1]}
        if ErrorLevel {
          ErrorLevel = 0
          layer_ext2 = 1
          ;MsgBox, ext2
          KeyWait, ${extendKey}
          layer_ext2 = 0
          ;MsgBox !ext2
          hold_${extendKey} = 0
        } else {
          if layer_sym {
            layer_sym = 0
            ;MsgBox, !sym
          }
          layer_ext = 1
          ;MsgBox, ext
          press_${extendKey} = 0
          hold_${extendKey} = 0
        }
      } Else {
        press_${extendKey} = 1
        SetTimer, double_${extendKey}_timer, ${delay[0]}
        KeyWait ${extendKey}
        hold_${extendKey} = 0
      }
    }
    return
  double_${extendKey}_timer:
    press_${extendKey} = 0
    Return`

config.layer_condition = {
  sym: `!layer_sym2 && ((layer_sym && !GetKeyState("${extendKey}", "P")) || (!layer_sym && GetKeyState("${symbolKey}", "P") && !GetKeyState("${extendKey}", "P")) || (layer_ext && GetKeyState("${symbolKey}", "P")))`,
  sym1: `GetKeyState("${symbolKey}", "P") && GetKeyState("${extendKey}", "P")`,
  sym2: `layer_sym2`,
  ext: `!layer_ext2 && ((layer_ext && !GetKeyState("${symbolKey}", "P")) || (!layer_ext && GetKeyState("${extendKey}", "P") && !GetKeyState("${symbolKey}", "P")) || (layer_sym && GetKeyState("${extendKey}", "P")))`,
  ext2: `layer_ext2`
}


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