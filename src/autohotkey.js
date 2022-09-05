import mouse from "./mouse"
import { extendKey, symbolKey, config } from "./config"
import brightness from "./brighness"
function autohotkey(keys, pre, btn, navigator) {
  let mouseL, mouseR, mouseU, mouseD,
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
ChangeBrightness(0)
minimumBrightness := GetCurrentBrightNess()
ChangeBrightness(CurrentBrightness)

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
  keys.forEach(key => {
    if (Array.isArray(key[2]) && key[2][0]) {
      if (key[2][0].includes('Button')) {
        output += `\t${key[0]}::${key[2][0]}\n`
      } else if (key[2][0] == 'Capslock') {
        output += `\t${key[0]}::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"\n\t\treturn\n`
      } else if (key[2][0] == 'mouseL') {
        mouseL = key[0]
      } else if (key[2][0] == 'mouseR') {
        mouseR = key[0]
      } else if (key[2][0] == 'mouseU') {
        mouseU = key[0]
      } else if (key[2][0] == 'mouseD') {
        mouseD = key[0]
      } else if (key[2][0] == 'brightnessUp') {
        output += brightness(key[0], 1)
      } else if (key[2][0] == 'brightnessDown') {
        output += brightness(key[0])
      } else if (key[2][0] == 'speed') {
        output += `\t${key[0]}::
		speed_switcher := !speed_switcher
		resetSpeed()
		return\n`
      } else if (!key[2][0].includes('mouse') && !key[2][0].includes('Wheel')) {
        output += `${key[2] && !(Array.isArray(key[2]) && !key[2][0]) ?
          `\t${key[0]}::${Array.isArray(key[2]) ? key[2][0] : key[2]}\n` : ''}`
      }
    }
  })
  output += '#If\n\n'


  output += `;extend2 layer 🌟🌟 🌟🌟 🌟🌟 🌟🌟 🌟🌟 🌟🌟\n#If ${config.layer_condition.ext2}\n`
  keys.forEach(key => {

  })
  output += '#If\n\n'


  output += `;symbol layer 💲 💲 💲 💲 💲 💲 💲 💲 💲 💲 💲 💲\n#If ${config.layer_condition.sym}\n`
  keys.forEach(key => {
    if (Array.isArray(key[3]) && (key[3][0] || key[3][0] == 0)) {
      if (typeof key[3][0] == 'number' || key[3][0] == '`' || key[3][0] == '\\' || key[3][0] == '/' || key[3][0] == '=' || key[3][0] == '[' || key[3][0] == ']') {
        output += `\t${key[0]}::${key[3][0]}\n`
      } else if (key[3][0]) {
        output += `\t${key[0]}::SendRaw ${key[3][0]}\n\t\treturn\n`
      }
    } else if (typeof key[3] == 'number' || key[3] == '`' || key[3] == '\\' || key[3] == '/' || key[3] == '=' || key[3] == '[' || key[3] == ']') {
      output += `\t${key[0]}::${key[3]}\n`
    } else if (key[3]) {
      output += `\t${key[0]}::SendRaw ${key[3]}\n\t\treturn\n`
    }
  })
  output += '#If\n\n'


  output += `;symbol1 layer ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲\n#If ${config.layer_condition.sym1}\n`
  keys.forEach(key => {
    if (Array.isArray(key[3])) {

      if (key[3][1].includes(' ') && key[3][1].split(' ')[1]) {
        output += `\t${key[0]}::sendRaw ${key[3][1].split(' ')[1]}\n\t\treturn\n`
      }
    }

  })
  output += '#If\n\n'


  output += `;symbol2 layer 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲\n#If ${config.layer_condition.sym2}\n`
  keys.forEach(key => {
    if (Array.isArray(key[4]) && key[4][0]) {
      output += `${key[4] && !(Array.isArray(key[4]) && !key[4][0]) ?
        `\t${key[0]}::${((Array.isArray(key[4])) ? (key[4][0]) : key[4])}\n` : ''}`
    } else if (key[4]) {
      if (!key[4].startsWith('F') && !key[4].startsWith('^')) {
        output += `\t${key[0]}::SendRaw ${key[4]}\n\t\treturn\n`
      } else {
        output += `\t${key[0]}::${key[4]}\n`
      }
    }
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