;
;
;   made by UniParse
;   github.com/TheUniParse
;   twitter.com/UniParse
;
;
#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
Process, Priority,, High

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
	For property in ComObjGet( "winmgmts:\\.\root\WMI" ).ExecQuery("SELECT * FROM WmiMonitorBrightnessMethods" )
		property.WmiSetBrightness( timeout, brightness)
}

GetCurrentBrightNess() {
	For property in ComObjGet( "winmgmts:\\.\root\WMI" ).ExecQuery( "SELECT * FROM WmiMonitorBrightness" )
		currentBrightness := property.CurrentBrightness	
	return currentBrightness
}

#Persistent
SetCapsLockState, AlwaysOff



;config layers ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
	F23::
    if !hold_F23 {
      hold_F23 = 1
      if layer_sym {
        layer_sym = 0
        ;MsgBox, !sym
      }
      If press_F23 {
        KeyWait, F23, T.2
        if ErrorLevel {
          ErrorLevel = 0
          layer_sym2 = 1
          ;MsgBox, sym2
          KeyWait, F23
          layer_sym2 = 0
          ;MsgBox !sym2
          hold_F23 = 0
        } else {
          if layer_ext {
            layer_ext = 0
            ;MsgBox, !ext
          }
          layer_sym = 1
          ;MsgBox, sym
          press_F23 = 0
          hold_F23 = 0
        }
      } Else {
        press_F23 = 1
        SetTimer, double_F23_timer, -400,2
        KeyWait F23
        hold_F23 = 0
      }
    }
    return
  double_F23_timer:
    press_F23 = 0
    Return

  F24::
    if !hold_F24 {
      hold_F24 = 1
      if layer_ext {
        layer_ext = 0
        ;MsgBox, !ext
      }
      If press_F24 {
        KeyWait, F24, T.2
        if ErrorLevel {
          ErrorLevel = 0
          layer_ext2 = 1
          ;MsgBox, ext2
          KeyWait, F24
          layer_ext2 = 0
          ;MsgBox !ext2
          hold_F24 = 0
        } else {
          if layer_sym {
            layer_sym = 0
            ;MsgBox, !sym
          }
          layer_ext = 1
          ;MsgBox, ext
          press_F24 = 0
          hold_F24 = 0
        }
      } Else {
        press_F24 = 1
        SetTimer, double_F24_timer, -400
        KeyWait F24
        hold_F24 = 0
      }
    }
    return
  double_F24_timer:
    press_F24 = 0
    Return


;extend layer 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟
#If !layer_ext2 && ((layer_ext && !GetKeyState("F23", "P")) || (!layer_ext && GetKeyState("F24", "P") && !GetKeyState("F23", "P")) || (layer_sym && GetKeyState("F24", "P")))
	w::Esc
	p::
		speed_switcher := !speed_switcher
		resetSpeed()
		return
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
	k::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"
		return
	h::LButton
	,::MButton
	.::RButton
#If


;extend2 layer 🌟🌟 🌟🌟 🌟🌟 🌟🌟 🌟🌟 🌟🌟
#If layer_ext2
	l::PrintScreen
	u::Volume_Up
	y::^Numpad0
	'::Media_Stop
	s::Browser_Search
	m::Run calc
	n::Media_Prev
	e::Volume_Down
	i::Media_Next
	o::Media_Play_Pause
	`;::Volume_Mute
	k::ChangeBrightness(CurrentBrightness < 100 - brightnessJump ? CurrentBrightness += brightnessJump : 100)
    return
	h::ChangeBrightness(CurrentBrightness > brightnessJump ? CurrentBrightness -= brightnessJump : 0)
    return
	,::^NumpadAdd
	.::^NumpadSub
#If


;symbol layer 💲  💲  💲  💲  💲  💲  💲  💲  💲
#If !layer_sym2 && ((layer_sym && !GetKeyState("F24", "P")) || (!layer_sym && GetKeyState("F23", "P") && !GetKeyState("F24", "P")) || (layer_ext && GetKeyState("F23", "P")))
	`::Send {U+22c6}
		return
	1::Send {U+25aa}
		return
	2::Send {U+25b8}
		return
	5::Send {U+bb}
		return
	7::Send {U+203a}
		return
	8::Send {U+2022}
		return
	=::Send {U+2043}
		return
	q::`
	w::[
	f::]
	u::SendRaw (
		return
	y::SendRaw )
		return
	'::SendRaw "
		return
	-::SendRaw _
		return
	a::1
	r::2
	s::3
	t::4
	]::Send {U+20ac}
		return
	m::\
	n::7
	e::8
	i::9
	o::0
	`;::SendRaw :
		return
	x::SendRaw {
		return
	c::SendRaw }
		return
	d::5
	v::=
	k::/
	h::6
	,::SendRaw <
		return
	.::SendRaw >
		return
#If


;symbol1 layer ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲
#If GetKeyState("F23", "P") && GetKeyState("F24", "P")
	`::send {U+22c6}
		return
	1::send {U+25aa}
		return
	2::send {U+25b8}
		return
	5::send {U+bb}
		return
	7::send {U+203a}
		return
	8::send {U+2022}
		return
	=::send {U+2043}
		return
	q::sendRaw ~
		return
	w::sendRaw {
		return
	f::sendRaw }
		return
	u::sendRaw (
		return
	y::sendRaw )
		return
	'::sendRaw "
		return
	-::sendRaw _
		return
	a::sendRaw !
		return
	r::sendRaw @
		return
	s::sendRaw #
		return
	t::sendRaw $
		return
	]::send {U+20ac}
		return
	m::sendRaw |
		return
	n::sendRaw &
		return
	e::sendRaw *
		return
	i::sendRaw (
		return
	o::sendRaw )
		return
	`;::sendRaw :
		return
	x::sendRaw {
		return
	c::sendRaw }
		return
	d::sendRaw `%
		return
	v::sendRaw +
		return
	k::sendRaw ?
		return
	h::sendRaw ^
		return
	,::sendRaw <
		return
	.::sendRaw >
		return
#If


;symbol2 layer 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲
#If layer_sym2
	1::Send {U+2152}
		return
	2::Send {U+bd}
		return
	3::Send {U+2153}
		return
	4::Send {U+bc}
		return
	5::Send {U+2155}
		return
	7::Send {U+be}
		return
	8::Send {U+2070}
		return
	q::Send {U+1f4a1}
		return
	w::Send {U+26a0}{U+fe0f}
		return
	f::Send {U+2191}
		return
	p::Send {U+3c0}
		return
	b::Send {U+2248}
		return
	[::Send {U+2209}
		return
	u::Send {U+2264}
		return
	y::Send {U+2265}
		return
	'::Send {U+2026}
		return
	-::Send {U+b1}
		return
	a::F1
	r::F2
	s::F3
	t::F4
	g::Send {U+2260}
		return
	]::Send {U+2208}
		return
	n::F7
	e::F8
	i::F9
	o::F10
	x::Send {U+2717}
		return
	c::Send {U+32bf}
		return
	d::F5
	v::F11
	k::F12
	h::F6
#If


;mouse in extend layer 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺
#If !layer_ext2 && ((layer_ext && !GetKeyState("F23", "P")) || (!layer_ext && GetKeyState("F24", "P") && !GetKeyState("F23", "P")) || (layer_sym && GetKeyState("F24", "P")))
	f::
    If !move_f {
      if !GetKeyState("r","P") && !GetKeyState("t","P") && !GetKeyState("s","P") {
        If press_f
          press_f = 2
        Else {
          press_f = 1
          SetTimer, speed_f_timer, -300
        }
        MouseMove, 0, -y,, R
        KeyWait, f, T.1
        if ErrorLevel {
          ErrorLevel = 0
          move_f := move__nth + 1
          move__nth++
          If speed_move {
            x *= x_multiplier
            y *= y_multiplier
          }
          SetTimer, move_f_timer, %A_MouseDelay%
        } Else
          speed_move = 0
      } else {
        move_f := move__nth + 1
        move__nth++
        SetTimer, move_f_timer, %A_MouseDelay%
      }
    }
    return
  move_f_timer:
    If GetKeyState("f","P") && (layer_ext ? 1 : GetKeyState("F24","P")) {
      if (move_f = move__nth) {
        if speed_move {
          x *= x_increment
          y *= y_increment
        }
        If !GetKeyState("r","P") && !GetKeyState("t","P")
          MouseMove, 0, -y,, R
        else if GetKeyState("r","P")
          MouseMove, -x, -y,, R
        else if GetKeyState("t","P")
          MouseMove, x, -y,, R
      } ;else do nothing
    } Else {
      if !GetKeyState("r","P") && !GetKeyState("t","P") && !GetKeyState("s","P") {
        resetSpeed()
        speed_move = 0
        move__nth = 0
      } Else {
        move__nth--
        if (move_f = 1) {
          if move_r > 1
            move_r--
          if move_t > 1
            move_t--
          if move_s > 1
            move_s--
        } Else if (move_f = 2) {
          if move_r > 2
            move_r--
          if move_t > 2
            move_t--
          if move_s > 2
            move_s--
        }
      }
      move_f = 0
      SetTimer,, Off
    }
    Return
  speed_f_timer:
    if press_f = 2
      speed_move = 1
    press_f = 0
    Return
	s::
    If !move_s {
      if !GetKeyState("r","P") && !GetKeyState("t","P") && !GetKeyState("f","P") {
        If press_s
          press_s = 2
        Else {
          press_s = 1
          SetTimer, speed_s_timer, -300
        }
        MouseMove, 0, y,, R
        KeyWait, s, T.1
        if ErrorLevel {
          ErrorLevel = 0
          move_s := move__nth + 1
          move__nth++
          If speed_move {
            x *= x_multiplier
            y *= y_multiplier
          }
          SetTimer, move_s_timer, %A_MouseDelay%
        } Else
          speed_move = 0
      } else {
        move_s := move__nth + 1
        move__nth++
        SetTimer, move_s_timer, %A_MouseDelay%
      }
    }
    return
  move_s_timer:
    If GetKeyState("s","P") && (layer_ext ? 1 : GetKeyState("F24","P")) {
      if (move_s = move__nth) {
        if speed_move {
          x *= x_increment
          y *= y_increment
        }
        If !GetKeyState("r","P") && !GetKeyState("t","P")
          MouseMove, 0, y,, R
        else if GetKeyState("r","P")
          MouseMove, -x, y,, R
        else if GetKeyState("t","P")
          MouseMove, x, y,, R
      } ;else do nothing
    } Else {
      if !GetKeyState("r","P") && !GetKeyState("t","P") && !GetKeyState("f","P") {
        resetSpeed()
        speed_move = 0
        move__nth = 0
      } Else {
        move__nth--
        if (move_s = 1) {
          if move_r > 1
            move_r--
          if move_t > 1
            move_t--
          if move_f > 1
            move_f--
        } Else if (move_s = 2) {
          if move_r > 2
            move_r--
          if move_t > 2
            move_t--
          if move_f > 2
            move_f--
        }
      }
      move_s = 0
      SetTimer,, Off
    }
    Return
  speed_s_timer:
    if press_s = 2
      speed_move = 1
    press_s = 0
    Return
	t::
    If !move_t {
      if !GetKeyState("f","P") && !GetKeyState("s","P") && !GetKeyState("r","P") {
        If press_t
          press_t = 2
        Else {
          press_t = 1
          SetTimer, speed_t_timer, -300
        }
        MouseMove, x, 0,, R
        KeyWait, t, T.1
        if ErrorLevel {
          ErrorLevel = 0
          move_t := move__nth + 1
          move__nth++
          If speed_move {
            x *= x_multiplier
            y *= y_multiplier
          }
          SetTimer, move_t_timer, %A_MouseDelay%
        } Else
          speed_move = 0
      } else {
        move_t := move__nth + 1
        move__nth++
        SetTimer, move_t_timer, %A_MouseDelay%
      }
    }
    return
  move_t_timer:
    If GetKeyState("t","P") && (layer_ext ? 1 : GetKeyState("F24","P")) {
      if (move_t = move__nth) {
        if speed_move {
          x *= x_increment
          y *= y_increment
        }
        If !GetKeyState("f","P") && !GetKeyState("s","P")
          MouseMove, x, 0,, R
        else if GetKeyState("f","P")
          MouseMove, x, -y,, R
        else if GetKeyState("s","P")
          MouseMove, x, y,, R
      } ;else do nothing
    } Else {
      if !GetKeyState("f","P") && !GetKeyState("s","P") && !GetKeyState("r","P") {
        resetSpeed()
        speed_move = 0
        move__nth = 0
      } Else {
        move__nth--
        if (move_t = 1) {
          if move_f > 1
            move_f--
          if move_s > 1
            move_s--
          if move_r > 1
            move_r--
        } Else if (move_t = 2) {
          if move_f > 2
            move_f--
          if move_s > 2
            move_s--
          if move_r > 2
            move_r--
        }
      }
      move_t = 0
      SetTimer,, Off
    }
    Return
  speed_t_timer:
    if press_t = 2
      speed_move = 1
    press_t = 0
    Return
	r::
    If !move_r {
      if !GetKeyState("f","P") && !GetKeyState("s","P") && !GetKeyState("t","P") {
        If press_r
          press_r = 2
        Else {
          press_r = 1
          SetTimer, speed_r_timer, -300
        }
        MouseMove, -x, 0,, R
        KeyWait, r, T.1
        if ErrorLevel {
          ErrorLevel = 0
          move_r := move__nth + 1
          move__nth++
          If speed_move {
            x *= x_multiplier
            y *= y_multiplier
          }
          SetTimer, move_r_timer, %A_MouseDelay%
        } Else
          speed_move = 0
      } else {
        move_r := move__nth + 1
        move__nth++
        SetTimer, move_r_timer, %A_MouseDelay%
      }
    }
    return
  move_r_timer:
    If GetKeyState("r","P") && (layer_ext ? 1 : GetKeyState("F24","P")) {
      if (move_r = move__nth) {
        if speed_move {
          x *= x_increment
          y *= y_increment
        }
        If !GetKeyState("f","P") && !GetKeyState("s","P")
          MouseMove, -x, 0,, R
        else if GetKeyState("f","P")
          MouseMove, -x, -y,, R
        else if GetKeyState("s","P")
          MouseMove, -x, y,, R
      } ;else do nothing
    } Else {
      if !GetKeyState("f","P") && !GetKeyState("s","P") && !GetKeyState("t","P") {
        resetSpeed()
        speed_move = 0
        move__nth = 0
      } Else {
        move__nth--
        if (move_r = 1) {
          if move_f > 1
            move_f--
          if move_s > 1
            move_s--
          if move_t > 1
            move_t--
        } Else if (move_r = 2) {
          if move_f > 2
            move_f--
          if move_s > 2
            move_s--
          if move_t > 2
            move_t--
        }
      }
      move_r = 0
      SetTimer,, Off
    }
    Return
  speed_r_timer:
    if press_r = 2
      speed_move = 1
    press_r = 0
    Return

	*q::
    if !scroll_q {
      If press_q
        press_q = 2
      Else {
        press_q = 1
        SetTimer, speed_q_timer, -300
      }
      SendInput {Blind}{wheelUp}
      KeyWait, q, T.2
      if ErrorLevel {
        ErrorLevel = 0
        scroll_q = 1
        scroll_speed := scroll_default_speed
        If speed_q {
          scroll_speed *= scroll_speed_multiplier
          speed_q = 0
        }
        setTimer, scroll_q_timer, %scroll_speed%
      } Else
          speed_q = 0
    }
    return
  scroll_q_timer:
    if GetKeyState("q","P")  && (layer_ext ? 1 : GetKeyState("F24","P"))
      SendInput {Blind}{wheelUp}
    Else {
      scroll_speed := scroll_default_speed
      scroll_q = 0
      setTimer,, Off
    }
    return
  speed_q_timer:
    if press_q = 2
      speed_q = 1
    press_q = 0
    Return

	*a::
    if !scroll_a {
      If press_a
        press_a = 2
      Else {
        press_a = 1
        SetTimer, speed_a_timer, -300
      }
      SendInput {Blind}{wheelDown}
      KeyWait, a, T.2
      if ErrorLevel {
        ErrorLevel = 0
        scroll_a = 1
        scroll_speed := scroll_default_speed
        If speed_a {
          scroll_speed *= scroll_speed_multiplier
          speed_a = 0
        }
        setTimer, scroll_a_timer, %scroll_speed%
      } Else
          speed_a = 0
    }
    return
  scroll_a_timer:
    if GetKeyState("a","P")  && (layer_ext ? 1 : GetKeyState("F24","P"))
      SendInput {Blind}{wheelDown}
    Else {
      scroll_speed := scroll_default_speed
      scroll_a = 0
      setTimer,, Off
    }
    return
  speed_a_timer:
    if press_a = 2
      speed_a = 1
    press_a = 0
    Return
#If