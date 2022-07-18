//⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾ ⤿⥁🔍

import './sass/main.scss'
import { keys, x1, y1, x2, y2, x3, y3 } from './keys6'

const pre = document.createElement('pre'),
  btn = document.createElement('button'),
  script = document.createElement('div'),
  keyboard = document.createElement('div'),
  keyboardCtx = document.createElement('div'),
  main = document.createElement('main')
script.id = 'script'
keyboard.id = 'keyboard'
keyboardCtx.id = 'keyboardCtx'
btn.textContent = 'copy'
script.appendChild(btn)
script.appendChild(pre)
keyboardCtx.appendChild(keyboard)
main.appendChild(keyboardCtx)
main.appendChild(script)
document.body.appendChild(main)
const remap = {
  output: `#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
Process, Priority,, High

x1 = ${x1}
y1 = ${y1}
x2 = ${x2}
y2 = ${y2}
x3 = ${x3}
y3 = ${y3}
x := x2
y := y2

`,
  show(keys) {
    let mouseL = '', mouseR = '', mouseU = '', mouseD = '', extendKey = ''
    keys.forEach(key => {
      if (key[1][0] == 'F24') {
        extendKey = key[0]
      } else {
        this.output += `${key[1] && !(typeof key[1] == 'object' && !key[1][0]) ?
          `\t${key[0]}::${(typeof key[1] == 'object' ? key[1][0] : key[1])}\n` : ''}`
      }
    })
    this.output += `\n\n#InputLevel 1\n\t${extendKey}::F24\n#InputLevel 0\n#Persistent\nSetCapsLockState, AlwaysOff\n\n\n\n`
    keys.forEach(key => {
      if (typeof key[2] == 'object' && key[2][0]) {
        if (key[2][0].includes(' Down')) {
          if (key[2][0].startsWith('Blind}{Click')) {
            this.output += `\tF24 & ${key[0]}::\n\t\tif !GetKeyState("LButton", "P") && !GetKeyState("RButton", "P") && !GetKeyState("MButton","P")\n\t\t\tSendInput {Blind}{Click ${key[2][0][13]} Down}\n\t\treturn\n`
          }
          this.output += `\tF24 & ${key[0]} Up::SendInput {${key[2][0].replace('Blind}{', '').replace('Down', 'Up')}}\n\t\treturn\n`
        } else if (key[2][0] == 'Capslock') {
          this.output += `\tF24 & ${key[0]}::\n\t\tSetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"\n\t\treturn\n`
        } else if (key[2][0] == 'mouseL') {
          mouseL = key[0]
        } else if (key[2][0] == 'mouseR') {
          mouseR = key[0]
        } else if (key[2][0] == 'mouseU') {
          mouseU = key[0]
        } else if (key[2][0] == 'mouseD') {
          mouseD = key[0]
        } else if (key[2][0] == 'speedSlow') {
          this.output += `\tF24 & ${key[0]}::\n\t\tx := x1\n\t\ty := y1\n\t\treturn\n`
        } else if (key[2][0] == 'speedNormal') {
          this.output += `\tF24 & ${key[0]}::\n\t\tx := x2\n\t\ty := y2\n\t\treturn\n`
        } else if (key[2][0] == 'speedFast') {
          this.output += `\tF24 & ${key[0]}::\n\t\tx := x3\n\t\ty := y3\n\t\treturn\n`
        } else {
          this.output += `${key[2] && !(typeof key[2] == 'object' && !key[2][0]) ?
            `\tF24 & ${key[0]}::SendInput {${((typeof key[2] == 'object') ? key[2][0] : key[2])}}\n\t\treturn\n` : ''}`
        }
      }
    })
    this.output += `

#if GetKeyState("${extendKey}", "P")
{
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
		return
}\n`

    //console.log(this.output)
    pre.innerText = this.output
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(this.output)
        .then(() => btn.textContent = 'copied')
    }, { once: true })
  },
}
remap.show(keys)
keys.forEach(key => {
  const keySpan = document.createElement('span')
  function addSpan(index, className) {
    const kbd = document.createElement('kbd')
    if (className) {
      kbd.setAttribute('class', className)
    }
    kbd.appendChild(
      document.createTextNode(
        (
          typeof key[index] == 'object'
        ) ? (
          (key[index][1].includes('`') && key[index][1].length > 1) ? key[index][1].replare('`', '') : key[index][1]
        ) : (
          (key[index].includes('`') && key[index].length > 1) ? key[index].replace('`', '') : key[index]
        )
      )
    )
    keySpan.appendChild(kbd)
  }
  if (!key[1] || key[1] == 'return') {
    addSpan(0, 'key')
  } else {
    addSpan(1, 'key')
  }

  if (key[2]) {
    addSpan(2, 'ext')
  }

  if (key[3]) {
    addSpan(3, 'sym')
  }

  keyboard.appendChild(keySpan)
})


let toggle_ext = false, toggle_sym = false
const span_key = document.querySelectorAll('.key')
const span_ext = document.querySelectorAll('.ext')
const span_sym = document.querySelectorAll('.sym')
const ext = document.querySelector('#keyboard>span:nth-child(59)')
const sym = document.querySelector('#keyboard>span:nth-child(57)')

ext.addEventListener('click', () => {
  toggle_ext = !toggle_ext
  if (toggle_ext) {
    span_ext.forEach(key => {
      key.style.opacity = 1
    });
    span_sym.forEach(key => {
      key.style.opacity = 0
    })
    span_key.forEach(key => {
      key.style.opacity = 0
    })
  } else {
    span_ext.forEach(key => {
      key.style.opacity = 0
    });
    span_sym.forEach(key => {
      key.style.opacity = 0
    })
    span_key.forEach(key => {
      key.style.opacity = 1
    })
  }
})

sym.addEventListener('click', () => {
  toggle_sym = !toggle_sym
  if (toggle_sym) {
    span_sym.forEach(key => {
      key.style.opacity = 1
    })
    span_ext.forEach(key => {
      key.style.opacity = 0
    });
    span_key.forEach(key => {
      key.style.opacity = 0
    })
  } else {
    span_sym.forEach(key => {
      key.style.opacity = 0
    })
    span_ext.forEach(key => {
      key.style.opacity = 0
    });
    span_key.forEach(key => {
      key.style.opacity = 1
    })
  }
})