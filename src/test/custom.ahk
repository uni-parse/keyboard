
;Qwerty Keyboard Layout
;---------------------------------------------
;  ~  !  @  #  $  %  ^  &  *  (  )  _  +  ____
;  `  1  2  3  4  5  6  7  8  9  0  -  =   BS
; ___                                {  }  |
; Tab  q  w  e  r  t  y  u  i  o  p  [  ]  \
; ____                             :  "  _____
; Caps  a  s  d  f  g  h  j  k  l  ;  '  Enter
; _____                       <  >  ?  _______
; Shift  z  x  c  v  b  n  m  ,  .  /   Shift


;   d  b  g
 ;=>g  d  b

;   `  1  2  3  4  5  6  7  8  9  0  -  =
 ;=>?                    =  7  8  9  0  -
 `::?
 1::!
 2::[
 3::]
 4::`
 5::{
 6::$
 7::}
 8::*
 9::/
 0::'
 -::)
 =::(
 BS::\
;   q  w  e  r  t  y  u  i  o  p  [  ]  ⏎
 ;=>q  w  f  p  b  ⇞  j  l  u  y  ;  :  =
  e::f
  r::p
  t::b
  y::[ ;PgUp
  u::j
  i::l
  o::u
  p::y
  [::=
  ]:::
  Enter::;

;   ⇪  a  s  d  f  g  h  j  k  l  ;  '  \
 ;=>⇧  a  r  s  t  g  ⇟  k  n  e  i  o  ⇧
  CapsLock::LShift
  s::r
  d::s
  f::t
  h::] ;PgDn
  j::k
  k::n
  l::e
  `;::i
  '::o
  \::RShift

;   ⇧  iso z  x  c  v  b  n  m  ,  .  /  ⇧  cr
 ;=>cr z   x  c  d  v  z  _  m  h  ,  .  cr cr
  LShift::LCtrl
  SC056::z
  z::x
  x::c
  c::d
  b::z
  n::_
  ;m::k
  ,::h
  .::,
  /::.
  RShift::RCtrl
  RCtrl::LCtrl

;.,h.66

;--------------------------------------------
;symbols: alt & key
  !3::SendInput, {Media_Play_Pause}
  return
  !4::SendInput, {Volume_Mute}
  return
  !q::SendInput, {<}
  return
  !w::SendInput, {>}
  return
  !e::SendInput, {~}
  return
  !r::SendInput, {@}
  return
  !t::SendInput, {#}
  return
  !u::SendInput, {+}
  return
  !j::SendInput, {-}
  return
  !z::SendInput, {×}
  return
  !x::SendInput, {``}
  return
  !c::SendInput, {&}
  return
  !v::SendInput, {|}
  return
  !n::SendInput, {$}
  return
  !m::SendInput, {^}
  return
  !,::SendInput, {`%}
  return
  !a::SendInput, {BS}
  return
  !s::SendInput, {Esc}
  return
  !d::SendInput, {Volume_Down}
  return
  !f::SendInput, {Volume_Up}
  return
  !g::SendInput, {Del}
  return
  !h::SendInput, {Browser_Back}
  return
  !y::SendInput, {Browser_Forward}
  return
  ;!.::SendInput, {}
  ;return
  !/::SendInput, {…}
  return
  !1::SendInput, {Media_Prev}
  !2::SendInput, {Media_Next}
  ![::SendInput, {PgDn}
  return
  !]::SendInput, {PgUp}
  return
  !i::SendInput, {Home}
  return
  !p::SendInput, {End}
  return

;numbers: left alt & key
  <!i::SendInput, {7}
  return
  <!o::SendInput, {8}
  return
  <!p::SendInput, {9}
  return
  <!k::SendInput, {1}
  return
  <!l::SendInput, {2}
  return
  <!;::SendInput, {3}
  return
  <!'::SendInput, {0}
  return
  <!,::SendInput, {4}
  return
  <!.::SendInput, {5}
  return
  <!/::SendInput, {6}
  return
  <!8::SendInput, {*}
  return
  <!9::SendInput, {/}
  return
  <![::SendInput, {=}
  return
  <!]::SendInput, {:}
  return

  <^<!i::SendInput, ^{7}
  return
  <^<!o::SendInput, ^{8}
  return
  <^<!p::SendInput, ^{9}
  return
  <^<!k::SendInput, ^{1}
  return
  <^<!l::SendInput, ^{2}
  return
  <^<!;::SendInput, ^{3}
  return
  <^<!'::SendInput, ^{0}
  return
  <^<!,::SendInput, ^{4}
  return
  <^<!.::SendInput, ^{5}
  return
  <^<!/::SendInput, ^{6}

;arrows: right alt & key
  >!k::SendInput, {Left}
    return
  >!o::SendInput, {Up}
    return
  >!l::SendInput, {Down}
    return
  >!;::SendInput, {Right}
    return
  >!'::SendInput, {Enter}
    return
  <!>!k::SendInput, !{Left}
    return
  <!>!o::SendInput, !{Up}
    return
  <!>!l::SendInput, !{Down}
    return
  <!>!;::SendInput, !{Right}
    return
  +>!k::SendInput, +{Left}
    return
  +>!o::SendInput, +{Up}
    return
  +>!l::SendInput, +{Down}
    return
  +>!;::SendInput, +{Right}
    return
  +>!'::SendInput, +{Enter}
    return
;browser: left & right alt & key
  <!>!0::SendInput, {▬}
  return
  <!>!5::SendInput, {→}
  return
  <!>!6::SendInput, {←}
  return
  <!>!7::SendInput, {★}
  return
  <!>!8::SendInput, {▶}
  return
  <!>!9::SendInput, {►}
  return
  <!>!a::SendInput, {Browser_Back}
  return
  <!>!s::SendInput, {Browser_Refresh}
  return
  <!>!f::SendInput, {Browser_Forward}
  return
  <!>!-::SendInput, {•}
  return
  <!>!=::SendInput, {›}
  return
  <!>!Bs::SendInput, {»}
  return
  <!>!w::SendInput, {≤}
  return
  <!>!e::SendInput, {≥}
  return
  <!>!r::SendInput, {π}
  return
  <!>!t::SendInput, {≈}
  return
  <!>!p::SendInput, {≠}
  return
  <!>![::SendInput, {Ø}
  return
  <!>!j::SendInput, {㊿}
  return
  <!>!m::SendInput, {±}
  return
  <!>!z::SendInput, {✗}
  return
  <!>!x::SendInput, {©}
  return
  <!>!c::SendInput, {Ⓓ}
  return
  <!>!v::SendInput, {✓}
  return
