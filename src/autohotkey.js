import { mouse, wheel } from "./mouse"
function autohotkey(keys, pre, btn, navigator) {
  let mouseL, mouseR, mouseU, mouseD, extendKey, symbolKey,
    output = `#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
Process, Priority,, High\n
x1 = 4
y1 := x1
x2 = 18
y2 := x2
x_multiple_fast = 3
y_multiple_fast = 3
x := x2
y := y2
toggle = 0
mouseDelaySpeed = 50
mousePreDelay = 200
holdOverride = 0
resetSpeed() {
  global
  If toggle {
    x := x1
    y := y1
  } Else {
    x := x2
    y := y2
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
  output += `\n\n;config layers
#InputLevel 1
  ${extendKey}::F24
  ${symbolKey}::F23
#InputLevel 0
#Persistent
SetCapsLockState, AlwaysOff

#If !extendLayer
  F24 & F23::
    extendLayer = 1
    KeyWait ${extendKey}
    KeyWait ${extendKey}, D
    extendLayer = 0
    return
  F24::
    if extend_presses {
      symbolLayer = 0
      extendLayer = 1
      KeyWait ${extendKey}
      KeyWait ${extendKey}, D
      extendLayer = 0
    } Else
      extend_presses = 1
    SetTimer, KeyF24timer, -300
    return
  KeyF24timer:
    extend_presses = 0
    return
#if

#If !symbolLayer
  F23 & F24::
    symbol2Layer = 1
    KeyWait ${symbolKey}
    symbol2Layer = 0
    return
  F23::
    if symbol_presses {
        extendLayer = 0
        symbolLayer = 1
        KeyWait ${symbolKey}
        KeyWait ${symbolKey}, D
        symbolLayer = 0
    } Else
      symbol_presses = 1
    SetTimer, KeyF23timer, -300
    Return
  KeyF23timer:
    symbol_presses = 0
    Return
#If\n\n`

  // extend layer
  output += `;extend layer\n#If (GetKeyState("${extendKey}", "P") && !GetKeyState("${symbolKey}", "P") && !symbolLayer) || extendLayer\n`
  keys.forEach(key => {
    if (typeof key[2] == 'object' && key[2][0]) {
      if (key[2][0].includes('Button')) {
        output += `\t${key[0]}::\n\tF24 & ${key[0]}::${key[2][0]}\n`
      } else if (key[2][0].includes('Wheel')) {
        output += `${key[0]}::${key[2][0]}
  ${key[0]} Up::Return
\t${key[0]}::\n\tF24 & ${key[0]}::
    While GetKeyState("${key[0]}","P") && (extendLayer ? 1 : GetKeyState("${extendKey}","P")){
      SendInput {Blind}{${key[2][0]}}
      sleep A_Index = 1 ? mousePreDelay : mouseDelaySpeed
    }
    return\n`
      } else if (key[2][0] == 'Capslock') {
        output += `\t${key[0]}::\n\tF24 & ${key[0]}::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"\n\t\treturn\n`
      } else if (key[2][0] == 'mouseL') {
        mouseL = key[0]
      } else if (key[2][0] == 'mouseR') {
        mouseR = key[0]
      } else if (key[2][0] == 'mouseU') {
        mouseU = key[0]
      } else if (key[2][0] == 'mouseD') {
        mouseD = key[0]
      } else if (key[2][0] == 'speed') {
        output += `\t${key[0]}::\n\tF24 & ${key[0]}::
		toggle := !toggle
		resetSpeed()
		return\n`
      } else {
        output += `${key[2] && !(typeof key[2] == 'object' && !key[2][0]) ?
          `\t${key[0]}::\n\tF24 & ${key[0]}::${typeof key[2] == 'object' ? key[2][0] : key[2]}\n` : ''}`
      }
    }
  })
  output += mouse(mouseU, mouseR, mouseD, mouseL, 'F24')
  output += '#If\n\n'

  // symbol layer
  output += `;symbol layer\n#If GetKeyState("${symbolKey}", "P") && !GetKeyState("${extendKey}", "P") && !symbol2Layer\n`
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
  output += '#If\n\n'

  // symbol2 layer
  output += `;symbol2 layer
#If symbol2Layer\n`
  keys.forEach(key => {
    if (typeof key[4] == 'object' && key[4][0]) {
      output += `${key[4] && !(typeof key[4] == 'object' && !key[4][0]) ?
        `\t${key[0]}::${((typeof key[4] == 'object') ? (key[4][0]) : key[4])}\n` : ''}`
    } else if (key[4]) {
      if (!key[4].startsWith('F') && !key[4].startsWith('^')) {
        output += `\t${key[0]}::SendRaw ${key[4]}\n\t\treturn\n`
      } else {
        output += `\t${key[0]}::${key[4]}\n`
      }
    }
  })
  output += `#If`

  //console.log(output)
  pre.innerText = output
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(output)
      .then(() => btn.textContent = 'copied')
  })
}

export default autohotkey