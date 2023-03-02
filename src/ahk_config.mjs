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
;#Warn  ; detecting common errors.

x_slow := 1.5
x_default := 2.8
x_double := 1.02
x_triple := 1.05

y_slow := x_slow
y_default := x_default
y_double := x_double
y_triple := x_triple

x := x_default
y := y_default

mouse_speed_lvl := 0
x_max := mouse_speed_lvl ? x_default : 8

wheelDelay_default := 40
wheelDelay_multiplier := .25

brightnessJump := 10
currentBrightness := getCurrentBrightness()

SetCapsLockState('AlwaysOff')
\n`


config.switchers =
  `${symbolKey}::symSwitcher('${symbolKey}', 400, 200)
${extendKey}::extSwitcher('${extendKey}', 400, 200)`


config.layer_condition = {
  ext: `!layer_ext2 && (
  (
    layer_ext
    && !GetKeyState("${symbolKey}", "P")
  ) || (
    !layer_ext
    && GetKeyState("${extendKey}", "P")
    && !GetKeyState("${symbolKey}", "P")
  ) || (
    layer_sym
    && GetKeyState("${extendKey}", "P")
  )
)`,

  ext2: `layer_ext2`,

  sym: `!layer_sym2 && (
  (
    layer_sym
    && !GetKeyState("${extendKey}", "P")
  ) || (
    !layer_sym
    && GetKeyState("${symbolKey}", "P")
    && !GetKeyState("${extendKey}", "P")
  ) || (
    layer_ext
    && GetKeyState("${symbolKey}", "P")
  )
)`,

  sym1: `GetKeyState("${symbolKey}", "P") && GetKeyState("${extendKey}", "P")`,

  sym2: `layer_sym2`
}

config.config = `layer_ext := 0
layer_ext2 := 0
layer_sym := 0
layer_sym2 := 0

switchers := {
  holding_sym: 0,
  holding_ext: 0,
  pressCount_sym: 0,
  pressCount_ext: 0
}

symSwitcher(key, doubleDelay := 400, holdDelay := 200) {
  global

  if switchers.holding_sym
    return

  switchers.holding_sym := 1
  layer_sym := 0

  If !switchers.pressCount_sym {
    switchers.pressCount_sym := 1
    SetTimer(double_sym_timer, -doubleDelay)
    KeyWait(key)
    switchers.holding_sym := 0
  } Else if KeyWait(key, 'T' . holdDelay / 1000) {
    layer_ext := 0
    layer_sym := 1
    switchers.pressCount_sym := 0
    switchers.holding_sym := 0
  } else {
    layer_sym2 := 1
    KeyWait(key)
    layer_sym2 := 0
    switchers.holding_sym := 0
  }
}

double_sym_timer() {
  global
  switchers.pressCount_sym := 0
}

extSwitcher(key, doubleDelay := 400, holdDelay := 200) {
  global

  if switchers.holding_ext
    return
  
  switchers.holding_ext := 1
  layer_ext := 0

  If !switchers.pressCount_ext {
    switchers.pressCount_ext := 1
    SetTimer(double_ext_timer, -doubleDelay)
    KeyWait(key)
    switchers.holding_ext := 0
  } Else if KeyWait(key, 'T' . holdDelay / 1000) {
    layer_sym := 0
    layer_ext := 1
    switchers.pressCount_ext := 0
    switchers.holding_ext := 0
  } else {
    layer_ext2 := 1
    KeyWait(key)
    layer_ext2 := 0
    switchers.holding_ext := 0        
  }
}

double_ext_timer() {
  global
  switchers.pressCount_ext := 0
}`


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