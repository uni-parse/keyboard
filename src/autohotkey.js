import mouse from "./mouse"
function autohotkey(keys, x1, y1, x2, y2, pre, btn, navigator) {
  let mouseL, mouseR, mouseU, mouseD, extendKey, symbolKey,
    output = `#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.\n; #Warn  ; Enable warnings to assist with detecting common errors.\nSetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.\nProcess, Priority,, High\n
x1 = ${x1}\ny1 = ${y1}\nx2 = ${x2}\ny2 = ${y2}\nx := x2\ny := y2\ntoggle = 0\nsymbil2Layer = 0\nextendLayer = 0\nmouseDelaySpeed = 50\nmousePreDelay = 200\nspeedx3 = 0\n\n`

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
    symbil2Layer = 0
    extendLayer = 1
    KeyWait ${extendKey}
    KeyWait ${extendKey}, D
    extendLayer = 0
    return
  F24::
    if extend_presses
    {
      symbil2Layer = 0
      extendLayer = 1
      KeyWait ${extendKey}
      KeyWait ${extendKey}, D
      extendLayer = 0
    }
    Else
      extend_presses = 1
    SetTimer, KeyF24, -300
    return
    KeyF24:
      extend_presses = 0
      return
    Return
#if
#If !symbil2Layer
  F23 & F24::
    extendLayer = 0
    symbil2Layer = 1
    KeyWait ${symbolKey}
    symbil2Layer = 0
    return
  F23::
    if symbol_presses
      {
        extendLayer = 0
        symbil2Layer = 1
        KeyWait ${symbolKey}
        KeyWait ${symbolKey}, D
        symbil2Layer = 0
      }
    Else
      symbol_presses = 1
    SetTimer, KeyF23, -300
    Return
    KeyF23:
      symbol_presses = 0
      Return
    Return
#If\n\n`

  // extend layer
  output += `;extend layer\n#If GetKeyState("${extendKey}", "P") && !GetKeyState("${symbolKey}", "P") && !symbil2Layer\n`
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
		toggle := !toggle
		If toggle
		{
			x := x1
			y := y1
		}
		Else
		{
			x := x2
			y := y2
		}
		return\n`
      } else {
        output += `${key[2] && !(typeof key[2] == 'object' && !key[2][0]) ?
          `\tF24 & ${key[0]}::${typeof key[2] == 'object' ? key[2][0] : key[2]}\n` : ''}`
      }
    }
  })
  output += mouse(mouseU, mouseR, mouseD, mouseL, 'F24')
  output += '#If\n#If extendLayer\n'
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
      } else if (key[2][0] == 'mouseL') {
        mouseL = key[0]
      } else if (key[2][0] == 'mouseR') {
        mouseR = key[0]
      } else if (key[2][0] == 'mouseU') {
        mouseU = key[0]
      } else if (key[2][0] == 'mouseD') {
        mouseD = key[0]
      } else if (key[2][0] == 'speed') {
        output += `\t${key[0]}::
		toggle := !toggle
		If toggle
		{
			x := x1
			y := y1
		}
		Else
		{
			x := x2
			y := y2
		}
		return\n`
      } else {
        output += `${key[2] && !(typeof key[2] == 'object' && !key[2][0]) ?
          `\t${key[0]}::${typeof key[2] == 'object' ? key[2][0] : key[2]}\n` : ''}`
      }
    }
  })
  output += mouse(mouseU, mouseR, mouseD, mouseL)
  output += '#If\n\n'

  // symbol layer
  output += `;symbol layer\n#If GetKeyState("${symbolKey}", "P") && !GetKeyState("${extendKey}", "P") && !symbil2Layer\n`
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
#If symbil2Layer\n`
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
  }, { once: true })
}

export default autohotkey