;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 0
	0::'
	!0::SendInput, {▬}
		return
	+0::SendInput, ▬
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 1
	1::!
	<!1::SendInput, {Media_Prev}
		return
	>!1::SendInput, {?}
		return
	+1::SendInput, {?}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 2
	2::[
	!2::SendInput, {Media_Next}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 3
	3::]
	!3::SendInput, {Media_Play_Pause}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 4
	4::"
	!4::SendInput, {Volume_Mute}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 5
	5::{
	!5::SendInput, {→}
		return
	+5::SendInput, →
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 6
	6::}
	!6::SendInput, {←}
		return
	+6::SendInput, ←
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 7
	7::CapsLock
	!7::SendInput, {★}
		return
	+7::SendInput, ★
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 8
	8::*
	<!8::SendInput, {*}
		return
	>!8::SendInput, {▶}
		return
	+8::SendInput, ▶
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 9
	9::/
	<!9::SendInput, {/}
		return
	>!9::SendInput, {►}
		return
	+9::SendInput, ►
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ `
	`::`

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ -
	-::)
	!-::SendInput, {•}
		return
	+-::SendInput, •
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ =
	=::(
	<!=::SendInput, {›}
		return
	>!=::SendInput, {PgUp}
		return
	+=::SendInput, ›
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Bs
	Bs::\
	!Bs::SendInput, {»}
		return
	+Bs::SendInput, »
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ q
	!q::SendInput, {@}
		return
	<!>!q::SendInput, {F12}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ w
	!w::SendInput, {#}
		return
	<!>!w::SendInput, {π}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ e
	e::f
	!e::SendInput, {$}
		return
	<!>!e::SendInput, {⁰}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ r
	r::p
	!r::SendInput, {<}
		return
	<!>!r::SendInput, {≤}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ t
	t::b
	!t::SendInput, {>}
		return
	<!>!t::SendInput, {≥}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ y
	y::Bs

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ u
	u::j
	!u::SendInput, {+}
		return
	<!>!u::SendInput, {±}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ i
	i::l
	<!i::SendInput, {7}
		return
	>!i::SendInput, {Home}
		return
	<^<!i::SendInput, ^7
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ o
	o::u
	<!o::SendInput, {8}
		return
	>!o::SendInput, {Up}
		return
	<^<!o::SendInput, ^8
		return
	<^>!o::SendInput, ^{Up}
		return
	<!>!o::SendInput, !{Up}
		return
	+>!o::SendInput, +{Up}
		return
	<#>!o::SendInput, #{Up}
		return
	<^<!>!o::SendInput, ^!{Up}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ p
	p::y
	<!p::SendInput, {9}
		return
	>!p::SendInput, {End}
		return
	<^<!p::SendInput, ^9
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ [
	[:::
	![::SendInput, {`;}
		return
	<!>![::SendInput, {≈}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ]
	]::=
	<!>!]::SendInput, {≠}
		return
	<!]::SendInput, {=}
		return
	>!]::SendInput, {PgDn}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Enter
	Enter::Bs

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ CapsLock
	CapsLock::LShift

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ a
	!a::SendInput, {Bs}
		return
	<!>!a::SendInput, {Browser_Back}
		return
	>#a::SendInput, Bs
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ s
	s::r
	!s::SendInput, {Esc}
		return
	<!>!s::SendInput, {Browser_Refresh}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ d
	d::s
	!d::SendInput, {Volume_Down}
		return
	<!>!d::SendInput, {Browser_Search}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ f
	f::t
	!f::SendInput, {Volume_Up}
		return
	<!>!f::SendInput, {Browser_Forward}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ g
	!g::SendInput, {Del}
		return
	+!g::SendInput, +{Del}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ h
	h::Enter

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ j
	j::m
	!j::SendInput, {-}
		return
	<!>!j::SendInput, {∞}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ k
	k::n
	<!k::SendInput, {1}
		return
	>!k::SendInput, {Left}
		return
	<^<!k::SendInput, ^1
		return
	<^>!k::SendInput, ^{Left}
		return
	<!>!k::SendInput, !{Left}
		return
	+>!k::SendInput, +{Left}
		return
	<#>!k::SendInput, #{Left}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ l
	l::e
	<!l::SendInput, {2}
		return
	>!l::SendInput, {Down}
		return
	<^<!l::SendInput, ^2
		return
	<^>!l::SendInput, ^{Down}
		return
	<!>!l::SendInput, !{Down}
		return
	+>!l::SendInput, +{Down}
		return
	<#>!l::SendInput, #{Down}
		return
	<^<!>!l::SendInput, ^!{Down}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ `;
	`;::i
	<!`;::SendInput, {3}
		return
	>!`;::SendInput, {Right}
		return
	<^<!`;::SendInput, ^3
		return
	<^>!`;::SendInput, ^{Right}
		return
	<!>!`;::SendInput, !{Right}
		return
	+>!`;::SendInput, +{Right}
		return
	<#>!`;::SendInput, #{Right}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ '
	'::o
	<!>!'::SendInput, {Ø}
		return
	<!'::SendInput, {0}
		return
	>!'::SendInput, {Enter}
		return
	<^<!'::SendInput, ^0
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \
	\::RShift

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ LShift
	LShift::LCtrl

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ SC056
	SC056::LCtrl

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ z
	z::x
	!z::SendInput, {×}
		return
	<!>!z::SendInput, {✗}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ x
	x::c
	!x::SendInput, {``}
		return
	<!>!x::SendInput, {©}
		return
	^!x::SendInput, ^{``}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ c
	c::d
	!c::SendInput, {&}
		return
	<!>!c::SendInput, {Ⓓ}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ v
	!v::SendInput, {|}
		return
	<!>!v::SendInput, {✓}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ b
	b::z

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ n
	n::_
	<!>!n::SendInput, {∈}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ m
	m::k
	!m::SendInput, {`%}
		return
	<!>!m::SendInput, {㊿}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ,
	,::h
	<!,::SendInput, {4}
		return
	>!,::SendInput, {^}
		return
	<^<!,::SendInput, ^4
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ .
	.::,
	<!.::SendInput, {5}
		return
	>!.::SendInput, {~}
		return
	<^<!.::SendInput, ^5
		return
	+.::SendInput, ,
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ /
	/::.
	<!/::SendInput, {6}
		return
	>!/::SendInput, {…}
		return
	<^<!/::SendInput, ^6
		return
	+/::SendInput, .
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ RShift
	RShift::RCtrl

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ RCtrl
	RCtrl::LCtrl

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Space
	!Space::SendInput, {Space}
		return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ LAlt
	LAlt::return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ RAlt
	RAlt::return

;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ RWin
	RWin::return
