const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};V();function f(e){return new Promise(t=>setTimeout(t,e))}function K(e,t){return new Promise(r=>e.addEventListener(t,r,{once:!0}))}async function X(e,t,r){let n=await Q(e);n=="pending"&&(await t(),n=await Promise.all(e),await(r==null?void 0:r()))}async function Q(e){if(!Array.isArray(e)){const r={};return await Promise.race([e,r]).then(n=>n===r?"pending":"fulfilled").catch(()=>"rejected")}const t=new Set;for(const r of e){const n={},o=await Promise.race([r,n]).then(s=>s===n?"pending":"fulfilled").catch(()=>"rejected");if(o=="rejected")return o;t.add(o)}return t.has("pending")?"pending":"fulfilled"}var Y="./assets/mediaIcons.5c839f27.json",Z="./assets/UniParse.75cadb2a.avif 66w, ./assets/UniParse.8d145562.webp 66w";let b={name:"uniparse",side:"right",srcset:Z,urls:["https://youtube.com/channel/UCvNOch5x46MDaejgQ6SkzUg","https://facebook.com/UniParse","https://instagram.com/UniParse","https://linkedin.com/in/UniParse","https://github.com/TheUniParse","https://twitter.com/UniParse"]};async function ee(e,t=0,r=2500){const n=await re();e.append(n),await f(t),te(r)}async function te(e=2500){const t=document.querySelector("#mediaIcons");t.style.transform="translateY(-.3rem)";let r,n;t.querySelector("img").addEventListener("click",a),t.addEventListener("pointerenter",async()=>{clearTimeout(n),await K(t,"pointerleave"),n=setTimeout(()=>{r&&a()},e)},{once:!1});const s=[...t.querySelectorAll("a")];function a(){s.forEach((g,c)=>{const i=60*(r?c:s.length-c),J=r?".3, -1,      1, 1":" 0,  0,     .7, 2";g.style.transition=`transform 200ms ${i}ms cubic-bezier(${J})`,g.style.transform=r?"":"translateX(0)"}),r=!r}}async function re(){const e=document.createElement("address");e.id="mediaIcons";const t=await ne(),r=b.urls.map(o=>{const s=document.createElement("a");s.target="_blank",s.href=o;const a=o.slice(8,o.indexOf(".")),g=t[a];s.innerHTML=g;const c=s.querySelector("svg");c.role="img";const i=document.createElement("title");return i.innerText=`${a} of ${b.name}`,c.prepend(i),s});e.append(...r);const n=document.createElement("img");return n.srcset=b.srcset,n.alt=b.name,e.append(n),b=null,e}async function ne(){return await(await fetch(Y)).json()}const l={power:`
55 46 40 34 29 29 35   47   29 29 30 35 42  51
42  30 25 21 23 26   44   34 22 20 24 30 36  47
34   16 13 11 10 29   42   29 10 11 13 16 34  48
46  33 27 24 18 22  37  37  22 18 24 27 33
40     26  10         18         10  26   40  60`,standard:`
\`  1 2 3 4 5 6   \\   7 8 9 0 =   \u232B
\u21C4    q w f p b   [   j l u y ' -   \u23CE
alt   a r s t g   ]   m n e i o ;   \u23CE
\u21E7    \u21E7 x c d v   z /   k h , . \u21E7
\u229E      \u2A01 \u{1F4B2}     space    \u2B50 \u2A01 \u2A01 \u2263`,ext:`
.  . . . . . .   .   . . . . .    .
.   \u21C8 \u2297 \u25B4 \u2387 .   .   . \u21F1 \u2191 \u21F2 \u21DE \u21DF   .
.    \u21CA \u25C2 \u25BE \u25B8 \u2263   .   \u21C4 \u2190 \u2193 \u2192 \u23CE .   .
.   . \u21A9 \u21AA \u232B \u2326   . .   \u21EA \u25F4 \u29BA \u25F7 .
.       . .      .        . . . .`,ext2:`
.  . . . . . .   .   . . . . .      .
.   . . . . .   .   . \u2399 \u{1F50A} \u229A \u25FC .   .
.   . . \u{1F50D} . .   .  \u{1F4F1} \u23EE \u{1F509} \u23ED \u23EF \u{1F507}   .
.  . . . . .   . .   \u2600 \u2733 \u2295 \u229D .
.       . .     .     . . . .`,sym:`
\u22C6  \u25AA \u25B8 . . \xBB .   .   \u203A \u2022 . . \u2043  .
. \` [ ] . .   .   .  . ( ) " _  .
.   1 2 3 4 .   \u20AC  \\ 7 8 9 0 :  .
.  . { } 5 =   . .   / 6 < > .
.     . .       .      . . . .`,sym2:`
. \u2152 \xBD  \u2153  \xBC  \u2155  .    .    \xBE  \u2070  .  .  .   .
.  \u{1F4A1} \u26A0\uFE0F  \u2191  \u03C0  \u2248    \u2209   .  .  \u2264  \u2265  \u2026   \xB1   .
.   F1 F2 F3 F4 \u2260    \u2208   .  F7 F8 F9 F10  .   .
.  .  \u2717  \u32BF F5 F11  . .  F12 F6  .  .  .
.      .   .         .         .   .   .   .`},U=l.standard;oe();l.shift=A(l.standard);l.symShift=A(l.sym,!1);l.standardHtk=l.standard.map(e=>v(e));l.extHtk=l.ext.map(e=>v(e));l.ext2Htk=l.ext2.map(e=>v(e));l.standardRows=T(U);l.standardHtkRows=T(U.split("").map(e=>v(e)).join(""));function oe(){Object.entries(l).forEach(([e,t])=>l[e]=t.replace(`
`,"").replaceAll(`
`," ").replaceAll("    "," ").replaceAll("   "," ").replaceAll("  "," ").split(" "))}function T(e){const t=["top","upper","home","lower","bottom"],r=e.replace(`
`,"").replaceAll("    "," ").replaceAll("   "," ").replaceAll("  "," ").split(`
`);return r.forEach((n,o)=>r[o]=n.split(" ")),Object.fromEntries(t.map((n,o)=>[n,r[o]]))}function A(e,t=!0){return e.map(r=>{if(t&&r==".")return">";switch(r){case"`":return"~";case"1":return"!";case"2":return"@";case"3":return"#";case"4":return"$";case"5":return"%";case"6":return"^";case"7":return"&";case"8":return"*";case"9":return"(";case"0":return")";case"=":return"+";case"-":return"_";case"\\":return"|";case"/":return"?";case"[":return"{";case"]":return"}";case",":return"<";case";":return":";case"'":return'"';default:return r.length==1&&r>="a"&&r<="z"?r.toUpperCase():r}})}function v(e){switch(e){case"\u{1F4B2}":return"F23";case"\u2B50":return"F24";case"\u2297":return"Esc";case"\u238B":return"Esc";case"\u21C4":return"Tab";case"\u23CE":return"Enter";case"\u21EA":return"Capslock";case"\u21E7":return"LShift";case"\u2A01":return"LCtrl";case"\u229E":return"LWin";case"\u2263":return"AppsKey";case"\u232B":return"Bs";case"\u2326":return"Del";case"\u21F1":return"Home";case"\u21F2":return"End";case"\u21DE":return"PgUp";case"\u21DF":return"PgDn";case"\u2191":return"Up";case"\u2193":return"Down";case"\u2192":return"Right";case"\u2190":return"Left";case"\u25B4":return"mouseU";case"\u25BE":return"mouseD";case"\u25B8":return"mouseR";case"\u25C2":return"mouseL";case"\u25F4":return"LButton";case"\u25F7":return"RButton";case"\u29BA":return"MButton";case"\u21A9":return"XButton1";case"\u21AA":return"XButton2";case"\u21C8":return"WheelUp";case"\u21CA":return"WheelDown";case"\u2387":return"toggleMouseSpeed";case"\u23EF":return"Media_Play_Pause";case"\u25FC":return"Media_Stop";case"\u23ED":return"Media_Next";case"\u23EE":return"Media_Prev";case"\u{1F507}":return"Volume_Mute";case"\u{1F50A}":return"Volume_Up";case"\u{1F509}":return"Volume_Down";case"\u2600":return"brightnessUp";case"\u2733":return"brightnessDown";case"\u{1F50D}":return"Browser_Search";case"\u229A":return"^Numpad0";case"\u2295":return"^NumpadAdd";case"\u229D":return"^NumpadSub";case"\u2399":return"PrintScreen";case"\u{1F4F1}":return'Run("calc")';case"%":return"`%";case";":return"`;";default:return e}}function se(e){const t=e.querySelectorAll("button");r("pinkey",1,2,13,16,26,27,30,40,41),r("ring",3,12,17,25,31,39,45,54),r("middle",5,10,18,24,32,38,46,53),r("indexL",6,7,19,20,33,34,47,48,49),r("indexR",9,22,23,36,37,50,51,52),r("dark",1,2,3,5,6,7,9,10,12,13,22,27,41,49,50),r("mix_ring_middle",4),r("mix_middle_ring",11),r("mix_index_top",8),r("mix_index_upper",21),r("mix_index_home",35),r("highLight",30,31,32,33,37,38,39,40,47,52,58,60);function r(n,...o){o.forEach(s=>{t[s-1].classList.add(n)})}}var ae="./assets/pop1.b5fe646f.wav",ie="./assets/pop2.5719bcba.wav",le="./assets/pop3.4711d144.wav";const L=[ae,ie,le];function ce(e=0,t=[]){return t.push(new Promise(r=>setTimeout(r,e)),...L.map((r,n)=>me(n,de(r)))),t}function ue(){const e=document.querySelectorAll("#keyboard button");document.addEventListener("keydown",t=>{const{key:r,code:n}=t;console.log(n,r);const o=[].find.call(e,s=>s.innerText==r||s.className.split(" ").find(a=>a==r||a=="_"+r||a=="space"&&r==" "||a=="LShift"&&r=="Shift"));!o||(L[Math.floor(Math.random()*3)].play(),o.style.boxShadow="0 0 1px 0 #111",o.style.transform="translate(0.1em, 0.1em)",document.addEventListener("keyup",function s({key:a}){r==a&&(document.removeEventListener("keyup",s),o.style.boxShadow="",o.style.transform="")},{once:!1}))})}async function de(e){const t=new AudioContext,r=await fetch(e),n=await r.arrayBuffer(),o=await t.decodeAudioData(n);function s(){const a=t.createBufferSource();return a.buffer=o,a.connect(t.destination),a.start(t.currentTime),a}return{play:s}}async function me(e,t){L[e]=await t}const k=document.createElement("div");k.id="keyboard";const pe=[...Object.entries(l.standardRows)],ye=pe.map(([e,t])=>{const r=document.createElement("div");r.id=`${e}_row`,r.className="row";const n=t.map((o,s)=>{const a=document.createElement("button");return a.textContent=o,a.className=ge(l.standardHtkRows[e][s]),"\u232B \u21C4 \u23CE alt \u21E7 \u229E \u2A01 \u{1F4B2} space \u2B50 \u2263".split(" ").includes(o)&&a.classList.add("modifier"),a});return r.append(...n),r});k.append(...ye);se(k);function ge(e){if(+e||e==0)return`_${e}`;switch(e){case"`":return"backtick";case"-":return"hyphon";case"=":return"equal";case"/":return"slash";case"\\":return"backSlash";case"[":return"openBreacket";case"]":return"closeBracket";case"'":return"quate";case"`;":return"semiColon";case",":return"comma";case".":return"period";default:return e}}var fe="./assets/UniParse.8b8d5d1d.zip",he="./assets/msklc.100e6e50.zip";const h=document.createElement("fieldset");h.id="switcher";h.name="layer";const R=document.createElement("legend");R.innerText="layout switcher";h.append(R);const be="power standard shift ext ext2 sym symShift sym2",_e=be.split(" ").map(e=>{const t=document.createElement("label");t.id=`label_${e}`;const r=document.createElement("input");return r.type="radio",r.id=`radio_${e}`,r.name="layer",r.value=e,e=="standard"&&r.setAttribute("checked",!0),t.append(r,e),t});h.append(..._e);function we(){const e=document.querySelectorAll("#keyboard button");h.addEventListener("change",t=>e.forEach((r,n)=>r.textContent=l[t.target.value][n]))}const S=document.createElement("div");S.id="panel";S.append(h);const C=document.createElement("div");C.id="download";S.append(C);const $=document.createElement("a");$.textContent="MsKLC";$.download="msklc.zip";$.href=he;C.append($);const M=document.createElement("a");M.textContent="AutoHotKey";M.download="autohotkey.zip";M.href=fe;C.append(M);const p="F23",y="F24",u={symKey:p,extKey:y};u.intro=`;
;
;   made by UniParse
;   github.com/TheUniParse
;   twitter.com/UniParse
;
;
#Requires AutoHotkey v2.0
ProcessSetPriority 'High'
Persistent
#Warn  ; detecting common errors.

x_slow := 1.5
x_default := 2.8
x_defaultMultiply := 1.01
x_doubleMultiply := 1.1
x_tripleMultiply := 3

y_slow := x_slow
y_default := x_default
y_defaultMultiply := x_defaultMultiply
y_doubleMultiply := x_doubleMultiply
y_tripleMultiply := x_tripleMultiply

x := x_default
y := y_default

mouse_speed_lvl := 0
x_max := mouse_speed_lvl ? x_default : 8
y_max := x_max

wheelDelay_default := 40
wheelDelay_multiplier := .25

brightnessJump := 10
currentBrightness := getCurrentBrightness()

SetCapsLockState('AlwaysOff')

`;u.switchers=`${p}::symSwitcher('${p}', 400, 200)
${y}::extSwitcher('${y}', 400, 200)`;u.layer_condition={ext:`!layer_ext2 && (
  (
    layer_ext
    && !GetKeyState("${p}", "P")
  ) || (
    !layer_ext
    && GetKeyState("${y}", "P")
    && !GetKeyState("${p}", "P")
  ) || (
    layer_sym
    && GetKeyState("${y}", "P")
  )
)`,ext2:"layer_ext2",sym:`!layer_sym2 && (
  (
    layer_sym
    && !GetKeyState("${y}", "P")
  ) || (
    !layer_sym
    && GetKeyState("${p}", "P")
    && !GetKeyState("${y}", "P")
  ) || (
    layer_ext
    && GetKeyState("${p}", "P")
  )
)`,sym1:`GetKeyState("${p}", "P") && GetKeyState("${y}", "P")`,sym2:"layer_sym2"};u.config=`layer_ext := 0
layer_ext2 := 0
layer_sym := 0
layer_sym2 := 0

switchers := {
  holding_sym: 0,
  holding_ext: 0,
  pressCount_sym: 0,
  pressCount_ext: 0
}

symSwitcher(key, doubleDelay := 400, holdDelay := 200) {
  global

  if switchers.holding_sym
    return

  switchers.holding_sym := 1
  layer_sym := 0

  If !switchers.pressCount_sym {
    switchers.pressCount_sym := 1
    SetTimer(double_sym_timer, -doubleDelay)
    KeyWait(key)
    switchers.holding_sym := 0
  } Else if KeyWait(key, 'T' . holdDelay / 1000) {
    layer_ext := 0
    layer_sym := 1
    switchers.pressCount_sym := 0
    switchers.holding_sym := 0
  } else {
    layer_sym2 := 1
    KeyWait(key)
    layer_sym2 := 0
    switchers.holding_sym := 0
  }
}

double_sym_timer() {
  global
  switchers.pressCount_sym := 0
}

extSwitcher(key, doubleDelay := 400, holdDelay := 200) {
  global

  if switchers.holding_ext
    return
  
  switchers.holding_ext := 1
  layer_ext := 0

  If !switchers.pressCount_ext {
    switchers.pressCount_ext := 1
    SetTimer(double_ext_timer, -doubleDelay)
    KeyWait(key)
    switchers.holding_ext := 0
  } Else if KeyWait(key, 'T' . holdDelay / 1000) {
    layer_sym := 0
    layer_ext := 1
    switchers.pressCount_ext := 0
    switchers.holding_ext := 0
  } else {
    layer_ext2 := 1
    KeyWait(key)
    layer_ext2 := 0
    switchers.holding_ext := 0        
  }
}

double_ext_timer() {
  global
  switchers.pressCount_ext := 0
}`;function xe(e,t,r,n,o){return`mouse := {
  boostSpeed: 0, ; on double/triple click  
  moveCount_total: 0,
  moveCount: Map(
    'up', 0,
    'down', 0,
    'right', 0,
    'left', 0,
  ),
  pressCount: Map(
    'up', 0,
    'down', 0,
    'right', 0,
    'left', 0,
  ),
  keys: Map(
    'up', '${t}',
    'down', '${n}',
    'right', '${r}',
    'left', '${o}',
  )
}

mouse_move(dir) {
  global

  ;ignore auto press repeat of holding.
  If mouse.moveCount.get(dir)
    return

  if isCombo(dir) {
    mouse.moveCount.set(dir, ++mouse.moveCount_total)
    SetTimer(mouse_moveCount_timer.bind(dir), A_MouseDelay)
    return
  }

  if !mouse.pressCount.get(dir) {
    mouse.pressCount.set(dir, 1)
    SetTimer(mouse_boostSpeed_timer.bind(dir), -300)
  } else
    mouse.pressCount.set(dir, 2)

  moveMove_switch(dir) ;no combo

  if KeyWait(mouse.keys.get(dir), 'T.1')
    mouse.boostSpeed := 0
  Else {
    ;triple clicks
    If mouse.boostSpeed {
      x *= x_tripleMultiply
      y *= y_tripleMultiply
    }
    
    mouse.moveCount.set(dir, ++mouse.moveCount_total)
    SetTimer(mouse_moveCount_timer.bind(dir), A_MouseDelay)
  }
}

mouse_boostSpeed_timer(dir) {
  global
  if mouse.pressCount.get(dir) == 2
    mouse.boostSpeed := 1
  mouse.pressCount.set(dir, 0)
}

mouse_moveCount_timer(dir) {
  global
  
  If GetKeyState(mouse.keys.get(dir), 'P') && (
    layer_ext
    || GetKeyState('${e}', 'P')
    ) {
    if mouse.moveCount.get(dir) != mouse.moveCount_total
      return
    
    multiplyMouseSpeed(mouse.boostSpeed) ;single/double clicks
    moveMove_switch(dir)

    return
  }

  if isCombo(dir)
    mouseMoveCountersDecrement(dir)
  Else {
    resetMouseSpeed()
    mouse.boostSpeed := 0
    mouse.moveCount_total := 0
  }

  mouse.moveCount.set(dir, 0)
  SetTimer( , 0)
}

isCombo(dir) {
  for key, value in mouse.keys
    if key != dir && GetKeyState(value, 'p')
      return true
  return false
}

resetMouseSpeed() {
  global
  x := mouse_speed_lvl ? x_slow : x_default
  y := mouse_speed_lvl ? y_slow : y_default
}

toggleMouseSpeed() {
  global
  mouse_speed_lvl := !mouse_speed_lvl
  resetMouseSpeed()
}

multiplyMouseSpeed(boost) {
  global

  if x <= x_max {
    x *= boost ? x_doubleMultiply : x_defaultMultiply
    if x > x_max
      x := x_max
  }

  if y <= y_max {
    y *= boost ? y_doubleMultiply : y_defaultMultiply
    if y > y_max
      y := y_max
  }
}

mouseMoveCountersDecrement(dir) {
  global

  if mouse.moveCount.get(dir) != 1
  && mouse.moveCount.get(dir) != 2
    return

  mouse.moveCount_total--

  for key, value in mouse.moveCount
    if key != dir && value > mouse.moveCount.get(dir)
      mouse.moveCount.set(key, --value)
}

moveMove_switch(dir) {      
  vertical := dir == 'up' || dir == 'down'
  if GetKeyState(mouse.keys.get(vertical ? 'left' : 'up'), 'P')
    switch dir {
      case 'up', 'left': MouseMove(-x, -y,, 'R')
      case 'right': MouseMove(x, -y,, 'R')
      case 'down': MouseMove(-x, y,, 'R')
    }
  else if GetKeyState(mouse.keys.get(vertical ? 'right' : 'down'), 'P')
    switch dir {
      case 'up': MouseMove(x, -y,, 'R')
      case 'right', 'down': MouseMove(x, y,, 'R')
      case 'left': MouseMove(-x, y,, 'R')
    }
  else
    switch dir {
      case 'up': MouseMove(0, -y,, 'R')
      case 'right': MouseMove(x, 0,, 'R')
      case 'down': MouseMove(0, y,, 'R')
      case 'left': MouseMove(-x, 0,, 'R')
    }
}
`}function ve(e,t,r){return`wheel := {
  boostSpeed_up: 0,
  boostSpeed_down: 0,
  scrolling_up: 0,
  scrolling_down: 0,
  pressCount_up: 0,
  pressCount_down: 0,
}
`+n(t)+n(r);function n(c){const i=a(c);return o(c,i)+s(c,i)}function o(c,i){return`
wheelScroll_${i}() {
  global

  if wheel.scrolling_${i}
    return

  If !wheel.pressCount_${i} {
    wheel.pressCount_${i} := 1
    SetTimer(wheel_${i}_boostSpeed_timer, -300)
  } Else
    wheel.pressCount_${i} := 2

  SendInput '{Blind}{${g(c)}}'

  if KeyWait('${c}', 'T.2') 
    wheel.boostSpeed_${i} := 0
  Else{
    wheel.scrolling_${i} := 1
    wheelDelay := wheelDelay_default
    
    If wheel.boostSpeed_${i} {
      wheelDelay *= wheelDelay_multiplier
      wheel.boostSpeed_${i} := 0
    }

    setTimer(wheel_${i}_scrolling_timer, wheelDelay)
  }   
}
`}function s(c,i){return`
wheel_${i}_scrolling_timer() {
  global
  if GetKeyState("${c}","P") && (layer_ext || GetKeyState("${e}","P"))
    SendInput '{Blind}{${g(c)}}'
  Else {
    wheelDelay := wheelDelay_default
    wheel.scrolling_${i} := 0
    setTimer( , 0)
  }
}

wheel_${i}_boostSpeed_timer() {
  global
  if wheel.pressCount_${i} = 2
    wheel.boostSpeed_${i} := 1
  wheel.pressCount_${i} := 0
}
`}function a(c){switch(c){case t:return"up";case r:return"down"}}function g(c){switch(c){case t:return"WheelUp";case r:return"WheelDown"}}}function ke(){return`; setBrightness(0)
; minimumBrightness := getCurrentBrightness()
; setBrightness(currentBrightness)

brightnessUp() {
  global
  brightness := (currentBrightness < 100 - brightnessJump)
    ? (currentBrightness += brightnessJump)
    : 100
  setBrightness(brightness)
}

brightnessDown() {
  global
  brightness := (currentBrightness > brightnessJump)
    ? (currentBrightness -= brightnessJump)
    : 0
  setBrightness(brightness)
}

getCurrentBrightness() {
	For property in ComObjGet( "winmgmts:\\\\.\\root\\WMI" ).ExecQuery( "SELECT * FROM WmiMonitorBrightness" )
		current_brightness := property.CurrentBrightness
	return current_brightness
}

setBrightness( brightness := 50, timeout := 1 ) {
	For property in ComObjGet( "winmgmts:\\\\.\\root\\WMI" ).ExecQuery("SELECT * FROM WmiMonitorBrightnessMethods" )
		property.WmiSetBrightness( timeout, brightness)
}
`}const m=l.standard.map(e=>e==";"?"`;":e);let W,H,F,G,z,j;const O=`${u.intro}
;config layers \u2699\uFE0F      \u2699\uFE0F      \u2699\uFE0F      \u2699\uFE0F      \u2699\uFE0F      \u2699\uFE0F
${u.switchers}


;extend layer \u{1F31F}    \u{1F31F}    \u{1F31F}    \u{1F31F}    \u{1F31F}    \u{1F31F}    \u{1F31F}    \u{1F31F}
#HotIf ${u.layer_condition.ext}
${D("extHtk")}#HotIf


;extend2 layer \u{1F31F}\u{1F31F}     \u{1F31F}\u{1F31F}     \u{1F31F}\u{1F31F}     \u{1F31F}\u{1F31F}     \u{1F31F}\u{1F31F}
#HotIf ${u.layer_condition.ext2}
${D("ext2Htk")}#HotIf


;symbol layer \u{1F4B2}     \u{1F4B2}     \u{1F4B2}     \u{1F4B2}     \u{1F4B2}     \u{1F4B2}     \u{1F4B2}
#HotIf ${u.layer_condition.sym}
${Se()}#HotIf


;symbol1 layer \u21E7\u{1F4B2}      \u21E7\u{1F4B2}      \u21E7\u{1F4B2}      \u21E7\u{1F4B2}      \u21E7\u{1F4B2}
#HotIf ${u.layer_condition.sym1}
${$e()}#HotIf


;symbol2 layer \u{1F4B2}\u{1F4B2}    \u{1F4B2}\u{1F4B2}    \u{1F4B2}\u{1F4B2}    \u{1F4B2}\u{1F4B2}    \u{1F4B2}\u{1F4B2}    \u{1F4B2}\u{1F4B2}
#HotIf ${u.layer_condition.sym2}
${Ce()}#HotIf


;standard
ins::switchWindow()


;helper functions \u{1F31F}\u29BA \u{1F31F}\u29BA \u{1F31F}\u29BA \u{1F31F}\u29BA \u{1F31F}\u29BA \u{1F31F}\u29BA \u{1F31F}\u29BA \u{1F31F}\u29BA
window_toggle := 0
switchWindow() {
  global
  window_toggle := !window_toggle
  SendInput( window_toggle ? "#^{left}" : "#^{right}")
}
${u.config}
${ke()}
${ve(u.extKey,z,j)}
${xe(u.extKey,F,H,G,W)}`;function D(e){return l[e].reduce((t,r,n)=>{if(r==".")return t;switch(r){case"WheelUp":return t+`	*${z=m[n]}::wheelScroll_up()
`;case"WheelDown":return t+`	*${j=m[n]}::wheelScroll_down()
`}switch(t+=`	${m[n]}::`,r){case"mouseU":t+="mouse_move('up')",F=m[n];break;case"mouseD":t+="mouse_move('down')",G=m[n];break;case"mouseL":t+="mouse_move('left')",W=m[n];break;case"mouseR":t+="mouse_move('right')",H=m[n];break;case"toggleMouseSpeed":case"brightnessUp":case"brightnessDown":t+=`${r}()`;break;case"Capslock":t+='SetCapsLockState(!GetKeyState("CapsLock","T"))';break;default:t+=r}return t+`
`},"")}function Se(){return l.sym.reduce((e,t,r)=>t=="."?e:(e+=`	${m[r]}::`,e+=+t||"0`\\/=[]".includes(t)?t:I(t),e+`
`),"")}function Ce(){return l.sym2.reduce((e,t,r)=>t=="."?e:(e+=`	${m[r]}::`,e+=t.startsWith("F")||t.startsWith("^")?t:I(t),e+`
`),"")}function $e(){return l.symShift.reduce((e,t,r)=>t=="."?e:e+`	${m[r]}::${I(t)}
`,"")}function Me(e){switch(e){case"\u26A0\uFE0F":return"U+26a0}{U+fe0f";default:return`U+${e.codePointAt(0).toString(16)}`}}function I(e){return e<="~"?`SendText('${e}')`:`Send('{${Me(e)}}')`}const E=document.createElement("div");E.id="ahkCtx";const q=document.createElement("ol");E.append(q);const Ee=O.split(`
`).map(e=>{const t=document.createElement("li");return t.textContent=e,t});q.append(...Ee);const w=document.createElement("button");w.id="copyBtn";w.textContent="copy";E.append(w);const _=document.createElement("span");w.prepend(_);let P;w.addEventListener("click",async()=>{await navigator.clipboard.writeText(O),!P&&(P=!0,_.textContent="copied \u2713",_.style.opacity=1,await f(1500),_.style.opacity=0,await f(500),_.textContent="",P=!1)},{once:!1});const d=document.createElement("div");d.className="loaderCtx";const N=document.createElement("div");N.className="loader";d.append(N);const B=1e3;d.style.transition=`all ${B}ms`;d.style.transform="scale(0)";async function Pe(e,t){await X(e,async()=>{t.style.cursor="pointer",t.append(d),await f(1),d.style.transform="scale(1)",await f(B),Be(t)},async()=>{d.style.transform="scale(0)",await f(B),d.remove(),t.style.cursor=""})}function Be(e){const{width:t,height:r}=d.getBoundingClientRect();e.addEventListener("mousedown",async o=>{n(o),e.addEventListener("mousemove",n),await K(e,"mouseup"),e.removeEventListener("mousemove",n)});function n(o){d.style.left=o.clientX-t/2+"px",d.style.top=o.clientY-r/2+"px"}}const x=document.createElement("main");document.body.append(x);(async()=>{const e=ce();await f(150),await Pe(e,x);const t=document.createElement("div");t.id="kbdCtx",t.append(k,S),x.append(t,E),we(),ue(),ee(x,2e3),console.log("\u{1F4A1}\u{1F4A1}done\u{1F4A1}\u{1F4A1}")})();
