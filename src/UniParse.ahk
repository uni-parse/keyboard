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
scroll_defualt_speed = 40
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



;config
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
#If

;extend layer
#If GetKeyState("F24", "P") && !GetKeyState("F23", "P")
	F24 & `::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"
		return
	F24 & 1::Browser_Search
	F24 & 2::Media_Stop
	F24 & 3::Media_Prev
	F24 & 4::Media_Next
	F24 & 8::^Numpad0
	F24 & 9::^NumpadAdd
	F24 & 0::^NumpadSub
	F24 & =::Volume_Mute
	F24 & w::Esc
	F24 & p::
		speed_switcher := !speed_switcher
		resetSpeed()
		return
	F24 & b::PgUp
	F24 & l::Home
	F24 & u::Up
	F24 & y::End
	F24 & '::Volume_Down
	F24 & -::Volume_Up
	F24 & g::PgDn
	F24 & m::AppsKey
	F24 & n::Left
	F24 & e::Down
	F24 & i::Right
	F24 & o::Enter
	F24 & `;::Media_Play_Pause
	F24 & x::XButton1
	F24 & c::XButton2
	F24 & d::Bs
	F24 & v::Del
	F24 & z::PrintScreen
	F24 & /::Run calc
	F24 & k::Tab
	F24 & h::LButton
	F24 & ,::MButton
	F24 & .::RButton
#If
#If layer_ext
	`::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"
		return
	1::Browser_Search
	2::Media_Stop
	3::Media_Prev
	4::Media_Next
	8::^Numpad0
	9::^NumpadAdd
	0::^NumpadSub
	=::Volume_Mute
	w::Esc
	p::
		speed_switcher := !speed_switcher
		resetSpeed()
		return
	b::PgUp
	l::Home
	u::Up
	y::End
	'::Volume_Down
	-::Volume_Up
	g::PgDn
	m::AppsKey
	n::Left
	e::Down
	i::Right
	o::Enter
	`;::Media_Play_Pause
	x::XButton1
	c::XButton2
	d::Bs
	v::Del
	z::PrintScreen
	/::Run calc
	k::Tab
	h::LButton
	,::MButton
	.::RButton
#If

;symbol layer
#If GetKeyState("F23", "P") && !GetKeyState("F24", "P") && !layer_sym2
	F23 & q::SendRaw @
		return
	F23 & w::SendRaw {
		return
	F23 & f::SendRaw }
		return
	F23 & p::SendRaw &
		return
	F23 & b::SendRaw !
		return
	F23 & j::SendRaw ^
		return
	F23 & l::SendRaw |
		return
	F23 & u::SendRaw )
		return
	F23 & y::SendRaw (
		return
	F23 & '::`
	F23 & -::SendRaw +
		return
	F23 & a::7
	F23 & r::5
	F23 & s::3
	F23 & t::1
	F23 & g::SendRaw `%
		return
	F23 & m::SendRaw *
		return
	F23 & n::2
	F23 & e::4
	F23 & i::6
	F23 & o::8
	F23 & `;::=
	F23 & x::[
	F23 & c::]
	F23 & d::9
	F23 & v::\
	F23 & z::SendRaw ~
		return
	F23 & /::SendRaw ?
		return
	F23 & k::/
	F23 & h::0
	F23 & ,::SendRaw #
		return
	F23 & .::SendRaw $
		return
#If
#If layer_sym
	q::SendRaw @
		return
	w::SendRaw {
		return
	f::SendRaw }
		return
	p::SendRaw &
		return
	b::SendRaw !
		return
	j::SendRaw ^
		return
	l::SendRaw |
		return
	u::SendRaw )
		return
	y::SendRaw (
		return
	'::`
	-::SendRaw +
		return
	a::7
	r::5
	s::3
	t::1
	g::SendRaw `%
		return
	m::SendRaw *
		return
	n::2
	e::4
	i::6
	o::8
	`;::=
	x::[
	c::]
	d::9
	v::\
	z::SendRaw ~
		return
	/::SendRaw ?
		return
	k::/
	h::0
	,::SendRaw #
		return
	.::SendRaw $
		return
#If

;symbol2 layer
#If layer_sym2
	F23 & 9::SendRaw «
		return
	F23 & 0::SendRaw ‹
		return
	F23 & q::SendRaw ⋆
		return
	F23 & w::SendRaw ▪
		return
	F23 & f::SendRaw ▸
		return
	F23 & p::SendRaw •
		return
	F23 & b::SendRaw ⁃
		return
	F23 & u::SendRaw »
		return
	F23 & y::SendRaw ›
		return
	F23 & '::SendRaw ≈
		return
	F23 & -::SendRaw ±
		return
	F23 & a::F7
	F23 & r::F5
	F23 & s::F3
	F23 & t::F1
	F23 & n::F2
	F23 & e::F4
	F23 & i::F6
	F23 & o::F8
	F23 & `;::SendRaw ≠
		return
	F23 & d::F9
	F23 & v::F11
	F23 & k::F12
	F23 & h::F10
	F23 & ,::SendRaw ≤
		return
	F23 & .::SendRaw ≥
		return
#If

;mouse in extend layer
#If layer_ext || (GetKeyState("F24", "P") && !GetKeyState("F23", "P") && !layer_sym)
	f::
  F24 & f::
    If !move_f {
      if !GetKeyState("r","P") && !GetKeyState("t","P") && !GetKeyState("s","P") {
        If press_f
          press_f = 2
        Else {
          press_f = 1
          SetTimer, speed_f_timer, -300
        }
        MouseMove, 0, -y,, R
        KeyWait, f, T.2
        if ErrorLevel {
          ErrorLevel = 0
          move_f := move__nth + 1
          move__nth++
          If speed_f {
            x *= x_multiplier
            y *= y_multiplier
            speed_f = 0
          }
          SetTimer, move_f_timer, %A_MouseDelay%
        } Else
          speed_f = 0
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
        x *= x_increment
        y *= y_increment
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
      speed_f = 1
    press_f = 0
    Return
	s::
  F24 & s::
    If !move_s {
      if !GetKeyState("r","P") && !GetKeyState("t","P") && !GetKeyState("f","P") {
        If press_s
          press_s = 2
        Else {
          press_s = 1
          SetTimer, speed_s_timer, -300
        }
        MouseMove, 0, y,, R
        KeyWait, s, T.2
        if ErrorLevel {
          ErrorLevel = 0
          move_s := move__nth + 1
          move__nth++
          If speed_s {
            x *= x_multiplier
            y *= y_multiplier
            speed_s = 0
          }
          SetTimer, move_s_timer, %A_MouseDelay%
        } Else
          speed_s = 0
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
        x *= x_increment
        y *= y_increment
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
      speed_s = 1
    press_s = 0
    Return
	t::
  F24 & t::
    If !move_t {
      if !GetKeyState("f","P") && !GetKeyState("s","P") && !GetKeyState("r","P") {
        If press_t
          press_t = 2
        Else {
          press_t = 1
          SetTimer, speed_t_timer, -300
        }
        MouseMove, x, 0,, R
        KeyWait, t, T.2
        if ErrorLevel {
          ErrorLevel = 0
          move_t := move__nth + 1
          move__nth++
          If speed_t {
            x *= x_multiplier
            y *= y_multiplier
            speed_t = 0
          }
          SetTimer, move_t_timer, %A_MouseDelay%
        } Else
          speed_t = 0
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
        x *= x_increment
        y *= y_increment
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
      speed_t = 1
    press_t = 0
    Return
	r::
  F24 & r::
    If !move_r {
      if !GetKeyState("f","P") && !GetKeyState("s","P") && !GetKeyState("t","P") {
        If press_r
          press_r = 2
        Else {
          press_r = 1
          SetTimer, speed_r_timer, -300
        }
        MouseMove, -x, 0,, R
        KeyWait, r, T.2
        if ErrorLevel {
          ErrorLevel = 0
          move_r := move__nth + 1
          move__nth++
          If speed_r {
            x *= x_multiplier
            y *= y_multiplier
            speed_r = 0
          }
          SetTimer, move_r_timer, %A_MouseDelay%
        } Else
          speed_r = 0
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
        x *= x_increment
        y *= y_increment
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
      speed_r = 1
    press_r = 0
    Return
	*q::
    F24 & q::
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
        scroll_speed := scroll_defualt_speed
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
      scroll_speed := scroll_defualt_speed
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
    F24 & a::
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
        scroll_speed := scroll_defualt_speed
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
      scroll_speed := scroll_defualt_speed
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