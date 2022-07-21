#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
Process, Priority,, High

x1 = 4
y1 = 4
x2 = 18
y2 = 18
x3 = 45
y3 = 45
x := x2
y := y2
layer1 = 0
layer2 = 0



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
	Lshift::
		SendInput {Blind}{LAlt Down}
		KeyWait Lshift
		SendInput {LAlt Up}
		return
	SC056::
		SendInput {Blind}{LAlt Down}
		KeyWait SC056
		SendInput {LAlt Up}
		return
	z::x
	x::c
	c::d
	b::z
	n::/
	m::k
	,::h
	.::,
	/::.
	RShift::
		SendInput {Blind}{RAlt Down}
		KeyWait RShift
		SendInput {RAlt Up}
		return
	LCtrl::
		SendInput {Blind}{LCtrl Down}
		KeyWait LCtrl
		SendInput {LCtrl Up}
		return
	LWin::
		SendInput {Blind}{LWin Down}
		KeyWait LWin
		SendInput {LWin Up}
		return
	LAlt::
		SendInput {Blind}{LShift Down}
		KeyWait LAlt
		SendInput {LShift Up}
		return
	RWin::
		SendInput {Blind}{RWin Down}
		KeyWait RWin
		SendInput {RWin Up}
		return
	RCtrl::
		SendInput {Blind}{RCtrl Down}
		KeyWait RCtrl
		SendInput {RCtrl Up}
		return


;config layers
  RAlt::
	  layer1 = 1
		KeyWait RAlt
		layer1 = 0
		Return
  CapsLock::
	  layer2 = 1
		KeyWait CapsLock
		layer2 = 0
		Return
SetCapsLockState, AlwaysOff



;symbol layer
#If layer2 && !layer1
	q::SendInput {Blind}{]}
		return
	w::SendInput {#}
		return
	e::SendInput {$}
		return
	r::SendInput {{}
		return
	t::SendInput {}}
		return
	u::SendInput {^}
		return
	i::SendInput {Blind}{7}
		return
	o::SendInput {Blind}{8}
		return
	p::SendInput {Blind}{9}
		return
	a::SendInput {Blind}{[}
		return
	s::SendInput {@}
		return
	d::SendInput {`%}
		return
	f::SendInput {(}
		return
	g::SendInput {)}
		return
	j::SendInput {*}
		return
	k::SendInput {Blind}{4}
		return
	l::SendInput {Blind}{5}
		return
	`;::SendInput {Blind}{6}
		return
	'::SendInput {Blind}{0}
		return
	Lshift::SendInput {LAlt}
		return
	SC056::SendInput {LAlt}
		return
	z::SendInput {~}
		return
	x::SendInput {Blind}{``}
		return
	c::SendInput {&}
		return
	v::SendInput {|}
		return
	n::SendInput {Blind}{\}
		return
	m::SendInput {Blind}{/}
		return
	,::SendInput {Blind}{1}
		return
	.::SendInput {Blind}{2}
		return
	/::SendInput {Blind}{3}
		return
	RShift::SendInput {RAlt}
		return
	LAlt::SendInput {LShift}
		return
#If



;extend layer
#If layer1 && !layer2
	`::
		SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"
		return
	1::SendInput {Blind}{F1}
		return
	2::SendInput {Blind}{F2}
		return
	3::SendInput {Blind}{F3}
		return
	4::SendInput {Blind}{F4}
		return
	5::SendInput {Blind}{F5}
		return
	6::SendInput {Blind}{F6}
		return
	8::SendInput {Blind}{F7}
		return
	9::SendInput {Blind}{F8}
		return
	0::SendInput {Blind}{F9}
		return
	-::SendInput {Blind}{F10}
		return
	=::SendInput {Blind}{F11}
		return
	Bs::SendInput {Blind}{F12}
		return
	q::SendInput {Blind}{Esc}
		return
	w::SendInput {Blind}{WheelDown}
		return
	r::SendInput {Blind}{WheelUp}
		return
	y::SendInput {Media_Prev}
		return
	u::SendInput {Blind}{PgUp}
		return
	i::SendInput {Blind}{Home}
		return
	o::SendInput {Blind}{Up}
		return
	p::SendInput {Blind}{End}
		return
	[::SendInput {Volume_Down}
		return
	]::SendInput {Volume_Up}
		return
	a::SendInput {Blind}{Bs}
		return
	g::SendInput {Blind}{Del}
		return
	h::SendInput {Media_Next}
		return
	j::SendInput {Blind}{PgDn}
		return
	k::SendInput {Blind}{Left}
		return
	l::SendInput {Blind}{Down}
		return
	`;::SendInput {Blind}{Right}
		return
	'::SendInput {Blind}{Enter}
		return
	\::SendInput {Media_Play_Pause}
		return
	Lshift::SendInput {LAlt}
		return
	SC056::SendInput {LAlt}
		return
	z::SendInput {XButton1}
		return
	x::SendInput {XButton2}
		return
	c::
		x := x1
		y := y1
		return
	v::
		x := x2
		y := y2
		return
	b::
		x := x3
		y := y3
		return
	n::SendInput {Blind}{PrintScreen}
		return
	m::SendInput {Blind}{Tab}
		return
	,::
		if !GetKeyState("LButton", "P") && !GetKeyState("RButton", "P") && !GetKeyState("MButton","P")
			SendInput {Blind}{Click L Down}
			KeyWait `,
			SendInput {Click L Up}
		return
	.::
		if !GetKeyState("LButton", "P") && !GetKeyState("RButton", "P") && !GetKeyState("MButton","P")
			SendInput {Blind}{Click M Down}
			KeyWait .
			SendInput {Click M Up}
		return
	/::
		if !GetKeyState("LButton", "P") && !GetKeyState("RButton", "P") && !GetKeyState("MButton","P")
			SendInput {Blind}{Click R Down}
			KeyWait /
			SendInput {Click R Up}
		return
	RShift::SendInput {RAlt}
		return
	LAlt::SendInput {LShift}
		return

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
#If



;symbol2 layer
#If layer1 && layer2
	e::SendInput {↑}
		return
	r::SendInput {π}
		return
	i::SendInput {Blind}{F7}
		return
	o::SendInput {Blind}{F8}
		return
	p::SendInput {Blind}{F9}
		return
	[::SendInput {Blind}{F11}
		return
	]::SendInput {Blind}{F12}
		return
	s::SendInput {←}
		return
	d::SendInput {Browser_Search}
		return
	f::SendInput {→}
		return
	g::SendInput {Ø}
		return
	k::SendInput {Blind}{F4}
		return
	l::SendInput {Blind}{F5}
		return
	`;::SendInput {Blind}{F6}
		return
	'::SendInput {Blind}{F10}
		return
	\::SendInput {_}
		return
	z::SendInput {✗}
		return
	x::SendInput {©}
		return
	c::SendInput {Ⓓ}
		return
	v::SendInput {✓}
		return
	,::SendInput {Blind}{F1}
		return
	.::SendInput {Blind}{F2}
		return
	/::SendInput {Blind}{F3}
		return
#If