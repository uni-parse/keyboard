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
	z::x
	x::c
	c::d
	b::z
	n::/
	m::k
	,::h
	.::,
	/::.
	RWin::Return


;config layers
#InputLevel 1
  RAlt::F24
  CapsLock::F23
#InputLevel 0
#Persistent
SetCapsLockState, AlwaysOff

;symbol layer
#If !GetKeyState("RAlt", "P") && GetKeyState("CapsLock", "P")
	F23 & q::]
	F23 & w::#
	F23 & e::$
	F23 & r::{
	F23 & t::}
	F23 & u::^
	F23 & i::7
	F23 & o::8
	F23 & p::9
	F23 & a::[
	F23 & s::@
	F23 & d::SendInput {`%}
		return
	F23 & f::(
	F23 & g::)
	F23 & j::\
	F23 & k::4
	F23 & l::5
	F23 & `;::6
	F23 & '::0
	F23 & z::~
	F23 & x::`
	F23 & c::&
	F23 & v::|
	F23 & m::*
	F23 & ,::1
	F23 & .::2
	F23 & /::3
#If

;extend layer
#If GetKeyState("RAlt", "P") && !GetKeyState("CapsLock", "P")
	F24 & `::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"
		return
	F24 & q::Esc
	F24 & w::SendInput {Blind}{WheelDown}
		return
	F24 & r::SendInput {Blind}{WheelUp}
		return
	F24 & y::Media_Prev
	F24 & u::PgUp
	F24 & i::Home
	F24 & o::Up
	F24 & p::End
	F24 & [::Volume_Down
	F24 & ]::Volume_Up
	F24 & a::Bs
	F24 & g::Del
	F24 & h::Media_Next
	F24 & j::PgDn
	F24 & k::Left
	F24 & l::Down
	F24 & `;::Right
	F24 & '::Enter
	F24 & \::Media_Play_Pause
	F24 & z::XButton1
	F24 & x::XButton2
	F24 & c::
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
	F24 & v::Run explorer
	F24 & n::PrintScreen
	F24 & m::Tab
	F24 & ,::LButton
	F24 & .::MButton
	F24 & /::RButton
	F24 & s::
		If !GetKeyState("e","P") && !GetKeyState("d","P")
		  MouseMove, -%x%, 0, 0, R
		else if GetKeyState("e","P")
			MouseMove, -%x%, -%y%, 0, R
		else if GetKeyState("d","P")
			MouseMove, -%x%, %y%, 0, R
		return
	F24 & f::
		If !GetKeyState("e","P") && !GetKeyState("d","P")
		  MouseMove, %x%, 0, 0, R
		else if GetKeyState("e","P")
			MouseMove, %x%, -%y%, 0, R
		else if GetKeyState("d","P")
			MouseMove, %x%, %y%, 0, R
		return
	F24 & d::
		If !GetKeyState("s","P") && !GetKeyState("f","P")
		  MouseMove, 0, %y%, 0, R
		else if GetKeyState("s","P")
			MouseMove, -%x%, %y%, 0, R
		else if GetKeyState("f","P")
			MouseMove, %x%, %y%, 0, R
		return
	F24 & e::
		If !GetKeyState("s","P") && !GetKeyState("f","P")
		  MouseMove, 0, -%y%, 0, R
		else if GetKeyState("s","P")
			MouseMove, -%x%, -%y%, 0, R
		else if GetKeyState("f","P")
			MouseMove, %x% -%y%, 0, R
		return
#If

;symbol2 layer
#If GetKeyState("RAlt", "P") && GetKeyState("CapsLock", "P")
	e::↑
	r::π
	i::F7
	o::F8
	p::F9
	[::F11
	]::F12
	s::←
	d::Browser_Search
	f::→
	g::Ø
	k::F4
	l::F5
	`;::F6
	'::F10
	\::_
	z::✗
	x::©
	c::Ⓓ
	v::✓
	,::F1
	.::F2
	/::F3
#If