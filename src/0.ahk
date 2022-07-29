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
	CapsLock::LAlt
	SC056::LShift


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
	F24 & 8::^NumpadAdd
	F24 & 9::^NumpadSub
	F24 & 0::^Numpad0
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
	F24 & r::
		While GetKeyState("r","P") && GetKeyState("RAlt", "P"){
      If !GetKeyState("f","P") && !GetKeyState("s","P")
        MouseMove, -%x%, 0, 0, R
      else if GetKeyState("f","P")
        MouseMove, -%x%, -%y%, 0, R
      else if GetKeyState("s","P")
        MouseMove, -%x%, %y%, 0, R
      sleep A_Index = 1 && !GetKeyState("f","P") && !GetKeyState("s","P") ? mousePreDelay : mouseDelaySpeed
    }
    return
	F24 & t::
		While GetKeyState("t","P") && GetKeyState("RAlt", "P"){
      If !GetKeyState("f","P") && !GetKeyState("s","P")
        MouseMove, %x%, 0, 0, R
      else if GetKeyState("f","P")
        MouseMove, %x%, -%y%, 0, R
      else if GetKeyState("s","P")
        MouseMove, %x%, %y%, 0, R
      sleep A_Index = 1 && !GetKeyState("f","P") && !GetKeyState("s","P") ? mousePreDelay : mouseDelaySpeed
    }
    return
	F24 & s::
		While GetKeyState("s","P") && GetKeyState("RAlt", "P"){
      If !GetKeyState("r","P") && !GetKeyState("t","P")
        MouseMove, 0, %y%, 0, R
      else if GetKeyState("r","P")
        MouseMove, -%x%, %y%, 0, R
      else if GetKeyState("t","P")
        MouseMove, %x%, %y%, 0, R
      sleep A_Index = 1 && !GetKeyState("r","P") && !GetKeyState("t","P") ? mousePreDelay : mouseDelaySpeed
    }
    return
	F24 & f::
		While GetKeyState("f","P") && GetKeyState("RAlt", "P"){
      If !GetKeyState("r","P") && !GetKeyState("t","P")
        MouseMove, 0, -%y%, 0, R
      else if GetKeyState("r","P")
        MouseMove, -%x%, -%y%, 0, R
      else if GetKeyState("t","P")
        MouseMove, %x%, -%y%, 0, R
      sleep A_Index = 1 && !GetKeyState("r","P") && !GetKeyState("t","P") ? mousePreDelay : mouseDelaySpeed
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
	8::^NumpadAdd
	9::^NumpadSub
	0::^Numpad0
	=::Volume_Mute
	q::
    While l1 && GetKeyState("q","P"){
      SendInput {Blind}{WheelUp}
      sleep A_Index = 1 ? mousePreDelay : mouseDelaySpeed
    }
    return
	w::Esc
	p::
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
	b::PgUp
	l::Home
	u::Up
	y::End
	'::Volume_Down
	-::Volume_Up
	a::
    While l1 && GetKeyState("a","P"){
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
	r::
		While GetKeyState("r","P"){
      If !GetKeyState("f","P") && !GetKeyState("s","P")
        MouseMove, -%x%, 0, 0, R
      else if GetKeyState("f","P")
        MouseMove, -%x%, -%y%, 0, R
      else if GetKeyState("s","P")
        MouseMove, -%x%, %y%, 0, R
      sleep A_Index = 1 && !GetKeyState("f","P") && !GetKeyState("s","P") ? mousePreDelay : mouseDelaySpeed
    }
    return
	t::
		While GetKeyState("t","P"){
      If !GetKeyState("f","P") && !GetKeyState("s","P")
        MouseMove, %x%, 0, 0, R
      else if GetKeyState("f","P")
        MouseMove, %x%, -%y%, 0, R
      else if GetKeyState("s","P")
        MouseMove, %x%, %y%, 0, R
      sleep A_Index = 1 && !GetKeyState("f","P") && !GetKeyState("s","P") ? mousePreDelay : mouseDelaySpeed
    }
    return
	s::
		While GetKeyState("s","P"){
      If !GetKeyState("r","P") && !GetKeyState("t","P")
        MouseMove, 0, %y%, 0, R
      else if GetKeyState("r","P")
        MouseMove, -%x%, %y%, 0, R
      else if GetKeyState("t","P")
        MouseMove, %x%, %y%, 0, R
      sleep A_Index = 1 && !GetKeyState("r","P") && !GetKeyState("t","P") ? mousePreDelay : mouseDelaySpeed
    }
    return
	f::
		While GetKeyState("f","P"){
      If !GetKeyState("r","P") && !GetKeyState("t","P")
        MouseMove, 0, -%y%, 0, R
      else if GetKeyState("r","P")
        MouseMove, -%x%, -%y%, 0, R
      else if GetKeyState("t","P")
        MouseMove, %x%, -%y%, 0, R
      sleep A_Index = 1 && !GetKeyState("r","P") && !GetKeyState("t","P") ? mousePreDelay : mouseDelaySpeed
    }
    return
#If

;symbol layer
#If GetKeyState("LAlt", "P") && !GetKeyState("RAlt", "P") && !l3
	F23 & q::SendRaw $
		return
	F23 & w::SendRaw {
		return
	F23 & f::SendRaw }
		return
	F23 & p::SendRaw `%
		return
	F23 & b::SendRaw ^
		return
	F23 & j::SendRaw ?
		return
	F23 & l::7
	F23 & u::8
	F23 & y::9
	F23 & '::`
	F23 & -::=
	F23 & a::SendRaw #
		return
	F23 & r::SendRaw (
		return
	F23 & s::SendRaw )
		return
	F23 & t::SendRaw !
		return
	F23 & g::SendRaw @
		return
	F23 & m::SendRaw *
		return
	F23 & n::4
	F23 & e::5
	F23 & i::6
	F23 & o::0
	F23 & `;::\
	F23 & x::[
	F23 & c::]
	F23 & d::SendRaw &
		return
	F23 & v::SendRaw |
		return
	F23 & k::/
	F23 & h::1
	F23 & ,::2
	F23 & .::3
#If

;symbol2 layer
#If l3 && GetKeyState("LAlt", "P")
	F23 & 8::SendRaw ≤
		return
	F23 & 9::SendRaw ≥
		return
	F23 & 0::SendRaw …
		return
	F23 & =::SendRaw ±
		return
	F23 & q::SendRaw ◦
		return
	F23 & w::SendRaw ▹
		return
	F23 & f::SendRaw ▫
		return
	F23 & p::SendRaw →
		return
	F23 & [::SendRaw π
		return
	F23 & j::SendRaw Ø
		return
	F23 & l::F7
	F23 & u::F8
	F23 & y::F9
	F23 & '::F11
	F23 & -::F12
	F23 & a::SendRaw •
		return
	F23 & r::SendRaw ▸
		return
	F23 & s::SendRaw ▪
		return
	F23 & t::SendRaw ⋆
		return
	F23 & ]::SendRaw √
		return
	F23 & m::SendRaw ≈
		return
	F23 & n::F4
	F23 & e::F5
	F23 & i::F6
	F23 & o::F10
	F23 & `;::SendRaw ≠
		return
	F23 & x::SendRaw ✗
		return
	F23 & c::SendRaw ©
		return
	F23 & d::SendRaw Ⓓ
		return
	F23 & v::SendRaw ✓
		return
	F23 & h::F1
	F23 & ,::F2
	F23 & .::F3
#If
#If l3 && GetKeyState("RAlt", "P")
	F24 & 8::SendRaw ≤
		return
	F24 & 9::SendRaw ≥
		return
	F24 & 0::SendRaw …
		return
	F24 & =::SendRaw ±
		return
	F24 & q::SendRaw ◦
		return
	F24 & w::SendRaw ▹
		return
	F24 & f::SendRaw ▫
		return
	F24 & p::SendRaw →
		return
	F24 & [::SendRaw π
		return
	F24 & j::SendRaw Ø
		return
	F24 & l::F7
	F24 & u::F8
	F24 & y::F9
	F24 & '::F11
	F24 & -::F12
	F24 & a::SendRaw •
		return
	F24 & r::SendRaw ▸
		return
	F24 & s::SendRaw ▪
		return
	F24 & t::SendRaw ⋆
		return
	F24 & ]::SendRaw √
		return
	F24 & m::SendRaw ≈
		return
	F24 & n::F4
	F24 & e::F5
	F24 & i::F6
	F24 & o::F10
	F24 & `;::SendRaw ≠
		return
	F24 & x::SendRaw ✗
		return
	F24 & c::SendRaw ©
		return
	F24 & d::SendRaw Ⓓ
		return
	F24 & v::SendRaw ✓
		return
	F24 & h::F1
	F24 & ,::F2
	F24 & .::F3
#If
