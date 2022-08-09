const w=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const t of l.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&d(t)}).observe(document,{childList:!0,subtree:!0});function a(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function d(o){if(o.ep)return;o.ep=!0;const l=a(o);fetch(o.href,l)}};w();const S=[["`",["","` ~"],["Capslock","\u21EA"],"",""],["1",["","1 !"],["Browser_Search","\u{1F50D}"],"",""],["2",["","2 @"],["Media_Stop","\u25FC"],"",""],["3",["","3 #"],["Media_Prev","\u23EE"],"",""],["4",["","4 $"],["Media_Next","\u23ED"],""],["5",["","5 %"],"",""],["6",["","6 ^"]],["\\",["","\\ |"]],["7",["","7 &"]],["8",["","8 *"],["^Numpad0","\u229A"],""],["9",["","9 ("],["^NumpadAdd","\u2295"],""],["0",["","0 )"],["^NumpadSub","\u229D"],"","\u2026"],["=",["","= +"],["Volume_Mute","\u{1F507}"],"","\xB1"],["Bs",["","\u232B"]],["Tab",["","\u21C4"]],["q","",["WheelUp","\u21C8"]],["w","",["Esc","\u2297"],"{"],["f","",["mouseU","\u25B4"],"}"],["p","",["speed","\u2387"]],["b","",["PgUp","\u21DE"]],["[",["","[ {"],["","\u2600"]],["j","",["",""]],["l","",["Home","\u21F1"]],["u","",["Up","\u2191"],")"],["y","",["End","\u21F2"],"("],["'",["",`' "`],["Volume_Down","\u{1F509}"],["`","` ~"],"F11"],["-",["","- _"],["Volume_Up","\u{1F50A}"],["=","= +"],"F12"],["Enter",["","\u23CE"]],["LAlt",["","Alt"]],["a","",["WheelDown","\u21CA"],[1,"1 !"],"F1"],["r","",["mouseL","\u25C2"],[2,"2 @"],"F2"],["s","",["mouseD","\u25BE"],[3,"3 #"],"F3"],["t","",["mouseR","\u25B8"],[4,"4 $"],"F4"],["g","",["PgDn","\u21DF"]],["]",["","] }"],["","\u2600"]],["m","",["AppsKey","\u2263"]],["n","",["Left","\u2190"],[7,"7 &"],"F7"],["e","",["Down","\u2193"],[8,"8 *"],"F8"],["i","",["Right","\u2192"],[9,"9 ("],"F9"],["o","",["Enter","\u23CE"],[0,"0 )"],"F10"],["`;",["","; :"],["Media_Play_Pause","\u23EF"],":","\u2260"],["LCtrl",["","Ctrl"]],["SC056",["","Ctrl"]],["x","",["XButton1","\u21A9"],["[","[ {"]],["c","",["XButton2","\u21AA"],["]","] }"]],["d","",["Bs","\u232B"],[5,"5 %"],"F5"],["v","",["Del","\u2326"],["\\","\\ |"]],["z","",["PrintScreen","\u2399"],"",""],["/",["","/ ?"],["Run calc","\u{1F4F1}"],"",""],["k","",["Tab","\u21C4"],["/","/ ?"],""],["h","",["LButton","\u25F4"],[6,"6 ^"],"F6"],[",",["",", <"],["MButton","\u2A40"],"<","\u2264"],[".",["",". >"],["RButton","\u25F7"],">","\u2265"],["RCtrl",["","Ctrl"]],["LWin",["","\u229E"]],["LShift",["","\u21E7"]],["F23",["","Sym"]],["Space",["",""]],["F24",["","Ext"]],["RShift",["","\u21E7"]],["RShift",["","\u21E7"]],["AppsKey",["","\u2263"]]];function E(i,r,a,d,o){function l(t){function c(e,m=0){if(m){if(m==1){if(e==i||e==d)return"-x, -y";if(e==r)return"x, -y";if(e==a)return"-x, y"}else if(m==2){if(e==i)return"x, -y";if(e==r||e==a)return"x, y";if(e==d)return"-x, y"}}else{if(e==i)return"0, -y";if(e==r)return"x, 0";if(e==a)return"0, y";if(e==d)return"-x, 0"}}function n(e){if(e==d)return r;if(e==r)return d;if(e==i)return a;if(e==a)return i}return`	${t}::
  ${o} & ${t}::
    If !move_${t} {
      if !GetKeyState("${t==d||t==r?i:d}","P") && !GetKeyState("${t==d||t==r?a:r}","P") && !GetKeyState("${n(t)}","P") {
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
    If GetKeyState("${t}","P") && (layer_ext ? 1 : GetKeyState("${o}","P")) {
      if (move_${t} = move__nth) {
        If !GetKeyState("${t==d||t==r?i:d}","P") && !GetKeyState("${t==d||t==r?a:r}","P")
          MouseMove, ${c(t)},, R
        else if GetKeyState("${t==d||t==r?i:d}","P")
          MouseMove, ${c(t,1)},, R
        else if GetKeyState("${t==d||t==r?a:r}","P")
          MouseMove, ${c(t,2)},, R
      } ;else do nothing
    } Else {
      if !GetKeyState("${t==d||t==r?i:d}","P") && !GetKeyState("${t==d||t==r?a:r}","P") && !GetKeyState("${n(t)}","P") {
        resetSpeed()
        move__nth = 0
      } Else {
        move__nth--
        if (move_${t} = 1) {
          if move_${t==d||t==r?i:d} > 1
            move_${t==d||t==r?i:d}--
          if move_${t==d||t==r?a:r} > 1
            move_${t==d||t==r?a:r}--
          if move_${n(t)} > 1
            move_${n(t)}--
        } Else if (move_${t} = 2) {
          if move_${t==d||t==r?i:d} > 2
            move_${t==d||t==r?i:d}--
          if move_${t==d||t==r?a:r} > 2
            move_${t==d||t==r?a:r}--
          if move_${n(t)} > 2
            move_${n(t)}--
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
`}return l(i)+l(a)+l(r)+l(d)}function v(i,r,a){return`	*${r}::
    ${a} & ${r}::
    if !scroll_${r} {
      If press_${r}
        press_${r} = 2
      Else {
        press_${r} = 1
        SetTimer, speed_${r}_timer, -300
      }
      SendInput {Blind}{${i}}
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
      SendInput {Blind}{${i}}
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
`}function K(i,r,a,d){let o,l,t,c,n=`;
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
`:e[2][0]=="mouseL"?o=e[0]:e[2][0]=="mouseR"?l=e[0]:e[2][0]=="mouseU"?t=e[0]:e[2][0]=="mouseD"?c=e[0]:e[2][0]=="speed"?n+=`	F24 & ${e[0]}::
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
`,n+=E(t,l,c,o,"F24"),n+=v("wheelUp","q","F24"),n+=v("wheelDown","a","F24"),n+="#If",r.innerText=n,a.addEventListener("click",()=>{d.clipboard.writeText(n).then(()=>a.textContent="copied")})}function C(i,r){i.forEach(a=>{const d=document.createElement("span");function o(l,t){const c=document.createElement("kbd");t&&(c.setAttribute("class",t),t.includes("shift")&&c.setAttribute("data-shift",a[l][1].split(" ")[1])),c.appendChild(document.createTextNode(typeof a[l]=="object"?t.includes("shift")?a[l][1].split(" ")[0]:a[l][1]:typeof a[l]!="number"&&a[l].includes("`")&&a[l].length>1?a[l].replace("`",""):a[l])),d.appendChild(c)}a[0]=="Bs"||a[0]=="Enter"||a[0]=="RShift"||a[0]=="LShift"||a[0]=="SC056"||a[0]=="LCtrl"||a[0]=="RCtrl"||a[0]=="AppsKey"||a[0]=="LWin"||a[0]=="RWin"||a[0]=="CapsLock"||a[0]=="Tab"||a[0]=="LAlt"||a[0]=="RAlt"||a[0]=="Space"?o(1,"modifier"):typeof a[1]=="object"&&a[1][1].includes(" ")?o(1,"key shift"):a[1]?o(1,"key"):o(0,"key"),a[2]&&o(2,"extend"),typeof a[3]=="object"?o(3,"symbol shift"):a[3]&&o(3,"symbol"),a[4]&&a[4].startsWith("F")?o(4,"symbol2 f"):a[4]&&o(4,"symbol2"),r.appendChild(d)})}const F=document.createElement("pre"),$=document.createElement("button"),b=document.createElement("div"),x=document.createElement("div"),y=document.createElement("div"),f=document.createElement("div"),g=document.createElement("a"),u=document.createElement("a"),_=document.createElement("main");b.id="script";x.id="keyboard";y.id="keyboardCtx";$.textContent="copy";g.textContent="MSKLC.zip";g.href="./../src/assets/uniparse/msklc.zip";g.download="msklc.zip";u.textContent="AUTOHOTKEY.zip";u.href="./../src/assets/uniparse/autohotkey.zip";u.download="autohotkey.zip";f.id="download";f.appendChild(g);f.appendChild(u);b.appendChild($);b.appendChild(F);y.appendChild(x);_.appendChild(y);_.appendChild(f);_.appendChild(b);document.body.appendChild(_);K(S,F,$,navigator);C(S,x);let s=!1,p=!1;const P=document.querySelectorAll(".key"),I=document.querySelectorAll(".extend"),T=document.querySelectorAll(".symbol"),G=document.querySelectorAll(".symbol2"),A=document.querySelector("#keyboard>span:nth-child(59)"),W=document.querySelector("#keyboard>span:nth-child(57)");function h(i=1,r=0,a=0,d=0){P.forEach(o=>o.style.opacity=i),I.forEach(o=>o.style.opacity=r),T.forEach(o=>o.style.opacity=a),G.forEach(o=>o.style.opacity=d)}A.addEventListener("click",()=>{s=!s,s&&!p?h(0,1):s&&p?h(0,0,0,1):!s&&p?(h(),p=0):h()});W.addEventListener("click",()=>{p=!p,!s&&p?h(0,0,1):s&&p?h(0,0,0,1):s&&!p?(h(),s=0):h()});
