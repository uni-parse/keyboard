#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
Process, Priority,, High

x1 = 4
y1 = 4
x2 = 18
y2 = 18
x := x2
y := y2
toggle = 0
l3 = 0
l1 = 0
mouseDelaySpeed = 50
mousePreDelay = 200

;standard layer
	7::\
	8::7
	9::8
	0::9
	-::0
	=::-
	e::f
	r::p
	t::b
	y::]
	u::j
	i::l
	o::u
	p::y
	[::'
	]::=
	CapsLock::LWin
	s::r
	d::s
	f::t
	h::[
	j::m
	k::n
	l::e
	`;::i
	'::o
	\::`;
	SC056::LShift
	z::x
	x::c
	c::d
	b::z
	n::/
	m::k
	,::h
	.::,
	/::.
	LWin::LAlt
	RWin::RAlt
	

;config layers
#InputLevel 1
  RAlt::F24
  LAlt::F23
#InputLevel 0
#Persistent
SetCapsLockState, AlwaysOff
#If !l1
  F24 & F23::
		l3 = 0
    l1 = 1
    KeyWait RAlt
    KeyWait RAlt, D
    l1 = 0
    Return
#if
#If !l3
	F23 & F24::
		l1 = 0
    l3 = 1
    KeyWait LAlt
    l3 = 0
    Return
#If

;extend layer
#If GetKeyState("RAlt", "P") && !GetKeyState("LAlt", "P") && !l3
	F24 & `::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"
		return
	F24 & 1::Media_Stop
	F24 & 2::Media_Prev
	F24 & 3::Media_Next
	F24 & 4::Browser_Search
	F24 & 9::^NumpadAdd
	F24 & 0::^NumpadSub
	F24 & -::^Numpad0
	F24 & =::Volume_Mute
	F24 & q::
    While GetKeyState("q","P") && GetKeyState("RAlt","P"){
      SendInput {Blind}{WheelUp}
      sleep A_Index = 1 ? mousePreDelay : mouseDelaySpeed
    }
    return
	F24 & w::Esc
	F24 & r::
		toggle := !toggle
		If toggle
		{
			x := x1
			y := y1
		}
		Else
		{
			x := x2
			y := y2
		}
		return
	F24 & u::Volume_Up
	F24 & i::Home
	F24 & o::Up
	F24 & p::End
	F24 & [::PgDn
	F24 & ]::PgUp
	F24 & a::
    While GetKeyState("a","P") && GetKeyState("RAlt","P"){
      SendInput {Blind}{WheelDown}
      sleep A_Index = 1 ? mousePreDelay : mouseDelaySpeed
    }
    return
	F24 & g::AppsKey
	F24 & j::Volume_Down
	F24 & k::Left
	F24 & l::Down
	F24 & `;::Right
	F24 & '::Enter
	F24 & \::Media_Play_Pause
	F24 & z::XButton1
	F24 & x::XButton2
	F24 & c::Bs
	F24 & v::Del
	F24 & b::PrintScreen
	F24 & n::Run explorer
	F24 & m::Tab
	F24 & ,::LButton
	F24 & .::MButton
	F24 & /::RButton
	F24 & s::
		While GetKeyState("s","P") && GetKeyState("RAlt", "P"){
      If !GetKeyState("e","P") && !GetKeyState("d","P")
        MouseMove, -%x%, 0, 0, R
      else if GetKeyState("e","P")
        MouseMove, -%x%, -%y%, 0, R
      else if GetKeyState("d","P")
      {
        MouseMove, -%x%, %y%, 0, R
      }
      sleep A_Index = 1 && !GetKeyState("e","P") && !GetKeyState("d","P") ? mousePreDelay : mouseDelaySpeed
    }
    return
	F24 & f::
		While GetKeyState("f","P") && GetKeyState("RAlt", "P"){
      If !GetKeyState("e","P") && !GetKeyState("d","P")
        MouseMove, %x%, 0, 0, R
      else if GetKeyState("e","P")
        MouseMove, %x%, -%y%, 0, R
      else if GetKeyState("d","P")
      {
        MouseMove, %x%, %y%, 0, R
      }
      sleep A_Index = 1 && !GetKeyState("e","P") && !GetKeyState("d","P") ? mousePreDelay : mouseDelaySpeed
    }
    return
	F24 & d::
		While GetKeyState("d","P") && GetKeyState("RAlt", "P"){
      If !GetKeyState("s","P") && !GetKeyState("f","P")
        MouseMove, 0, %y%, 0, R
      else if GetKeyState("s","P")
        MouseMove, -%x%, %y%, 0, R
      else if GetKeyState("f","P")
      {
        MouseMove, %x%, %y%, 0, R
      }
      sleep A_Index = 1 && !GetKeyState("s","P") && !GetKeyState("f","P") ? mousePreDelay : mouseDelaySpeed
    }
    return
	F24 & e::
		While GetKeyState("e","P") && GetKeyState("RAlt", "P"){
      If !GetKeyState("s","P") && !GetKeyState("f","P")
        MouseMove, 0, -%y%, 0, R
      else if GetKeyState("s","P")
        MouseMove, -%x%, -%y%, 0, R
      else if GetKeyState("f","P")
      {
        MouseMove, %x%, -%y%, 0, R
      }
      sleep A_Index = 1 && !GetKeyState("s","P") && !GetKeyState("f","P") ? mousePreDelay : mouseDelaySpeed
    }
    return
#If
#If l1
	`::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"
		return
	1::Media_Stop
	2::Media_Prev
	3::Media_Next
	4::Browser_Search
	9::^NumpadAdd
	0::^NumpadSub
	-::^Numpad0
	=::Volume_Mute
	q::
    While l1 && GetKeyState("q","P"){
      SendInput {Blind}{WheelUp}
      sleep A_Index = 1 ? mousePreDelay : mouseDelaySpeed
    }
    return
	w::Esc
	r::
		toggle := !toggle
		If toggle
		{
			x := x1
			y := y1
		}
		Else
		{
			x := x2
			y := y2
		}
		return
	u::Volume_Up
	i::Home
	o::Up
	p::End
	[::PgDn
	]::PgUp
	a::
    While l1 && GetKeyState("a","P"){
      SendInput {Blind}{WheelDown}
      sleep A_Index = 1 ? mousePreDelay : mouseDelaySpeed
    }
    return
	g::AppsKey
	j::Volume_Down
	k::Left
	l::Down
	`;::Right
	'::Enter
	\::Media_Play_Pause
	z::XButton1
	x::XButton2
	c::Bs
	v::Del
	b::PrintScreen
	n::Run explorer
	m::Tab
	,::LButton
	.::MButton
	/::RButton
	s::
		While GetKeyState("s","P"){
      If !GetKeyState("e","P") && !GetKeyState("d","P")
        MouseMove, -%x%, 0, 0, R
      else if GetKeyState("e","P")
        MouseMove, -%x%, -%y%, 0, R
      else if GetKeyState("d","P")
      {
        MouseMove, -%x%, %y%, 0, R
      }
      sleep A_Index = 1 && !GetKeyState("e","P") && !GetKeyState("d","P") ? mousePreDelay : mouseDelaySpeed
    }
    return
	f::
		While GetKeyState("f","P"){
      If !GetKeyState("e","P") && !GetKeyState("d","P")
        MouseMove, %x%, 0, 0, R
      else if GetKeyState("e","P")
        MouseMove, %x%, -%y%, 0, R
      else if GetKeyState("d","P")
      {
        MouseMove, %x%, %y%, 0, R
      }
      sleep A_Index = 1 && !GetKeyState("e","P") && !GetKeyState("d","P") ? mousePreDelay : mouseDelaySpeed
    }
    return
	d::
		While GetKeyState("d","P"){
      If !GetKeyState("s","P") && !GetKeyState("f","P")
        MouseMove, 0, %y%, 0, R
      else if GetKeyState("s","P")
        MouseMove, -%x%, %y%, 0, R
      else if GetKeyState("f","P")
      {
        MouseMove, %x%, %y%, 0, R
      }
      sleep A_Index = 1 && !GetKeyState("s","P") && !GetKeyState("f","P") ? mousePreDelay : mouseDelaySpeed
    }
    return
	e::
		While GetKeyState("e","P"){
      If !GetKeyState("s","P") && !GetKeyState("f","P")
        MouseMove, 0, -%y%, 0, R
      else if GetKeyState("s","P")
        MouseMove, -%x%, -%y%, 0, R
      else if GetKeyState("f","P")
      {
        MouseMove, %x%, -%y%, 0, R
      }
      sleep A_Index = 1 && !GetKeyState("s","P") && !GetKeyState("f","P") ? mousePreDelay : mouseDelaySpeed
    }
    return
#If

;symbol layer
#If GetKeyState("LAlt", "P") && !GetKeyState("RAlt", "P") && !l3
	F23 & q::SendRaw @
		return
	F23 & w::SendRaw #
		return
	F23 & e::SendRaw $
		return
	F23 & r::SendRaw `%
		return
	F23 & t::SendRaw ^
		return
	F23 & u::SendRaw ?
		return
	F23 & i::7
	F23 & o::8
	F23 & p::9
	F23 & [::`
	F23 & ]::SendRaw ~
		return
	F23 & a::SendRaw !
		return
	F23 & s::SendRaw [
		return
	F23 & d::SendRaw {
		return
	F23 & f::SendRaw (
		return
	F23 & g::SendRaw &
		return
	F23 & j::SendRaw *
		return
	F23 & k::4
	F23 & l::5
	F23 & `;::6
	F23 & '::0
	F23 & \::\
	F23 & z::SendRaw ]
		return
	F23 & x::SendRaw }
		return
	F23 & c::SendRaw )
		return
	F23 & v::SendRaw |
		return
	F23 & m::/
	F23 & ,::1
	F23 & .::2
	F23 & /::3
#If

;symbol2 layer
#If l3 && GetKeyState("LAlt", "P")
	F23 & 9::SendRaw ≤
		return
	F23 & 0::SendRaw ≥
		return
	F23 & -::SendRaw …
		return
	F23 & =::SendRaw ±
		return
	F23 & q::SendRaw ◦
		return
	F23 & w::SendRaw ▹
		return
	F23 & e::SendRaw ▫
		return
	F23 & r::SendRaw →
		return
	F23 & y::SendRaw π
		return
	F23 & u::SendRaw Ø
		return
	F23 & i::F7
	F23 & o::F8
	F23 & p::F9
	F23 & [::F10
	F23 & ]::F11
	F23 & a::SendRaw •
		return
	F23 & s::SendRaw ▸
		return
	F23 & d::SendRaw ▪
		return
	F23 & f::SendRaw ⋆
		return
	F23 & h::SendRaw √
		return
	F23 & j::SendRaw ≈
		return
	F23 & k::F4
	F23 & l::F5
	F23 & `;::F6
	F23 & '::F12
	F23 & \::SendRaw ≠
		return
	F23 & z::SendRaw ✗
		return
	F23 & x::SendRaw ©
		return
	F23 & c::SendRaw Ⓓ
		return
	F23 & v::SendRaw ✓
		return
	F23 & ,::F1
	F23 & .::F2
	F23 & /::F3
#If
#If l3 && GetKeyState("RAlt", "P")
	F24 & 9::SendRaw ≤
		return
	F24 & 0::SendRaw ≥
		return
	F24 & -::SendRaw …
		return
	F24 & =::SendRaw ±
		return
	F24 & q::SendRaw ◦
		return
	F24 & w::SendRaw ▹
		return
	F24 & e::SendRaw ▫
		return
	F24 & r::SendRaw →
		return
	F24 & y::SendRaw π
		return
	F24 & u::SendRaw Ø
		return
	F24 & i::F7
	F24 & o::F8
	F24 & p::F9
	F24 & [::F10
	F24 & ]::F11
	F24 & a::SendRaw •
		return
	F24 & s::SendRaw ▸
		return
	F24 & d::SendRaw ▪
		return
	F24 & f::SendRaw ⋆
		return
	F24 & h::SendRaw √
		return
	F24 & j::SendRaw ≈
		return
	F24 & k::F4
	F24 & l::F5
	F24 & `;::F6
	F24 & '::F12
	F24 & \::SendRaw ≠
		return
	F24 & z::SendRaw ✗
		return
	F24 & x::SendRaw ©
		return
	F24 & c::SendRaw Ⓓ
		return
	F24 & v::SendRaw ✓
		return
	F24 & ,::F1
	F24 & .::F2
	F24 & /::F3
#If