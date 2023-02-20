#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

disableLayer := false

ins::
disableLayer := !disableLayer
return

#if disableLayer
q::return
w::return
f::return
p::return
b::return
a::return
r::return
s::return
t::return
g::return
x::return
c::return
d::return
v::return
z::return
j::return
l::return
u::return
y::return
'::return
-::return
m::return
n::return
e::return
i::return
o::return
`;::return
/::return
k::return
h::return
,::return
.::return
#if


