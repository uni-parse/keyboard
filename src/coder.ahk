
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



; remap(keys,switcher:=''){
;   For key, replacement in keys{
;     ${switcher}${key}::SendInput, {${replacement}}
;     return
;   }
; }
; row1 := isObject(Object)


;   `  1  2  3  4  5  6  7  8  9  0  -  =
 ;=>?  !  [  ]  "  {  }  *  /  '  )  (  \
  `::?
  1::!
  2::[
  3::]
  4::"
  5::{
  6::}
  7::*
  8::/
  9::'
  0::)
  -::(
  =::\

;   q  w  e  r  t  y  u  i  o  p  [  ]  ⏎
 ;=>q  w  f  p  g  ⇞  j  l  u  y  ;  :  =
  e::f
  r::p
  t::g
  y::PgUp
  u::j
  i::l
  o::u
  p::y
  [::;
  ]:::
  Enter::=

;   ⇪  a  s  d  f  g  h  j  k  l  ;  '  \
 ;=>⇧  a  r  s  t  d  ⇟  k  n  e  i  o  ⇧
  CapsLock::LShift
  s::r
  d::s
  f::t
  g::d
  h::PgDn
  j::k
  k::n
  l::e
  `;::i
  '::o
  \::RShift

;   ⇧  z  x  c  v  b  n  m  ,  .  /  ⇧  cr
 ;=>cr x  c  b  v  _  z  m  h  ,  .  cr cr
  LShift::LCtrl
  z::x
  x::c
  c::B
  b::_
  n::z
  ,::h
  .::,
  /::.
  RShift::RCtrl
  RCtrl::LCtrl



;--------------------------------------------
;symbols: alt & key
  !q::SendInput, {@}
    return
  !w::SendInput, {~}
    return
  !e::SendInput, {<}
    return
  !r::SendInput, {>}
    return
  !t::SendInput, {^}
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
  !m::SendInput, {`%}
    return
  !,::SendInput, {#}
    return
  !a::SendInput, {BS}
    return
  !s::SendInput, {Esc}
    return
  !d::SendInput, {Home}
    return
  !f::SendInput, {End}
    return
  !g::SendInput, {Del}
    return

;numbers: left alt & key
  <!0::SendInput, {8}
    return
  <!9::SendInput, {7}
    return
  <!k::SendInput, {1}
    return
  <!l::SendInput, {2}
    return
  <!;::SendInput, {3}
    return
  <!'::SendInput, {0}
    return
  <!i::SendInput, {4}
    return
  <!o::SendInput, {5}
    return
  <!p::SendInput, {6}
    return
  <!-::SendInput, {9}
    return

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

;