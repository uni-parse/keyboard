#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
Process, Priority,, High

x1 = 4
y1 := x1
x2 = 18
y2 := x2
x_multiple_fast = 3
y_multiple_fast = 3
x := x2
y := y2
toggle = 0
mouseDelaySpeed = 50
mousePreDelay = 200
holdOverride = 0
resetSpeed() {
  global
  If toggle {
    x := x1
    y := y1
  } Else {
    x := x2
    y := y2
  }
}

;standard layer
	CapsLock::LAlt
	SC056::LShift
	AppsKey::Alt


;config layers
#InputLevel 1
  RAlt::F24
  LAlt::F23
#InputLevel 0
#Persistent
SetCapsLockState, AlwaysOff

#If !extendLayer
  F24 & F23::
    extendLayer = 1
    KeyWait RAlt
    KeyWait RAlt, D
    extendLayer = 0
    return
  F24::
    if extend_presses {
      symbolLayer = 0
      extendLayer = 1
      KeyWait RAlt
      KeyWait RAlt, D
      extendLayer = 0
    } Else
      extend_presses = 1
    SetTimer, KeyF24timer, -300
    return
  KeyF24timer:
    extend_presses = 0
    return
#if

#If !symbolLayer
  F23 & F24::
    symbol2Layer = 1
    KeyWait LAlt
    symbol2Layer = 0
    return
  F23::
    if symbol_presses {
        extendLayer = 0
        symbolLayer = 1
        KeyWait LAlt
        KeyWait LAlt, D
        symbolLayer = 0
    } Else
      symbol_presses = 1
    SetTimer, KeyF23timer, -300
    Return
  KeyF23timer:
    symbol_presses = 0
    Return
#If

;extend layer
#If (GetKeyState("RAlt", "P") && !GetKeyState("LAlt", "P") && !symbolLayer) || extendLayer
	`::
	F24 & `::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"
		return
	1::
	F24 & 1::Browser_Search
	2::
	F24 & 2::Media_Stop
	3::
	F24 & 3::Media_Prev
	4::
	F24 & 4::Media_Next
	8::
	F24 & 8::^Numpad0
	9::
	F24 & 9::^NumpadAdd
	0::
	F24 & 0::^NumpadSub
	=::
	F24 & =::Volume_Mute
q::WheelUp
  q Up::Return
	q::
	F24 & q::
    While GetKeyState("q","P") && (extendLayer ? 1 : GetKeyState("RAlt","P")){
      SendInput {Blind}{WheelUp}
      sleep A_Index = 1 ? mousePreDelay : mouseDelaySpeed
    }
    return
	w::
	F24 & w::Esc
	p::
	F24 & p::
		toggle := !toggle
		resetSpeed()
		return
	b::
	F24 & b::PgUp
	l::
	F24 & l::Home
	u::
	F24 & u::Up
	y::
	F24 & y::End
	'::
	F24 & '::Volume_Down
	-::
	F24 & -::Volume_Up
a::WheelDown
  a Up::Return
	a::
	F24 & a::
    While GetKeyState("a","P") && (extendLayer ? 1 : GetKeyState("RAlt","P")){
      SendInput {Blind}{WheelDown}
      sleep A_Index = 1 ? mousePreDelay : mouseDelaySpeed
    }
    return
	g::
	F24 & g::PgDn
	m::
	F24 & m::RButton
	n::
	F24 & n::Left
	e::
	F24 & e::Down
	i::
	F24 & i::Right
	o::
	F24 & o::Enter
	`;::
	F24 & `;::Media_Play_Pause
	x::
	F24 & x::XButton1
	c::
	F24 & c::XButton2
	d::
	F24 & d::Bs
	v::
	F24 & v::Del
	z::
	F24 & z::PrintScreen
	/::
	F24 & /::Run calc
	k::
	F24 & k::MButton
	h::
	F24 & h::LButton
	,::
	F24 & ,::Tab
	.::
	F24 & .::AppsKey
	f::
  F24 & f::
    If !hold_f {
      if !GetKeyState("r","P") && !GetKeyState("t","P") && !GetKeyState("s","P") {
        If press_f
          press_f = 2
        Else {
          press_f = 1
          SetTimer, fast_f_timer, -300
        }
        MouseMove, 0, -y,, R
        KeyWait, f, T.2
        if ErrorLevel {
          ErrorLevel = 0
          hold_f := holdOverride + 1
          holdOverride++
          If fast_f {
            x *= x_multiple_fast
            y *= y_multiple_fast
            fast_f = 0
          }
          SetTimer, hold_f_timer, %A_MouseDelay%
        } Else
          fast_f = 0
      } else {
        hold_f := holdOverride + 1
        holdOverride++
        SetTimer, hold_f_timer, %A_MouseDelay%
      }
    }
    return
  hold_f_timer:
    If GetKeyState("f","P") && (extendLayer ? 1 : GetKeyState("RAlt","P")) {
      if (hold_f = holdOverride) {
        If !GetKeyState("r","P") && !GetKeyState("t","P")
          MouseMove, 0, -y,, R
        else if GetKeyState("r","P")
          MouseMove, -x, -y,, R
        else if GetKeyState("t","P")
          MouseMove, x, -y,, R
      } ;else do nothing
    }Else {
      if !GetKeyState("r","P") && !GetKeyState("t","P") && !GetKeyState("s","P"){
        resetSpeed()
        holdOverride = 0
      }Else {
        holdOverride--
        if (hold_f = 1) {
          if hold_r > 1
            hold_r--
          if hold_t > 1
            hold_t--
          if hold_s > 1
            hold_s--
        }Else if (hold_f = 2) {
          if hold_r > 2
            hold_r--
          if hold_t > 2
            hold_t--
          if hold_s > 2
            hold_s--
        }
      }
        hold_f = 0
      SetTimer,, Off
    }
    Return
  fast_f_timer:
    if(press_f = 2) {
      fast_f = 1
    }
    press_f = 0
    Return
	s::
  F24 & s::
    If !hold_s {
      if !GetKeyState("r","P") && !GetKeyState("t","P") && !GetKeyState("f","P") {
        If press_s
          press_s = 2
        Else {
          press_s = 1
          SetTimer, fast_s_timer, -300
        }
        MouseMove, 0, y,, R
        KeyWait, s, T.2
        if ErrorLevel {
          ErrorLevel = 0
          hold_s := holdOverride + 1
          holdOverride++
          If fast_s {
            x *= x_multiple_fast
            y *= y_multiple_fast
            fast_s = 0
          }
          SetTimer, hold_s_timer, %A_MouseDelay%
        } Else
          fast_s = 0
      } else {
        hold_s := holdOverride + 1
        holdOverride++
        SetTimer, hold_s_timer, %A_MouseDelay%
      }
    }
    return
  hold_s_timer:
    If GetKeyState("s","P") && (extendLayer ? 1 : GetKeyState("RAlt","P")) {
      if (hold_s = holdOverride) {
        If !GetKeyState("r","P") && !GetKeyState("t","P")
          MouseMove, 0, y,, R
        else if GetKeyState("r","P")
          MouseMove, -x, y,, R
        else if GetKeyState("t","P")
          MouseMove, x, y,, R
      } ;else do nothing
    }Else {
      if !GetKeyState("r","P") && !GetKeyState("t","P") && !GetKeyState("f","P"){
        resetSpeed()
        holdOverride = 0
      }Else {
        holdOverride--
        if (hold_s = 1) {
          if hold_r > 1
            hold_r--
          if hold_t > 1
            hold_t--
          if hold_f > 1
            hold_f--
        }Else if (hold_s = 2) {
          if hold_r > 2
            hold_r--
          if hold_t > 2
            hold_t--
          if hold_f > 2
            hold_f--
        }
      }
        hold_s = 0
      SetTimer,, Off
    }
    Return
  fast_s_timer:
    if(press_s = 2) {
      fast_s = 1
    }
    press_s = 0
    Return
	t::
  F24 & t::
    If !hold_t {
      if !GetKeyState("f","P") && !GetKeyState("s","P") && !GetKeyState("r","P") {
        If press_t
          press_t = 2
        Else {
          press_t = 1
          SetTimer, fast_t_timer, -300
        }
        MouseMove, x, 0,, R
        KeyWait, t, T.2
        if ErrorLevel {
          ErrorLevel = 0
          hold_t := holdOverride + 1
          holdOverride++
          If fast_t {
            x *= x_multiple_fast
            y *= y_multiple_fast
            fast_t = 0
          }
          SetTimer, hold_t_timer, %A_MouseDelay%
        } Else
          fast_t = 0
      } else {
        hold_t := holdOverride + 1
        holdOverride++
        SetTimer, hold_t_timer, %A_MouseDelay%
      }
    }
    return
  hold_t_timer:
    If GetKeyState("t","P") && (extendLayer ? 1 : GetKeyState("RAlt","P")) {
      if (hold_t = holdOverride) {
        If !GetKeyState("f","P") && !GetKeyState("s","P")
          MouseMove, x, 0,, R
        else if GetKeyState("f","P")
          MouseMove, x, -y,, R
        else if GetKeyState("s","P")
          MouseMove, x, y,, R
      } ;else do nothing
    }Else {
      if !GetKeyState("f","P") && !GetKeyState("s","P") && !GetKeyState("r","P"){
        resetSpeed()
        holdOverride = 0
      }Else {
        holdOverride--
        if (hold_t = 1) {
          if hold_f > 1
            hold_f--
          if hold_s > 1
            hold_s--
          if hold_r > 1
            hold_r--
        }Else if (hold_t = 2) {
          if hold_f > 2
            hold_f--
          if hold_s > 2
            hold_s--
          if hold_r > 2
            hold_r--
        }
      }
        hold_t = 0
      SetTimer,, Off
    }
    Return
  fast_t_timer:
    if(press_t = 2) {
      fast_t = 1
    }
    press_t = 0
    Return
	r::
  F24 & r::
    If !hold_r {
      if !GetKeyState("f","P") && !GetKeyState("s","P") && !GetKeyState("t","P") {
        If press_r
          press_r = 2
        Else {
          press_r = 1
          SetTimer, fast_r_timer, -300
        }
        MouseMove, -x, 0,, R
        KeyWait, r, T.2
        if ErrorLevel {
          ErrorLevel = 0
          hold_r := holdOverride + 1
          holdOverride++
          If fast_r {
            x *= x_multiple_fast
            y *= y_multiple_fast
            fast_r = 0
          }
          SetTimer, hold_r_timer, %A_MouseDelay%
        } Else
          fast_r = 0
      } else {
        hold_r := holdOverride + 1
        holdOverride++
        SetTimer, hold_r_timer, %A_MouseDelay%
      }
    }
    return
  hold_r_timer:
    If GetKeyState("r","P") && (extendLayer ? 1 : GetKeyState("RAlt","P")) {
      if (hold_r = holdOverride) {
        If !GetKeyState("f","P") && !GetKeyState("s","P")
          MouseMove, -x, 0,, R
        else if GetKeyState("f","P")
          MouseMove, -x, -y,, R
        else if GetKeyState("s","P")
          MouseMove, -x, y,, R
      } ;else do nothing
    }Else {
      if !GetKeyState("f","P") && !GetKeyState("s","P") && !GetKeyState("t","P"){
        resetSpeed()
        holdOverride = 0
      }Else {
        holdOverride--
        if (hold_r = 1) {
          if hold_f > 1
            hold_f--
          if hold_s > 1
            hold_s--
          if hold_t > 1
            hold_t--
        }Else if (hold_r = 2) {
          if hold_f > 2
            hold_f--
          if hold_s > 2
            hold_s--
          if hold_t > 2
            hold_t--
        }
      }
        hold_r = 0
      SetTimer,, Off
    }
    Return
  fast_r_timer:
    if(press_r = 2) {
      fast_r = 1
    }
    press_r = 0
    Return
#If

;symbol layer
#If GetKeyState("LAlt", "P") && !GetKeyState("RAlt", "P") && !symbol2Layer
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

;symbol2 layer
#If symbol2Layer
	0::SendRaw …
		return
	=::SendRaw ±
		return
	'::F11
	-::F12
	a::F1
	r::F2
	s::F3
	t::F4
	n::F7
	e::F8
	i::F9
	o::F10
	`;::SendRaw ≠
		return
	d::F5
	h::F6
	,::SendRaw ≤
		return
	.::SendRaw ≥
		return
#If