
import keys from "./keys"
import config from "./config"
import mouse from "./mouse"
let { standard: base } = keys,
  mouseL, mouseR, mouseU, mouseD,
  autohotkeyStr = getAutohotkeyStr()

export default autohotkeyStr

function getAutohotkeyStr() {
  return `;
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

    + `;config layers ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️`
    + config.switchers

    + `;extend layer 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟\n#If ${config.layer_condition.ext}\n`
    + getExt() + '#If\n\n'

    + `;extend2 layer 🌟🌟 🌟🌟 🌟🌟 🌟🌟 🌟🌟 🌟🌟\n#If ${config.layer_condition.ext2} \n`
    + getExt2() + '#If\n\n'

    + `;symbol layer 💲  💲  💲  💲  💲  💲  💲  💲  💲\n#If ${config.layer_condition.sym} \n`
    + getSym() + '#If\n\n'

    + `;symbol1 layer ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲\n#If ${config.layer_condition.sym1}\n`
    + getSymShift() + '#If\n\n'

    + `;symbol2 layer 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲\n#If ${config.layer_condition.sym2}\n`
    + getSym2() + `#If\n\n`

    + `;mouse in extend layer 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺\n#If ${config.layer_condition.ext}\n`
    + mouse.move(config.extKey, mouseU, mouseR, mouseD, mouseL)
    + mouse.wheel('wheelUp', 'q', config.extKey)
    + mouse.wheel(config.extKey, 'a', 'wheelDown') + `#If\n\n`
}

function getExt() {
  let str = ''
  keys.extHtk.forEach((key, i) => {
    if (key.includes('Button'))
      str += `\t${base[i]}::${key}\n`
    else if (key == 'Capslock')
      str += `\t${base[i]}::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"\n\t\treturn\n`
    else if (key == 'mouseL') mouseL = base[i]
    else if (key == 'mouseR') mouseR = base[i]
    else if (key == 'mouseU') mouseU = base[i]
    else if (key == 'mouseD') mouseD = base[i]
    else if (key == 'brightnessUp')
      str += getBrightness(base[i], 1)
    else if (key == 'brightnessDown')
      str += getBrightness(base[i])
    else if (key == 'speed') str += `\t${base[i]}::
		speed_switcher := !speed_switcher
		resetSpeed()
		return\n`
    else if (key != '.' && !key.includes('mouse') && !key.includes('Wheel')) str += `\t${base[i]}::${key}\n`
  })
  return str
}
function getExt2() {
  //keys.ext2Htk.forEach(key => {})
}
function getSym() {
  let str = ''
  keys.sym.forEach((key, i) => {
    if (+key || key == 0 || key == '`' || key == '\\' || key == '/' || key == '=' || key == '[' || key == ']')
      str += `\t${base[i]}::${key}\n`
    else if (key != '.')
      str += `\t${base[i]}::SendRaw ${key}\n\t\treturn\n`
  })
  return str
}
function getSym2() {
  let str = ''
  keys.sym2.forEach((key, i) => {
    if (key.startsWith('F') || key.startsWith('^'))
      str += `\t${base[i]}::${key}\n`
    else if (key != '.')
      str += `\t${base[i]}::SendRaw ${key}\n\t\treturn\n`
  })
  return str
}
function getSymShift() {
  return keys.symShift.reduce((str, key, i) => key != '.' ?
    str + `\t${base[i]}::sendRaw ${key}\n\t\treturn\n` : ''
    , '')
}

function getBrightness(key, isIncreasing = 0) {
  return isIncreasing ?
    `\t${key}::ChangeBrightness(CurrentBrightness < 100 - brightnessJump ? CurrentBrightness += brightnessJump : 100)
    return\n`
    : `\t${key}::ChangeBrightness(CurrentBrightness > brightnessJump ? CurrentBrightness -= brightnessJump : 0)
    return\n`
}