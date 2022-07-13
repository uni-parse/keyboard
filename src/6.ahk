#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
Process, Priority,, H

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
	LAlt::LShift
	


#InputLevel 1
	RAlt::F24
#InputLevel 0
#Persistent

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
	F24 & q::SendInput {Esc}
		return
	F24 & w::SendInput {Browser_Back}
		return
	F24 & e::SendInput {Blind}{CtrlDown}{f}{CtrlUp}
		return
	F24 & r::SendInput {Browser_Forward}
		return
	F24 & y::SendInput {Blind}{PrintScreen}
		return
	F24 & u::SendInput {Blind}{PgUp}
		return
	F24 & i::SendInput {Blind}{Home}
		return
	F24 & o::SendInput {Blind}{Up}
		return
	F24 & p::SendInput {Blind}{End}
		return
	F24 & [::SendInput {Blind}{Del}
		return
	F24 & a::SendInput {Blind}{AltDown}
		return
	F24 & a Up::SendInput {AltUp}
		return
	F24 & s::SendInput {Blind}{LWinDown}
		return
	F24 & s Up::SendInput {LWinUp}
		return
	F24 & d::SendInput {Blind}{ShiftDown}
		return
	F24 & d Up::SendInput {ShiftUp}
		return
	F24 & f::SendInput {Blind}{CtrlDown}
		return
	F24 & f Up::SendInput {CtrlUp}
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
	F24 & z::SendInput {CtrlDown}{x}{CtrlUp}
		return
	F24 & x::SendInput {CtrlDown}{c}{CtrlUp}
		return
	F24 & v::SendInput {CtrlDown}{v}{CtrlUp}
		return
	F24 & b::SendInput {CtrlDown}{z}{CtrlUp}
		return
	F24 & n::SendInput {CtrlDown}{y}{CtrlUp}
		return
	F24 & ,::SendInput {Blind}{Bs}
		return
	F24 & .::SendInput {Blind}{Tab}
		return
	F24 & /::SendInput {Appskey}
		return
