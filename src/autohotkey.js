function autohotkey(keys, x1, y1, x2, y2, x3, y3, pre, btn, navigator) {
  let mouseL, mouseR, mouseU, mouseD, extendKey, symbolKey,
    output = `#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.\n; #Warn  ; Enable warnings to assist with detecting common errors.\nSendMode Input  ; Recommended for new scripts due to its superior speed and reliability.\nSetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.\nProcess, Priority,, High\n
x1 = ${x1}\ny1 = ${y1}\nx2 = ${x2}\ny2 = ${y2}\nx3 = ${x3}\ny3 = ${y3}\nx := x2\ny := y2\nlayer1 = 0\nlayer2 = 0\n\n\n\n`

  // standard remapint
  output += ';standard layer\n'
  keys.forEach(key => {
    if (key[1][0] == 'F24') {
      extendKey = key[0]
    } else if (key[1][0] == 'F23') {
      symbolKey = key[0]
    } else if (key[1][0] == 'RAlt' || key[1][0] == 'LAlt' || key[1][0] == 'LShift' || key[1][0] == 'RCtrl' || key[1][0] == 'LCtrl' || key[1][0] == 'RWin' || key[1][0] == 'LWin') {
      output += `\t${key[0]}::\n\t\tSendInput {Blind}{${key[1][0]} Down}\n\t\tKeyWait ${key[0]}\n\t\tSendInput {${key[1][0]} Up}\n\t\treturn\n`
    } else {
      output += `${key[1] && !(typeof key[1] == 'object' && !key[1][0]) ?
        `\t${key[0]}::${(typeof key[1] == 'object' ? key[1][0] : key[1])}\n` : ''}`
    }
  })

  // config layers
  output += `\n\n;config layers
  ${extendKey}::
	  layer1 = 1
		KeyWait ${extendKey}
		layer1 = 0
		Return
  ${symbolKey}::
	  layer2 = 1
		KeyWait ${symbolKey}
		layer2 = 0
		Return\nSetCapsLockState, AlwaysOff\n\n\n\n`

  // symbol layer
  output += `;symbol layer\n#If layer2 && !layer1\n`
  keys.forEach(key => {
    if (typeof key[4] == 'object' && key[4][0]) {
      output += `${key[4] && !(typeof key[4] == 'object' && !key[4][0]) ?
        `\t${key[0]}::SendInput {${((typeof key[4] == 'object') ? (key[4][0]) : key[4])}}\n\t\treturn\n` : ''}`
    } else if (key[4]) {
      output += `\t${key[0]}::SendInput {${key[4]}}\n\t\treturn\n`
    }
  })
  output += '#If\n\n\n\n'

  // extend layer
  output += `;extend layer\n#If layer1 && !layer2\n`
  keys.forEach(key => {
    if (typeof key[2] == 'object' && key[2][0]) {
      if (key[2][0].includes(' Down')) {
        if (key[2][0].startsWith('Blind}{Click')) {
          output += `\t${key[0]}::\n\t\tif !GetKeyState("LButton", "P") && !GetKeyState("RButton", "P") && !GetKeyState("MButton","P")\n\t\t\tSendInput {${key[2][0]}}\n\t\t\tKeyWait ${key[0] == ',' ? `\`${key[0]}` : key[0]}\n\t\t\tSendInput {${key[2][0].replace('Down', 'Up').replace('Blind}{', '')}}\n\t\treturn\n`
        }
      } else if (key[2][0] == 'Capslock') {
        output += `\t${key[0]}::\n\t\tSetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"\n\t\treturn\n`
      } else if (key[2][0] == 'mouseL') {
        mouseL = key[0]
      } else if (key[2][0] == 'mouseR') {
        mouseR = key[0]
      } else if (key[2][0] == 'mouseU') {
        mouseU = key[0]
      } else if (key[2][0] == 'mouseD') {
        mouseD = key[0]
      } else if (key[2][0] == 'speedSlow') {
        output += `\t${key[0]}::\n\t\tx := x1\n\t\ty := y1\n\t\treturn\n`
      } else if (key[2][0] == 'speedNormal') {
        output += `\t${key[0]}::\n\t\tx := x2\n\t\ty := y2\n\t\treturn\n`
      } else if (key[2][0] == 'speedFast') {
        output += `\t${key[0]}::\n\t\tx := x3\n\t\ty := y3\n\t\treturn\n`
      } else {
        output += `${key[2] && !(typeof key[2] == 'object' && !key[2][0]) ?
          `\t${key[0]}::SendInput {${((typeof key[2] == 'object') ? key[2][0] : key[2])}}\n\t\treturn\n` : ''}`
      }
    }
  })
  output += `
	${mouseL}::
		If !GetKeyState("${mouseU}","P") && !GetKeyState("${mouseD}","P")
		  SendInput {Click -%x% 0 0 Rel}
		else if GetKeyState("${mouseU}","P")
			SendInput {Click -%x% -%y% 0 Rel}
		else if GetKeyState("${mouseD}","P")
			SendInput {Click -%x% %y% 0 Rel}
		return
	${mouseR}::
		If !GetKeyState("${mouseU}","P") && !GetKeyState("${mouseD}","P")
		  SendInput {Click %x% 0 0 Rel}
		else if GetKeyState("${mouseU}","P")
			SendInput {Click %x% -%y% 0 Rel}
		else if GetKeyState("${mouseD}","P")
			SendInput {Click %x% %y% 0 Rel}
		return
	${mouseD}::
		If !GetKeyState("${mouseL}","P") && !GetKeyState("${mouseR}","P")
		  SendInput {Click 0 %y% 0 Rel}
		else if GetKeyState("${mouseL}","P")
			SendInput {Click -%x% %y% 0 Rel}
		else if GetKeyState("${mouseR}","P")
			SendInput {Click %x% %y% 0 Rel}
		return
	${mouseU}::
		If !GetKeyState("${mouseL}","P") && !GetKeyState("${mouseR}","P")
		  SendInput {Click 0 -%y% 0 Rel}
		else if GetKeyState("${mouseL}","P")
			SendInput {Click -%x% -%y% 0 Rel}
		else if GetKeyState("${mouseR}","P")
			SendInput {Click %x% -%y% 0 Rel}
		return\n#If\n\n\n\n`

  // symbol2 layer
  output += `;symbol2 layer\n#If layer1 && layer2\n`
  keys.forEach(key => {
    if (typeof key[5] == 'object' && key[5][0]) {
      output += `${key[5] && !(typeof key[5] == 'object' && !key[5][0]) ?
        `\t${key[0]}::SendInput {${((typeof key[5] == 'object') ? (key[5][0]) : key[5])}}\n\t\treturn\n` : ''}`
    } else if (key[5]) {
      output += `\t${key[0]}::SendInput {${key[5]}}\n\t\treturn\n`
    }
  })
  output += '#If'

  //console.log(output)
  pre.innerText = output
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(output)
      .then(() => btn.textContent = 'copied')
  }, { once: true })
}

export default autohotkey