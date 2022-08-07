const S=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))d(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function a(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(l){if(l.ep)return;l.ep=!0;const o=a(l);fetch(l.href,o)}};S();const x=[["`",["","` ~"],["Capslock","\u21EA"],"",""],["1",["","1 !"],["Browser_Search","\u{1F50D}"],"",""],["2",["","2 @"],["Media_Stop","\u25FC"],"",""],["3",["","3 #"],["Media_Prev","\u23EE"],"",""],["4",["","4 $"],["Media_Next","\u23ED"],""],["5",["","5 %"],"",""],["6",["","6 ^"]],["\\",["","\\ |"]],["7",["","7 &"]],["8",["","8 *"],["^Numpad0","\u229A"],""],["9",["","9 ("],["^NumpadAdd","\u2295"],""],["0",["","0 )"],["^NumpadSub","\u229D"],"","\u2026"],["=",["","= +"],["Volume_Mute","\u{1F507}"],"","\xB1"],["Bs",["","\u232B"]],["Tab",["","\u21C4"]],["q","",["WheelUp","\u21C8"]],["w","",["Esc","\u2297"],"{"],["f","",["mouseU","\u25B4"],"}"],["p","",["speed","\u2387"]],["b","",["PgUp","\u21DE"]],["[",["","[ {"],["","\u2600"]],["j","",["",""]],["l","",["Home","\u21F1"]],["u","",["Up","\u2191"],")"],["y","",["End","\u21F2"],"("],["'",["",`' "`],["Volume_Down","\u{1F509}"],["`","` ~"],"F11"],["-",["","- _"],["Volume_Up","\u{1F50A}"],["=","= +"],"F12"],["Enter",["","\u23CE"]],["LAlt",["","Alt"]],["a","",["WheelDown","\u21CA"],[1,"1 !"],"F1"],["r","",["mouseL","\u25C2"],[2,"2 @"],"F2"],["s","",["mouseD","\u25BE"],[3,"3 #"],"F3"],["t","",["mouseR","\u25B8"],[4,"4 $"],"F4"],["g","",["PgDn","\u21DF"]],["]",["","] }"],["","\u2600"]],["m","",["AppsKey","\u2263"]],["n","",["Left","\u2190"],[7,"7 &"],"F7"],["e","",["Down","\u2193"],[8,"8 *"],"F8"],["i","",["Right","\u2192"],[9,"9 ("],"F9"],["o","",["Enter","\u23CE"],[0,"0 )"],"F10"],["`;",["","; :"],["Media_Play_Pause","\u23EF"],":","\u2260"],["LCtrl",["","Ctrl"]],["SC056",["","Ctrl"]],["x","",["XButton1","\u21A9"],["[","[ {"]],["c","",["XButton2","\u21AA"],["]","] }"]],["d","",["Bs","\u232B"],[5,"5 %"],"F5"],["v","",["Del","\u2326"],["\\","\\ |"]],["z","",["PrintScreen","\u2399"],"",""],["/",["","/ ?"],["Run calc","\u{1F4F1}"],"",""],["k","",["Tab","\u21C4"],["/","/ ?"],""],["h","",["LButton","\u25F4"],[6,"6 ^"],"F6"],[",",["",", <"],["MButton","\u2A40"],"<","\u2264"],[".",["",". >"],["RButton","\u25F7"],">","\u2265"],["RCtrl",["","Ctrl"]],["LWin",["","\u229E"]],["LShift",["","\u21E7"]],["F23",["","Sym"]],["Space",["",""]],["F24",["","Ext"]],["RShift",["","\u21E7"]],["RShift",["","\u21E7"]],["AppsKey",["","\u2263"]]];function v(i,t,a,d,l){function o(r){function c(e,f=0){if(f){if(f==1){if(e==i||e==d)return"-x, -y";if(e==t)return"x, -y";if(e==a)return"-x, y"}else if(f==2){if(e==i)return"x, -y";if(e==t||e==a)return"x, y";if(e==d)return"-x, y"}}else{if(e==i)return"0, -y";if(e==t)return"x, 0";if(e==a)return"0, y";if(e==d)return"-x, 0"}}function n(e){if(e==d)return t;if(e==t)return d;if(e==i)return a;if(e==a)return i}return`	${r}::
  ${l} & ${r}::
    If !move_${r} {
      if !GetKeyState("${r==d||r==t?i:d}","P") && !GetKeyState("${r==d||r==t?a:t}","P") && !GetKeyState("${n(r)}","P") {
        If press_${r}
          press_${r} = 2
        Else {
          press_${r} = 1
          SetTimer, speed_${r}_timer, -300
        }
        MouseMove, ${c(r)},, R
        KeyWait, ${r}, T.2
        if ErrorLevel {
          ErrorLevel = 0
          move_${r} := move__nth + 1
          move__nth++
          If speed_${r} {
            x *= x_multiplier
            y *= y_multiplier
            speed_${r} = 0
          }
          SetTimer, move_${r}_timer, %A_MouseDelay%
        } Else
          speed_${r} = 0
      } else {
        move_${r} := move__nth + 1
        move__nth++
        SetTimer, move_${r}_timer, %A_MouseDelay%
      }
    }
    return
  move_${r}_timer:
    If GetKeyState("${r}","P") && (layer_ext ? 1 : GetKeyState("${l}","P")) {
      if (move_${r} = move__nth) {
        If !GetKeyState("${r==d||r==t?i:d}","P") && !GetKeyState("${r==d||r==t?a:t}","P")
          MouseMove, ${c(r)},, R
        else if GetKeyState("${r==d||r==t?i:d}","P")
          MouseMove, ${c(r,1)},, R
        else if GetKeyState("${r==d||r==t?a:t}","P")
          MouseMove, ${c(r,2)},, R
      } ;else do nothing
    } Else {
      if !GetKeyState("${r==d||r==t?i:d}","P") && !GetKeyState("${r==d||r==t?a:t}","P") && !GetKeyState("${n(r)}","P") {
        resetSpeed()
        move__nth = 0
      } Else {
        move__nth--
        if (move_${r} = 1) {
          if move_${r==d||r==t?i:d} > 1
            move_${r==d||r==t?i:d}--
          if move_${r==d||r==t?a:t} > 1
            move_${r==d||r==t?a:t}--
          if move_${n(r)} > 1
            move_${n(r)}--
        } Else if (move_${r} = 2) {
          if move_${r==d||r==t?i:d} > 2
            move_${r==d||r==t?i:d}--
          if move_${r==d||r==t?a:t} > 2
            move_${r==d||r==t?a:t}--
          if move_${n(r)} > 2
            move_${n(r)}--
        }
      }
      move_${r} = 0
      SetTimer,, Off
    }
    Return
  speed_${r}_timer:
    if press_${r} = 2
      speed_${r} = 1
    press_${r} = 0
    Return
`}return o(i)+o(a)+o(t)+o(d)}function m(i,t,a){return`	*${t}::
    ${a} & ${t}::
    if !scroll_${t} {
      If press_${t}
        press_${t} = 2
      Else {
        press_${t} = 1
        SetTimer, speed_${t}_timer, -300
      }
      SendInput {Blind}{${i}}
      KeyWait, ${t}, T.2
      if ErrorLevel {
        ErrorLevel = 0
        scroll_${t} = 1
        scroll_speed := scroll_defualt_speed
        If speed_${t} {
          scroll_speed *= scroll_speed_multiplier
          speed_${t} = 0
        }
        setTimer, scroll_${t}_timer, %scroll_speed%
      } Else
          speed_${t} = 0
    }
    return
  scroll_${t}_timer:
    if GetKeyState("${t}","P")  && (layer_ext ? 1 : GetKeyState("${a}","P"))
      SendInput {Blind}{${i}}
    Else {
      scroll_speed := scroll_defualt_speed
      scroll_${t} = 0
      setTimer,, Off
    }
    return
  speed_${t}_timer:
    if press_${t} = 2
      speed_${t} = 1
    press_${t} = 0
    Return
`}function F(i,t,a,d){let l,o,r,c,n=`;
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

`;n+=`

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

`,n+=`;extend layer
#If GetKeyState("F24", "P") && !GetKeyState("F23", "P")
`,i.forEach(e=>{typeof e[2]=="object"&&e[2][0]&&(e[2][0].includes("Button")?n+=`	F24 & ${e[0]}::${e[2][0]}
`:e[2][0]=="Capslock"?n+=`	F24 & ${e[0]}::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"
		return
`:e[2][0]=="mouseL"?l=e[0]:e[2][0]=="mouseR"?o=e[0]:e[2][0]=="mouseU"?r=e[0]:e[2][0]=="mouseD"?c=e[0]:e[2][0]=="speed"?n+=`	F24 & ${e[0]}::
		speed_switcher := !speed_switcher
		resetSpeed()
		return
`:e[2][0].includes("Wheel")||(n+=`${e[2]&&!(typeof e[2]=="object"&&!e[2][0])?`	F24 & ${e[0]}::${typeof e[2]=="object"?e[2][0]:e[2]}
`:""}`))}),n+=`#If
#If layer_ext
`,i.forEach(e=>{typeof e[2]=="object"&&e[2][0]&&(e[2][0].includes("Button")?n+=`	${e[0]}::${e[2][0]}
`:e[2][0]=="Capslock"?n+=`	${e[0]}::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"
		return
`:e[2][0]=="speed"?n+=`	${e[0]}::
		speed_switcher := !speed_switcher
		resetSpeed()
		return
`:!e[2][0].includes("mouse")&&!e[2][0].includes("Wheel")&&(n+=`${e[2]&&!(typeof e[2]=="object"&&!e[2][0])?`	${e[0]}::${typeof e[2]=="object"?e[2][0]:e[2]}
`:""}`))}),n+=`#If

`,n+=`;symbol layer
#If GetKeyState("F23", "P") && !GetKeyState("F24", "P") && !layer_sym2
`,i.forEach(e=>{typeof e[3]=="object"&&(e[3][0]||e[3][0]==0)?typeof e[3][0]=="number"||e[3][0]=="`"||e[3][0]=="\\"||e[3][0]=="/"||e[3][0]=="="||e[3][0]=="["||e[3][0]=="]"?n+=`	F23 & ${e[0]}::${e[3][0]}
`:e[3][0]&&(n+=`	F23 & ${e[0]}::SendRaw ${e[3][0]}
		return
`):typeof e[3]=="number"||e[3]=="`"||e[3]=="\\"||e[3]=="/"||e[3]=="="||e[3]=="["||e[3]=="]"?n+=`	F23 & ${e[0]}::${e[3]}
`:e[3]&&(n+=`	F23 & ${e[0]}::SendRaw ${e[3]}
		return
`)}),n+=`#If
#If layer_sym
`,i.forEach(e=>{typeof e[3]=="object"&&(e[3][0]||e[3][0]==0)?typeof e[3][0]=="number"||e[3][0]=="`"||e[3][0]=="\\"||e[3][0]=="/"||e[3][0]=="="||e[3][0]=="["||e[3][0]=="]"?n+=`	${e[0]}::${e[3][0]}
`:e[3][0]&&(n+=`	${e[0]}::SendRaw ${e[3][0]}
		return
`):typeof e[3]=="number"||e[3]=="`"||e[3]=="\\"||e[3]=="/"||e[3]=="="||e[3]=="["||e[3]=="]"?n+=`	${e[0]}::${e[3]}
`:e[3]&&(n+=`	${e[0]}::SendRaw ${e[3]}
		return
`)}),n+=`#If

`,n+=`;symbol2 layer
#If layer_sym2
`,i.forEach(e=>{typeof e[4]=="object"&&e[4][0]?n+=`${e[4]&&!(typeof e[4]=="object"&&!e[4][0])?`	F23 & ${e[0]}::${typeof e[4]=="object"?e[4][0]:e[4]}
`:""}`:e[4]&&(!e[4].startsWith("F")&&!e[4].startsWith("^")?n+=`	F23 & ${e[0]}::SendRaw ${e[4]}
		return
`:n+=`	F23 & ${e[0]}::${e[4]}
`)}),n+=`#If

`,n+=`;mouse in extend layer
#If layer_ext || (GetKeyState("F24", "P") && !GetKeyState("F23", "P") && !layer_sym)
`,n+=v(r,o,c,l,"F24"),n+=m("wheelUp","q","F24"),n+=m("wheelDown","a","F24"),n+="#If",t.innerText=n,a.addEventListener("click",()=>{d.clipboard.writeText(n).then(()=>a.textContent="copied")})}function w(i,t){i.forEach(a=>{const d=document.createElement("span");function l(o,r){const c=document.createElement("kbd");r&&(c.setAttribute("class",r),r.includes("shift")&&c.setAttribute("data-shift",a[o][1].split(" ")[1])),c.appendChild(document.createTextNode(typeof a[o]=="object"?r.includes("shift")?a[o][1].split(" ")[0]:a[o][1]:typeof a[o]!="number"&&a[o].includes("`")&&a[o].length>1?a[o].replace("`",""):a[o])),d.appendChild(c)}a[0]=="Bs"||a[0]=="Enter"||a[0]=="RShift"||a[0]=="LShift"||a[0]=="SC056"||a[0]=="LCtrl"||a[0]=="RCtrl"||a[0]=="AppsKey"||a[0]=="LWin"||a[0]=="RWin"||a[0]=="CapsLock"||a[0]=="Tab"||a[0]=="LAlt"||a[0]=="RAlt"||a[0]=="Space"?l(1,"modifier"):typeof a[1]=="object"&&a[1][1].includes(" ")?l(1,"key shift"):a[1]?l(1,"key"):l(0,"key"),a[2]&&l(2,"extend"),typeof a[3]=="object"?l(3,"symbol shift"):a[3]&&l(3,"symbol"),a[4]&&a[4].startsWith("F")?l(4,"symbol2 f"):a[4]&&l(4,"symbol2"),t.appendChild(d)})}const y=document.createElement("pre"),g=document.createElement("button"),h=document.createElement("div"),u=document.createElement("div"),_=document.createElement("div"),$=document.createElement("main");h.id="script";u.id="keyboard";_.id="keyboardCtx";g.textContent="copy";h.appendChild(g);h.appendChild(y);_.appendChild(u);$.appendChild(_);$.appendChild(h);document.body.appendChild($);F(x,y,g,navigator);w(x,u);let s=!1,p=!1;const E=document.querySelectorAll(".key"),K=document.querySelectorAll(".extend"),C=document.querySelectorAll(".symbol"),P=document.querySelectorAll(".symbol2"),I=document.querySelector("#keyboard>span:nth-child(59)"),G=document.querySelector("#keyboard>span:nth-child(57)");function b(i=1,t=0,a=0,d=0){E.forEach(l=>l.style.opacity=i),K.forEach(l=>l.style.opacity=t),C.forEach(l=>l.style.opacity=a),P.forEach(l=>l.style.opacity=d)}I.addEventListener("click",()=>{s=!s,s&&!p?b(0,1):s&&p?b(0,0,0,1):!s&&p?(b(),p=0):b()});G.addEventListener("click",()=>{p=!p,!s&&p?b(0,0,1):s&&p?b(0,0,0,1):s&&!p?(b(),s=0):b()});
