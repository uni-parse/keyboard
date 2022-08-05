import { mouse, wheel } from "./mouse"
function autohotkey(keys, pre, btn, navigator) {
  let mouseL, mouseR, mouseU, mouseD, extendKey, symbolKey,
    output = `#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
Process, Priority,, High\n
x_slow = 4
y_slow := x_slow
x_default = 18
y_default := x_default
x_multiplayer = 3
y_multiplayer := x_multiplayer
x := x_default
y := y_default
speed_switcher = 0
mouseDelaySpeed = 50
mousePreDelay = 200
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
}\n\n`

  // standard remapint
  output += ';standard layer\n'
  keys.forEach(key => {
    if (key[1][0] == 'F24') {
      extendKey = key[0]
    } else if (key[1][0] == 'F23') {
      symbolKey = key[0]
    } else if (0 && (key[1][0] == 'RAlt' || key[1][0] == 'LAlt' || key[1][0] == 'LShift' || key[1][0] == 'RCtrl' || key[1][0] == 'LCtrl' || key[1][0] == 'RWin' || key[1][0] == 'LWin')) {
      output += `\t${key[0]}::\n\t\tSendInput {Blind}{${key[1][0]} Down}\n\t\tKeyWait ${key[0]}\n\t\tSendInput {${key[1][0]} Up}\n\t\treturn\n`
    } else {
      output += `${key[1] && !(typeof key[1] == 'object' && !key[1][0]) ?
        `\t${key[0]}::${(typeof key[1] == 'object' ? key[1][0] : key[1])}\n` : ''}`
    }
  })

  // config layers
  output += `\n\n;config
#InputLevel 1
  ${extendKey}::F24
  ${symbolKey}::F23
#InputLevel 0
#Persistent
SetCapsLockState, AlwaysOff

#If !layer_ext
  F24 & F23::
    layer_sym = 0
    layer_ext = 1
    KeyWait ${extendKey}
    KeyWait ${extendKey}, D
    layer_ext = 0
    return
  F24::
    if press_F24 {
      layer_sym = 0
      layer_ext = 1
      KeyWait ${extendKey}
      KeyWait ${extendKey}, D
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
    KeyWait ${symbolKey}
    layer_sym2 = 0
    return
  F23::
    if press_F23 {
        layer_ext = 0
        layer_sym = 1
        KeyWait ${symbolKey}
        KeyWait ${symbolKey}, D
        layer_sym = 0
    } Else
      press_F23 = 1
    SetTimer, KeyF23timer, -300
    Return
  KeyF23timer:
    press_F23 = 0
    Return
#If\n\n`

  // extend layer
  output += `;extend layer\n#If GetKeyState("${extendKey}", "P") && !GetKeyState("${symbolKey}", "P")\n`
  keys.forEach(key => {
    if (typeof key[2] == 'object' && key[2][0]) {
      if (key[2][0].includes('Button')) {
        output += `\tF24 & ${key[0]}::${key[2][0]}\n`
      } else if (key[2][0].includes('Wheel')) {
        output += `\tF24 & ${key[0]}::
    While GetKeyState("${key[0]}","P") && GetKeyState("${extendKey}","P"){
      SendInput {Blind}{${key[2][0]}}
      sleep A_Index = 1 ? mousePreDelay : mouseDelaySpeed
    }
    return\n`
      } else if (key[2][0] == 'Capslock') {
        output += `\tF24 & ${key[0]}::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"\n\t\treturn\n`
      } else if (key[2][0] == 'mouseL') {
        mouseL = key[0]
      } else if (key[2][0] == 'mouseR') {
        mouseR = key[0]
      } else if (key[2][0] == 'mouseU') {
        mouseU = key[0]
      } else if (key[2][0] == 'mouseD') {
        mouseD = key[0]
      } else if (key[2][0] == 'speed') {
        output += `\tF24 & ${key[0]}::
		speed_switcher := !speed_switcher
		resetSpeed()
		return\n`
      } else {
        output += `${key[2] && !(typeof key[2] == 'object' && !key[2][0]) ?
          `\tF24 & ${key[0]}::${typeof key[2] == 'object' ? key[2][0] : key[2]}\n` : ''}`
      }
    }
  })
  output += '#If\n#If layer_ext\n'
  keys.forEach(key => {
    if (typeof key[2] == 'object' && key[2][0]) {
      if (key[2][0].includes('Button')) {
        output += `\t${key[0]}::${key[2][0]}\n`
      } else if (key[2][0].includes('Wheel')) {
        output += `\t${key[0]}::${key[2][0]}
  ${key[0]} Up::Return
  ${key[0]}::
    While GetKeyState("${key[0]}","P"){
      SendInput {Blind}{${key[2][0]}}
      sleep A_Index = 1 ? mousePreDelay : mouseDelaySpeed
    }
    return\n`
      } else if (key[2][0] == 'Capslock') {
        output += `\t${key[0]}::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"\n\t\treturn\n`
      } else if (key[2][0] == 'speed') {
        output += `\t${key[0]}::
		speed_switcher := !speed_switcher
		resetSpeed()
		return\n`
      } else if (!key[2][0].includes('mouse')) {
        output += `${key[2] && !(typeof key[2] == 'object' && !key[2][0]) ?
          `\t${key[0]}::${typeof key[2] == 'object' ? key[2][0] : key[2]}\n` : ''}`
      }
    }
  })
  output += '#If\n\n'

  // symbol layer
  output += `;symbol layer\n#If GetKeyState("${symbolKey}", "P") && !GetKeyState("${extendKey}", "P") && !layer_sym2\n`
  keys.forEach(key => {
    if (typeof key[3] == 'object' && (key[3][0] || key[3][0] == 0)) {
      if (typeof key[3][0] == 'number' || key[3][0] == '`' || key[3][0] == '\\' || key[3][0] == '/' || key[3][0] == '=' || key[3][0] == '[' || key[3][0] == ']') {
        output += `\tF23 & ${key[0]}::${key[3][0]}\n`
      } else if (key[3][0]) {
        output += `\tF23 & ${key[0]}::SendRaw ${key[3][0]}\n\t\treturn\n`
      }
    } else if (typeof key[3] == 'number' || key[3] == '`' || key[3] == '\\' || key[3] == '/' || key[3] == '=' || key[3] == '[' || key[3] == ']') {
      output += `\tF23 & ${key[0]}::${key[3]}\n`
    } else if (key[3]) {
      output += `\tF23 & ${key[0]}::SendRaw ${key[3]}\n\t\treturn\n`
    }
  })
  output += '#If\n#If layer_sym\n'
  keys.forEach(key => {
    if (typeof key[3] == 'object' && (key[3][0] || key[3][0] == 0)) {
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

  // symbol2 layer
  output += `;symbol2 layer
#If layer_sym2\n`
  keys.forEach(key => {
    if (typeof key[4] == 'object' && key[4][0]) {
      output += `${key[4] && !(typeof key[4] == 'object' && !key[4][0]) ?
        `\tF23 & ${key[0]}::${((typeof key[4] == 'object') ? (key[4][0]) : key[4])}\n` : ''}`
    } else if (key[4]) {
      if (!key[4].startsWith('F') && !key[4].startsWith('^')) {
        output += `\tF23 & ${key[0]}::SendRaw ${key[4]}\n\t\treturn\n`
      } else {
        output += `\tF23 & ${key[0]}::${key[4]}\n`
      }
    }
  })
  output += `#If\n\n`

  // mouse
  output += `;mouse in extend layer\n#If layer_ext || (GetKeyState("${extendKey}", "P") && !GetKeyState("${symbolKey}", "P") && !layer_sym)\n`
  output += mouse(mouseU, mouseR, mouseD, mouseL, 'F24')
  output += `#If`

  //console.log(output)
  pre.innerText = output
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(output)
      .then(() => btn.textContent = 'copied')
  })
}

export default autohotkey