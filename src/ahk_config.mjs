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
#Requires AutoHotkey v2.0
ProcessSetPriority 'High'
Persistent
; #Warn  ; Enable warnings to assist with detecting common errors.

SetCapsLockState 'AlwaysOff'

scroll_default_speed := 40
scroll_speed_multiplier := .25

x_slow := 1.5
x_default := 2.8
y_slow := x_slow
y_default := x_default
x := x_default
y := y_default

speed_switcher := 0
move__nth := 0
x_max := speed_switcher ? x_default : 8

;double click or tripleclick  
speed_move := 0
x_double := 1.02
x_triple := 1.05
y_double := x_double
y_triple := x_triple

resetSpeed() {
  global
  x := speed_switcher ? x_slow : x_default
  y := speed_switcher ? y_slow : y_default
}

brightnessJump := 10
CurrentBrightness := GetCurrentBrightNess()
; ChangeBrightness(0)
; minimumBrightness := GetCurrentBrightNess()
; ChangeBrightness(CurrentBrightness)

ChangeBrightness( brightness := 50, timeout := 1 ) {
	For property in ComObjGet( "winmgmts:\\\\.\\root\\WMI" ).ExecQuery("SELECT * FROM WmiMonitorBrightnessMethods" )
		property.WmiSetBrightness( timeout, brightness)
}

GetCurrentBrightNess() {
	For property in ComObjGet( "winmgmts:\\\\.\\root\\WMI" ).ExecQuery( "SELECT * FROM WmiMonitorBrightness" )
		currentBrightness := property.CurrentBrightness	
	return currentBrightness
}
\n\n`

config.switchers = `\tlayer_ext := 0
  layer_ext2 := 0
  layer_sym := 0
  layer_sym2 := 0
  hold_${symbolKey} := 0
  press_${symbolKey} := 0
  hold_${extendKey} := 0
  press_${extendKey} := 0

  ${symbolKey}:: {
    global
    if hold_${symbolKey}
      return
    hold_${symbolKey} := 1
    if layer_sym
      layer_sym := 0
    If !press_${symbolKey} {
      press_${symbolKey} := 1
      SetTimer double_${symbolKey}_timer, ${delay}
      KeyWait('${symbolKey}')
      hold_${symbolKey} := 0
    } Else if KeyWait('${symbolKey}', 'T.${delay[1]}') {
      if layer_ext
        layer_ext := 0
      layer_sym := 1
      press_${symbolKey} := 0
      hold_${symbolKey} := 0
    } else {
      layer_sym2 := 1
      KeyWait('${symbolKey}')
      layer_sym2 := 0
      hold_${symbolKey} := 0
    }
  }
  double_${symbolKey}_timer() {
    global
    press_${symbolKey} := 0
  }

  ${extendKey}:: {
    global
    if hold_${extendKey}
      return
    hold_${extendKey} := 1
    if layer_ext
      layer_ext := 0
    If !press_${extendKey} {
      press_${extendKey} := 1
      SetTimer double_${extendKey}_timer, ${delay[0]}
      KeyWait('${extendKey}')
      hold_${extendKey} := 0
    } Else if KeyWait('${extendKey}', 'T.${delay[1]}') {
      if layer_sym
        layer_sym := 0
      layer_ext := 1
      press_${extendKey} := 0
      hold_${extendKey} := 0
    } else {
      layer_ext2 := 1
      KeyWait('${extendKey}')
      layer_ext2 := 0
      hold_${extendKey} := 0        
    }
  }
  double_${extendKey}_timer() {
    global
    press_${extendKey} := 0
  }`

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