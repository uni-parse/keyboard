#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
Process, Priority,, High

x_slow = 4
y_slow := x_slow
x_default = 18
y_default := x_default
x_multiplayer = 3
y_multiplayer := x_multiplayer
x := x_default
y := y_default
speed_switcher = 0
mouseDelaySpeed = 50
mousePreDelay = 200
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

;standard layer
	CapsLock::LAlt
	SC056::LShift
	AppsKey::Alt


;config
#InputLevel 1
  RAlt::F24
  LAlt::F23
#InputLevel 0
#Persistent
SetCapsLockState, AlwaysOff

#If !layer_ext
  F24 & F23::
    layer_sym = 0
    layer_ext = 1
    KeyWait RAlt
    KeyWait RAlt, D
    layer_ext = 0
    return
  F24::
    if press_F24 {
      layer_sym = 0
      layer_ext = 1
      KeyWait RAlt
      KeyWait RAlt, D
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
    KeyWait LAlt
    layer_sym2 = 0
    return
  F23::
    if press_F23 {
        layer_ext = 0
        layer_sym = 1
        KeyWait LAlt
        KeyWait LAlt, D
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
#If GetKeyState("RAlt", "P") && !GetKeyState("LAlt", "P")
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
	F24 & q::
    While GetKeyState("q","P") && GetKeyState("RAlt","P"){
      SendInput {Blind}{WheelUp}
      sleep A_Index = 1 ? mousePreDelay : mouseDelaySpeed
    }
    return
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
	F24 & a::
    While GetKeyState("a","P") && GetKeyState("RAlt","P"){
      SendInput {Blind}{WheelDown}
      sleep A_Index = 1 ? mousePreDelay : mouseDelaySpeed
    }
    return
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
	q::WheelUp
  q Up::Return
  q::
    While GetKeyState("q","P"){
      SendInput {Blind}{WheelUp}
      sleep A_Index = 1 ? mousePreDelay : mouseDelaySpeed
    }
    return
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
	a::WheelDown
  a Up::Return
  a::
    While GetKeyState("a","P"){
      SendInput {Blind}{WheelDown}
      sleep A_Index = 1 ? mousePreDelay : mouseDelaySpeed
    }
    return
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
#If GetKeyState("LAlt", "P") && !GetKeyState("RAlt", "P") && !layer_sym2
	F23 & w::SendRaw {
		return
	F23 & f::SendRaw }
		return
	F23 & u::SendRaw )
		return
	F23 & y::SendRaw (
		return
	F23 & '::`
	F23 & -::=
	F23 & a::1
	F23 & r::2
	F23 & s::3
	F23 & t::4
	F23 & m::SendRaw *
		return
	F23 & n::7
	F23 & e::8
	F23 & i::9
	F23 & o::0
	F23 & `;::SendRaw :
		return
	F23 & x::[
	F23 & c::]
	F23 & d::5
	F23 & v::\
	F23 & k::/
	F23 & h::6
	F23 & ,::SendRaw <
		return
	F23 & .::SendRaw >
		return
#If
#If layer_sym
	w::SendRaw {
		return
	f::SendRaw }
		return
	u::SendRaw )
		return
	y::SendRaw (
		return
	'::`
	-::=
	a::1
	r::2
	s::3
	t::4
	m::SendRaw *
		return
	n::7
	e::8
	i::9
	o::0
	`;::SendRaw :
		return
	x::[
	c::]
	d::5
	v::\
	k::/
	h::6
	,::SendRaw <
		return
	.::SendRaw >
		return
#If

;symbol2 layer
#If layer_sym2
	F23 & 0::SendRaw …
		return
	F23 & =::SendRaw ±
		return
	F23 & '::F11
	F23 & -::F12
	F23 & a::F1
	F23 & r::F2
	F23 & s::F3
	F23 & t::F4
	F23 & n::F7
	F23 & e::F8
	F23 & i::F9
	F23 & o::F10
	F23 & `;::SendRaw ≠
		return
	F23 & d::F5
	F23 & h::F6
	F23 & ,::SendRaw ≤
		return
	F23 & .::SendRaw ≥
		return
#If

;mouse in extend layer
#If layer_ext || (GetKeyState("RAlt", "P") && !GetKeyState("LAlt", "P") && !layer_sym)
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
            x *= x_multiplayer
            y *= y_multiplayer
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
    If GetKeyState("f","P") && (layer_ext ? 1 : GetKeyState("RAlt","P")) {
      if (move_f = move__nth) {
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
            x *= x_multiplayer
            y *= y_multiplayer
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
    If GetKeyState("s","P") && (layer_ext ? 1 : GetKeyState("RAlt","P")) {
      if (move_s = move__nth) {
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
            x *= x_multiplayer
            y *= y_multiplayer
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
    If GetKeyState("t","P") && (layer_ext ? 1 : GetKeyState("RAlt","P")) {
      if (move_t = move__nth) {
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
            x *= x_multiplayer
            y *= y_multiplayer
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
    If GetKeyState("r","P") && (layer_ext ? 1 : GetKeyState("RAlt","P")) {
      if (move_r = move__nth) {
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
#If