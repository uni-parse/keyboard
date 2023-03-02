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


;config layers ⚙️      ⚙️       ⚙️      ⚙️      ⚙️     ⚙️
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
	f::mouseMove_up()
	p::toggleMouseSpeed()
	l::Home
	u::Up
	y::End
	'::PgUp
	-::PgDn
	*a::wheelScroll_down()
	r::mouseMove_left()
	s::mouseMove_down()
	t::mouseMove_right()
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
	m::Run( "calc")
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


;helper functions 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺
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
  boostSpeed : 0, ; on double/triple click  
  moveCount : 0,
  moveCount_up : 0,
  moveCount_down : 0,
  moveCount_right : 0,
  moveCount_left : 0,
  pressCount_up : 0,
  pressCount_down : 0,
  pressCount_right : 0,
  pressCount_left : 0,
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

mouseMove_up() {
  global

  If mouse.moveCount_up
    return

  if GetKeyState("r","P") || GetKeyState("t","P") || GetKeyState("s","P") {
    mouse.moveCount_up := ++mouse.moveCount
    SetTimer(mouse_up_moveCount_timer, A_MouseDelay)
    
    return
  }

  If !mouse.pressCount_up {
    mouse.pressCount_up := 1
    SetTimer(mouse_up_boostSpeed_timer, -300)
  } Else
    mouse.pressCount_up := 2

  MouseMove(0, -y,, 'R')

  if KeyWait('f', 'T.1')
    mouse.boostSpeed := 0
  Else {
    mouse.moveCount_up := ++mouse.moveCount

    ;triple clicks
    If mouse.boostSpeed {
      x *= x_triple
      y *= y_triple
    }

    SetTimer(mouse_up_moveCount_timer, A_MouseDelay)
  }
}

mouse_up_moveCount_timer() {
  global

  If GetKeyState("f","P") && (layer_ext || GetKeyState("F24","P")) {
    if (mouse.moveCount_up != mouse.moveCount)
      return

    ;double clicks
    if mouse.boostSpeed && x <= x_max {
      x *= x_double
      y *= y_double
    }

    if GetKeyState("r","P")
      MouseMove(-x, -y,, 'R')
    else if GetKeyState("t","P")
      MouseMove(x, -y,, 'R')
    else
      MouseMove(0, -y,, 'R')

    return
  }

  if !GetKeyState("r","P") && !GetKeyState("t","P") && !GetKeyState("s","P") {
    resetMouseSpeed()
    mouse.boostSpeed := 0
    mouse.moveCount := 0
  } Else if (mouse.moveCount_up = 1) {
    mouse.moveCount--
    if mouse.moveCount_left > 1
      mouse.moveCount_left--
    if mouse.moveCount_right > 1
      mouse.moveCount_right--
    if mouse.moveCount_down > 1
      mouse.moveCount_down--
  } Else if (mouse.moveCount_up = 2) {
    mouse.moveCount--
    if mouse.moveCount_left > 2
      mouse.moveCount_left--
    if mouse.moveCount_right > 2
      mouse.moveCount_right--
    if mouse.moveCount_down > 2
      mouse.moveCount_down--
  }

  mouse.moveCount_up := 0
  SetTimer( , 0)
}

mouse_up_boostSpeed_timer() {
  global
  if mouse.pressCount_up = 2
    mouse.boostSpeed := 1
  mouse.pressCount_up := 0
}

mouseMove_down() {
  global

  If mouse.moveCount_down
    return

  if GetKeyState("r","P") || GetKeyState("t","P") || GetKeyState("f","P") {
    mouse.moveCount_down := ++mouse.moveCount
    SetTimer(mouse_down_moveCount_timer, A_MouseDelay)
    
    return
  }

  If !mouse.pressCount_down {
    mouse.pressCount_down := 1
    SetTimer(mouse_down_boostSpeed_timer, -300)
  } Else
    mouse.pressCount_down := 2

  MouseMove(0, y,, 'R')

  if KeyWait('s', 'T.1')
    mouse.boostSpeed := 0
  Else {
    mouse.moveCount_down := ++mouse.moveCount

    ;triple clicks
    If mouse.boostSpeed {
      x *= x_triple
      y *= y_triple
    }

    SetTimer(mouse_down_moveCount_timer, A_MouseDelay)
  }
}

mouse_down_moveCount_timer() {
  global

  If GetKeyState("s","P") && (layer_ext || GetKeyState("F24","P")) {
    if (mouse.moveCount_down != mouse.moveCount)
      return

    ;double clicks
    if mouse.boostSpeed && x <= x_max {
      x *= x_double
      y *= y_double
    }

    if GetKeyState("r","P")
      MouseMove(-x, y,, 'R')
    else if GetKeyState("t","P")
      MouseMove(x, y,, 'R')
    else
      MouseMove(0, y,, 'R')

    return
  }

  if !GetKeyState("r","P") && !GetKeyState("t","P") && !GetKeyState("f","P") {
    resetMouseSpeed()
    mouse.boostSpeed := 0
    mouse.moveCount := 0
  } Else if (mouse.moveCount_down = 1) {
    mouse.moveCount--
    if mouse.moveCount_left > 1
      mouse.moveCount_left--
    if mouse.moveCount_right > 1
      mouse.moveCount_right--
    if mouse.moveCount_up > 1
      mouse.moveCount_up--
  } Else if (mouse.moveCount_down = 2) {
    mouse.moveCount--
    if mouse.moveCount_left > 2
      mouse.moveCount_left--
    if mouse.moveCount_right > 2
      mouse.moveCount_right--
    if mouse.moveCount_up > 2
      mouse.moveCount_up--
  }

  mouse.moveCount_down := 0
  SetTimer( , 0)
}

mouse_down_boostSpeed_timer() {
  global
  if mouse.pressCount_down = 2
    mouse.boostSpeed := 1
  mouse.pressCount_down := 0
}

mouseMove_right() {
  global

  If mouse.moveCount_right
    return

  if GetKeyState("f","P") || GetKeyState("s","P") || GetKeyState("r","P") {
    mouse.moveCount_right := ++mouse.moveCount
    SetTimer(mouse_right_moveCount_timer, A_MouseDelay)
    
    return
  }

  If !mouse.pressCount_right {
    mouse.pressCount_right := 1
    SetTimer(mouse_right_boostSpeed_timer, -300)
  } Else
    mouse.pressCount_right := 2

  MouseMove(x, 0,, 'R')

  if KeyWait('t', 'T.1')
    mouse.boostSpeed := 0
  Else {
    mouse.moveCount_right := ++mouse.moveCount

    ;triple clicks
    If mouse.boostSpeed {
      x *= x_triple
      y *= y_triple
    }

    SetTimer(mouse_right_moveCount_timer, A_MouseDelay)
  }
}

mouse_right_moveCount_timer() {
  global

  If GetKeyState("t","P") && (layer_ext || GetKeyState("F24","P")) {
    if (mouse.moveCount_right != mouse.moveCount)
      return

    ;double clicks
    if mouse.boostSpeed && x <= x_max {
      x *= x_double
      y *= y_double
    }

    if GetKeyState("f","P")
      MouseMove(x, -y,, 'R')
    else if GetKeyState("s","P")
      MouseMove(x, y,, 'R')
    else
      MouseMove(x, 0,, 'R')

    return
  }

  if !GetKeyState("f","P") && !GetKeyState("s","P") && !GetKeyState("r","P") {
    resetMouseSpeed()
    mouse.boostSpeed := 0
    mouse.moveCount := 0
  } Else if (mouse.moveCount_right = 1) {
    mouse.moveCount--
    if mouse.moveCount_up > 1
      mouse.moveCount_up--
    if mouse.moveCount_down > 1
      mouse.moveCount_down--
    if mouse.moveCount_left > 1
      mouse.moveCount_left--
  } Else if (mouse.moveCount_right = 2) {
    mouse.moveCount--
    if mouse.moveCount_up > 2
      mouse.moveCount_up--
    if mouse.moveCount_down > 2
      mouse.moveCount_down--
    if mouse.moveCount_left > 2
      mouse.moveCount_left--
  }

  mouse.moveCount_right := 0
  SetTimer( , 0)
}

mouse_right_boostSpeed_timer() {
  global
  if mouse.pressCount_right = 2
    mouse.boostSpeed := 1
  mouse.pressCount_right := 0
}

mouseMove_left() {
  global

  If mouse.moveCount_left
    return

  if GetKeyState("f","P") || GetKeyState("s","P") || GetKeyState("t","P") {
    mouse.moveCount_left := ++mouse.moveCount
    SetTimer(mouse_left_moveCount_timer, A_MouseDelay)
    
    return
  }

  If !mouse.pressCount_left {
    mouse.pressCount_left := 1
    SetTimer(mouse_left_boostSpeed_timer, -300)
  } Else
    mouse.pressCount_left := 2

  MouseMove(-x, 0,, 'R')

  if KeyWait('r', 'T.1')
    mouse.boostSpeed := 0
  Else {
    mouse.moveCount_left := ++mouse.moveCount

    ;triple clicks
    If mouse.boostSpeed {
      x *= x_triple
      y *= y_triple
    }

    SetTimer(mouse_left_moveCount_timer, A_MouseDelay)
  }
}

mouse_left_moveCount_timer() {
  global

  If GetKeyState("r","P") && (layer_ext || GetKeyState("F24","P")) {
    if (mouse.moveCount_left != mouse.moveCount)
      return

    ;double clicks
    if mouse.boostSpeed && x <= x_max {
      x *= x_double
      y *= y_double
    }

    if GetKeyState("f","P")
      MouseMove(-x, -y,, 'R')
    else if GetKeyState("s","P")
      MouseMove(-x, y,, 'R')
    else
      MouseMove(-x, 0,, 'R')

    return
  }

  if !GetKeyState("f","P") && !GetKeyState("s","P") && !GetKeyState("t","P") {
    resetMouseSpeed()
    mouse.boostSpeed := 0
    mouse.moveCount := 0
  } Else if (mouse.moveCount_left = 1) {
    mouse.moveCount--
    if mouse.moveCount_up > 1
      mouse.moveCount_up--
    if mouse.moveCount_down > 1
      mouse.moveCount_down--
    if mouse.moveCount_right > 1
      mouse.moveCount_right--
  } Else if (mouse.moveCount_left = 2) {
    mouse.moveCount--
    if mouse.moveCount_up > 2
      mouse.moveCount_up--
    if mouse.moveCount_down > 2
      mouse.moveCount_down--
    if mouse.moveCount_right > 2
      mouse.moveCount_right--
  }

  mouse.moveCount_left := 0
  SetTimer( , 0)
}

mouse_left_boostSpeed_timer() {
  global
  if mouse.pressCount_left = 2
    mouse.boostSpeed := 1
  mouse.pressCount_left := 0
}
