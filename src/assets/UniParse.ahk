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
	For property in ComObjGet( "winmgmts:\\.\root\WMI" ).ExecQuery("SELECT * FROM WmiMonitorBrightnessMethods" )
		property.WmiSetBrightness( timeout, brightness)
}

GetCurrentBrightNess() {
	For property in ComObjGet( "winmgmts:\\.\root\WMI" ).ExecQuery( "SELECT * FROM WmiMonitorBrightness" )
		currentBrightness := property.CurrentBrightness	
	return currentBrightness
}



;config layers ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
	layer_ext := 0
  layer_ext2 := 0
  layer_sym := 0
  layer_sym2 := 0
  hold_F23 := 0
  press_F23 := 0
  hold_F24 := 0
  press_F24 := 0

  F23:: {
    global
    if hold_F23
      return
    hold_F23 := 1
    if layer_sym
      layer_sym := 0
    If !press_F23 {
      press_F23 := 1
      SetTimer double_F23_timer, -400,2
      KeyWait('F23')
      hold_F23 := 0
    } Else if KeyWait('F23', 'T.2') {
      if layer_ext
        layer_ext := 0
      layer_sym := 1
      press_F23 := 0
      hold_F23 := 0
    } else {
      layer_sym2 := 1
      KeyWait('F23')
      layer_sym2 := 0
      hold_F23 := 0
    }
  }
  double_F23_timer() {
    global
    press_F23 := 0
  }

  F24:: {
    global
    if hold_F24
      return
    hold_F24 := 1
    if layer_ext
      layer_ext := 0
    If !press_F24 {
      press_F24 := 1
      SetTimer double_F24_timer, -400
      KeyWait('F24')
      hold_F24 := 0
    } Else if KeyWait('F24', 'T.2') {
      if layer_sym
        layer_sym := 0
      layer_ext := 1
      press_F24 := 0
      hold_F24 := 0
    } else {
      layer_ext2 := 1
      KeyWait('F24')
      layer_ext2 := 0
      hold_F24 := 0        
    }
  }
  double_F24_timer() {
    global
    press_F24 := 0
  }


;extend layer 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟
#HotIf !layer_ext2 && ((layer_ext && !GetKeyState("F23", "P")) || (!layer_ext && GetKeyState("F24", "P") && !GetKeyState("F23", "P")) || (layer_sym && GetKeyState("F24", "P")))
	w::Esc
	p:: {
    global
		speed_switcher := !speed_switcher
		resetSpeed()
	}
	l::Home
	u::Up
	y::End
	'::PgUp
	-::PgDn
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
	k:: {
    SetCapsLockState !GetKeyState("CapsLock","T")
	}
	h::LButton
	,::MButton
	.::RButton
#HotIf


;extend2 layer 🌟🌟 🌟🌟 🌟🌟 🌟🌟 🌟🌟 🌟🌟
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
	k:: {
	global
    ChangeBrightness(CurrentBrightness < 100 - brightnessJump ? CurrentBrightness += brightnessJump : 100)
	}
	h:: {
	global
    ChangeBrightness(CurrentBrightness > brightnessJump ? CurrentBrightness -= brightnessJump : 0)
	}
	,::^NumpadAdd
	.::^NumpadSub
#HotIf


;symbol layer 💲  💲  💲  💲  💲  💲  💲  💲  💲
#HotIf !layer_sym2 && ((layer_sym && !GetKeyState("F24", "P")) || (!layer_sym && GetKeyState("F23", "P") && !GetKeyState("F24", "P")) || (layer_ext && GetKeyState("F23", "P")))
	`:: {
		Send '{U+22c6}'
	}
	1:: {
		Send '{U+25aa}'
	}
	2:: {
		Send '{U+25b8}'
	}
	5:: {
		Send '{U+bb}'
	}
	7:: {
		Send '{U+203a}'
	}
	8:: {
		Send '{U+2022}'
	}
	=:: {
		Send '{U+2043}'
	}
	q::`
	w::[
	f::]
	u:: {
		SendText '('
	}
	y:: {
		SendText ')'
	}
	':: {
		SendText '"'
	}
	-:: {
		SendText '_'
	}
	a::1
	r::2
	s::3
	t::4
	]:: {
		Send '{U+20ac}'
	}
	m::\
	n::7
	e::8
	i::9
	o::0
	`;:: {
		SendText ':'
	}
	x:: {
		SendText '{'
	}
	c:: {
		SendText '}'
	}
	d::5
	v::=
	k::/
	h::6
	,:: {
		SendText '<'
	}
	.:: {
		SendText '>'
	}
#HotIf


;symbol1 layer ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲
#HotIf GetKeyState("F23", "P") && GetKeyState("F24", "P")
	`:: {
		Send '{U+22c6}'
	}
	1:: {
		Send '{U+25aa}'
	}
	2:: {
		Send '{U+25b8}'
	}
	5:: {
		Send '{U+bb}'
	}
	7:: {
		Send '{U+203a}'
	}
	8:: {
		Send '{U+2022}'
	}
	=:: {
		Send '{U+2043}'
	}
	q:: {
		SendText '~'
	}
	w:: {
		SendText '{'
	}
	f:: {
		SendText '}'
	}
	u:: {
		SendText '('
	}
	y:: {
		SendText ')'
	}
	':: {
		SendText '"'
	}
	-:: {
		SendText '_'
	}
	a:: {
		SendText '!'
	}
	r:: {
		SendText '@'
	}
	s:: {
		SendText '#'
	}
	t:: {
		SendText '$'
	}
	]:: {
		Send '{U+20ac}'
	}
	m:: {
		SendText '|'
	}
	n:: {
		SendText '&'
	}
	e:: {
		SendText '*'
	}
	i:: {
		SendText '('
	}
	o:: {
		SendText ')'
	}
	`;:: {
		SendText ':'
	}
	x:: {
		SendText '{'
	}
	c:: {
		SendText '}'
	}
	d:: {
		SendText '%'
	}
	v:: {
		SendText '+'
	}
	k:: {
		SendText '?'
	}
	h:: {
		SendText '^'
	}
	,:: {
		SendText '<'
	}
	.:: {
		SendText '>'
	}
#HotIf


;symbol2 layer 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲
#HotIf layer_sym2
	1:: {
		Send '{U+2152}'
	}
	2:: {
		Send '{U+bd}'
	}
	3:: {
		Send '{U+2153}'
	}
	4:: {
		Send '{U+bc}'
	}
	5:: {
		Send '{U+2155}'
	}
	7:: {
		Send '{U+be}'
	}
	8:: {
		Send '{U+2070}'
	}
	q:: {
		Send '{U+1f4a1}'
	}
	w:: {
		Send '{U+26a0}{U+fe0f}'
	}
	f:: {
		Send '{U+2191}'
	}
	p:: {
		Send '{U+3c0}'
	}
	b:: {
		Send '{U+2248}'
	}
	[:: {
		Send '{U+2209}'
	}
	u:: {
		Send '{U+2264}'
	}
	y:: {
		Send '{U+2265}'
	}
	':: {
		Send '{U+2026}'
	}
	-:: {
		Send '{U+b1}'
	}
	a::F1
	r::F2
	s::F3
	t::F4
	g:: {
		Send '{U+2260}'
	}
	]:: {
		Send '{U+2208}'
	}
	n::F7
	e::F8
	i::F9
	o::F10
	x:: {
		Send '{U+2717}'
	}
	c:: {
		Send '{U+32bf}'
	}
	d::F5
	v::F11
	k::F12
	h::F6
#HotIf


;mouse in extend layer 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺
#HotIf !layer_ext2 && ((layer_ext && !GetKeyState("F23", "P")) || (!layer_ext && GetKeyState("F24", "P") && !GetKeyState("F23", "P")) || (layer_sym && GetKeyState("F24", "P")))
	move_f := 0
  press_f := 0
  f:: {
    global

    If move_f
      return

    if GetKeyState("r","P") || GetKeyState("t","P") || GetKeyState("s","P") {
      move_f := ++move__nth
      SetTimer(move_f_timer, A_MouseDelay)
      
      return
    }

    If !press_f {
      press_f := 1
      SetTimer(speed_f_timer, -300)
    } Else
      press_f := 2

    MouseMove(0, -y,, 'R')

    if KeyWait('f', 'T.1')
      speed_move := 0
    Else {
      move_f := ++move__nth

      ;triple clicks
      If speed_move {
        x *= x_triple
        y *= y_triple
      }

      SetTimer(move_f_timer, A_MouseDelay)
    }
  }

  move_f_timer() {
    global

    If GetKeyState("f","P") && (layer_ext || GetKeyState("F24","P")) {
      if (move_f != move__nth)
        return

      ;double clicks
      if speed_move && x <= x_max {
        x *= x_double
        y *= y_double
      }

      If !GetKeyState("r","P") && !GetKeyState("t","P")
        MouseMove(0, -y,, 'R')
      else if GetKeyState("r","P")
        MouseMove(-x, -y,, 'R')
      else if GetKeyState("t","P")
        MouseMove(x, -y,, 'R')

      return
    }

    if !GetKeyState("r","P") && !GetKeyState("t","P") && !GetKeyState("s","P") {
      resetSpeed()
      speed_move := 0
      move__nth := 0
    } Else if (move_f = 1) {
      move__nth--
      if move_r > 1
        move_r--
      if move_t > 1
        move_t--
      if move_s > 1
        move_s--
    } Else if (move_f = 2) {
      move__nth--
      if move_r > 2
        move_r--
      if move_t > 2
        move_t--
      if move_s > 2
        move_s--
    }

    move_f := 0
    SetTimer( , 0)
  }

  speed_f_timer() {
    global
    if press_f = 2
      speed_move := 1
    press_f := 0
  }
	move_s := 0
  press_s := 0
  s:: {
    global

    If move_s
      return

    if GetKeyState("r","P") || GetKeyState("t","P") || GetKeyState("f","P") {
      move_s := ++move__nth
      SetTimer(move_s_timer, A_MouseDelay)
      
      return
    }

    If !press_s {
      press_s := 1
      SetTimer(speed_s_timer, -300)
    } Else
      press_s := 2

    MouseMove(0, y,, 'R')

    if KeyWait('s', 'T.1')
      speed_move := 0
    Else {
      move_s := ++move__nth

      ;triple clicks
      If speed_move {
        x *= x_triple
        y *= y_triple
      }

      SetTimer(move_s_timer, A_MouseDelay)
    }
  }

  move_s_timer() {
    global

    If GetKeyState("s","P") && (layer_ext || GetKeyState("F24","P")) {
      if (move_s != move__nth)
        return

      ;double clicks
      if speed_move && x <= x_max {
        x *= x_double
        y *= y_double
      }

      If !GetKeyState("r","P") && !GetKeyState("t","P")
        MouseMove(0, y,, 'R')
      else if GetKeyState("r","P")
        MouseMove(-x, y,, 'R')
      else if GetKeyState("t","P")
        MouseMove(x, y,, 'R')

      return
    }

    if !GetKeyState("r","P") && !GetKeyState("t","P") && !GetKeyState("f","P") {
      resetSpeed()
      speed_move := 0
      move__nth := 0
    } Else if (move_s = 1) {
      move__nth--
      if move_r > 1
        move_r--
      if move_t > 1
        move_t--
      if move_f > 1
        move_f--
    } Else if (move_s = 2) {
      move__nth--
      if move_r > 2
        move_r--
      if move_t > 2
        move_t--
      if move_f > 2
        move_f--
    }

    move_s := 0
    SetTimer( , 0)
  }

  speed_s_timer() {
    global
    if press_s = 2
      speed_move := 1
    press_s := 0
  }
	move_t := 0
  press_t := 0
  t:: {
    global

    If move_t
      return

    if GetKeyState("f","P") || GetKeyState("s","P") || GetKeyState("r","P") {
      move_t := ++move__nth
      SetTimer(move_t_timer, A_MouseDelay)
      
      return
    }

    If !press_t {
      press_t := 1
      SetTimer(speed_t_timer, -300)
    } Else
      press_t := 2

    MouseMove(x, 0,, 'R')

    if KeyWait('t', 'T.1')
      speed_move := 0
    Else {
      move_t := ++move__nth

      ;triple clicks
      If speed_move {
        x *= x_triple
        y *= y_triple
      }

      SetTimer(move_t_timer, A_MouseDelay)
    }
  }

  move_t_timer() {
    global

    If GetKeyState("t","P") && (layer_ext || GetKeyState("F24","P")) {
      if (move_t != move__nth)
        return

      ;double clicks
      if speed_move && x <= x_max {
        x *= x_double
        y *= y_double
      }

      If !GetKeyState("f","P") && !GetKeyState("s","P")
        MouseMove(x, 0,, 'R')
      else if GetKeyState("f","P")
        MouseMove(x, -y,, 'R')
      else if GetKeyState("s","P")
        MouseMove(x, y,, 'R')

      return
    }

    if !GetKeyState("f","P") && !GetKeyState("s","P") && !GetKeyState("r","P") {
      resetSpeed()
      speed_move := 0
      move__nth := 0
    } Else if (move_t = 1) {
      move__nth--
      if move_f > 1
        move_f--
      if move_s > 1
        move_s--
      if move_r > 1
        move_r--
    } Else if (move_t = 2) {
      move__nth--
      if move_f > 2
        move_f--
      if move_s > 2
        move_s--
      if move_r > 2
        move_r--
    }

    move_t := 0
    SetTimer( , 0)
  }

  speed_t_timer() {
    global
    if press_t = 2
      speed_move := 1
    press_t := 0
  }
	move_r := 0
  press_r := 0
  r:: {
    global

    If move_r
      return

    if GetKeyState("f","P") || GetKeyState("s","P") || GetKeyState("t","P") {
      move_r := ++move__nth
      SetTimer(move_r_timer, A_MouseDelay)
      
      return
    }

    If !press_r {
      press_r := 1
      SetTimer(speed_r_timer, -300)
    } Else
      press_r := 2

    MouseMove(-x, 0,, 'R')

    if KeyWait('r', 'T.1')
      speed_move := 0
    Else {
      move_r := ++move__nth

      ;triple clicks
      If speed_move {
        x *= x_triple
        y *= y_triple
      }

      SetTimer(move_r_timer, A_MouseDelay)
    }
  }

  move_r_timer() {
    global

    If GetKeyState("r","P") && (layer_ext || GetKeyState("F24","P")) {
      if (move_r != move__nth)
        return

      ;double clicks
      if speed_move && x <= x_max {
        x *= x_double
        y *= y_double
      }

      If !GetKeyState("f","P") && !GetKeyState("s","P")
        MouseMove(-x, 0,, 'R')
      else if GetKeyState("f","P")
        MouseMove(-x, -y,, 'R')
      else if GetKeyState("s","P")
        MouseMove(-x, y,, 'R')

      return
    }

    if !GetKeyState("f","P") && !GetKeyState("s","P") && !GetKeyState("t","P") {
      resetSpeed()
      speed_move := 0
      move__nth := 0
    } Else if (move_r = 1) {
      move__nth--
      if move_f > 1
        move_f--
      if move_s > 1
        move_s--
      if move_t > 1
        move_t--
    } Else if (move_r = 2) {
      move__nth--
      if move_f > 2
        move_f--
      if move_s > 2
        move_s--
      if move_t > 2
        move_t--
    }

    move_r := 0
    SetTimer( , 0)
  }

  speed_r_timer() {
    global
    if press_r = 2
      speed_move := 1
    press_r := 0
  }

	press_q := 0
  scroll_q := 0
  speed_q := 0
  *q:: {
    global
    if scroll_q
      return
    If !press_q {
      press_q := 1
      SetTimer(speed_q_timer, -300)
    } Else
      press_q := 2
    SendInput '{Blind}{wheelUp}'
    if KeyWait('q', 'T.2') 
      speed_q := 0
    Else{
      scroll_q := 1
      scroll_speed := scroll_default_speed
      If speed_q {
        scroll_speed *= scroll_speed_multiplier
        speed_q := 0
      }
      setTimer(scroll_q_timer, scroll_speed)
    }   
  }
  scroll_q_timer() {
    global
    if GetKeyState("q","P") && (layer_ext || GetKeyState("F24","P"))
      SendInput '{Blind}{wheelUp}'
    Else {
      scroll_speed := scroll_default_speed
      scroll_q := 0
      setTimer( , 0)
    }
  }
  speed_q_timer() {
    global
    if press_q = 2
      speed_q := 1
    press_q := 0
  }

	press_a := 0
  scroll_a := 0
  speed_a := 0
  *a:: {
    global
    if scroll_a
      return
    If !press_a {
      press_a := 1
      SetTimer(speed_a_timer, -300)
    } Else
      press_a := 2
    SendInput '{Blind}{wheelDown}'
    if KeyWait('a', 'T.2') 
      speed_a := 0
    Else{
      scroll_a := 1
      scroll_speed := scroll_default_speed
      If speed_a {
        scroll_speed *= scroll_speed_multiplier
        speed_a := 0
      }
      setTimer(scroll_a_timer, scroll_speed)
    }   
  }
  scroll_a_timer() {
    global
    if GetKeyState("a","P") && (layer_ext || GetKeyState("F24","P"))
      SendInput '{Blind}{wheelDown}'
    Else {
      scroll_speed := scroll_default_speed
      scroll_a := 0
      setTimer( , 0)
    }
  }
  speed_a_timer() {
    global
    if press_a = 2
      speed_a := 1
    press_a := 0
  }
#HotIf