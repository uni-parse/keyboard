import mouse from "./mouse"
import { extendKey, symbolKey, config } from "./config"
import brightness from "./brighness"
import keys from "./keys"


function autohotkey(pre, btn, navigator) {
  let {
    standard: base,
    sym, sym2, symShift, extHtk, ext2Htk
  } = keys,
    mouseL, mouseR, mouseU, mouseD,
    output = `;
;
;   made by UniParse
;   github.com/TheUniParse
;   twitter.com/UniParse
;
;
#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
Process, Priority,, High\n
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
scroll_default_speed = 40
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

brightnessJump = 10
CurrentBrightness := GetCurrentBrightNess()
; ChangeBrightness(0)
; minimumBrightness := GetCurrentBrightNess()
; ChangeBrightness(CurrentBrightness)

ChangeBrightness( ByRef brightness := 50, timeout = 1 ) {
	For property in ComObjGet( "winmgmts:\\\\.\\root\\WMI" ).ExecQuery("SELECT * FROM WmiMonitorBrightnessMethods" )
		property.WmiSetBrightness( timeout, brightness)
}
GetCurrentBrightNess() {
	For property in ComObjGet( "winmgmts:\\\\.\\root\\WMI" ).ExecQuery( "SELECT * FROM WmiMonitorBrightness" )
		currentBrightness := property.CurrentBrightness	
	return currentBrightness
}

#Persistent
SetCapsLockState, AlwaysOff
\n\n`


  output += ';config layers ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️'
  output += config.switchers()

  output += `;extend layer 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟\n#If ${config.layer_condition.ext}\n`
  extHtk.forEach((key, i) => {
    if (key.includes('Button'))
      output += `\t${base[i]}::${key}\n`
    else if (key == 'Capslock')
      output += `\t${base[i]}::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"\n\t\treturn\n`
    else if (key == 'mouseL') mouseL = base[i]
    else if (key == 'mouseR') mouseR = base[i]
    else if (key == 'mouseU') mouseU = base[i]
    else if (key == 'mouseD') mouseD = base[i]
    else if (key == 'brightnessUp')
      output += brightness(base[i], 1)
    else if (key == 'brightnessDown')
      output += brightness(base[i])
    else if (key == 'speed')
      output += `\t${base[i]}::
		speed_switcher := !speed_switcher
		resetSpeed()
		return\n`
    else if (key != '.' && !key.includes('mouse') && !key.includes('Wheel'))
      output += `\t${base[i]}::${key}\n`
  })
  output += '#If\n\n'


  output += `;extend2 layer 🌟🌟 🌟🌟 🌟🌟 🌟🌟 🌟🌟 🌟🌟\n#If ${config.layer_condition.ext2} \n`
  //ext2Htk.forEach(key => {})
  output += '#If\n\n'


  output += `;symbol layer 💲  💲  💲  💲  💲  💲  💲  💲  💲\n#If ${config.layer_condition.sym} \n`
  sym.forEach((key, i) => {
    if (+key || key == 0 || key == '`' || key == '\\' || key == '/' || key == '=' || key == '[' || key == ']')
      output += `\t${base[i]}::${key}\n`
    else if (key != '.')
      output += `\t${base[i]}::SendRaw ${key}\n\t\treturn\n`
  })
  output += '#If\n\n'


  output += `;symbol1 layer ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲\n#If ${config.layer_condition.sym1}\n`
  symShift.forEach((key, i) => {
    if (key != '.')
      output += `\t${base[i]}::sendRaw ${key}\n\t\treturn\n`
  })
  output += '#If\n\n'


  output += `;symbol2 layer 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲\n#If ${config.layer_condition.sym2}\n`
  sym2.forEach((key, i) => {
    if (key.startsWith('F') || key.startsWith('^'))
      output += `\t${base[i]}::${key}\n`
    else if (key != '.')
      output += `\t${base[i]}::SendRaw ${key}\n\t\treturn\n`
  })
  output += `#If\n\n`



  output += `;mouse in extend layer 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺\n#If ${config.layer_condition.ext}\n`
  output += mouse.move(mouseU, mouseR, mouseD, mouseL, extendKey)
  output += mouse.wheel('wheelUp', 'q', extendKey)
  output += mouse.wheel('wheelDown', 'a', extendKey)
  output += `#If\n\n`


  //console.log(output)
  pre.innerText = output
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(output)
      .then(() => btn.textContent = 'copied')
  })
}

export default autohotkey