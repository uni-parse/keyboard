var Re=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var ht=Re((bt,U)=>{const De=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerpolicy&&(d.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?d.credentials="include":o.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(o){if(o.ep)return;o.ep=!0;const d=t(o);fetch(o.href,d)}};De();function A(e){return new Promise(r=>setTimeout(r,e))}function oe(e,r){return new Promise(t=>e.addEventListener(r,t,{once:!0}))}async function Ie(e,r,t){let s=await We(e);s=="pending"&&(await r(),s=await Promise.all(e),await(t==null?void 0:t()))}async function We(e){if(!Array.isArray(e)){const t={};return await Promise.race([e,t]).then(s=>s===t?"pending":"fulfilled").catch(()=>"rejected")}const r=new Set;for(const t of e){const s={},o=await Promise.race([t,s]).then(d=>d===s?"pending":"fulfilled").catch(()=>"rejected");if(o=="rejected")return o;r.add(o)}return r.has("pending")?"pending":"fulfilled"}var je="./assets/mediaIcons.5c839f27.json",Be="./assets/UniParse.75cadb2a.avif 66w, ./assets/UniParse.8d145562.webp 66w";let I={name:"uniparse",side:"right",srcset:Be,urls:["https://youtube.com/channel/UCvNOch5x46MDaejgQ6SkzUg","https://facebook.com/UniParse","https://instagram.com/UniParse","https://linkedin.com/in/UniParse","https://github.com/TheUniParse","https://twitter.com/UniParse"]};async function Fe(e,r=0,t=2500){const s=await Ge();e.append(s);const o=s.querySelector("img.userMedias");await oe(o,"load"),await A(r),$e(t)}async function Ge(){const e=document.createElement("address");e.id="mediaIcons";const r=await Ke(),t=I.urls.map(o=>{const d=document.createElement("a");d.target="_blank",d.href=o;const f=o.slice(8,o.indexOf(".")),g=r[f];d.innerHTML=g;const p=d.querySelector("svg");p.role="img";const v=document.createElement("title");return v.innerText=`${f} of ${I.name}`,p.prepend(v),d});e.append(...t);const s=document.createElement("img");return s.srcset=I.srcset,s.alt=I.name,s.className="userMedias",e.append(s),I=null,e}async function $e(e=2500){const r=document.querySelector("#mediaIcons");r.style.transform="translateY(-.3rem)";let t,s;r.querySelector("img").addEventListener("click",f),r.addEventListener("pointerenter",async()=>{clearTimeout(s),await oe(r,"pointerleave"),s=setTimeout(()=>{t&&f()},e)},{once:!1});const d=r.querySelectorAll("a");function f(){d.forEach((g,p)=>{const v=60*(t?p:d.length-p),X=t?".3, -1,      1, 1":" 0,  0,     .7, 2";g.style.transition=`transform 200ms ${v}ms cubic-bezier(${X})`,g.style.transform=t?"":"translateX(0)"}),t=!t}}async function Ke(){return await(await fetch(je)).json()}const h={power:`
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
.      .   .         .         .   .   .   .`},ge=h.standard;Ne();h.shift=_e(h.standard);h.symShift=_e(h.sym,!1);h.standardHtk=h.standard.map(H);h.extHtk=h.ext.map(H);h.ext2Htk=h.ext2.map(H);h.standardRows=be(ge);h.standardHtkRows=be(ge.split("").map(H).join(""));function Ne(){Object.entries(h).forEach(([e,r])=>h[e]=r.replace(`
`,"").replaceAll(`
`," ").replaceAll("    "," ").replaceAll("   "," ").replaceAll("  "," ").split(" "))}function be(e){const r=["top","upper","home","lower","bottom"],t=e.replace(`
`,"").replaceAll("    "," ").replaceAll("   "," ").replaceAll("  "," ").split(`
`);return t.forEach((s,o)=>t[o]=s.split(" ")),Object.fromEntries(r.map((s,o)=>[s,t[o]]))}function _e(e,r=!0){return e.map(t=>{if(r&&t==".")return">";switch(t){case"`":return"~";case"1":return"!";case"2":return"@";case"3":return"#";case"4":return"$";case"5":return"%";case"6":return"^";case"7":return"&";case"8":return"*";case"9":return"(";case"0":return")";case"=":return"+";case"-":return"_";case"\\":return"|";case"/":return"?";case"[":return"{";case"]":return"}";case",":return"<";case";":return":";case"'":return'"';default:return t.length==1&&t>="a"&&t<="z"?t.toUpperCase():t}})}function H(e){switch(e){case"\u{1F4B2}":return"F23";case"\u2B50":return"F24";case"\u2297":return"Esc";case"\u238B":return"Esc";case"\u21C4":return"Tab";case"\u23CE":return"Enter";case"\u21EA":return"Capslock";case"\u21E7":return"LShift";case"\u2A01":return"LCtrl";case"\u229E":return"LWin";case"\u2263":return"AppsKey";case"\u232B":return"Bs";case"\u2326":return"Del";case"\u21F1":return"Home";case"\u21F2":return"End";case"\u21DE":return"PgUp";case"\u21DF":return"PgDn";case"\u2191":return"Up";case"\u2193":return"Down";case"\u2192":return"Right";case"\u2190":return"Left";case"\u25B4":return"mouseU";case"\u25BE":return"mouseD";case"\u25B8":return"mouseR";case"\u25C2":return"mouseL";case"\u25F4":return"LButton";case"\u25F7":return"RButton";case"\u29BA":return"MButton";case"\u21A9":return"XButton1";case"\u21AA":return"XButton2";case"\u21C8":return"WheelUp";case"\u21CA":return"WheelDown";case"\u2387":return"toggleMouseSpeed";case"\u23EF":return"Media_Play_Pause";case"\u25FC":return"Media_Stop";case"\u23ED":return"Media_Next";case"\u23EE":return"Media_Prev";case"\u{1F507}":return"Volume_Mute";case"\u{1F50A}":return"Volume_Up";case"\u{1F509}":return"Volume_Down";case"\u2600":return"brightnessUp";case"\u2733":return"brightnessDown";case"\u{1F50D}":return"Browser_Search";case"\u229A":return"^Numpad0";case"\u2295":return"^NumpadAdd";case"\u229D":return"^NumpadSub";case"\u2399":return"PrintScreen";case"\u{1F4F1}":return'Run("calc")';case"%":return"`%";case";":return"`;";default:return e}}function Ue(e){const r=e.querySelectorAll("button");t("pinkey",1,2,13,16,26,27,30,40,41),t("ring",3,12,17,25,31,39,45,54),t("middle",5,10,18,24,32,38,46,53),t("indexL",6,7,19,20,33,34,47,48,49),t("indexR",9,22,23,36,37,50,51,52),t("dark",1,2,3,5,6,7,9,10,12,13,22,27,41,49,50),t("mix_ring_middle",4),t("mix_middle_ring",11),t("mix_index_top",8),t("mix_index_upper",21),t("mix_index_home",35),t("highLight",30,31,32,33,37,38,39,40,47,52,58,60);function t(s,...o){o.forEach(d=>{r[d-1].classList.add(s)})}}var He="./assets/pop1.b5fe646f.wav",Oe="./assets/pop2.5719bcba.wav",ze="./assets/pop3.4711d144.wav";const ne=[He,Oe,ze];function qe(e=0,r=[]){return r.push(new Promise(t=>setTimeout(t,e)),...ne.map((t,s)=>Je(s,Ye(t)))),r}function Ve(){const e=document.querySelectorAll("#keyboard button");document.addEventListener("keydown",r=>{const{key:t,code:s}=r;console.log(s,t);const o=Array.prototype.find.call(e,d=>d.innerText==t||d.classList.contains(t)||d.classList.contains("_"+t)||d.classList.contains("space")&&t==" "||d.classList.contains("LShift")&&t=="Shift");!o||(ne[Math.floor(Math.random()*3)].play(),o.style.boxShadow="0 0 1px 0 #111",o.style.transform="translate(0.1em, 0.1em)",document.addEventListener("keyup",function d({key:f}){t==f&&(document.removeEventListener("keyup",d),o.style.boxShadow="",o.style.transform="")},{once:!1}))})}async function Ye(e){const r=new AudioContext,t=await fetch(e),s=await t.arrayBuffer(),o=await r.decodeAudioData(s);function d(){const f=r.createBufferSource();return f.buffer=o,f.connect(r.destination),f.start(r.currentTime),f}return{play:d}}async function Je(e,r){ne[e]=await r}const O=document.createElement("div");O.id="keyboard";const Xe=[...Object.entries(h.standardRows)],Qe=Xe.map(([e,r])=>{const t=document.createElement("div");t.id=`${e}_row`,t.className="row";const s=r.map((o,d)=>{const f=document.createElement("button");return f.textContent=o,f.className=Ze(h.standardHtkRows[e][d]),"\u232B \u21C4 \u23CE alt \u21E7 \u229E \u2A01 \u{1F4B2} space \u2B50 \u2263".split(" ").includes(o)&&f.classList.add("modifier"),f});return t.append(...s),t});O.append(...Qe);Ue(O);function Ze(e){if(+e||e==0)return`_${e}`;switch(e){case"`":return"backtick";case"-":return"hyphon";case"=":return"equal";case"/":return"slash";case"\\":return"backSlash";case"[":return"openBreacket";case"]":return"closeBracket";case"'":return"quate";case"`;":return"semiColon";case",":return"comma";case".":return"period";default:return e}}var et="./assets/UniParse.17555844.zip",tt="./assets/msklc.100e6e50.zip";const T=document.createElement("fieldset");T.id="switcher";T.name="layer";const we=document.createElement("legend");we.innerText="layout switcher";T.append(we);const rt="power standard shift ext ext2 sym symShift sym2",ot=rt.split(" ").map(e=>{const r=document.createElement("label");r.id=`label_${e}`;const t=document.createElement("input");return t.type="radio",t.id=`radio_${e}`,t.name="layer",t.value=e,e=="standard"&&t.setAttribute("checked",!0),r.append(t,e),r});T.append(...ot);function nt(){const e=document.querySelectorAll("#keyboard button");T.addEventListener("change",r=>e.forEach((t,s)=>t.textContent=h[r.target.value][s]))}const z=document.createElement("div");z.id="panel";z.append(T);const q=document.createElement("div");q.id="download";z.append(q);const V=document.createElement("a");V.textContent="MsKLC";V.download="msklc.zip";V.href=tt;q.append(V);const Y=document.createElement("a");Y.textContent="AutoHotKey";Y.download="autohotkey.zip";Y.href=et;q.append(Y);const ae="F23",ie="F24",x={symKey:ae,extKey:ie};x.intro=`;
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
`;x.switchers=`${ae}::switcher("sym")
${ie}::switcher("ext")
`;x.layer_condition={ext:`!layers.get("ext2") && (
  (
    layers.get("ext")
    && !GetKeyState(symbolKey, "P")
  ) || (
    !layers.get("ext")
    && GetKeyState(extendKey, "P")
    && !GetKeyState(symbolKey, "P")
  ) || (
    layers.get("sym")
    && GetKeyState(extendKey, "P")
  )
)`,ext2:'layers.get("ext2")',sym:`!layers.get("sym2") && (
  (
    layers.get("sym")
    && !GetKeyState(extendKey, "P")
  ) || (
    !layers.get("sym")
    && GetKeyState(symbolKey, "P")
    && !GetKeyState(extendKey, "P")
  ) || (
    layers.get("ext")
    && GetKeyState(symbolKey, "P")
  )
)`,sym1:'GetKeyState(extendKey, "P") && GetKeyState(symbolKey, "P")',sym2:'layers.get("sym2")'};x.config=`extendKey := "${ie}"
symbolKey := "${ae}"

layers := Map(
  "ext", 0,
  "ext2", 0,
  "sym", 0,
  "sym2", 0
)

holding := Map(
  "sym", 0,
  "ext", 0
)

doublePress := Map(
  "sym", 0,
  "ext", 0
)

switcher(layer, doubleDelay := 400, holdDelay := 200) {
  global

  if holding.get(layer)
    return

  holding.set(layer, 1)

  if layers.get(layer)
    layers.set(layer, 0)

  local key := layer == "ext" ? extendKey : symbolKey

  ;first press
  If !doublePress.get(layer) {
    doublePress.set(layer, 1)
    SetTimer(() => doublePress.set(layer, 0), -doubleDelay)
    KeyWait(key)
  }

  ;double press
  else {
    layers.set(layer . 2, 1)
    
    local released := KeyWait(key, "T" . holdDelay / 1000)

    if released {
      layers.set(getOppositeLayer(layer), 0)
      layers.set(layer, 1)
      doublePress.set(layer, 0)
    } else
      KeyWait(key)

    layers.set(layer . 2, 0)
  }

  holding.set(layer, 0)
}

getOppositeLayer(layer) {
  switch layer {
    case "sym": return "ext"
    case "ext": return "sym"
  }
}`;function at(e,r,t,s){return`mouse := {
  keys: Map(
    "up", "${e}",
    "down", "${t}",
    "right", "${r}",
    "left", "${s}",
  ),
  pressCount: Map(
    "up", 0,
    "down", 0,
    "right", 0,
    "left", 0,
  ),
  moveCount_total: 0,
  moveCount: Map(
    "up", 0,
    "down", 0,
    "right", 0,
    "left", 0,
  ),
  boostSpeed: 0 ; on double/triple click  
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
    layers.get("ext")
    || GetKeyState(extendKey, "P")
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
`}function it(e,r){return`wheel := {
  boostSpeed_up: 0,
  boostSpeed_down: 0,
  scrolling_up: 0,
  scrolling_down: 0,
  pressCount_up: 0,
  pressCount_down: 0,
}
`+t(e)+t(r);function t(g){const p=d(g);return s(g,p)+o(g,p)}function s(g,p){return`
wheelScroll_${p}() {
  global

  if wheel.scrolling_${p}
    return

  If !wheel.pressCount_${p} {
    wheel.pressCount_${p} := 1
    SetTimer(wheel_${p}_boostSpeed_timer, -300)
  } Else
    wheel.pressCount_${p} := 2

  SendInput '{Blind}{${f(g)}}'

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
`}function o(g,p){return`
wheel_${p}_scrolling_timer() {
  global
  if GetKeyState("${g}","P") && (layers.get("ext") || GetKeyState(extendKey,"P"))
    SendInput '{Blind}{${f(g)}}'
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
`}function d(g){switch(g){case e:return"up";case r:return"down"}}function f(g){switch(g){case e:return"WheelUp";case r:return"WheelDown"}}}function lt(){return`; setBrightness(0)
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
`}const S=h.standard.map(e=>e==";"?"`;":e);let xe,ke,Ce,Ee,Se,ve;const le=`${x.intro}
;config layers \u2699\uFE0F      \u2699\uFE0F      \u2699\uFE0F      \u2699\uFE0F      \u2699\uFE0F
${x.switchers}

;extend layer \u{1F31F}    \u{1F31F}    \u{1F31F}    \u{1F31F}    \u{1F31F}    \u{1F31F}
#HotIf ${x.layer_condition.ext}
${he("extHtk")}#HotIf

;extend2 layer \u{1F31F}\u{1F31F}     \u{1F31F}\u{1F31F}     \u{1F31F}\u{1F31F}     \u{1F31F}\u{1F31F}
#HotIf ${x.layer_condition.ext2}
${he("ext2Htk")}#HotIf

;symbol layer \u{1F4B2}     \u{1F4B2}     \u{1F4B2}     \u{1F4B2}     \u{1F4B2}
#HotIf ${x.layer_condition.sym}
${st()}#HotIf

;symbol1 layer \u21E7\u{1F4B2}      \u21E7\u{1F4B2}      \u21E7\u{1F4B2}      \u21E7\u{1F4B2}
#HotIf ${x.layer_condition.sym1}
${ut()}#HotIf

;symbol2 layer \u{1F4B2}\u{1F4B2}    \u{1F4B2}\u{1F4B2}    \u{1F4B2}\u{1F4B2}    \u{1F4B2}\u{1F4B2}
#HotIf ${x.layer_condition.sym2}
${ct()}#HotIf

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

${lt()}

wheelDelay_default := 40
wheelDelay_multiplier := .25

${it(Se,ve)}

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

${at(Ce,ke,Ee,xe)}`;function he(e){return h[e].reduce((r,t,s)=>{if(t==".")return r;switch(t){case"WheelUp":return r+`	*${Se=S[s]}::wheelScroll_up()
`;case"WheelDown":return r+`	*${ve=S[s]}::wheelScroll_down()
`}switch(r+=`	${S[s]}::`,t){case"mouseU":r+='mouse_move("up")',Ce=S[s];break;case"mouseD":r+='mouse_move("down")',Ee=S[s];break;case"mouseL":r+='mouse_move("left")',xe=S[s];break;case"mouseR":r+='mouse_move("right")',ke=S[s];break;case"toggleMouseSpeed":case"brightnessUp":case"brightnessDown":r+=`${t}()`;break;case"Capslock":r+='SetCapsLockState(!GetKeyState("CapsLock", "T"))';break;default:r+=t}return r+`
`},"")}function st(){return h.sym.reduce((e,r,t)=>r=="."?e:(e+=`	${S[t]}::`,e+=+r||"0`\\/=[]".includes(r)?r:se(r),e+`
`),"")}function ct(){return h.sym2.reduce((e,r,t)=>r=="."?e:(e+=`	${S[t]}::`,e+=r.startsWith("F")||r.startsWith("^")?r:se(r),e+`
`),"")}function ut(){return h.symShift.reduce((e,r,t)=>r=="."?e:e+`	${S[t]}::${se(r)}
`,"")}function dt(e){switch(e){case"\u26A0\uFE0F":return"U+26a0}{U+fe0f";default:return`U+${e.codePointAt(0).toString(16)}`}}function se(e){return e=='"'?`SendText('"')`:e<="~"?`SendText("${e}")`:`Send("{${dt(e)}}")`}const mt=(window!=null?window:WorkerGlobalScope&&self instanceof WorkerGlobalScope)?self:{},j=(e=>{/**
* Prism: Lightweight, robust, elegant syntax highlighting
*
* @license MIT <https://opensource.org/licenses/MIT>
* @author Lea Verou <https://lea.verou.me>
* @namespace
* @public
*/let r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,s={},o={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function a(n){return n instanceof d?new d(n.type,a(n.content),n.alias):Array.isArray(n)?n.map(a):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++t}),a.__id},clone:function a(n,l){l=l||{};let i,c;switch(o.util.type(n)){case"Object":if(c=o.util.objId(n),l[c])return l[c];i={},l[c]=i;for(let u in n)n.hasOwnProperty(u)&&(i[u]=a(n[u],l));return i;case"Array":return c=o.util.objId(n),l[c]?l[c]:(i=[],l[c]=i,n.forEach(function(u,y){i[y]=a(u,l)}),i);default:return n}},getLanguage:function(a){for(;a;){let n=r.exec(a.className);if(n)return n[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,n){a.className=a.className.replace(RegExp(r,"gi"),""),a.classList.add("language-"+n)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(a){let n=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(n){let l=document.getElementsByTagName("script");for(let i in l)if(l[i].src==n)return l[i]}return null}},isActive:function(a,n,l){let i="no-"+n;for(;a;){let c=a.classList;if(c.contains(n))return!0;if(c.contains(i))return!1;a=a.parentElement}return!!l}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(a,n){let l=o.util.clone(o.languages[a]);for(let i in n)l[i]=n[i];return l},insertBefore:function(a,n,l,i){i=i||o.languages;let c=i[a],u={};for(let m in c)if(c.hasOwnProperty(m)){if(m==n)for(let b in l)l.hasOwnProperty(b)&&(u[b]=l[b]);l.hasOwnProperty(m)||(u[m]=c[m])}let y=i[a];return i[a]=u,o.languages.DFS(o.languages,function(m,b){b===y&&m!=a&&(this[m]=u)}),u},DFS:function a(n,l,i,c){c=c||{};let u=o.util.objId;for(let y in n)if(n.hasOwnProperty(y)){l.call(n,y,n[y],i||y);let m=n[y],b=o.util.type(m);b==="Object"&&!c[u(m)]?(c[u(m)]=!0,a(m,l,null,c)):b==="Array"&&!c[u(m)]&&(c[u(m)]=!0,a(m,l,y,c))}}},plugins:{},highlightAll:function(a,n){o.highlightAllUnder(document,a,n)},highlightAllUnder:function(a,n,l){let i={callback:l,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),o.hooks.run("before-all-elements-highlight",i);for(let c=0,u;u=i.elements[c++];)o.highlightElement(u,n===!0,i.callback)},highlightElement:function(a,n,l){let i=o.util.getLanguage(a),c=o.languages[i];o.util.setLanguage(a,i);let u=a.parentElement;u&&u.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(u,i);let y=a.textContent,m={element:a,language:i,grammar:c,code:y};function b(w){m.highlightedCode=w,o.hooks.run("before-insert",m),m.element.innerHTML=m.highlightedCode,o.hooks.run("after-highlight",m),o.hooks.run("complete",m),l&&l.call(m.element)}if(o.hooks.run("before-sanity-check",m),u=m.element.parentElement,u&&u.nodeName.toLowerCase()==="pre"&&!u.hasAttribute("tabindex")&&u.setAttribute("tabindex","0"),!m.code){o.hooks.run("complete",m),l&&l.call(m.element);return}if(o.hooks.run("before-highlight",m),!m.grammar){b(o.util.encode(m.code));return}if(n&&e.Worker){let w=new Worker(o.filename);w.onmessage=function(G){b(G.data)},w.postMessage(JSON.stringify({language:m.language,code:m.code,immediateClose:!0}))}else b(o.highlight(m.code,m.grammar,m.language))},highlight:function(a,n,l){let i={code:a,grammar:n,language:l};if(o.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=o.tokenize(i.code,i.grammar),o.hooks.run("after-tokenize",i),d.stringify(o.util.encode(i.tokens),i.language)},tokenize:function(a,n){let l=n.rest;if(l){for(let c in l)n[c]=l[c];delete n.rest}let i=new p;return v(i,i.head,a),g(a,i,n,i.head,0),Ae(i)},hooks:{all:{},add:function(a,n){let l=o.hooks.all;l[a]=l[a]||[],l[a].push(n)},run:function(a,n){let l=o.hooks.all[a];if(!(!l||!l.length))for(let i=0,c;c=l[i++];)c(n)}},Token:d};e.Prism=o;function d(a,n,l,i){this.type=a,this.content=n,this.alias=l,this.length=(i||"").length|0}d.stringify=function a(n,l){if(typeof n=="string")return n;if(Array.isArray(n)){let y="";return n.forEach(function(m){y+=a(m,l)}),y}let i={type:n.type,content:a(n.content,l),tag:"span",classes:["token",n.type],attributes:{},language:l},c=n.alias;c&&(Array.isArray(c)?Array.prototype.push.apply(i.classes,c):i.classes.push(c)),o.hooks.run("wrap",i);let u="";for(let y in i.attributes)u+=" "+y+'="'+(i.attributes[y]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+u+">"+i.content+"</"+i.tag+">"};function f(a,n,l,i){a.lastIndex=n;let c=a.exec(l);if(c&&i&&c[1]){let u=c[1].length;c.index+=u,c[0]=c[0].slice(u)}return c}function g(a,n,l,i,c,u){for(let y in l){if(!l.hasOwnProperty(y)||!l[y])continue;let m=l[y];m=Array.isArray(m)?m:[m];for(let b=0;b<m.length;++b){if(u&&u.cause==y+","+b)return;let w=m[b],G=w.inside,de=!!w.lookbehind,me=!!w.greedy,Le=w.alias;if(me&&!w.pattern.global){let _=w.pattern.toString().match(/[imsuy]*$/)[0];w.pattern=RegExp(w.pattern.source,_+"g")}let pe=w.pattern||w;for(let _=i.next,E=c;_!==n.tail&&!(u&&E>=u.reach);E+=_.value.length,_=_.next){let L=_.value;if(n.length>a.length)return;if(L instanceof d)continue;let $=1,k;if(me){if(k=f(pe,E,a,de),!k||k.index>=a.length)break;let R=k.index,Pe=k.index+k[0].length,M=E;for(M+=_.value.length;R>=M;)_=_.next,M+=_.value.length;if(M-=_.value.length,E=M,_.value instanceof d)continue;for(let D=_;D!==n.tail&&(M<Pe||typeof D.value=="string");D=D.next)$++,M+=D.value.length;$--,L=a.slice(E,M),k.index-=E}else if(k=f(pe,0,L,de),!k)continue;let fe=k.index,K=k[0],Z=L.slice(0,fe),ye=L.slice(fe+K.length),ee=E+L.length;u&&ee>u.reach&&(u.reach=ee);let N=_.prev;Z&&(N=v(n,N,Z),E+=Z.length),X(n,N,$);let Te=new d(y,G?o.tokenize(K,G):K,Le,K);if(_=v(n,N,Te),ye&&v(n,_,ye),$>1){let R={cause:y+","+b,reach:ee};g(a,n,l,_.prev,E,R),u&&R.reach>u.reach&&(u.reach=R.reach)}}}}}function p(){let a={value:null,prev:null,next:null},n={value:null,prev:a,next:null};a.next=n,this.head=a,this.tail=n,this.length=0}function v(a,n,l){let i=n.next,c={value:l,prev:n,next:i};return n.next=c,i.prev=c,a.length++,c}function X(a,n,l){let i=n.next,c;for(let u=0;u<l&&i!==a.tail;u++)i=i.next,c=u;n.next=i,i.prev=n,a.length-=c}function Ae(a){let n=[],l=a.head.next;for(;l!==a.tail;)n.push(l.value),l=l.next;return n}if(!e.document)return e.addEventListener&&(o.disableWorkerMessageHandler||e.addEventListener("message",function(a){let n=JSON.parse(a.data),l=n.language,i=n.code,c=n.immediateClose;e.postMessage(o.highlight(i,o.languages[l],l)),c&&e.close()},!1)),o;let P=o.util.currentScript();P&&(o.filename=P.src,P.hasAttribute("data-manual")&&(o.manual=!0));function Q(){o.manual||o.highlightAll()}if(!o.manual){let a=document.readyState;a==="loading"||a==="interactive"&&P&&P.defer?document.addEventListener("DOMContentLoaded",Q):window.requestAnimationFrame?window.requestAnimationFrame(Q):window.setTimeout(Q,16)}return o})(mt);typeof U!="undefined"&&U.exports&&(U.exports=j);typeof global!="undefined"&&(global.Prism=j);j.languages.autohotkey={comment:[{pattern:/(^|\s);.*/,lookbehind:!0},{pattern:/(^[\t ]*)\/\*(?:[\r\n](?![ \t]*\*\/)|[^\r\n])*(?:[\r\n][ \t]*\*\/)?/m,lookbehind:!0,greedy:!0}],tag:{pattern:/^([ \t]*)[^\s,`":]+(?=:[ \t]*$)/m,lookbehind:!0},string:/"(?:[^"\n\r]|"")*"/,variable:/%\w+%/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/\?|\/\/?=?|:=|::?|\|[=|]?|&[=&]?|\+[=+]?|-[=-]?|\*[=*]?|<(?:<=?|>|=)?|>>?=?|[.^!=~]=?|\b(?:AND|NOT|OR)\b/,boolean:/\b(?:false|true)\b/,command:{pattern:/\b(?:AutoTrim|BlockInput|Break|Click|ClipWait|Continue|Control|ControlClick|ControlFocus|ControlGet|ControlGetFocus|ControlGetPos|ControlGetText|ControlMove|ControlSend|ControlSendRaw|ControlSetText|CoordMode|Critical|DetectHiddenText|DetectHiddenWindows|Drive|DriveGet|DriveSpaceFree|EnvAdd|EnvDiv|EnvGet|EnvMult|EnvSet|EnvSub|EnvUpdate|Exit|ExitApp|FileAppend|FileCopy|FileCopyDir|FileCreateDir|FileCreateShortcut|FileDelete|FileEncoding|FileGetAttrib|FileGetShortcut|FileGetSize|FileGetTime|FileGetVersion|FileInstall|FileMove|FileMoveDir|FileRead|FileReadLine|FileRecycle|FileRecycleEmpty|FileRemoveDir|FileSelectFile|FileSelectFolder|FileSetAttrib|FileSetTime|FormatTime|GetKeyState|Gosub|Goto|GroupActivate|GroupAdd|GroupClose|GroupDeactivate|Gui|GuiControl|GuiControlGet|Hotkey|ImageSearch|IniDelete|IniRead|IniWrite|Input|InputBox|KeyWait|ListHotkeys|ListLines|ListVars|Loop|Menu|MouseClick|MouseClickDrag|MouseGetPos|MouseMove|MsgBox|OnExit|OutputDebug|Pause|PixelGetColor|PixelSearch|PostMessage|Process|Progress|Random|RegDelete|RegRead|RegWrite|Reload|Repeat|Return|Run|RunAs|RunWait|Send|SendText|SendEvent|SendInput|SendMessage|SendMode|SendPlay|SendRaw|SetBatchLines|SetCapslockState|SetControlDelay|SetDefaultMouseSpeed|SetEnv|SetFormat|SetKeyDelay|SetMouseDelay|SetNumlockState|SetRegView|SetScrollLockState|SetStoreCapslockMode|SetTimer|SetTitleMatchMode|SetWinDelay|SetWorkingDir|Shutdown|Sleep|Sort|SoundBeep|SoundGet|SoundGetWaveVolume|SoundPlay|SoundSet|SoundSetWaveVolume|SplashImage|SplashTextOff|SplashTextOn|SplitPath|StatusBarGetText|StatusBarWait|StringCaseSense|StringGetPos|StringLeft|StringLen|StringLower|StringMid|StringReplace|StringRight|StringSplit|StringTrimLeft|StringTrimRight|StringUpper|Suspend|SysGet|Thread|ToolTip|Transform|TrayTip|URLDownloadToFile|WinActivate|WinActivateBottom|WinClose|WinGet|WinGetActiveStats|WinGetActiveTitle|WinGetClass|WinGetPos|WinGetText|WinGetTitle|WinHide|WinKill|WinMaximize|WinMenuSelectItem|WinMinimize|WinMinimizeAll|WinMinimizeAllUndo|WinMove|WinRestore|WinSet|WinSetTitle|WinShow|WinWait|WinWaitActive|WinWaitClose|WinWaitNotActive)\b/i,alias:"selector"},constant:/\b(?:a_ahkpath|a_ahkversion|a_appdata|a_appdatacommon|a_autotrim|a_batchlines|a_caretx|a_carety|a_computername|a_controldelay|a_cursor|a_dd|a_ddd|a_dddd|a_defaultmousespeed|a_desktop|a_desktopcommon|a_detecthiddentext|a_detecthiddenwindows|a_endchar|a_eventinfo|a_exitreason|a_fileencoding|a_formatfloat|a_formatinteger|a_gui|a_guicontrol|a_guicontrolevent|a_guievent|a_guiheight|a_guiwidth|a_guix|a_guiy|a_hour|a_iconfile|a_iconhidden|a_iconnumber|a_icontip|a_index|a_ipaddress1|a_ipaddress2|a_ipaddress3|a_ipaddress4|a_is64bitos|a_isadmin|a_iscompiled|a_iscritical|a_ispaused|a_issuspended|a_isunicode|a_keydelay|a_language|a_lasterror|a_linefile|a_linenumber|a_loopfield|a_loopfileattrib|a_loopfiledir|a_loopfileext|a_loopfilefullpath|a_loopfilelongpath|a_loopfilename|a_loopfileshortname|a_loopfileshortpath|a_loopfilesize|a_loopfilesizekb|a_loopfilesizemb|a_loopfiletimeaccessed|a_loopfiletimecreated|a_loopfiletimemodified|a_loopreadline|a_loopregkey|a_loopregname|a_loopregsubkey|a_loopregtimemodified|a_loopregtype|a_mday|a_min|a_mm|a_mmm|a_mmmm|a_mon|a_mousedelay|a_msec|a_mydocuments|a_now|a_nowutc|a_numbatchlines|a_ostype|a_osversion|a_priorhotkey|a_priorkey|a_programfiles|a_programs|a_programscommon|a_ptrsize|a_regview|a_screendpi|a_screenheight|a_screenwidth|a_scriptdir|a_scriptfullpath|a_scripthwnd|a_scriptname|a_sec|a_space|a_startmenu|a_startmenucommon|a_startup|a_startupcommon|a_stringcasesense|a_tab|a_temp|a_thisfunc|a_thishotkey|a_thislabel|a_thismenu|a_thismenuitem|a_thismenuitempos|a_tickcount|a_timeidle|a_timeidlephysical|a_timesincepriorhotkey|a_timesincethishotkey|a_titlematchmode|a_titlematchmodespeed|a_username|a_wday|a_windelay|a_windir|a_workingdir|a_yday|a_year|a_yweek|a_yyyy|clipboard|clipboardall|comspec|errorlevel|programfiles)\b/i,builtin:/\b(?:abs|acos|asc|asin|atan|ceil|chr|class|comobjactive|comobjarray|comobjconnect|comobjcreate|comobjerror|comobjflags|comobjget|comobjquery|comobjtype|comobjvalue|cos|dllcall|exp|fileexist|Fileopen|floor|format|il_add|il_create|il_destroy|instr|isfunc|islabel|IsObject|ln|log|ltrim|lv_add|lv_delete|lv_deletecol|lv_getcount|lv_getnext|lv_gettext|lv_insert|lv_insertcol|lv_modify|lv_modifycol|lv_setimagelist|mod|numget|numput|onmessage|regexmatch|regexreplace|registercallback|round|rtrim|sb_seticon|sb_setparts|sb_settext|sin|sqrt|strlen|strreplace|strsplit|substr|tan|tv_add|tv_delete|tv_get|tv_getchild|tv_getcount|tv_getnext|tv_getparent|tv_getprev|tv_getselection|tv_gettext|tv_modify|varsetcapacity|winactive|winexist|__Call|__Get|__New|__Set)\b/i,symbol:/\b(?:alt|altdown|altup|appskey|backspace|browser_back|browser_favorites|browser_forward|browser_home|browser_refresh|browser_search|browser_stop|bs|capslock|ctrl|ctrlbreak|ctrldown|ctrlup|del|delete|down|end|enter|esc|escape|f1|f10|f11|f12|f13|f14|f15|f16|f17|f18|f19|f2|f20|f21|f22|f23|f24|f3|f4|f5|f6|f7|f8|f9|home|ins|insert|joy1|joy10|joy11|joy12|joy13|joy14|joy15|joy16|joy17|joy18|joy19|joy2|joy20|joy21|joy22|joy23|joy24|joy25|joy26|joy27|joy28|joy29|joy3|joy30|joy31|joy32|joy4|joy5|joy6|joy7|joy8|joy9|joyaxes|joybuttons|joyinfo|joyname|joypov|joyr|joyu|joyv|joyx|joyy|joyz|lalt|launch_app1|launch_app2|launch_mail|launch_media|lbutton|lcontrol|lctrl|left|lshift|lwin|lwindown|lwinup|mbutton|media_next|media_play_pause|media_prev|media_stop|numlock|numpad0|numpad1|numpad2|numpad3|numpad4|numpad5|numpad6|numpad7|numpad8|numpad9|numpadadd|numpadclear|numpaddel|numpaddiv|numpaddot|numpaddown|numpadend|numpadenter|numpadhome|numpadins|numpadleft|numpadmult|numpadpgdn|numpadpgup|numpadright|numpadsub|numpadup|pgdn|pgup|printscreen|ralt|rbutton|rcontrol|rctrl|right|rshift|rwin|rwindown|rwinup|scrolllock|shift|shiftdown|shiftup|space|tab|up|volume_down|volume_mute|volume_up|wheeldown|wheelleft|wheelright|wheelup|xbutton1|xbutton2)\b/i,directive:{pattern:/#[a-z]+\b/i,alias:"important"},keyword:/\b(?:Abort|AboveNormal|Add|ahk_class|ahk_exe|ahk_group|ahk_id|ahk_pid|All|Alnum|Alpha|AltSubmit|AltTab|AltTabAndMenu|AltTabMenu|AltTabMenuDismiss|AlwaysOnTop|AutoSize|Background|BackgroundTrans|BelowNormal|between|BitAnd|BitNot|BitOr|BitShiftLeft|BitShiftRight|BitXOr|Bold|Border|Button|ByRef|Catch|Checkbox|Checked|CheckedGray|Choose|ChooseString|Close|Color|ComboBox|Contains|ControlList|Count|Date|DateTime|Days|DDL|Default|DeleteAll|Delimiter|Deref|Destroy|Digit|Disable|Disabled|DropDownList|Edit|Eject|Else|Enable|Enabled|Error|Exist|Expand|ExStyle|FileSystem|Finally|First|Flash|Float|FloatFast|Focus|Font|for|global|Grid|Group|GroupBox|GuiClose|GuiContextMenu|GuiDropFiles|GuiEscape|GuiSize|Hdr|Hidden|Hide|High|HKCC|HKCR|HKCU|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_LOCAL_MACHINE|HKEY_USERS|HKLM|HKU|Hours|HScroll|Icon|IconSmall|ID|IDLast|If|IfEqual|IfExist|IfGreater|IfGreaterOrEqual|IfInString|IfLess|IfLessOrEqual|IfMsgBox|IfNotEqual|IfNotExist|IfNotInString|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Ignore|ImageList|in|Integer|IntegerFast|Interrupt|is|italic|Join|Label|LastFound|LastFoundExist|Limit|Lines|List|ListBox|ListView|local|Lock|Logoff|Low|Lower|Lowercase|MainWindow|Margin|Maximize|MaximizeBox|MaxSize|Minimize|MinimizeBox|MinMax|MinSize|Minutes|MonthCal|Mouse|Move|Multi|NA|No|NoActivate|NoDefault|NoHide|NoIcon|NoMainWindow|norm|Normal|NoSort|NoSortHdr|NoStandard|Not|NoTab|NoTimers|Number|Off|Ok|On|OwnDialogs|Owner|Parse|Password|Picture|Pixel|Pos|Pow|Priority|ProcessName|Radio|Range|Read|ReadOnly|Realtime|Redraw|Region|REG_BINARY|REG_DWORD|REG_EXPAND_SZ|REG_MULTI_SZ|REG_SZ|Relative|Rename|Report|Resize|Restore|Retry|RGB|Screen|Seconds|Section|Serial|SetLabel|ShiftAltTab|Show|Single|Slider|SortDesc|Standard|static|Status|StatusBar|StatusCD|strike|Style|Submit|SysMenu|Tab2|TabStop|Text|Theme|Throw|Tile|ToggleCheck|ToggleEnable|ToolWindow|Top|Topmost|TransColor|Transparent|Tray|TreeView|Try|TryAgain|Type|UnCheck|underline|Unicode|Unlock|Until|UpDown|Upper|Uppercase|UseErrorLevel|Vis|VisFirst|Visible|VScroll|Wait|WaitClose|WantCtrlA|WantF2|WantReturn|While|Wrap|Xdigit|xm|xp|xs|Yes|ym|yp|ys)\b/i,function:/[^(); \t,\n+*\-=?>:\\\/<&%\[\]]+(?=\()/,punctuation:/[{}[\]():,]/};const B=document.createElement("div");B.id="ahkCtx";const ce=document.createElement("pre");ce.className="language-autohotkey";B.append(ce);le.split(`
`).map((e,r)=>{const t=document.createElement("div");t.className="lineIndex",t.innerText=r,t.style.userSelect="none";const s=document.createElement("div");s.className="lineContent",s.innerHTML=j.highlight(e,j.languages.autohotkey),ce.append(t,s)});const F=document.createElement("button");F.id="copyBtn";F.textContent="copy";B.append(F);const W=document.createElement("span");F.prepend(W);let te;F.addEventListener("click",async()=>{await navigator.clipboard.writeText(le),!te&&(te=!0,W.textContent="copied \u2713",W.style.opacity=1,await A(1500),W.style.opacity=0,await A(500),W.textContent="",te=!1)},{once:!1});const ue=document.createElement("button");ue.id="downloadBtn";B.append(ue);const J=document.createElement("a");J.textContent="download";J.download="uniparse.ahk";ue.append(J);const pt=new Blob([le],{type:"text/plain"});J.href=URL.createObjectURL(pt);const C=document.createElement("div");C.className="loaderCtx";const Me=document.createElement("div");Me.className="loader";C.append(Me);const re=1e3;C.style.transition=`all ${re}ms`;C.style.transform="scale(0)";async function ft(e,r){await Ie(e,async()=>{r.style.cursor="pointer",r.append(C),await A(1),C.style.transform="scale(1)",await A(re),yt(r)},async()=>{C.style.transform="scale(0)",await A(re),C.remove(),r.style.cursor=""})}function yt(e){const{width:r,height:t}=C.getBoundingClientRect();e.addEventListener("mousedown",async o=>{s(o),e.addEventListener("mousemove",s),await oe(e,"mouseup"),e.removeEventListener("mousemove",s)});function s(o){C.style.left=o.clientX-r/2+"px",C.style.top=o.clientY-t/2+"px"}}(async()=>{const e=document.createElement("main");document.body.append(e);const r=qe();await A(150),await ft(r,e);const t=document.createElement("div");t.id="kbdCtx",t.append(O,z),e.append(t,B),nt(),Ve(),Fe(e,2e3),console.log("\u{1F4A1}\u{1F4A1}done\u{1F4A1}\u{1F4A1}")})()});export default ht();
