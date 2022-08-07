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
symbil2Layer = 0
extendLayer = 0
mouseDelaySpeed = 50
mousePreDelay = 200

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
  F24::
    if extend_presses > 0
    {
      extend_presses += 1
      return
    }
    extend_presses := 1
    SetTimer, KeyF24, -300
    return
    KeyF24:
      if extend_presses = 2
      {
        symbil2Layer = 0
        extendLayer = 1
        KeyWait RAlt
        KeyWait RAlt, D
        extendLayer = 0
      }
    extend_presses := 0
    return
#if
#If !symbil2Layer
	F23 & F24::
		extendLayer = 0
    symbil2Layer = 1
    KeyWait LAlt
    symbil2Layer = 0
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
	F24 & 9::^NumpadAdd
	F24 & 0::^NumpadSub
	F24 & =::^Numpad0
	F24 & Bs::Volume_Mute
	q::WheelUp
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
	a::WheelDown
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
		if keyR_presses > 0
		{
			keyR_presses += 1
			return
		}
		keyR_presses := 1
		SetTimer, KeyR, -200
		return
		KeyR:
			If keyR_presses = 1
			{
				While GetKeyState("r","P") && GetKeyState("RAlt", "P"){
			If !GetKeyState("f","P") && !GetKeyState("s","P")
				MouseMove, -%x%, 0, 0, R
			else if GetKeyState("f","P")
				MouseMove, -%x%, -%y%, 0, R
			else if GetKeyState("s","P")
				MouseMove, -%x%, %y%, 0, R
			sleep A_Index = 1 && !GetKeyState("f","P") && !GetKeyState("s","P") ? mousePreDelay : mouseDelaySpeed
			}
			}
			else if keyR_presses = 2
			{
				While GetKeyState("r","P") && GetKeyState("RAlt", "P"){
					If !GetKeyState("f","P") && !GetKeyState("s","P")
						MouseMove, -50, 0, 0, R
					else if GetKeyState("f","P")
						MouseMove, -50, -50, 0, R
					else if GetKeyState("s","P")
						MouseMove, -50, 50, 0, R
					sleep A_Index = 1 && !GetKeyState("f","P") && !GetKeyState("s","P") ? mousePreDelay : mouseDelaySpeed
				}
			}
			keyR_presses := 0
			Return
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
#If extendLayer
	`::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"
		return
	1::Browser_Search
	2::Media_Stop
	3::Media_Prev
	4::Media_Next
	9::^NumpadAdd
	0::^NumpadSub
	=::^Numpad0
	Bs::Volume_Mute
	q::WheelUp
	q::
    While extendLayer && GetKeyState("q","P"){
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
	a::WheelDown
	a::
    While extendLayer && GetKeyState("a","P"){
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
#If symbil2Layer && GetKeyState("LAlt", "P")
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