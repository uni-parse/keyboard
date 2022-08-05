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
    symbil2Layer = 0
    extendLayer = 1
    KeyWait RAlt
    KeyWait RAlt, D
    extendLayer = 0
    return
  F24::
    if extend_presses {
      symbil2Layer = 0
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

#If !symbil2Layer
  F23 & F24::
    extendLayer = 0
    symbil2Layer = 1
    KeyWait LAlt
    symbil2Layer = 0
    return
  F23::
    if symbol_presses {
        extendLayer = 0
        symbil2Layer = 1
        KeyWait LAlt
        KeyWait LAlt, D
        symbil2Layer = 0
    } Else
      symbol_presses = 1
    SetTimer, KeyF23timer, -300
    Return
  KeyF23timer:
    symbol_presses = 0
    Return
#If

;extend layer
#If GetKeyState("RAlt", "P") && !GetKeyState("LAlt", "P") && !symbil2Layer
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
		toggle := !toggle
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
	F24 & m::RButton
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
	F24 & k::MButton
	F24 & h::LButton
	F24 & ,::Tab
	F24 & .::AppsKey
	F24 & f::
    If !hold_F24_f {
      if !GetKeyState("r","P") && !GetKeyState("t","P") && !GetKeyState("s","P") {
        If press_F24_f
          press_F24_f = 2
        Else {
          press_F24_f = 1
          SetTimer, fast_F24_f_timer, -300
        }
        MouseMove, 0, -y,, R
        KeyWait, f, T.2
        if ErrorLevel {
          ErrorLevel = 0
          hold_F24_f := holdOverride + 1
          holdOverride++
          If fast_F24_f {
            x *= x_multiple_fast
            y *= y_multiple_fast
            fast_F24_f = 0
          }
          SetTimer, hold_F24_f_timer, %A_MouseDelay%
        } Else
          fast_F24_f = 0
      } else {
        hold_F24_f := holdOverride + 1
        holdOverride++
        SetTimer, hold_F24_f_timer, %A_MouseDelay%
      }
    }
    return
  hold_F24_f_timer:
    If GetKeyState("f","P") && GetKeyState("RAlt","P") {
      if (hold_F24_f = holdOverride) {
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
        if (hold_F24_f = 1) {
          if hold_F24_r > 1
            hold_F24_r--
          if hold_F24_t > 1
            hold_F24_t--
          if hold_F24_s > 1
            hold_F24_s--
        }Else if (hold_F24_f = 2) {
          if hold_F24_r > 2
            hold_F24_r--
          if hold_F24_t > 2
            hold_F24_t--
          if hold_F24_s > 2
            hold_F24_s--
        }
      }
        hold_F24_f = 0
      SetTimer,, Off
    }
    Return
  fast_F24_f_timer:
    if(press_F24_f = 2) {
      fast_F24_f = 1
    }
    press_F24_f = 0
    Return
	F24 & s::
    If !hold_F24_s {
      if !GetKeyState("r","P") && !GetKeyState("t","P") && !GetKeyState("f","P") {
        If press_F24_s
          press_F24_s = 2
        Else {
          press_F24_s = 1
          SetTimer, fast_F24_s_timer, -300
        }
        MouseMove, 0, y,, R
        KeyWait, s, T.2
        if ErrorLevel {
          ErrorLevel = 0
          hold_F24_s := holdOverride + 1
          holdOverride++
          If fast_F24_s {
            x *= x_multiple_fast
            y *= y_multiple_fast
            fast_F24_s = 0
          }
          SetTimer, hold_F24_s_timer, %A_MouseDelay%
        } Else
          fast_F24_s = 0
      } else {
        hold_F24_s := holdOverride + 1
        holdOverride++
        SetTimer, hold_F24_s_timer, %A_MouseDelay%
      }
    }
    return
  hold_F24_s_timer:
    If GetKeyState("s","P") && GetKeyState("RAlt","P") {
      if (hold_F24_s = holdOverride) {
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
        if (hold_F24_s = 1) {
          if hold_F24_r > 1
            hold_F24_r--
          if hold_F24_t > 1
            hold_F24_t--
          if hold_F24_f > 1
            hold_F24_f--
        }Else if (hold_F24_s = 2) {
          if hold_F24_r > 2
            hold_F24_r--
          if hold_F24_t > 2
            hold_F24_t--
          if hold_F24_f > 2
            hold_F24_f--
        }
      }
        hold_F24_s = 0
      SetTimer,, Off
    }
    Return
  fast_F24_s_timer:
    if(press_F24_s = 2) {
      fast_F24_s = 1
    }
    press_F24_s = 0
    Return
	F24 & t::
    If !hold_F24_t {
      if !GetKeyState("f","P") && !GetKeyState("s","P") && !GetKeyState("r","P") {
        If press_F24_t
          press_F24_t = 2
        Else {
          press_F24_t = 1
          SetTimer, fast_F24_t_timer, -300
        }
        MouseMove, x, 0,, R
        KeyWait, t, T.2
        if ErrorLevel {
          ErrorLevel = 0
          hold_F24_t := holdOverride + 1
          holdOverride++
          If fast_F24_t {
            x *= x_multiple_fast
            y *= y_multiple_fast
            fast_F24_t = 0
          }
          SetTimer, hold_F24_t_timer, %A_MouseDelay%
        } Else
          fast_F24_t = 0
      } else {
        hold_F24_t := holdOverride + 1
        holdOverride++
        SetTimer, hold_F24_t_timer, %A_MouseDelay%
      }
    }
    return
  hold_F24_t_timer:
    If GetKeyState("t","P") && GetKeyState("RAlt","P") {
      if (hold_F24_t = holdOverride) {
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
        if (hold_F24_t = 1) {
          if hold_F24_f > 1
            hold_F24_f--
          if hold_F24_s > 1
            hold_F24_s--
          if hold_F24_r > 1
            hold_F24_r--
        }Else if (hold_F24_t = 2) {
          if hold_F24_f > 2
            hold_F24_f--
          if hold_F24_s > 2
            hold_F24_s--
          if hold_F24_r > 2
            hold_F24_r--
        }
      }
        hold_F24_t = 0
      SetTimer,, Off
    }
    Return
  fast_F24_t_timer:
    if(press_F24_t = 2) {
      fast_F24_t = 1
    }
    press_F24_t = 0
    Return
	F24 & r::
    If !hold_F24_r {
      if !GetKeyState("f","P") && !GetKeyState("s","P") && !GetKeyState("t","P") {
        If press_F24_r
          press_F24_r = 2
        Else {
          press_F24_r = 1
          SetTimer, fast_F24_r_timer, -300
        }
        MouseMove, -x, 0,, R
        KeyWait, r, T.2
        if ErrorLevel {
          ErrorLevel = 0
          hold_F24_r := holdOverride + 1
          holdOverride++
          If fast_F24_r {
            x *= x_multiple_fast
            y *= y_multiple_fast
            fast_F24_r = 0
          }
          SetTimer, hold_F24_r_timer, %A_MouseDelay%
        } Else
          fast_F24_r = 0
      } else {
        hold_F24_r := holdOverride + 1
        holdOverride++
        SetTimer, hold_F24_r_timer, %A_MouseDelay%
      }
    }
    return
  hold_F24_r_timer:
    If GetKeyState("r","P") && GetKeyState("RAlt","P") {
      if (hold_F24_r = holdOverride) {
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
        if (hold_F24_r = 1) {
          if hold_F24_f > 1
            hold_F24_f--
          if hold_F24_s > 1
            hold_F24_s--
          if hold_F24_t > 1
            hold_F24_t--
        }Else if (hold_F24_r = 2) {
          if hold_F24_f > 2
            hold_F24_f--
          if hold_F24_s > 2
            hold_F24_s--
          if hold_F24_t > 2
            hold_F24_t--
        }
      }
        hold_F24_r = 0
      SetTimer,, Off
    }
    Return
  fast_F24_r_timer:
    if(press_F24_r = 2) {
      fast_F24_r = 1
    }
    press_F24_r = 0
    Return
#If
#If extendLayer
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
		toggle := !toggle
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
	m::RButton
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
	k::MButton
	h::LButton
	,::Tab
	.::AppsKey
	f::
    If !hold__f {
      if !GetKeyState("r","P") && !GetKeyState("t","P") && !GetKeyState("s","P") {
        If press__f
          press__f = 2
        Else {
          press__f = 1
          SetTimer, fast__f_timer, -300
        }
        MouseMove, 0, -y,, R
        KeyWait, f, T.2
        if ErrorLevel {
          ErrorLevel = 0
          hold__f := holdOverride + 1
          holdOverride++
          If fast__f {
            x *= x_multiple_fast
            y *= y_multiple_fast
            fast__f = 0
          }
          SetTimer, hold__f_timer, %A_MouseDelay%
        } Else
          fast__f = 0
      } else {
        hold__f := holdOverride + 1
        holdOverride++
        SetTimer, hold__f_timer, %A_MouseDelay%
      }
    }
    return
  hold__f_timer:
    If GetKeyState("f","P") {
      if (hold__f = holdOverride) {
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
        if (hold__f = 1) {
          if hold__r > 1
            hold__r--
          if hold__t > 1
            hold__t--
          if hold__s > 1
            hold__s--
        }Else if (hold__f = 2) {
          if hold__r > 2
            hold__r--
          if hold__t > 2
            hold__t--
          if hold__s > 2
            hold__s--
        }
      }
        hold__f = 0
      SetTimer,, Off
    }
    Return
  fast__f_timer:
    if(press__f = 2) {
      fast__f = 1
    }
    press__f = 0
    Return
	s::
    If !hold__s {
      if !GetKeyState("r","P") && !GetKeyState("t","P") && !GetKeyState("f","P") {
        If press__s
          press__s = 2
        Else {
          press__s = 1
          SetTimer, fast__s_timer, -300
        }
        MouseMove, 0, y,, R
        KeyWait, s, T.2
        if ErrorLevel {
          ErrorLevel = 0
          hold__s := holdOverride + 1
          holdOverride++
          If fast__s {
            x *= x_multiple_fast
            y *= y_multiple_fast
            fast__s = 0
          }
          SetTimer, hold__s_timer, %A_MouseDelay%
        } Else
          fast__s = 0
      } else {
        hold__s := holdOverride + 1
        holdOverride++
        SetTimer, hold__s_timer, %A_MouseDelay%
      }
    }
    return
  hold__s_timer:
    If GetKeyState("s","P") {
      if (hold__s = holdOverride) {
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
        if (hold__s = 1) {
          if hold__r > 1
            hold__r--
          if hold__t > 1
            hold__t--
          if hold__f > 1
            hold__f--
        }Else if (hold__s = 2) {
          if hold__r > 2
            hold__r--
          if hold__t > 2
            hold__t--
          if hold__f > 2
            hold__f--
        }
      }
        hold__s = 0
      SetTimer,, Off
    }
    Return
  fast__s_timer:
    if(press__s = 2) {
      fast__s = 1
    }
    press__s = 0
    Return
	t::
    If !hold__t {
      if !GetKeyState("f","P") && !GetKeyState("s","P") && !GetKeyState("r","P") {
        If press__t
          press__t = 2
        Else {
          press__t = 1
          SetTimer, fast__t_timer, -300
        }
        MouseMove, x, 0,, R
        KeyWait, t, T.2
        if ErrorLevel {
          ErrorLevel = 0
          hold__t := holdOverride + 1
          holdOverride++
          If fast__t {
            x *= x_multiple_fast
            y *= y_multiple_fast
            fast__t = 0
          }
          SetTimer, hold__t_timer, %A_MouseDelay%
        } Else
          fast__t = 0
      } else {
        hold__t := holdOverride + 1
        holdOverride++
        SetTimer, hold__t_timer, %A_MouseDelay%
      }
    }
    return
  hold__t_timer:
    If GetKeyState("t","P") {
      if (hold__t = holdOverride) {
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
        if (hold__t = 1) {
          if hold__f > 1
            hold__f--
          if hold__s > 1
            hold__s--
          if hold__r > 1
            hold__r--
        }Else if (hold__t = 2) {
          if hold__f > 2
            hold__f--
          if hold__s > 2
            hold__s--
          if hold__r > 2
            hold__r--
        }
      }
        hold__t = 0
      SetTimer,, Off
    }
    Return
  fast__t_timer:
    if(press__t = 2) {
      fast__t = 1
    }
    press__t = 0
    Return
	r::
    If !hold__r {
      if !GetKeyState("f","P") && !GetKeyState("s","P") && !GetKeyState("t","P") {
        If press__r
          press__r = 2
        Else {
          press__r = 1
          SetTimer, fast__r_timer, -300
        }
        MouseMove, -x, 0,, R
        KeyWait, r, T.2
        if ErrorLevel {
          ErrorLevel = 0
          hold__r := holdOverride + 1
          holdOverride++
          If fast__r {
            x *= x_multiple_fast
            y *= y_multiple_fast
            fast__r = 0
          }
          SetTimer, hold__r_timer, %A_MouseDelay%
        } Else
          fast__r = 0
      } else {
        hold__r := holdOverride + 1
        holdOverride++
        SetTimer, hold__r_timer, %A_MouseDelay%
      }
    }
    return
  hold__r_timer:
    If GetKeyState("r","P") {
      if (hold__r = holdOverride) {
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
        if (hold__r = 1) {
          if hold__f > 1
            hold__f--
          if hold__s > 1
            hold__s--
          if hold__t > 1
            hold__t--
        }Else if (hold__r = 2) {
          if hold__f > 2
            hold__f--
          if hold__s > 2
            hold__s--
          if hold__t > 2
            hold__t--
        }
      }
        hold__r = 0
      SetTimer,, Off
    }
    Return
  fast__r_timer:
    if(press__r = 2) {
      fast__r = 1
    }
    press__r = 0
    Return
#If

;symbol layer
#If GetKeyState("LAlt", "P") && !GetKeyState("RAlt", "P") && !symbil2Layer
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
#If symbil2Layer
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