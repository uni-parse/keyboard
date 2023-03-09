;
;
;   made by UniParse
;   github.com/TheUniParse
;   twitter.com/UniParse
;
;
#Requires AutoHotkey v2.0
ProcessSetPriority 'High'
Persistent
#Warn  ; detecting common errors.

x_slow := 1.5
x_default := 2.8
x_defaultMultiply := 1.01
x_doubleMultiply := 1.1
x_tripleMultiply := 3

y_slow := x_slow
y_default := x_default
y_defaultMultiply := x_defaultMultiply
y_doubleMultiply := x_doubleMultiply
y_tripleMultiply := x_tripleMultiply

x := x_default
y := y_default

mouse_speed_lvl := 0
x_max := mouse_speed_lvl ? x_default : 8
y_max := x_max

wheelDelay_default := 40
wheelDelay_multiplier := .25

brightnessJump := 10
currentBrightness := getCurrentBrightness()

SetCapsLockState('AlwaysOff')


;config layers ⚙️      ⚙️      ⚙️      ⚙️      ⚙️      ⚙️
F23::symSwitcher('F23', 400, 200)
F24::extSwitcher('F24', 400, 200)


;extend layer 🌟    🌟    🌟    🌟    🌟    🌟    🌟    🌟
#HotIf !layer_ext2 && (
  (
    layer_ext
    && !GetKeyState("F23", "P")
  ) || (
    !layer_ext
    && GetKeyState("F24", "P")
    && !GetKeyState("F23", "P")
  ) || (
    layer_sym
    && GetKeyState("F24", "P")
  )
)
	*q::wheelScroll_up()
	w::Esc
	f::mouse_move('up')
	p::toggleMouseSpeed()
	l::Home
	u::Up
	y::End
	'::PgUp
	-::PgDn
	*a::wheelScroll_down()
	r::mouse_move('left')
	s::mouse_move('down')
	t::mouse_move('right')
	g::AppsKey
	m::Tab
	n::Left
	e::Down
	i::Right
	o::Enter
	x::XButton1
	c::XButton2
	d::Bs
	v::Del
	k::SetCapsLockState(!GetKeyState("CapsLock","T"))
	h::LButton
	,::MButton
	.::RButton
#HotIf


;extend2 layer 🌟🌟     🌟🌟     🌟🌟     🌟🌟     🌟🌟
#HotIf layer_ext2
	l::PrintScreen
	u::Volume_Up
	y::^Numpad0
	'::Media_Stop
	s::Browser_Search
	m::Run("calc")
	n::Media_Prev
	e::Volume_Down
	i::Media_Next
	o::Media_Play_Pause
	`;::Volume_Mute
	k::brightnessUp()
	h::brightnessDown()
	,::^NumpadAdd
	.::^NumpadSub
#HotIf


;symbol layer 💲     💲     💲     💲     💲     💲     💲
#HotIf !layer_sym2 && (
  (
    layer_sym
    && !GetKeyState("F24", "P")
  ) || (
    !layer_sym
    && GetKeyState("F23", "P")
    && !GetKeyState("F24", "P")
  ) || (
    layer_ext
    && GetKeyState("F23", "P")
  )
)
	`::Send('{U+22c6}')
	1::Send('{U+25aa}')
	2::Send('{U+25b8}')
	5::Send('{U+bb}')
	7::Send('{U+203a}')
	8::Send('{U+2022}')
	=::Send('{U+2043}')
	q::`
	w::[
	f::]
	u::SendText('(')
	y::SendText(')')
	'::SendText('"')
	-::SendText('_')
	a::1
	r::2
	s::3
	t::4
	]::Send('{U+20ac}')
	m::\
	n::7
	e::8
	i::9
	o::0
	`;::SendText(':')
	x::SendText('{')
	c::SendText('}')
	d::5
	v::=
	k::/
	h::6
	,::SendText('<')
	.::SendText('>')
#HotIf


;symbol1 layer ⇧💲      ⇧💲      ⇧💲      ⇧💲      ⇧💲
#HotIf GetKeyState("F23", "P") && GetKeyState("F24", "P")
	`::Send('{U+22c6}')
	1::Send('{U+25aa}')
	2::Send('{U+25b8}')
	5::Send('{U+bb}')
	7::Send('{U+203a}')
	8::Send('{U+2022}')
	=::Send('{U+2043}')
	q::SendText('~')
	w::SendText('{')
	f::SendText('}')
	u::SendText('(')
	y::SendText(')')
	'::SendText('"')
	-::SendText('_')
	a::SendText('!')
	r::SendText('@')
	s::SendText('#')
	t::SendText('$')
	]::Send('{U+20ac}')
	m::SendText('|')
	n::SendText('&')
	e::SendText('*')
	i::SendText('(')
	o::SendText(')')
	`;::SendText(':')
	x::SendText('{')
	c::SendText('}')
	d::SendText('%')
	v::SendText('+')
	k::SendText('?')
	h::SendText('^')
	,::SendText('<')
	.::SendText('>')
#HotIf


;symbol2 layer 💲💲    💲💲    💲💲    💲💲    💲💲    💲💲
#HotIf layer_sym2
	1::Send('{U+2152}')
	2::Send('{U+bd}')
	3::Send('{U+2153}')
	4::Send('{U+bc}')
	5::Send('{U+2155}')
	7::Send('{U+be}')
	8::Send('{U+2070}')
	q::Send('{U+1f4a1}')
	w::Send('{U+26a0}{U+fe0f}')
	f::Send('{U+2191}')
	p::Send('{U+3c0}')
	b::Send('{U+2248}')
	[::Send('{U+2209}')
	u::Send('{U+2264}')
	y::Send('{U+2265}')
	'::Send('{U+2026}')
	-::Send('{U+b1}')
	a::F1
	r::F2
	s::F3
	t::F4
	g::Send('{U+2260}')
	]::Send('{U+2208}')
	n::F7
	e::F8
	i::F9
	o::F10
	x::Send('{U+2717}')
	c::Send('{U+32bf}')
	d::F5
	v::F11
	k::F12
	h::F6
#HotIf


;standard
ins::switchWindow()


;helper functions 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺
window_toggle := 0
switchWindow() {
  global
  window_toggle := !window_toggle
  SendInput( window_toggle ? "#^{left}" : "#^{right}")
}
layer_ext := 0
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
}
; setBrightness(0)
; minimumBrightness := getCurrentBrightness()
; setBrightness(currentBrightness)

brightnessUp() {
  global
  brightness := (currentBrightness < 100 - brightnessJump)
    ? (currentBrightness += brightnessJump)
    : 100
  setBrightness(brightness)
}

brightnessDown() {
  global
  brightness := (currentBrightness > brightnessJump)
    ? (currentBrightness -= brightnessJump)
    : 0
  setBrightness(brightness)
}

getCurrentBrightness() {
	For property in ComObjGet( "winmgmts:\\.\root\WMI" ).ExecQuery( "SELECT * FROM WmiMonitorBrightness" )
		current_brightness := property.CurrentBrightness
	return current_brightness
}

setBrightness( brightness := 50, timeout := 1 ) {
	For property in ComObjGet( "winmgmts:\\.\root\WMI" ).ExecQuery("SELECT * FROM WmiMonitorBrightnessMethods" )
		property.WmiSetBrightness( timeout, brightness)
}

wheel := {
  boostSpeed_up: 0,
  boostSpeed_down: 0,
  scrolling_up: 0,
  scrolling_down: 0,
  pressCount_up: 0,
  pressCount_down: 0,
}

wheelScroll_up() {
  global

  if wheel.scrolling_up
    return

  If !wheel.pressCount_up {
    wheel.pressCount_up := 1
    SetTimer(wheel_up_boostSpeed_timer, -300)
  } Else
    wheel.pressCount_up := 2

  SendInput '{Blind}{WheelUp}'

  if KeyWait('q', 'T.2') 
    wheel.boostSpeed_up := 0
  Else{
    wheel.scrolling_up := 1
    wheelDelay := wheelDelay_default
    
    If wheel.boostSpeed_up {
      wheelDelay *= wheelDelay_multiplier
      wheel.boostSpeed_up := 0
    }

    setTimer(wheel_up_scrolling_timer, wheelDelay)
  }   
}

wheel_up_scrolling_timer() {
  global
  if GetKeyState("q","P") && (layer_ext || GetKeyState("F24","P"))
    SendInput '{Blind}{WheelUp}'
  Else {
    wheelDelay := wheelDelay_default
    wheel.scrolling_up := 0
    setTimer( , 0)
  }
}

wheel_up_boostSpeed_timer() {
  global
  if wheel.pressCount_up = 2
    wheel.boostSpeed_up := 1
  wheel.pressCount_up := 0
}

wheelScroll_down() {
  global

  if wheel.scrolling_down
    return

  If !wheel.pressCount_down {
    wheel.pressCount_down := 1
    SetTimer(wheel_down_boostSpeed_timer, -300)
  } Else
    wheel.pressCount_down := 2

  SendInput '{Blind}{WheelDown}'

  if KeyWait('a', 'T.2') 
    wheel.boostSpeed_down := 0
  Else{
    wheel.scrolling_down := 1
    wheelDelay := wheelDelay_default
    
    If wheel.boostSpeed_down {
      wheelDelay *= wheelDelay_multiplier
      wheel.boostSpeed_down := 0
    }

    setTimer(wheel_down_scrolling_timer, wheelDelay)
  }   
}

wheel_down_scrolling_timer() {
  global
  if GetKeyState("a","P") && (layer_ext || GetKeyState("F24","P"))
    SendInput '{Blind}{WheelDown}'
  Else {
    wheelDelay := wheelDelay_default
    wheel.scrolling_down := 0
    setTimer( , 0)
  }
}

wheel_down_boostSpeed_timer() {
  global
  if wheel.pressCount_down = 2
    wheel.boostSpeed_down := 1
  wheel.pressCount_down := 0
}

mouse := {
  boostSpeed: 0, ; on double/triple click  
  moveCount_total: 0,
  moveCount: Map(
    'up', 0,
    'down', 0,
    'right', 0,
    'left', 0,
  ),
  pressCount: Map(
    'up', 0,
    'down', 0,
    'right', 0,
    'left', 0,
  ),
  keys: Map(
    'up', 'f',
    'down', 's',
    'right', 't',
    'left', 'r',
  )
}

mouse_move(dir) {
  global

  ;ignore auto press repeat of holding.
  If mouse.moveCount.get(dir)
    return

  if isCombo(dir) {
    mouse.moveCount.set(dir, ++mouse.moveCount_total)
    SetTimer(mouse_moveCount_timer.bind(dir), A_MouseDelay)
    return
  }

  if !mouse.pressCount.get(dir) {
    mouse.pressCount.set(dir, 1)
    SetTimer(mouse_boostSpeed_timer.bind(dir), -300)
  } else
    mouse.pressCount.set(dir, 2)

  moveMove_switch(dir) ;no combo

  if KeyWait(mouse.keys.get(dir), 'T.1')
    mouse.boostSpeed := 0
  Else {
    ;triple clicks
    If mouse.boostSpeed {
      x *= x_tripleMultiply
      y *= y_tripleMultiply
    }
    
    mouse.moveCount.set(dir, ++mouse.moveCount_total)
    SetTimer(mouse_moveCount_timer.bind(dir), A_MouseDelay)
  }
}

mouse_boostSpeed_timer(dir) {
  global
  if mouse.pressCount.get(dir) == 2
    mouse.boostSpeed := 1
  mouse.pressCount.set(dir, 0)
}

mouse_moveCount_timer(dir) {
  global
  
  If GetKeyState(mouse.keys.get(dir), 'P') && (
    layer_ext
    || GetKeyState('F24', 'P')
    ) {
    if mouse.moveCount.get(dir) != mouse.moveCount_total
      return
    
    multiplyMouseSpeed(mouse.boostSpeed) ;single/double clicks
    moveMove_switch(dir)

    return
  }

  if isCombo(dir)
    mouseMoveCountersDecrement(dir)
  Else {
    resetMouseSpeed()
    mouse.boostSpeed := 0
    mouse.moveCount_total := 0
  }

  mouse.moveCount.set(dir, 0)
  SetTimer( , 0)
}

isCombo(dir) {
  for key, value in mouse.keys
    if key != dir && GetKeyState(value, 'p')
      return true
  return false
}

resetMouseSpeed() {
  global
  x := mouse_speed_lvl ? x_slow : x_default
  y := mouse_speed_lvl ? y_slow : y_default
}

toggleMouseSpeed() {
  global
  mouse_speed_lvl := !mouse_speed_lvl
  resetMouseSpeed()
}

multiplyMouseSpeed(boost) {
  global

  if x <= x_max {
    x *= boost ? x_doubleMultiply : x_defaultMultiply
    if x > x_max
      x := x_max
  }

  if y <= y_max {
    y *= boost ? y_doubleMultiply : y_defaultMultiply
    if y > y_max
      y := y_max
  }
}

mouseMoveCountersDecrement(dir) {
  global

  if mouse.moveCount.get(dir) != 1
  && mouse.moveCount.get(dir) != 2
    return

  mouse.moveCount_total--

  for key, value in mouse.moveCount
    if key != dir && value > mouse.moveCount.get(dir)
      mouse.moveCount.set(key, --value)
}

moveMove_switch(dir) {      
  vertical := dir == 'up' || dir == 'down'
  if GetKeyState(mouse.keys.get(vertical ? 'left' : 'up'), 'P')
    switch dir {
      case 'up', 'left': MouseMove(-x, -y,, 'R')
      case 'right': MouseMove(x, -y,, 'R')
      case 'down': MouseMove(-x, y,, 'R')
    }
  else if GetKeyState(mouse.keys.get(vertical ? 'right' : 'down'), 'P')
    switch dir {
      case 'up': MouseMove(x, -y,, 'R')
      case 'right', 'down': MouseMove(x, y,, 'R')
      case 'left': MouseMove(-x, y,, 'R')
    }
  else
    switch dir {
      case 'up': MouseMove(0, -y,, 'R')
      case 'right': MouseMove(x, 0,, 'R')
      case 'down': MouseMove(0, y,, 'R')
      case 'left': MouseMove(-x, 0,, 'R')
    }
}
