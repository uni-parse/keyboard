const P=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))n(d);new MutationObserver(d=>{for(const i of d)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function a(d){const i={};return d.integrity&&(i.integrity=d.integrity),d.referrerpolicy&&(i.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?i.credentials="include":d.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(d){if(d.ep)return;d.ep=!0;const i=a(d);fetch(d.href,i)}};P();const U=[["`",["","` ~"],["Capslock","\u21EA"],[""," "],""],["1",["","1 !"],["Browser_Search","\u{1F50D}"],[""," "],""],["2",["","2 @"],["Media_Stop","\u25FC"],[""," "],""],["3",["","3 #"],["Media_Prev","\u23EE"],[""," "],""],["4",["","4 $"],["Media_Next","\u23ED"],[""," "],""],["5",["","5 %"],["",""],[""," "],""],["6",["","6 ^"],["",""],[""," "],""],["\\",["","\\ |",""],["",""],[""," "],""],["7",["","7 &"],["",""],[""," "],""],["8",["","8 *"],["^Numpad0","\u229A"],[""," "],""],["9",["","9 ("],["^NumpadAdd","\u2295"],[""," "],"\u2039"],["0",["","0 )"],["^NumpadSub","\u229D"],[""," "],"\u203A"],["=",["","= +"],["Volume_Mute","\u{1F507}"],[""," "],""],["Bs",["","\u232B"]],["Tab",["","\u21C4"]],["q","",["WheelUp","\u21C8"],"@","\u22C6"],["w","",["Esc","\u2297"],"{","\u25AA"],["f","",["mouseU","\u25B4"],"}","\u25B8"],["p","",["speed","\u2387"],"&","\u2022"],["b","",["PgUp","\u21DE"],"!","\u2043"],["[",["","[ {"],["","\u2600"]],["j","",["",""],"^"],["l","",["Home","\u21F1"],"|"],["u","",["Up","\u2191"],")","\xAB"],["y","",["End","\u21F2"],"(","\xBB"],["'",["",`' "`],["Volume_Down","\u{1F509}"],["`","` ~"],"\u2248"],["-",["","- _"],["Volume_Up","\u{1F50A}"],"+","\xB1"],["Enter",["","\u23CE"]],["LAlt",["","Alt"]],["a","",["WheelDown","\u21CA"],[7,"7 &"],"F7"],["r","",["mouseL","\u25C2"],[5,"5 `%"],"F5"],["s","",["mouseD","\u25BE"],[3,"3 #"],"F3"],["t","",["mouseR","\u25B8"],[1,"1 !"],"F1"],["g","",["PgDn","\u21DF"],"`%"],["]",["","] }"],["","\u2733"]],["m","",["AppsKey","\u2263"],"*"],["n","",["Left","\u2190"],[2,"2 @"],"F2"],["e","",["Down","\u2193"],[4,"4 $"],"F4"],["i","",["Right","\u2192"],[6,"6 ^"],"F6"],["o","",["Enter","\u23CE"],[8,"8 *"],"F8"],["`;",["","; :"],["Media_Play_Pause","\u23EF"],["=","= +"],"\u2260"],["LShift",["","\u21E7"]],["SC056",["","\u21E7"]],["x","",["XButton1","\u21A9"],["[","[ {"]],["c","",["XButton2","\u21AA"],["]","] }"]],["d","",["Bs","\u232B"],[9,"9 ("],"F9"],["v","",["Del","\u2326"],["\\","\\ |"],"F11"],["z","",["PrintScreen","\u2399"],"~",""],["/",["","/ ?"],["Run calc","\u{1F4F1}"],"?"],["k","",["Tab","\u21C4"],["/","/ ?"],"F12"],["h","",["LButton","\u25F4"],[0,"0 )"],"F10"],[",",["",", <"],["MButton","\u29BA"],"#","\u2264"],[".",["",". >"],["RButton","\u25F7"],"$","\u2265"],["RShift",["","\u21E7"]],["LWin",["","\u229E"]],["LCtrl",["","Ctrl"]],["F23",["","Sym"]],["Space",["",""]],["F24",["","Ext"]],["RCtrl",["","Ctrl"]],["RCtrl",["","Ctrl"]],["AppsKey",["","\u2263"]]];function E(l,r,a,n,d){function i(t){function c(e,$=0){if($){if($==1){if(e==l||e==n)return"-x, -y";if(e==r)return"x, -y";if(e==a)return"-x, y"}else if($==2){if(e==l)return"x, -y";if(e==r||e==a)return"x, y";if(e==n)return"-x, y"}}else{if(e==l)return"0, -y";if(e==r)return"x, 0";if(e==a)return"0, y";if(e==n)return"-x, 0"}}function o(e){if(e==n)return r;if(e==r)return n;if(e==l)return a;if(e==a)return l}return`	${t}::
  ${d} & ${t}::
    If !move_${t} {
      if !GetKeyState("${t==n||t==r?l:n}","P") && !GetKeyState("${t==n||t==r?a:r}","P") && !GetKeyState("${o(t)}","P") {
        If press_${t}
          press_${t} = 2
        Else {
          press_${t} = 1
          SetTimer, speed_${t}_timer, -300
        }
        MouseMove, ${c(t)},, R
        KeyWait, ${t}, T.2
        if ErrorLevel {
          ErrorLevel = 0
          move_${t} := move__nth + 1
          move__nth++
          If speed_${t} {
            x *= x_multiplier
            y *= y_multiplier
            speed_${t} = 0
          }
          SetTimer, move_${t}_timer, %A_MouseDelay%
        } Else
          speed_${t} = 0
      } else {
        move_${t} := move__nth + 1
        move__nth++
        SetTimer, move_${t}_timer, %A_MouseDelay%
      }
    }
    return
  move_${t}_timer:
    If GetKeyState("${t}","P") && (layer_ext ? 1 : GetKeyState("${d}","P")) {
      if (move_${t} = move__nth) {
        x *= x_increment
        y *= y_increment
        If !GetKeyState("${t==n||t==r?l:n}","P") && !GetKeyState("${t==n||t==r?a:r}","P")
          MouseMove, ${c(t)},, R
        else if GetKeyState("${t==n||t==r?l:n}","P")
          MouseMove, ${c(t,1)},, R
        else if GetKeyState("${t==n||t==r?a:r}","P")
          MouseMove, ${c(t,2)},, R
      } ;else do nothing
    } Else {
      if !GetKeyState("${t==n||t==r?l:n}","P") && !GetKeyState("${t==n||t==r?a:r}","P") && !GetKeyState("${o(t)}","P") {
        resetSpeed()
        move__nth = 0
      } Else {
        move__nth--
        if (move_${t} = 1) {
          if move_${t==n||t==r?l:n} > 1
            move_${t==n||t==r?l:n}--
          if move_${t==n||t==r?a:r} > 1
            move_${t==n||t==r?a:r}--
          if move_${o(t)} > 1
            move_${o(t)}--
        } Else if (move_${t} = 2) {
          if move_${t==n||t==r?l:n} > 2
            move_${t==n||t==r?l:n}--
          if move_${t==n||t==r?a:r} > 2
            move_${t==n||t==r?a:r}--
          if move_${o(t)} > 2
            move_${o(t)}--
        }
      }
      move_${t} = 0
      SetTimer,, Off
    }
    Return
  speed_${t}_timer:
    if press_${t} = 2
      speed_${t} = 1
    press_${t} = 0
    Return
`}return i(l)+i(a)+i(r)+i(n)}function F(l,r,a){return`	*${r}::
    ${a} & ${r}::
    if !scroll_${r} {
      If press_${r}
        press_${r} = 2
      Else {
        press_${r} = 1
        SetTimer, speed_${r}_timer, -300
      }
      SendInput {Blind}{${l}}
      KeyWait, ${r}, T.2
      if ErrorLevel {
        ErrorLevel = 0
        scroll_${r} = 1
        scroll_speed := scroll_defualt_speed
        If speed_${r} {
          scroll_speed *= scroll_speed_multiplier
          speed_${r} = 0
        }
        setTimer, scroll_${r}_timer, %scroll_speed%
      } Else
          speed_${r} = 0
    }
    return
  scroll_${r}_timer:
    if GetKeyState("${r}","P")  && (layer_ext ? 1 : GetKeyState("${a}","P"))
      SendInput {Blind}{${l}}
    Else {
      scroll_speed := scroll_defualt_speed
      scroll_${r} = 0
      setTimer,, Off
    }
    return
  speed_${r}_timer:
    if press_${r} = 2
      speed_${r} = 1
    press_${r} = 0
    Return
`}function G(l,r,a,n){let d,i,t,c,o=`;
;
;   made by UniParse
;   github.com/TheUniParse
;   twitter.com/UniParse
;
;
#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
Process, Priority,, High

x_slow = 4
y_slow := x_slow
x_default = 18
y_default := x_default
x_multiplier = 3
y_multiplier := x_multiplier
x_increment = 1.1
y_increment := x_increment
x := x_default
y := y_default
scroll_defualt_speed = 40
scroll_speed_multiplier = .25
speed_switcher = 0
move__nth = 0

resetSpeed() {
  global
  If speed_switcher {
    x := x_slow
    y := y_slow
  } Else {
    x := x_default
    y := y_default
  }
}

`;o+=`

;config
#Persistent
SetCapsLockState, AlwaysOff

#If !layer_ext
  F24 & F23::
    layer_sym = 0
    layer_ext = 1
    KeyWait F24
    KeyWait F24, D
    layer_ext = 0
    return
  F24::
    if press_F24 {
      layer_sym = 0
      layer_ext = 1
      KeyWait F24
      KeyWait F24, D
      layer_ext = 0
    } Else
      press_F24 = 1
    SetTimer, KeyF24timer, -300
    return
  KeyF24timer:
    press_F24 = 0
    return
#if

#If !layer_sym
  F23 & F24::
    layer_ext = 0
    layer_sym2 = 1
    KeyWait F23
    layer_sym2 = 0
    return
  F23::
    if press_F23 {
        layer_ext = 0
        layer_sym = 1
        KeyWait F23
        KeyWait F23, D
        layer_sym = 0
    } Else
      press_F23 = 1
    SetTimer, KeyF23timer, -300
    Return
  KeyF23timer:
    press_F23 = 0
    Return
#If

`,o+=`;extend layer
#If GetKeyState("F24", "P") && !GetKeyState("F23", "P")
`,l.forEach(e=>{typeof e[2]=="object"&&e[2][0]&&(e[2][0].includes("Button")?o+=`	F24 & ${e[0]}::${e[2][0]}
`:e[2][0]=="Capslock"?o+=`	F24 & ${e[0]}::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"
		return
`:e[2][0]=="mouseL"?d=e[0]:e[2][0]=="mouseR"?i=e[0]:e[2][0]=="mouseU"?t=e[0]:e[2][0]=="mouseD"?c=e[0]:e[2][0]=="speed"?o+=`	F24 & ${e[0]}::
		speed_switcher := !speed_switcher
		resetSpeed()
		return
`:e[2][0].includes("Wheel")||(o+=`${e[2]&&!(typeof e[2]=="object"&&!e[2][0])?`	F24 & ${e[0]}::${typeof e[2]=="object"?e[2][0]:e[2]}
`:""}`))}),o+=`#If
#If layer_ext
`,l.forEach(e=>{typeof e[2]=="object"&&e[2][0]&&(e[2][0].includes("Button")?o+=`	${e[0]}::${e[2][0]}
`:e[2][0]=="Capslock"?o+=`	${e[0]}::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"
		return
`:e[2][0]=="speed"?o+=`	${e[0]}::
		speed_switcher := !speed_switcher
		resetSpeed()
		return
`:!e[2][0].includes("mouse")&&!e[2][0].includes("Wheel")&&(o+=`${e[2]&&!(typeof e[2]=="object"&&!e[2][0])?`	${e[0]}::${typeof e[2]=="object"?e[2][0]:e[2]}
`:""}`))}),o+=`#If

`,o+=`;symbol layer
#If GetKeyState("F23", "P") && !GetKeyState("F24", "P") && !layer_sym2
`,l.forEach(e=>{typeof e[3]=="object"&&(e[3][0]||e[3][0]==0)?typeof e[3][0]=="number"||e[3][0]=="`"||e[3][0]=="\\"||e[3][0]=="/"||e[3][0]=="="||e[3][0]=="["||e[3][0]=="]"?o+=`	F23 & ${e[0]}::${e[3][0]}
`:e[3][0]&&(o+=`	F23 & ${e[0]}::SendRaw ${e[3][0]}
		return
`):typeof e[3]=="number"||e[3]=="`"||e[3]=="\\"||e[3]=="/"||e[3]=="="||e[3]=="["||e[3]=="]"?o+=`	F23 & ${e[0]}::${e[3]}
`:e[3]&&(o+=`	F23 & ${e[0]}::SendRaw ${e[3]}
		return
`)}),o+=`#If
#If layer_sym
`,l.forEach(e=>{typeof e[3]=="object"&&(e[3][0]||e[3][0]==0)?typeof e[3][0]=="number"||e[3][0]=="`"||e[3][0]=="\\"||e[3][0]=="/"||e[3][0]=="="||e[3][0]=="["||e[3][0]=="]"?o+=`	${e[0]}::${e[3][0]}
`:e[3][0]&&(o+=`	${e[0]}::SendRaw ${e[3][0]}
		return
`):typeof e[3]=="number"||e[3]=="`"||e[3]=="\\"||e[3]=="/"||e[3]=="="||e[3]=="["||e[3]=="]"?o+=`	${e[0]}::${e[3]}
`:e[3]&&(o+=`	${e[0]}::SendRaw ${e[3]}
		return
`)}),o+=`#If

`,o+=`;symbol2 layer
#If layer_sym2
`,l.forEach(e=>{typeof e[4]=="object"&&e[4][0]?o+=`${e[4]&&!(typeof e[4]=="object"&&!e[4][0])?`	F23 & ${e[0]}::${typeof e[4]=="object"?e[4][0]:e[4]}
`:""}`:e[4]&&(!e[4].startsWith("F")&&!e[4].startsWith("^")?o+=`	F23 & ${e[0]}::SendRaw ${e[4]}
		return
`:o+=`	F23 & ${e[0]}::${e[4]}
`)}),o+=`#If

`,o+=`;mouse in extend layer
#If layer_ext || (GetKeyState("F24", "P") && !GetKeyState("F23", "P") && !layer_sym)
`,o+=E(t,i,c,d,"F24"),o+=F("wheelUp","q","F24"),o+=F("wheelDown","a","F24"),o+="#If",r.innerText=o,a.addEventListener("click",()=>{n.clipboard.writeText(o).then(()=>a.textContent="copied")})}function K(l,r){l.forEach(a=>{const n=document.createElement("span");function d(i,t){const c=document.createElement("kbd");t&&(c.setAttribute("class",t),t.includes("shift")&&c.setAttribute("data-shift",a[i][1].split(" ")[1])),c.appendChild(document.createTextNode(typeof a[i]=="object"?t.includes("shift")?a[i][1].split(" ")[0]:a[i][1]:typeof a[i]!="number"&&a[i].includes("`")&&a[i].length>1?a[i].replace("`",""):a[i])),n.appendChild(c)}a[0]=="Bs"||a[0]=="Enter"||a[0]=="RShift"||a[0]=="LShift"||a[0]=="SC056"||a[0]=="LCtrl"||a[0]=="RCtrl"||a[0]=="AppsKey"||a[0]=="LWin"||a[0]=="RWin"||a[0]=="CapsLock"||a[0]=="Tab"||a[0]=="LAlt"||a[0]=="RAlt"||a[0]=="Space"?d(1,"modifier"):typeof a[1]=="object"&&a[1][1].includes(" ")?d(1,"key shift"):a[1]?d(1,"key"):d(0,"key"),a[2]&&d(2,"extend"),typeof a[3]=="object"?d(3,"symbol shift"):(a[3]||a[3]==0)&&d(3,"symbol"),a[4]&&a[4].startsWith("F")?d(4,"symbol2 f"):a[4]&&d(4,"symbol2"),r.appendChild(n)})}var O="./assets/UniParse.75cadb2a.avif 66w, ./assets/UniParse.8d145562.webp 66w";const _=document.createElement("a"),m=document.createElement("address"),h={github:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='KpzH_ttTMIjq8dhx1zD2pa_52539_gr1' x1='30.999' x2='30.999' y1='16' y2='55.342' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#KpzH_ttTMIjq8dhx1zD2pa_52539_gr1)' d='M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z'></path><linearGradient id='KpzH_ttTMIjq8dhx1zD2pb_52539_gr2' x1='32' x2='32' y1='5' y2='59.167' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#KpzH_ttTMIjq8dhx1zD2pb_52539_gr2)' d='M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z'></path></svg>",twitter:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='iS8U25XJCb2VBQOwbuAcra_bYzsf9Bmocst_gr1' x1='32' x2='32' y1='9.936' y2='52.195' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#iS8U25XJCb2VBQOwbuAcra_bYzsf9Bmocst_gr1)' d='M57.595,16.086c-0.286-0.341-0.762-0.45-1.17-0.271c-0.614,0.271-1.245,0.512-1.891,0.719 c0.824-1.035,1.462-2.216,1.874-3.491c0.127-0.396-0.002-0.827-0.326-1.087c-0.324-0.261-0.774-0.295-1.131-0.083 c-1.777,1.041-3.672,1.788-5.641,2.223C47.244,12.122,44.449,11,41.555,11c-6.169,0-11.189,4.978-11.189,11.097 c0,0.404,0.022,0.81,0.067,1.214c-7.41-0.705-14.289-4.343-19.027-10.103c-0.207-0.252-0.518-0.385-0.85-0.362 c-0.325,0.025-0.618,0.207-0.784,0.488c-0.993,1.679-1.519,3.613-1.519,5.593c0,2.447,0.807,4.78,2.247,6.68 c-0.292-0.123-0.579-0.26-0.859-0.412c-0.311-0.167-0.686-0.161-0.988,0.021c-0.303,0.181-0.488,0.507-0.488,0.859v0.119 c0,3.708,1.868,7.073,4.786,9.104c-0.012-0.002-0.024-0.005-0.036-0.007c-0.35-0.065-0.699,0.062-0.93,0.327 c-0.231,0.265-0.306,0.631-0.198,0.966c1.182,3.648,4.149,6.371,7.769,7.332c-3.003,1.771-6.401,2.697-9.957,2.697 c-0.786,0-1.563-0.046-2.308-0.137c-0.467-0.059-0.906,0.218-1.063,0.657c-0.157,0.44,0.012,0.931,0.407,1.181 C11.478,51.38,17.064,53,22.79,53c18.772,0,29.989-15.119,29.989-29.736c0-0.271-0.005-0.541-0.014-0.81 c1.907-1.423,3.552-3.159,4.896-5.169C57.908,16.915,57.881,16.427,57.595,16.086z M51.167,21.143 c-0.279,0.197-0.438,0.523-0.422,0.865c0.02,0.415,0.034,0.834,0.034,1.256C50.779,36.897,40.31,51,22.79,51 c-3.982,0-7.894-0.84-11.499-2.452c4.226-0.321,8.198-1.85,11.575-4.468c0.335-0.26,0.47-0.702,0.336-1.104 s-0.506-0.677-0.93-0.686c-3.381-0.065-6.404-1.952-7.948-4.835c1.115,0.038,2.203-0.099,3.276-0.393 c0.447-0.123,0.751-0.537,0.735-1c-0.017-0.464-0.35-0.854-0.804-0.945c-3.773-0.752-6.632-3.773-7.244-7.449 c1.122,0.403,2.297,0.631,3.468,0.667c0.459,0.011,0.848-0.271,0.983-0.696c0.136-0.426-0.027-0.89-0.399-1.137 c-2.558-1.698-4.084-4.53-4.084-7.575c0-1.135,0.21-2.25,0.614-3.287c5.319,5.827,12.784,9.361,20.714,9.76 c0.328,0.022,0.617-0.116,0.817-0.357c0.202-0.241,0.278-0.563,0.207-0.868c-0.16-0.685-0.24-1.384-0.24-2.077 c0-5.016,4.122-9.097,9.189-9.097c2.537,0,4.979,1.047,6.7,2.871c0.235,0.248,0.581,0.359,0.917,0.296 c1.385-0.267,2.739-0.671,4.048-1.209c-0.729,1.007-1.665,1.865-2.759,2.514c-0.407,0.242-0.589,0.735-0.436,1.184 c0.153,0.447,0.597,0.73,1.068,0.669c0.952-0.117,1.886-0.292,2.797-0.525C53.06,19.666,52.15,20.449,51.167,21.143z'></path><linearGradient id='iS8U25XJCb2VBQOwbuAcrb_bYzsf9Bmocst_gr2' x1='38.903' x2='38.903' y1='9.936' y2='52.195' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#iS8U25XJCb2VBQOwbuAcrb_bYzsf9Bmocst_gr2)' d='M30.772,45.786l0.621,1.9c7.123-2.326,12.824-7.914,15.642-15.33l-1.869-0.711 C43.636,35.671,39.733,42.859,30.772,45.786z'></path><g><linearGradient id='iS8U25XJCb2VBQOwbuAcrc' x1='42' x2='42' y1='17.979' y2='21.528' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><circle cx='42' cy='20' r='2' fill='url(#undefined)'></circle></g></svg>",facebook:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='JOZq0V4XPxMzNaLCE5XPGa_44003_gr1' x1='37.646' x2='37.646' y1='14.5' y2='56.878' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#JOZq0V4XPxMzNaLCE5XPGa_44003_gr1)' d='M42,56V38h5.358l0.934-8H42v-4.457c0-2.097-0.131-3.527,2.877-3.527L48,22.014v-6.479 c-1-0.088-2.487-0.285-5.136-0.285c-5.531,0-8.864,3.376-8.864,9.576V30h-7v8h7v18H42z'></path><linearGradient id='JOZq0V4XPxMzNaLCE5XPGb_44003_gr2' x1='32' x2='32' y1='6.833' y2='58.017' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#JOZq0V4XPxMzNaLCE5XPGb_44003_gr2)' d='M50,57H14c-3.859,0-7-3.141-7-7V14c0-3.859,3.141-7,7-7h36c3.859,0,7,3.141,7,7v36 C57,53.859,53.859,57,50,57z M14,9c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h36c2.757,0,5-2.243,5-5V14c0-2.757-2.243-5-5-5H14z'></path></svg>",linkedin:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='SUJNhpmDQDF27Y3OfwgfYa_44019_gr1' x1='19' x2='19' y1='24.858' y2='49.041' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#SUJNhpmDQDF27Y3OfwgfYa_44019_gr1)' fill-rule='evenodd' d='M22 48L22 26 16 26 16 48 22 48z' clip-rule='evenodd'></path><linearGradient id='SUJNhpmDQDF27Y3OfwgfYb_44019_gr2' x1='19.382' x2='19.382' y1='15.423' y2='23.341' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#SUJNhpmDQDF27Y3OfwgfYb_44019_gr2)' fill-rule='evenodd' d='M19.358,23c2.512,0,4.076-1.474,4.076-3.554 c-0.047-2.126-1.564-3.649-4.028-3.649c-2.465,0-4.076,1.475-4.076,3.601c0,2.08,1.563,3.602,3.981,3.602H19.358L19.358,23z' clip-rule='evenodd'></path><linearGradient id='SUJNhpmDQDF27Y3OfwgfYc_44019_gr3' x1='37.386' x2='37.386' y1='14.125' y2='49.525' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#SUJNhpmDQDF27Y3OfwgfYc_44019_gr3)' fill-rule='evenodd' d='M26.946,48H34V35.911c0-0.648,0.122-1.295,0.313-1.758 c0.52-1.295,1.877-2.635,3.867-2.635c2.607,0,3.821,1.988,3.821,4.901V48h6V35.588c0-6.657-3.085-9.498-7.826-9.498 c-3.886,0-5.124,1.91-6.072,3.91H34v-4h-7.054c0.095,2-0.175,22-0.175,22H26.946z' clip-rule='evenodd'></path><linearGradient id='SUJNhpmDQDF27Y3OfwgfYd_44019_gr4' x1='32' x2='32' y1='6.5' y2='57.5' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#SUJNhpmDQDF27Y3OfwgfYd_44019_gr4)' d='M50,57H14c-3.859,0-7-3.141-7-7V14c0-3.859,3.141-7,7-7h36c3.859,0,7,3.141,7,7v36 C57,53.859,53.859,57,50,57z M14,9c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h36c2.757,0,5-2.243,5-5V14c0-2.757-2.243-5-5-5H14z'></path></svg>",instagram:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='jm_nAfYbxsVmTlYr5N4x9a_43625_gr1' x1='32' x2='32' y1='6.667' y2='57.872' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#jm_nAfYbxsVmTlYr5N4x9a_43625_gr1)' d='M44,57H20c-7.168,0-13-5.832-13-13V20c0-7.168,5.832-13,13-13h24c7.168,0,13,5.832,13,13v24 C57,51.168,51.168,57,44,57z M20,9C13.935,9,9,13.935,9,20v24c0,6.065,4.935,11,11,11h24c6.065,0,11-4.935,11-11V20 c0-6.065-4.935-11-11-11H20z'></path><linearGradient id='jm_nAfYbxsVmTlYr5N4x9b_43625_gr2' x1='32' x2='32' y1='18.167' y2='45.679' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#jm_nAfYbxsVmTlYr5N4x9b_43625_gr2)' d='M32,45c-7.168,0-13-5.832-13-13c0-7.168,5.832-13,13-13c7.168,0,13,5.832,13,13 C45,39.168,39.168,45,32,45z M32,23c-4.962,0-9,4.038-9,9c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C41,27.038,36.963,23,32,23z'></path><linearGradient id='jm_nAfYbxsVmTlYr5N4x9c_43625_gr3' x1='46' x2='46' y1='12.75' y2='23.049' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#jm_nAfYbxsVmTlYr5N4x9c_43625_gr3)' d='M46 15A3 3 0 1 0 46 21A3 3 0 1 0 46 15Z'></path></svg>",youtube:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='PMWUiMSnUf2R_PPJ6rqZea_44112_gr1' x1='32' x2='32' y1='10' y2='54.751' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#PMWUiMSnUf2R_PPJ6rqZea_44112_gr1)' d='M32,53.001c-6.358,0-12.716-0.195-19.299-0.584c-4.96-0.293-8.961-4.242-9.308-9.187 c-0.521-7.452-0.521-15.009-0.001-22.46c0.348-4.945,4.349-8.895,9.309-9.188c13.167-0.778,25.433-0.778,38.598,0 c4.96,0.293,8.961,4.242,9.308,9.187c0.521,7.452,0.521,15.009,0.001,22.46c-0.348,4.945-4.349,8.895-9.309,9.188l0,0 C44.716,52.806,38.358,53.001,32,53.001z M51.182,50.421l0.059,0.998L51.182,50.421c3.959-0.234,7.153-3.386,7.431-7.331 c0.515-7.358,0.515-14.821-0.001-22.181c-0.276-3.944-3.471-7.096-7.43-7.33c-13.088-0.773-25.275-0.773-38.363,0 c-3.959,0.234-7.153,3.386-7.431,7.331c-0.515,7.358-0.515,14.821,0.001,22.181c0.276,3.944,3.471,7.096,7.43,7.33 C25.906,51.194,38.094,51.194,51.182,50.421z'></path><linearGradient id='PMWUiMSnUf2R_PPJ6rqZeb_44112_gr2' x1='31.72' x2='31.72' y1='24.25' y2='39.252' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#PMWUiMSnUf2R_PPJ6rqZeb_44112_gr2)' d='M25 39.84L25 24.16 38.44 32z'></path><linearGradient id='PMWUiMSnUf2R_PPJ6rqZec_44112_gr3' x1='32.212' x2='32.212' y1='10' y2='54.751' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#PMWUiMSnUf2R_PPJ6rqZec_44112_gr3)' d='M24,41.581V22.419L40.425,32L24,41.581z M26,25.901v12.197L36.456,32L26,25.901z'></path></svg>",whatsapp:"<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64' style=' fill:#000000;'><linearGradient id='fzF5K76u~QPjMIgETt7bMa_43677_gr1' x1='32' x2='32' y1='5.25' y2='58.834' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#1a6dff'></stop><stop offset='1' stop-color='#c822ff'></stop></linearGradient><path fill='url(#fzF5K76u~QPjMIgETt7bMa_43677_gr1)' d='M6.399,57.699l3.792-13.847c-2.076-3.74-3.17-7.975-3.168-12.272 C7.028,17.641,18.373,6.301,32.312,6.301c6.762,0.003,13.115,2.636,17.889,7.414c4.774,4.778,7.402,11.151,7.4,17.944 C57.595,45.633,46.25,57,32.312,57c-4.024,0-8.073-1.019-11.744-2.95L6.399,57.699z M20.828,51.918l0.346,0.188 C24.645,53.999,28.492,55,32.302,55c12.846,0,23.293-10.471,23.299-23.341c0.002-6.26-2.418-12.13-6.814-16.53 S38.538,8.304,32.312,8.301c-12.836,0-23.283,10.443-23.288,23.279c-0.002,4.089,1.072,8.113,3.107,11.639l0.209,0.361L9.239,54.902 L20.828,51.918z M32.312,53c-3.686,0-7.415-1.06-10.793-3.063l-0.437-0.318l-8.854,2.323l2.382-8.691l-0.244-0.387 c-2.123-3.376-3.243-7.271-3.241-11.269c0.004-11.67,9.513-21.165,21.195-21.165c5.642,0.002,10.961,2.218,14.979,6.239 c4,4.003,6.202,9.345,6.2,15.039C53.495,43.448,43.99,53,32.312,53z M22.583,48.242C25.641,50.047,29.001,51,32.304,51 c10.584,0,19.191-8.654,19.195-19.292c0.002-5.161-1.992-10-5.614-13.625c-3.642-3.644-8.459-5.651-13.565-5.653 c-10.581,0-19.191,8.598-19.195,19.166c-0.002,3.619,1.012,7.146,2.933,10.201l0.715,1.131l-1.698,6.199l6.429-1.687L22.583,48.242z'></path><linearGradient id='fzF5K76u~QPjMIgETt7bMb_43677_gr2' x1='32.305' x2='32.305' y1='17.5' y2='46.527' gradientUnits='userSpaceOnUse' spreadMethod='reflect'><stop offset='0' stop-color='#6dc7ff'></stop><stop offset='1' stop-color='#e6abff'></stop></linearGradient><path fill='url(#fzF5K76u~QPjMIgETt7bMb_43677_gr2)' fill-rule='evenodd' d='M26.12,21.219c-0.464-1.031-0.952-1.052-1.394-1.07 c-0.361-0.015-0.774-0.015-1.187-0.015c-0.413,0-1.084,0.155-1.651,0.775c-0.568,0.62-2.168,2.118-2.168,5.164 c0,3.047,2.219,5.991,2.529,6.405c0.31,0.413,4.284,6.865,10.579,9.347c5.231,2.063,6.296,1.653,7.431,1.549 c1.135-0.103,3.664-1.498,4.18-2.944c0.516-1.446,0.516-2.685,0.361-2.944c-0.155-0.258-0.568-0.413-1.187-0.723 c-0.619-0.31-3.664-1.808-4.232-2.014c-0.568-0.206-0.981-0.31-1.394,0.31c-0.413,0.619-1.599,2.014-1.96,2.427 c-0.361,0.414-0.723,0.465-1.342,0.156c-0.619-0.311-2.614-0.964-4.98-3.074c-1.841-1.641-3.084-3.668-3.445-4.288 c-0.361-0.619-0.039-0.955,0.272-1.264c0.278-0.277,0.619-0.723,0.929-1.085c0.309-0.362,0.412-0.62,0.619-1.033 c0.206-0.414,0.103-0.775-0.052-1.085S26.67,22.443,26.12,21.219z' clip-rule='evenodd'></path></svg>"},T=[["https://youtube.com/channel/UCvNOch5x46MDaejgQ6SkzUg",h.youtube],["https://facebook.com/UniParse",h.facebook],["https://instagram.com/uniparse",h.instagram],["https://linkedin.com/in/uniparse",h.linkedin],["https://github.com/TheUniParse",h.github],["https://twitter.com/UniParse",h.twitter]];_.setAttribute("target","_blank");for(const l of T)_.setAttribute("href",l[0]),_.innerHTML=l[1],m.appendChild(_.cloneNode(!0));const g=document.createElement("img");g.srcset=O;g.setAttribute("alt","uniparse");m.appendChild(g);const b=m.querySelectorAll("svg");for(let l=0;l<b.length;l++)b[l].style.transition=`all 500ms cubic-bezier(0.215, 0.61, 0.355, 1), right ${(b.length-l)*100+200}ms cubic-bezier(.4,1,.8,1.4), left ${(b.length-l)*100+200}ms cubic-bezier(.4,1,.8,1.4)`;function A(l){l.appendChild(m);let r=0;g.style.bottom=".3rem",g.addEventListener("click",()=>{r=!r,r?b.forEach(a=>a.style.right="2.8rem"):b.forEach(a=>a.style.right=0)})}const z=document.createElement("pre"),S=document.createElement("button"),x=document.createElement("div"),M=document.createElement("div"),C=document.createElement("div"),y=document.createElement("div"),v=document.createElement("a"),w=document.createElement("a"),u=document.createElement("main");x.id="script";M.id="keyboard";C.id="keyboardCtx";S.textContent="copy";v.textContent="MSKLC.zip";v.href="./../src/assets/uniparse/msklc.zip";v.download="msklc.zip";w.textContent="AUTOHOTKEY.zip";w.href="./../src/assets/uniparse/autohotkey.zip";w.download="autohotkey.zip";y.id="download";y.appendChild(v);y.appendChild(w);x.appendChild(S);x.appendChild(z);C.appendChild(M);u.appendChild(C);u.appendChild(y);u.appendChild(x);document.body.appendChild(u);A(u);G(U,z,S,navigator);K(U,M);let s=!1,p=!1;const I=document.querySelectorAll(".key"),Y=document.querySelectorAll(".extend"),j=document.querySelectorAll(".symbol"),V=document.querySelectorAll(".symbol2"),B=document.querySelector("#keyboard>span:nth-child(59)"),W=document.querySelector("#keyboard>span:nth-child(57)");function f(l=1,r=0,a=0,n=0){I.forEach(d=>d.style.opacity=l),Y.forEach(d=>d.style.opacity=r),j.forEach(d=>d.style.opacity=a),V.forEach(d=>d.style.opacity=n)}B.addEventListener("click",()=>{s=!s,s&&!p?f(0,1):s&&p?f(0,0,0,1):!s&&p?(f(),p=0):f()});W.addEventListener("click",()=>{p=!p,!s&&p?f(0,0,1):s&&p?f(0,0,0,1):s&&!p?(f(),s=0):f()});
