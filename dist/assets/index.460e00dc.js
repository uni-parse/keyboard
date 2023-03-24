var Le=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var pt=Le((yt,K)=>{const De=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerpolicy&&(d.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?d.credentials="include":o.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(o){if(o.ep)return;o.ep=!0;const d=t(o);fetch(o.href,d)}};De();function L(e){return new Promise(r=>setTimeout(r,e))}function ne(e,r){return new Promise(t=>e.addEventListener(r,t,{once:!0}))}async function Ie(e,r,t){let s=await Re(e);s=="pending"&&(await r(),s=await Promise.all(e),await(t==null?void 0:t()))}async function Re(e){if(!Array.isArray(e)){const t={};return await Promise.race([e,t]).then(s=>s===t?"pending":"fulfilled").catch(()=>"rejected")}const r=new Set;for(const t of e){const s={},o=await Promise.race([t,s]).then(d=>d===s?"pending":"fulfilled").catch(()=>"rejected");if(o=="rejected")return o;r.add(o)}return r.has("pending")?"pending":"fulfilled"}var We="./assets/mediaIcons.5c839f27.json",Pe="./assets/UniParse.75cadb2a.avif 66w, ./assets/UniParse.8d145562.webp 66w";let j={name:"uniparse",side:"right",srcset:Pe,urls:["https://youtube.com/channel/UCvNOch5x46MDaejgQ6SkzUg","https://facebook.com/UniParse","https://instagram.com/UniParse","https://linkedin.com/in/UniParse","https://github.com/TheUniParse","https://twitter.com/UniParse"]};async function je(e,r=0,t=2500){const s=await $e();e.append(s);const o=s.querySelector("img.userMedias");await ne(o,"load"),await L(r),Fe(t)}async function $e(){const e=document.createElement("address");e.id="mediaIcons";const r=await Ge(),t=j.urls.map(o=>{const d=document.createElement("a");d.target="_blank",d.href=o;const f=o.slice(8,o.indexOf(".")),E=r[f];d.innerHTML=E;const g=d.querySelector("svg");g.role="img";const p=document.createElement("title");return p.innerText=`${f} of ${j.name}`,g.prepend(p),d});e.append(...t);const s=document.createElement("img");return s.srcset=j.srcset,s.alt=j.name,s.className="userMedias",e.append(s),j=null,e}async function Fe(e=2500){const r=document.querySelector("#mediaIcons");r.style.transform="translateY(-.3rem)";let t,s;r.querySelector("img").addEventListener("click",f),r.addEventListener("pointerenter",async()=>{clearTimeout(s),await ne(r,"pointerleave"),s=setTimeout(()=>{t&&f()},e)},{once:!1});const d=r.querySelectorAll("a");function f(){d.forEach((E,g)=>{const p=60*(t?g:d.length-g),Q=t?".3, -1,      1, 1":" 0,  0,     .7, 2";E.style.transition=`transform 200ms ${p}ms cubic-bezier(${Q})`,E.style.transform=t?"":"translateX(0)"}),t=!t}}async function Ge(){return await(await fetch(We)).json()}const h={power:`
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
.      .   .         .         .   .   .   .`},fe=h.standard;Be();h.shift=he(h.standard);h.symShift=he(h.sym,!1);h.standardHtk=h.standard.map(e=>O(e));h.extHtk=h.ext.map(e=>O(e));h.ext2Htk=h.ext2.map(e=>O(e));h.standardRows=ye(fe);h.standardHtkRows=ye(fe.split("").map(e=>O(e)).join(""));function Be(){Object.entries(h).forEach(([e,r])=>h[e]=r.replace(`
`,"").replaceAll(`
`," ").replaceAll("    "," ").replaceAll("   "," ").replaceAll("  "," ").split(" "))}function ye(e){const r=["top","upper","home","lower","bottom"],t=e.replace(`
`,"").replaceAll("    "," ").replaceAll("   "," ").replaceAll("  "," ").split(`
`);return t.forEach((s,o)=>t[o]=s.split(" ")),Object.fromEntries(r.map((s,o)=>[s,t[o]]))}function he(e,r=!0){return e.map(t=>{if(r&&t==".")return">";switch(t){case"`":return"~";case"1":return"!";case"2":return"@";case"3":return"#";case"4":return"$";case"5":return"%";case"6":return"^";case"7":return"&";case"8":return"*";case"9":return"(";case"0":return")";case"=":return"+";case"-":return"_";case"\\":return"|";case"/":return"?";case"[":return"{";case"]":return"}";case",":return"<";case";":return":";case"'":return'"';default:return t.length==1&&t>="a"&&t<="z"?t.toUpperCase():t}})}function O(e){switch(e){case"\u{1F4B2}":return"F23";case"\u2B50":return"F24";case"\u2297":return"Esc";case"\u238B":return"Esc";case"\u21C4":return"Tab";case"\u23CE":return"Enter";case"\u21EA":return"Capslock";case"\u21E7":return"LShift";case"\u2A01":return"LCtrl";case"\u229E":return"LWin";case"\u2263":return"AppsKey";case"\u232B":return"Bs";case"\u2326":return"Del";case"\u21F1":return"Home";case"\u21F2":return"End";case"\u21DE":return"PgUp";case"\u21DF":return"PgDn";case"\u2191":return"Up";case"\u2193":return"Down";case"\u2192":return"Right";case"\u2190":return"Left";case"\u25B4":return"mouseU";case"\u25BE":return"mouseD";case"\u25B8":return"mouseR";case"\u25C2":return"mouseL";case"\u25F4":return"LButton";case"\u25F7":return"RButton";case"\u29BA":return"MButton";case"\u21A9":return"XButton1";case"\u21AA":return"XButton2";case"\u21C8":return"WheelUp";case"\u21CA":return"WheelDown";case"\u2387":return"toggleMouseSpeed";case"\u23EF":return"Media_Play_Pause";case"\u25FC":return"Media_Stop";case"\u23ED":return"Media_Next";case"\u23EE":return"Media_Prev";case"\u{1F507}":return"Volume_Mute";case"\u{1F50A}":return"Volume_Up";case"\u{1F509}":return"Volume_Down";case"\u2600":return"brightnessUp";case"\u2733":return"brightnessDown";case"\u{1F50D}":return"Browser_Search";case"\u229A":return"^Numpad0";case"\u2295":return"^NumpadAdd";case"\u229D":return"^NumpadSub";case"\u2399":return"PrintScreen";case"\u{1F4F1}":return'Run("calc")';case"%":return"`%";case";":return"`;";default:return e}}function Ne(e){const r=e.querySelectorAll("button");t("pinkey",1,2,13,16,26,27,30,40,41),t("ring",3,12,17,25,31,39,45,54),t("middle",5,10,18,24,32,38,46,53),t("indexL",6,7,19,20,33,34,47,48,49),t("indexR",9,22,23,36,37,50,51,52),t("dark",1,2,3,5,6,7,9,10,12,13,22,27,41,49,50),t("mix_ring_middle",4),t("mix_middle_ring",11),t("mix_index_top",8),t("mix_index_upper",21),t("mix_index_home",35),t("highLight",30,31,32,33,37,38,39,40,47,52,58,60);function t(s,...o){o.forEach(d=>{r[d-1].classList.add(s)})}}var Ue="./assets/pop1.b5fe646f.wav",He="./assets/pop2.5719bcba.wav",Ke="./assets/pop3.4711d144.wav";const ie=[Ue,He,Ke];function Oe(e=0,r=[]){return r.push(new Promise(t=>setTimeout(t,e)),...ie.map((t,s)=>Ve(s,qe(t)))),r}function ze(){const e=document.querySelectorAll("#keyboard button");document.addEventListener("keydown",r=>{const{key:t,code:s}=r;console.log(s,t);const o=Array.prototype.find.call(e,d=>d.innerText==t||d.classList.contains(t)||d.classList.contains("_"+t)||d.classList.contains("space")&&t==" "||d.classList.contains("LShift")&&t=="Shift");!o||(ie[Math.floor(Math.random()*3)].play(),o.style.boxShadow="0 0 1px 0 #111",o.style.transform="translate(0.1em, 0.1em)",document.addEventListener("keyup",function d({key:f}){t==f&&(document.removeEventListener("keyup",d),o.style.boxShadow="",o.style.transform="")},{once:!1}))})}async function qe(e){const r=new AudioContext,t=await fetch(e),s=await t.arrayBuffer(),o=await r.decodeAudioData(s);function d(){const f=r.createBufferSource();return f.buffer=o,f.connect(r.destination),f.start(r.currentTime),f}return{play:d}}async function Ve(e,r){ie[e]=await r}const z=document.createElement("div");z.id="keyboard";const Ye=[...Object.entries(h.standardRows)],Je=Ye.map(([e,r])=>{const t=document.createElement("div");t.id=`${e}_row`,t.className="row";const s=r.map((o,d)=>{const f=document.createElement("button");return f.textContent=o,f.className=Xe(h.standardHtkRows[e][d]),"\u232B \u21C4 \u23CE alt \u21E7 \u229E \u2A01 \u{1F4B2} space \u2B50 \u2263".split(" ").includes(o)&&f.classList.add("modifier"),f});return t.append(...s),t});z.append(...Je);Ne(z);function Xe(e){if(+e||e==0)return`_${e}`;switch(e){case"`":return"backtick";case"-":return"hyphon";case"=":return"equal";case"/":return"slash";case"\\":return"backSlash";case"[":return"openBreacket";case"]":return"closeBracket";case"'":return"quate";case"`;":return"semiColon";case",":return"comma";case".":return"period";default:return e}}var Qe="./assets/UniParse.8b8d5d1d.zip",Ze="./assets/msklc.100e6e50.zip";const I=document.createElement("fieldset");I.id="switcher";I.name="layer";const ge=document.createElement("legend");ge.innerText="layout switcher";I.append(ge);const et="power standard shift ext ext2 sym symShift sym2",tt=et.split(" ").map(e=>{const r=document.createElement("label");r.id=`label_${e}`;const t=document.createElement("input");return t.type="radio",t.id=`radio_${e}`,t.name="layer",t.value=e,e=="standard"&&t.setAttribute("checked",!0),r.append(t,e),r});I.append(...tt);function rt(){const e=document.querySelectorAll("#keyboard button");I.addEventListener("change",r=>e.forEach((t,s)=>t.textContent=h[r.target.value][s]))}const q=document.createElement("div");q.id="panel";q.append(I);const V=document.createElement("div");V.id="download";q.append(V);const Y=document.createElement("a");Y.textContent="MsKLC";Y.download="msklc.zip";Y.href=Ze;V.append(Y);const J=document.createElement("a");J.textContent="AutoHotKey";J.download="autohotkey.zip";J.href=Qe;V.append(J);const A="F23",T="F24",x={symKey:A,extKey:T};x.intro=`;
;
;   made by UniParse
;   github.com/TheUniParse
;   twitter.com/UniParse
;
;
#Requires AutoHotkey v2.0
ProcessSetPriority("High")
Persistent()
#Warn  ; detecting common errors.
`;x.switchers=`${A}::symSwitcher("${A}", 400, 200)
${T}::extSwitcher("${T}", 400, 200)`;x.layer_condition={ext:`!layer_ext2 && (
  (
    layer_ext
    && !GetKeyState("${A}", "P")
  ) || (
    !layer_ext
    && GetKeyState("${T}", "P")
    && !GetKeyState("${A}", "P")
  ) || (
    layer_sym
    && GetKeyState("${T}", "P")
  )
)`,ext2:"layer_ext2",sym:`!layer_sym2 && (
  (
    layer_sym
    && !GetKeyState("${T}", "P")
  ) || (
    !layer_sym
    && GetKeyState("${A}", "P")
    && !GetKeyState("${T}", "P")
  ) || (
    layer_ext
    && GetKeyState("${A}", "P")
  )
)`,sym1:`GetKeyState("${A}", "P") && GetKeyState("${T}", "P")`,sym2:"layer_sym2"};x.config=`layer_ext := 0
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
  } Else if KeyWait(key, "T" . holdDelay / 1000) {
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
  } Else if KeyWait(key, "T" . holdDelay / 1000) {
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
}`;function ot(e,r,t,s,o){return`mouse := {
  boostSpeed: 0, ; on double/triple click  
  moveCount_total: 0,
  moveCount: Map(
    "up", 0,
    "down", 0,
    "right", 0,
    "left", 0,
  ),
  pressCount: Map(
    "up", 0,
    "down", 0,
    "right", 0,
    "left", 0,
  ),
  keys: Map(
    "up", "${r}",
    "down", "${s}",
    "right", "${t}",
    "left", "${o}",
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

  if KeyWait(mouse.keys.get(dir), "T.1")
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
  
  If GetKeyState(mouse.keys.get(dir), "P") && (
    layer_ext
    || GetKeyState("${e}", "P")
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
    if key != dir && GetKeyState(value, "p")
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
  vertical := dir == "up" || dir == "down"
  if GetKeyState(mouse.keys.get(vertical ? "left" : "up"), "P")
    switch dir {
      case "up", "left": MouseMove(-x, -y,, "R")
      case "right": MouseMove(x, -y,, "R")
      case "down": MouseMove(-x, y,, "R")
    }
  else if GetKeyState(mouse.keys.get(vertical ? "right" : "down"), "P")
    switch dir {
      case "up": MouseMove(x, -y,, "R")
      case "right", "down": MouseMove(x, y,, "R")
      case "left": MouseMove(-x, y,, "R")
    }
  else
    switch dir {
      case "up": MouseMove(0, -y,, "R")
      case "right": MouseMove(x, 0,, "R")
      case "down": MouseMove(0, y,, "R")
      case "left": MouseMove(-x, 0,, "R")
    }
}
`}function nt(e,r,t){return`wheel := {
  boostSpeed_up: 0,
  boostSpeed_down: 0,
  scrolling_up: 0,
  scrolling_down: 0,
  pressCount_up: 0,
  pressCount_down: 0,
}
`+s(r)+s(t);function s(g){const p=f(g);return o(g,p)+d(g,p)}function o(g,p){return`
wheelScroll_${p}() {
  global

  if wheel.scrolling_${p}
    return

  If !wheel.pressCount_${p} {
    wheel.pressCount_${p} := 1
    SetTimer(wheel_${p}_boostSpeed_timer, -300)
  } Else
    wheel.pressCount_${p} := 2

  SendInput '{Blind}{${E(g)}}'

  if KeyWait('${g}', 'T.2') 
    wheel.boostSpeed_${p} := 0
  Else{
    wheel.scrolling_${p} := 1
    wheelDelay := wheelDelay_default
    
    If wheel.boostSpeed_${p} {
      wheelDelay *= wheelDelay_multiplier
      wheel.boostSpeed_${p} := 0
    }

    setTimer(wheel_${p}_scrolling_timer, wheelDelay)
  }   
}
`}function d(g,p){return`
wheel_${p}_scrolling_timer() {
  global
  if GetKeyState("${g}","P") && (layer_ext || GetKeyState("${e}","P"))
    SendInput '{Blind}{${E(g)}}'
  Else {
    wheelDelay := wheelDelay_default
    wheel.scrolling_${p} := 0
    setTimer( , 0)
  }
}

wheel_${p}_boostSpeed_timer() {
  global
  if wheel.pressCount_${p} = 2
    wheel.boostSpeed_${p} := 1
  wheel.pressCount_${p} := 0
}
`}function f(g){switch(g){case r:return"up";case t:return"down"}}function E(g){switch(g){case r:return"WheelUp";case t:return"WheelDown"}}}function it(){return`; setBrightness(0)
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
`}const v=h.standard.map(e=>e==";"?"`;":e);let _e,be,we,xe,Ce,ke;const Ee=`${x.intro}
;config layers \u2699\uFE0F      \u2699\uFE0F      \u2699\uFE0F      \u2699\uFE0F      \u2699\uFE0F
${x.switchers}

;extend layer \u{1F31F}    \u{1F31F}    \u{1F31F}    \u{1F31F}    \u{1F31F}    \u{1F31F}
#HotIf ${x.layer_condition.ext}
${pe("extHtk")}#HotIf

;extend2 layer \u{1F31F}\u{1F31F}     \u{1F31F}\u{1F31F}     \u{1F31F}\u{1F31F}     \u{1F31F}\u{1F31F}
#HotIf ${x.layer_condition.ext2}
${pe("ext2Htk")}#HotIf

;symbol layer \u{1F4B2}     \u{1F4B2}     \u{1F4B2}     \u{1F4B2}     \u{1F4B2}
#HotIf ${x.layer_condition.sym}
${at()}#HotIf

;symbol1 layer \u21E7\u{1F4B2}      \u21E7\u{1F4B2}      \u21E7\u{1F4B2}      \u21E7\u{1F4B2}
#HotIf ${x.layer_condition.sym1}
${st()}#HotIf

;symbol2 layer \u{1F4B2}\u{1F4B2}    \u{1F4B2}\u{1F4B2}    \u{1F4B2}\u{1F4B2}    \u{1F4B2}\u{1F4B2}
#HotIf ${x.layer_condition.sym2}
${lt()}#HotIf

;standard
ins::switchWindow()

;helper functions \u{1F31F}\u29BA     \u{1F31F}\u29BA     \u{1F31F}\u29BA     \u{1F31F}\u29BA
SetCapsLockState("AlwaysOff")

${x.config}

window_toggle := 0
switchWindow() {
  global
  window_toggle := !window_toggle
  SendInput( window_toggle ? "#^{left}" : "#^{right}")
}

brightnessJump := 10
currentBrightness := getCurrentBrightness()

${it()}

wheelDelay_default := 40
wheelDelay_multiplier := .25

${nt(x.extKey,Ce,ke)}

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

${ot(x.extKey,we,be,xe,_e)}`;function pe(e){return h[e].reduce((r,t,s)=>{if(t==".")return r;switch(t){case"WheelUp":return r+`	*${Ce=v[s]}::wheelScroll_up()
`;case"WheelDown":return r+`	*${ke=v[s]}::wheelScroll_down()
`}switch(r+=`	${v[s]}::`,t){case"mouseU":r+='mouse_move("up")',we=v[s];break;case"mouseD":r+='mouse_move("down")',xe=v[s];break;case"mouseL":r+='mouse_move("left")',_e=v[s];break;case"mouseR":r+='mouse_move("right")',be=v[s];break;case"toggleMouseSpeed":case"brightnessUp":case"brightnessDown":r+=`${t}()`;break;case"Capslock":r+='SetCapsLockState(!GetKeyState("CapsLock", "T"))';break;default:r+=t}return r+`
`},"")}function at(){return h.sym.reduce((e,r,t)=>r=="."?e:(e+=`	${v[t]}::`,e+=+r||"0`\\/=[]".includes(r)?r:ae(r),e+`
`),"")}function lt(){return h.sym2.reduce((e,r,t)=>r=="."?e:(e+=`	${v[t]}::`,e+=r.startsWith("F")||r.startsWith("^")?r:ae(r),e+`
`),"")}function st(){return h.symShift.reduce((e,r,t)=>r=="."?e:e+`	${v[t]}::${ae(r)}
`,"")}function ct(e){switch(e){case"\u26A0\uFE0F":return"U+26a0}{U+fe0f";default:return`U+${e.codePointAt(0).toString(16)}`}}function ae(e){return e=='"'?`SendText('"')`:e<="~"?`SendText("${e}")`:`Send("{${ct(e)}}")`}const ut=(window!=null?window:WorkerGlobalScope&&self instanceof WorkerGlobalScope)?self:{},F=(e=>{/**
* Prism: Lightweight, robust, elegant syntax highlighting
*
* @license MIT <https://opensource.org/licenses/MIT>
* @author Lea Verou <https://lea.verou.me>
* @namespace
* @public
*/let r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,s={},o={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function i(n){return n instanceof d?new d(n.type,i(n.content),n.alias):Array.isArray(n)?n.map(i):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(i){return Object.prototype.toString.call(i).slice(8,-1)},objId:function(i){return i.__id||Object.defineProperty(i,"__id",{value:++t}),i.__id},clone:function i(n,l){l=l||{};let a,c;switch(o.util.type(n)){case"Object":if(c=o.util.objId(n),l[c])return l[c];a={},l[c]=a;for(let u in n)n.hasOwnProperty(u)&&(a[u]=i(n[u],l));return a;case"Array":return c=o.util.objId(n),l[c]?l[c]:(a=[],l[c]=a,n.forEach(function(u,y){a[y]=i(u,l)}),a);default:return n}},getLanguage:function(i){for(;i;){let n=r.exec(i.className);if(n)return n[1].toLowerCase();i=i.parentElement}return"none"},setLanguage:function(i,n){i.className=i.className.replace(RegExp(r,"gi"),""),i.classList.add("language-"+n)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(i){let n=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(n){let l=document.getElementsByTagName("script");for(let a in l)if(l[a].src==n)return l[a]}return null}},isActive:function(i,n,l){let a="no-"+n;for(;i;){let c=i.classList;if(c.contains(n))return!0;if(c.contains(a))return!1;i=i.parentElement}return!!l}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(i,n){let l=o.util.clone(o.languages[i]);for(let a in n)l[a]=n[a];return l},insertBefore:function(i,n,l,a){a=a||o.languages;let c=a[i],u={};for(let m in c)if(c.hasOwnProperty(m)){if(m==n)for(let _ in l)l.hasOwnProperty(_)&&(u[_]=l[_]);l.hasOwnProperty(m)||(u[m]=c[m])}let y=a[i];return a[i]=u,o.languages.DFS(o.languages,function(m,_){_===y&&m!=i&&(this[m]=u)}),u},DFS:function i(n,l,a,c){c=c||{};let u=o.util.objId;for(let y in n)if(n.hasOwnProperty(y)){l.call(n,y,n[y],a||y);let m=n[y],_=o.util.type(m);_==="Object"&&!c[u(m)]?(c[u(m)]=!0,i(m,l,null,c)):_==="Array"&&!c[u(m)]&&(c[u(m)]=!0,i(m,l,y,c))}}},plugins:{},highlightAll:function(i,n){o.highlightAllUnder(document,i,n)},highlightAllUnder:function(i,n,l){let a={callback:l,container:i,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),o.hooks.run("before-all-elements-highlight",a);for(let c=0,u;u=a.elements[c++];)o.highlightElement(u,n===!0,a.callback)},highlightElement:function(i,n,l){let a=o.util.getLanguage(i),c=o.languages[a];o.util.setLanguage(i,a);let u=i.parentElement;u&&u.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(u,a);let y=i.textContent,m={element:i,language:a,grammar:c,code:y};function _(w){m.highlightedCode=w,o.hooks.run("before-insert",m),m.element.innerHTML=m.highlightedCode,o.hooks.run("after-highlight",m),o.hooks.run("complete",m),l&&l.call(m.element)}if(o.hooks.run("before-sanity-check",m),u=m.element.parentElement,u&&u.nodeName.toLowerCase()==="pre"&&!u.hasAttribute("tabindex")&&u.setAttribute("tabindex","0"),!m.code){o.hooks.run("complete",m),l&&l.call(m.element);return}if(o.hooks.run("before-highlight",m),!m.grammar){_(o.util.encode(m.code));return}if(n&&e.Worker){let w=new Worker(o.filename);w.onmessage=function(B){_(B.data)},w.postMessage(JSON.stringify({language:m.language,code:m.code,immediateClose:!0}))}else _(o.highlight(m.code,m.grammar,m.language))},highlight:function(i,n,l){let a={code:i,grammar:n,language:l};if(o.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=o.tokenize(a.code,a.grammar),o.hooks.run("after-tokenize",a),d.stringify(o.util.encode(a.tokens),a.language)},tokenize:function(i,n){let l=n.rest;if(l){for(let c in l)n[c]=l[c];delete n.rest}let a=new g;return p(a,a.head,i),E(i,a,n,a.head,0),ve(a)},hooks:{all:{},add:function(i,n){let l=o.hooks.all;l[i]=l[i]||[],l[i].push(n)},run:function(i,n){let l=o.hooks.all[i];if(!(!l||!l.length))for(let a=0,c;c=l[a++];)c(n)}},Token:d};e.Prism=o;function d(i,n,l,a){this.type=i,this.content=n,this.alias=l,this.length=(a||"").length|0}d.stringify=function i(n,l){if(typeof n=="string")return n;if(Array.isArray(n)){let y="";return n.forEach(function(m){y+=i(m,l)}),y}let a={type:n.type,content:i(n.content,l),tag:"span",classes:["token",n.type],attributes:{},language:l},c=n.alias;c&&(Array.isArray(c)?Array.prototype.push.apply(a.classes,c):a.classes.push(c)),o.hooks.run("wrap",a);let u="";for(let y in a.attributes)u+=" "+y+'="'+(a.attributes[y]||"").replace(/"/g,"&quot;")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+u+">"+a.content+"</"+a.tag+">"};function f(i,n,l,a){i.lastIndex=n;let c=i.exec(l);if(c&&a&&c[1]){let u=c[1].length;c.index+=u,c[0]=c[0].slice(u)}return c}function E(i,n,l,a,c,u){for(let y in l){if(!l.hasOwnProperty(y)||!l[y])continue;let m=l[y];m=Array.isArray(m)?m:[m];for(let _=0;_<m.length;++_){if(u&&u.cause==y+","+_)return;let w=m[_],B=w.inside,se=!!w.lookbehind,ce=!!w.greedy,Me=w.alias;if(ce&&!w.pattern.global){let b=w.pattern.toString().match(/[imsuy]*$/)[0];w.pattern=RegExp(w.pattern.source,b+"g")}let ue=w.pattern||w;for(let b=a.next,S=c;b!==n.tail&&!(u&&S>=u.reach);S+=b.value.length,b=b.next){let D=b.value;if(n.length>i.length)return;if(D instanceof d)continue;let N=1,C;if(ce){if(C=f(ue,S,i,se),!C||C.index>=i.length)break;let W=C.index,Te=C.index+C[0].length,M=S;for(M+=b.value.length;W>=M;)b=b.next,M+=b.value.length;if(M-=b.value.length,S=M,b.value instanceof d)continue;for(let P=b;P!==n.tail&&(M<Te||typeof P.value=="string");P=P.next)N++,M+=P.value.length;N--,D=i.slice(S,M),C.index-=S}else if(C=f(ue,0,D,se),!C)continue;let de=C.index,U=C[0],ee=D.slice(0,de),me=D.slice(de+U.length),te=S+D.length;u&&te>u.reach&&(u.reach=te);let H=b.prev;ee&&(H=p(n,H,ee),S+=ee.length),Q(n,H,N);let Ae=new d(y,B?o.tokenize(U,B):U,Me,U);if(b=p(n,H,Ae),me&&p(n,b,me),N>1){let W={cause:y+","+_,reach:te};E(i,n,l,b.prev,S,W),u&&W.reach>u.reach&&(u.reach=W.reach)}}}}}function g(){let i={value:null,prev:null,next:null},n={value:null,prev:i,next:null};i.next=n,this.head=i,this.tail=n,this.length=0}function p(i,n,l){let a=n.next,c={value:l,prev:n,next:a};return n.next=c,a.prev=c,i.length++,c}function Q(i,n,l){let a=n.next,c;for(let u=0;u<l&&a!==i.tail;u++)a=a.next,c=u;n.next=a,a.prev=n,i.length-=c}function ve(i){let n=[],l=i.head.next;for(;l!==i.tail;)n.push(l.value),l=l.next;return n}if(!e.document)return e.addEventListener&&(o.disableWorkerMessageHandler||e.addEventListener("message",function(i){let n=JSON.parse(i.data),l=n.language,a=n.code,c=n.immediateClose;e.postMessage(o.highlight(a,o.languages[l],l)),c&&e.close()},!1)),o;let R=o.util.currentScript();R&&(o.filename=R.src,R.hasAttribute("data-manual")&&(o.manual=!0));function Z(){o.manual||o.highlightAll()}if(!o.manual){let i=document.readyState;i==="loading"||i==="interactive"&&R&&R.defer?document.addEventListener("DOMContentLoaded",Z):window.requestAnimationFrame?window.requestAnimationFrame(Z):window.setTimeout(Z,16)}return o})(ut);typeof K!="undefined"&&K.exports&&(K.exports=F);typeof global!="undefined"&&(global.Prism=F);F.languages.autohotkey={comment:[{pattern:/(^|\s);.*/,lookbehind:!0},{pattern:/(^[\t ]*)\/\*(?:[\r\n](?![ \t]*\*\/)|[^\r\n])*(?:[\r\n][ \t]*\*\/)?/m,lookbehind:!0,greedy:!0}],tag:{pattern:/^([ \t]*)[^\s,`":]+(?=:[ \t]*$)/m,lookbehind:!0},string:/"(?:[^"\n\r]|"")*"/,variable:/%\w+%/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/\?|\/\/?=?|:=|::?|\|[=|]?|&[=&]?|\+[=+]?|-[=-]?|\*[=*]?|<(?:<=?|>|=)?|>>?=?|[.^!=~]=?|\b(?:AND|NOT|OR)\b/,boolean:/\b(?:false|true)\b/,command:{pattern:/\b(?:AutoTrim|BlockInput|Break|Click|ClipWait|Continue|Control|ControlClick|ControlFocus|ControlGet|ControlGetFocus|ControlGetPos|ControlGetText|ControlMove|ControlSend|ControlSendRaw|ControlSetText|CoordMode|Critical|DetectHiddenText|DetectHiddenWindows|Drive|DriveGet|DriveSpaceFree|EnvAdd|EnvDiv|EnvGet|EnvMult|EnvSet|EnvSub|EnvUpdate|Exit|ExitApp|FileAppend|FileCopy|FileCopyDir|FileCreateDir|FileCreateShortcut|FileDelete|FileEncoding|FileGetAttrib|FileGetShortcut|FileGetSize|FileGetTime|FileGetVersion|FileInstall|FileMove|FileMoveDir|FileRead|FileReadLine|FileRecycle|FileRecycleEmpty|FileRemoveDir|FileSelectFile|FileSelectFolder|FileSetAttrib|FileSetTime|FormatTime|GetKeyState|Gosub|Goto|GroupActivate|GroupAdd|GroupClose|GroupDeactivate|Gui|GuiControl|GuiControlGet|Hotkey|ImageSearch|IniDelete|IniRead|IniWrite|Input|InputBox|KeyWait|ListHotkeys|ListLines|ListVars|Loop|Menu|MouseClick|MouseClickDrag|MouseGetPos|MouseMove|MsgBox|OnExit|OutputDebug|Pause|PixelGetColor|PixelSearch|PostMessage|Process|Progress|Random|RegDelete|RegRead|RegWrite|Reload|Repeat|Return|Run|RunAs|RunWait|Send|SendText|SendEvent|SendInput|SendMessage|SendMode|SendPlay|SendRaw|SetBatchLines|SetCapslockState|SetControlDelay|SetDefaultMouseSpeed|SetEnv|SetFormat|SetKeyDelay|SetMouseDelay|SetNumlockState|SetRegView|SetScrollLockState|SetStoreCapslockMode|SetTimer|SetTitleMatchMode|SetWinDelay|SetWorkingDir|Shutdown|Sleep|Sort|SoundBeep|SoundGet|SoundGetWaveVolume|SoundPlay|SoundSet|SoundSetWaveVolume|SplashImage|SplashTextOff|SplashTextOn|SplitPath|StatusBarGetText|StatusBarWait|StringCaseSense|StringGetPos|StringLeft|StringLen|StringLower|StringMid|StringReplace|StringRight|StringSplit|StringTrimLeft|StringTrimRight|StringUpper|Suspend|SysGet|Thread|ToolTip|Transform|TrayTip|URLDownloadToFile|WinActivate|WinActivateBottom|WinClose|WinGet|WinGetActiveStats|WinGetActiveTitle|WinGetClass|WinGetPos|WinGetText|WinGetTitle|WinHide|WinKill|WinMaximize|WinMenuSelectItem|WinMinimize|WinMinimizeAll|WinMinimizeAllUndo|WinMove|WinRestore|WinSet|WinSetTitle|WinShow|WinWait|WinWaitActive|WinWaitClose|WinWaitNotActive)\b/i,alias:"selector"},constant:/\b(?:a_ahkpath|a_ahkversion|a_appdata|a_appdatacommon|a_autotrim|a_batchlines|a_caretx|a_carety|a_computername|a_controldelay|a_cursor|a_dd|a_ddd|a_dddd|a_defaultmousespeed|a_desktop|a_desktopcommon|a_detecthiddentext|a_detecthiddenwindows|a_endchar|a_eventinfo|a_exitreason|a_fileencoding|a_formatfloat|a_formatinteger|a_gui|a_guicontrol|a_guicontrolevent|a_guievent|a_guiheight|a_guiwidth|a_guix|a_guiy|a_hour|a_iconfile|a_iconhidden|a_iconnumber|a_icontip|a_index|a_ipaddress1|a_ipaddress2|a_ipaddress3|a_ipaddress4|a_is64bitos|a_isadmin|a_iscompiled|a_iscritical|a_ispaused|a_issuspended|a_isunicode|a_keydelay|a_language|a_lasterror|a_linefile|a_linenumber|a_loopfield|a_loopfileattrib|a_loopfiledir|a_loopfileext|a_loopfilefullpath|a_loopfilelongpath|a_loopfilename|a_loopfileshortname|a_loopfileshortpath|a_loopfilesize|a_loopfilesizekb|a_loopfilesizemb|a_loopfiletimeaccessed|a_loopfiletimecreated|a_loopfiletimemodified|a_loopreadline|a_loopregkey|a_loopregname|a_loopregsubkey|a_loopregtimemodified|a_loopregtype|a_mday|a_min|a_mm|a_mmm|a_mmmm|a_mon|a_mousedelay|a_msec|a_mydocuments|a_now|a_nowutc|a_numbatchlines|a_ostype|a_osversion|a_priorhotkey|a_priorkey|a_programfiles|a_programs|a_programscommon|a_ptrsize|a_regview|a_screendpi|a_screenheight|a_screenwidth|a_scriptdir|a_scriptfullpath|a_scripthwnd|a_scriptname|a_sec|a_space|a_startmenu|a_startmenucommon|a_startup|a_startupcommon|a_stringcasesense|a_tab|a_temp|a_thisfunc|a_thishotkey|a_thislabel|a_thismenu|a_thismenuitem|a_thismenuitempos|a_tickcount|a_timeidle|a_timeidlephysical|a_timesincepriorhotkey|a_timesincethishotkey|a_titlematchmode|a_titlematchmodespeed|a_username|a_wday|a_windelay|a_windir|a_workingdir|a_yday|a_year|a_yweek|a_yyyy|clipboard|clipboardall|comspec|errorlevel|programfiles)\b/i,builtin:/\b(?:abs|acos|asc|asin|atan|ceil|chr|class|comobjactive|comobjarray|comobjconnect|comobjcreate|comobjerror|comobjflags|comobjget|comobjquery|comobjtype|comobjvalue|cos|dllcall|exp|fileexist|Fileopen|floor|format|il_add|il_create|il_destroy|instr|isfunc|islabel|IsObject|ln|log|ltrim|lv_add|lv_delete|lv_deletecol|lv_getcount|lv_getnext|lv_gettext|lv_insert|lv_insertcol|lv_modify|lv_modifycol|lv_setimagelist|mod|numget|numput|onmessage|regexmatch|regexreplace|registercallback|round|rtrim|sb_seticon|sb_setparts|sb_settext|sin|sqrt|strlen|strreplace|strsplit|substr|tan|tv_add|tv_delete|tv_get|tv_getchild|tv_getcount|tv_getnext|tv_getparent|tv_getprev|tv_getselection|tv_gettext|tv_modify|varsetcapacity|winactive|winexist|__Call|__Get|__New|__Set)\b/i,symbol:/\b(?:alt|altdown|altup|appskey|backspace|browser_back|browser_favorites|browser_forward|browser_home|browser_refresh|browser_search|browser_stop|bs|capslock|ctrl|ctrlbreak|ctrldown|ctrlup|del|delete|down|end|enter|esc|escape|f1|f10|f11|f12|f13|f14|f15|f16|f17|f18|f19|f2|f20|f21|f22|f23|f24|f3|f4|f5|f6|f7|f8|f9|home|ins|insert|joy1|joy10|joy11|joy12|joy13|joy14|joy15|joy16|joy17|joy18|joy19|joy2|joy20|joy21|joy22|joy23|joy24|joy25|joy26|joy27|joy28|joy29|joy3|joy30|joy31|joy32|joy4|joy5|joy6|joy7|joy8|joy9|joyaxes|joybuttons|joyinfo|joyname|joypov|joyr|joyu|joyv|joyx|joyy|joyz|lalt|launch_app1|launch_app2|launch_mail|launch_media|lbutton|lcontrol|lctrl|left|lshift|lwin|lwindown|lwinup|mbutton|media_next|media_play_pause|media_prev|media_stop|numlock|numpad0|numpad1|numpad2|numpad3|numpad4|numpad5|numpad6|numpad7|numpad8|numpad9|numpadadd|numpadclear|numpaddel|numpaddiv|numpaddot|numpaddown|numpadend|numpadenter|numpadhome|numpadins|numpadleft|numpadmult|numpadpgdn|numpadpgup|numpadright|numpadsub|numpadup|pgdn|pgup|printscreen|ralt|rbutton|rcontrol|rctrl|right|rshift|rwin|rwindown|rwinup|scrolllock|shift|shiftdown|shiftup|space|tab|up|volume_down|volume_mute|volume_up|wheeldown|wheelleft|wheelright|wheelup|xbutton1|xbutton2)\b/i,directive:{pattern:/#[a-z]+\b/i,alias:"important"},keyword:/\b(?:Abort|AboveNormal|Add|ahk_class|ahk_exe|ahk_group|ahk_id|ahk_pid|All|Alnum|Alpha|AltSubmit|AltTab|AltTabAndMenu|AltTabMenu|AltTabMenuDismiss|AlwaysOnTop|AutoSize|Background|BackgroundTrans|BelowNormal|between|BitAnd|BitNot|BitOr|BitShiftLeft|BitShiftRight|BitXOr|Bold|Border|Button|ByRef|Catch|Checkbox|Checked|CheckedGray|Choose|ChooseString|Close|Color|ComboBox|Contains|ControlList|Count|Date|DateTime|Days|DDL|Default|DeleteAll|Delimiter|Deref|Destroy|Digit|Disable|Disabled|DropDownList|Edit|Eject|Else|Enable|Enabled|Error|Exist|Expand|ExStyle|FileSystem|Finally|First|Flash|Float|FloatFast|Focus|Font|for|global|Grid|Group|GroupBox|GuiClose|GuiContextMenu|GuiDropFiles|GuiEscape|GuiSize|Hdr|Hidden|Hide|High|HKCC|HKCR|HKCU|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_LOCAL_MACHINE|HKEY_USERS|HKLM|HKU|Hours|HScroll|Icon|IconSmall|ID|IDLast|If|IfEqual|IfExist|IfGreater|IfGreaterOrEqual|IfInString|IfLess|IfLessOrEqual|IfMsgBox|IfNotEqual|IfNotExist|IfNotInString|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Ignore|ImageList|in|Integer|IntegerFast|Interrupt|is|italic|Join|Label|LastFound|LastFoundExist|Limit|Lines|List|ListBox|ListView|local|Lock|Logoff|Low|Lower|Lowercase|MainWindow|Margin|Maximize|MaximizeBox|MaxSize|Minimize|MinimizeBox|MinMax|MinSize|Minutes|MonthCal|Mouse|Move|Multi|NA|No|NoActivate|NoDefault|NoHide|NoIcon|NoMainWindow|norm|Normal|NoSort|NoSortHdr|NoStandard|Not|NoTab|NoTimers|Number|Off|Ok|On|OwnDialogs|Owner|Parse|Password|Picture|Pixel|Pos|Pow|Priority|ProcessName|Radio|Range|Read|ReadOnly|Realtime|Redraw|Region|REG_BINARY|REG_DWORD|REG_EXPAND_SZ|REG_MULTI_SZ|REG_SZ|Relative|Rename|Report|Resize|Restore|Retry|RGB|Screen|Seconds|Section|Serial|SetLabel|ShiftAltTab|Show|Single|Slider|SortDesc|Standard|static|Status|StatusBar|StatusCD|strike|Style|Submit|SysMenu|Tab2|TabStop|Text|Theme|Throw|Tile|ToggleCheck|ToggleEnable|ToolWindow|Top|Topmost|TransColor|Transparent|Tray|TreeView|Try|TryAgain|Type|UnCheck|underline|Unicode|Unlock|Until|UpDown|Upper|Uppercase|UseErrorLevel|Vis|VisFirst|Visible|VScroll|Wait|WaitClose|WantCtrlA|WantF2|WantReturn|While|Wrap|Xdigit|xm|xp|xs|Yes|ym|yp|ys)\b/i,function:/[^(); \t,\n+*\-=?>:\\\/<&%\[\]]+(?=\()/,punctuation:/[{}[\]():,]/};const X=document.createElement("div");X.id="ahkCtx";const le=document.createElement("pre");le.className="language-autohotkey";X.append(le);Ee.split(`
`).map((e,r)=>{const t=document.createElement("div");t.className="lineIndex",t.innerText=r,t.style.userSelect="none";const s=document.createElement("div");s.className="lineContent",s.innerHTML=F.highlight(e,F.languages.autohotkey),le.append(t,s)});const G=document.createElement("button");G.id="copyBtn";G.textContent="copy";X.append(G);const $=document.createElement("span");G.prepend($);let re;G.addEventListener("click",async()=>{await navigator.clipboard.writeText(Ee),!re&&(re=!0,$.textContent="copied \u2713",$.style.opacity=1,await L(1500),$.style.opacity=0,await L(500),$.textContent="",re=!1)},{once:!1});const k=document.createElement("div");k.className="loaderCtx";const Se=document.createElement("div");Se.className="loader";k.append(Se);const oe=1e3;k.style.transition=`all ${oe}ms`;k.style.transform="scale(0)";async function dt(e,r){await Ie(e,async()=>{r.style.cursor="pointer",r.append(k),await L(1),k.style.transform="scale(1)",await L(oe),mt(r)},async()=>{k.style.transform="scale(0)",await L(oe),k.remove(),r.style.cursor=""})}function mt(e){const{width:r,height:t}=k.getBoundingClientRect();e.addEventListener("mousedown",async o=>{s(o),e.addEventListener("mousemove",s),await ne(e,"mouseup"),e.removeEventListener("mousemove",s)});function s(o){k.style.left=o.clientX-r/2+"px",k.style.top=o.clientY-t/2+"px"}}(async()=>{const e=document.createElement("main");document.body.append(e);const r=Oe();await L(150),await dt(r,e);const t=document.createElement("div");t.id="kbdCtx",t.append(z,q),e.append(t,X),rt(),ze(),je(e,2e3),console.log("\u{1F4A1}\u{1F4A1}done\u{1F4A1}\u{1F4A1}")})()});export default pt();
