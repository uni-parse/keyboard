#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
Process, Priority,, High

x1 = 5
y1 = 5
x2 = 20
y2 = 20
x3 = 40
y3 = 40
x := x2
y := y2

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
	CapsLock::Bs
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
	Lshift::LAlt
	SC056::LAlt
	z::x
	x::c
	c::d
	b::z
	n::/
	m::k
	,::h
	.::,
	/::.
	RShift::RAlt
	LAlt::LShift


#InputLevel 1
	RAlt::F24
#InputLevel 0
#Persistent
SetCapsLockState, AlwaysOff



	F24 & 1::SendInput {Blind}{F1}
		return
	F24 & 2::SendInput {Blind}{F2}
		return
	F24 & 3::SendInput {Blind}{F3}
		return
	F24 & 4::SendInput {Blind}{F4}
		return
	F24 & 5::SendInput {Blind}{F5}
		return
	F24 & 6::SendInput {Blind}{F6}
		return
	F24 & 7::
		SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"
		return
	F24 & 8::SendInput {Blind}{F7}
		return
	F24 & 9::SendInput {Blind}{F8}
		return
	F24 & 0::SendInput {Blind}{F9}
		return
	F24 & -::SendInput {Blind}{F10}
		return
	F24 & =::SendInput {Blind}{F11}
		return
	F24 & Bs::SendInput {Blind}{F12}
		return
	F24 & q::SendInput {Blind}{Esc}
		return
	F24 & w::SendInput {Blind}{WheelUp}
		return
	F24 & r::SendInput {Blind}{WheelDown}
		return
	F24 & y::SendInput {Media_Prev}
		return
	F24 & u::SendInput {Blind}{PgUp}
		return
	F24 & i::SendInput {Blind}{Home}
		return
	F24 & o::SendInput {Blind}{Up}
		return
	F24 & p::SendInput {Blind}{End}
		return
	F24 & [::SendInput {Volume_Up}
		return
	F24 & ]::SendInput {Volume_Down}
		return
	F24 & a::SendInput {Blind}{Bs}
		return
	F24 & g::SendInput {Blind}{Del}
		return
	F24 & h::SendInput {Media_Next}
		return
	F24 & j::SendInput {Blind}{PgDn}
		return
	F24 & k::SendInput {Blind}{Left}
		return
	F24 & l::SendInput {Blind}{Down}
		return
	F24 & `;::SendInput {Blind}{Right}
		return
	F24 & '::SendInput {Blind}{Enter}
		return
	F24 & \::SendInput {Media_Play_Pause}
		return
	F24 & z::SendInput {XButton1}
		return
	F24 & x::SendInput {XButton2}
		return
	F24 & c::
		x := x1
		y := y1
		return
	F24 & v::
		x := x2
		y := y2
		return
	F24 & b::
		x := x3
		y := y3
		return
	F24 & n::SendInput {Blind}{PrintScreen}
		return
	F24 & m::SendInput {Blind}{Tab}
		return
	F24 & ,::
		if !GetKeyState("LButton", "P") && !GetKeyState("RButton", "P") && !GetKeyState("MButton","P")
			SendInput {Blind}{Click L Down}
		return
	F24 & , Up::SendInput {Click L Up}
		return
	F24 & .::
		if !GetKeyState("LButton", "P") && !GetKeyState("RButton", "P") && !GetKeyState("MButton","P")
			SendInput {Blind}{Click M Down}
		return
	F24 & . Up::SendInput {Click M Up}
		return
	F24 & /::
		if !GetKeyState("LButton", "P") && !GetKeyState("RButton", "P") && !GetKeyState("MButton","P")
			SendInput {Blind}{Click R Down}
		return
	F24 & / Up::SendInput {Click R Up}
		return


#if GetKeyState("RAlt", "P")
{
	s::
		If !GetKeyState("e","P") && !GetKeyState("d","P")
		  SendInput {Click -%x% 0 0 Rel}
		else if GetKeyState("e","P")
			SendInput {Click -%x% -%y% 0 Rel}
		else if GetKeyState("d","P")
			SendInput {Click -%x% %y% 0 Rel}
		return
	f::
		If !GetKeyState("e","P") && !GetKeyState("d","P")
		  SendInput {Click %x% 0 0 Rel}
		else if GetKeyState("e","P")
			SendInput {Click %x% -%y% 0 Rel}
		else if GetKeyState("d","P")
			SendInput {Click %x% %y% 0 Rel}
		return
	d::
		If !GetKeyState("s","P") && !GetKeyState("f","P")
		  SendInput {Click 0 %y% 0 Rel}
		else if GetKeyState("s","P")
			SendInput {Click -%x% %y% 0 Rel}
		else if GetKeyState("f","P")
			SendInput {Click %x% %y% 0 Rel}
		return
	e::
		If !GetKeyState("s","P") && !GetKeyState("f","P")
		  SendInput {Click 0 -%y% 0 Rel}
		else if GetKeyState("s","P")
			SendInput {Click -%x% -%y% 0 Rel}
		else if GetKeyState("f","P")
			SendInput {Click %x% -%y% 0 Rel}
		return
}
