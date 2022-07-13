//⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾ ⤿⥁🔍

import './sass/main.scss'
import keys from './keys6'
// import srcset from './assets/uniparse-layout.png?w=320;375;425;768;1024;width&format=avif;webp&srcset'
const pre = document.createElement('pre'),
  // img = document.createElement('img'),
  btn = document.createElement('button'),
  script = document.createElement('div'),
  keyboard = document.createElement('div'),
  keyboardCtx = document.createElement('div'),
  main = document.createElement('main')
// img.srcset = srcset
// img.alt = 'UniParse keyboard layout'
script.id = 'script'
keyboard.id = 'keyboard'
keyboardCtx.id = 'keyboardCtx'
btn.textContent = 'copy'
script.appendChild(btn)
script.appendChild(pre)
// main.appendChild(img)
keyboardCtx.appendChild(keyboard)
main.appendChild(keyboardCtx)
main.appendChild(script)
document.body.appendChild(main)
const remap = {
  output: `#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
Process, Priority,, H

`,
  switch(key) {
    let str = ''
    for (const mode in key[6]) {
      if (Object.hasOwnProperty.call(key[6], mode)) {
        if (key[6][mode]) {
          str += `\t${mode}${key[0]}::SendInput, ${key[6][mode]}\n\t\treturn\n`
        } else {
          str += `\t${mode}${key[0]}::BlockInput, on\n\t\treturn\n`
        }
      }
    }
    return str
  },
  show(keys) {
    keys.forEach(key => {
      this.output += `${key[1] && !(typeof key[1] == 'object' && !key[1][0]) ?
        `\t${key[0]}::${((typeof key[1] == 'object') ? key[1][0] : key[1])}\n` : ''}`
    })
    this.output = this.output.replace('RAlt::F24','')
    this.output += `

#InputLevel 1
	RAlt::F24
#InputLevel 0
#Persistent

`
    keys.forEach(key => {
      this.output += `${key[2] && !(typeof key[2] == 'object' && !key[2][0]) ?
          `\tF24 & ${key[0]}::SendInput {${((typeof key[2] == 'object') ? key[2][0] : key[2])}}\n\t\treturn\n` : ''}`
      if (typeof key[2]=='object') {
        if (key[2][0] == 'Blind}{AltDown' || key[2][0] == 'Blind}{CtrlDown' || key[2][0] == 'Blind}{ShiftDown' || key[2][0] == 'Blind}{LWinDown') {
          this.output += `\tF24 & ${key[0]} Up::SendInput {${key[2][0].replace('Blind}{', '').replace('Down', '') + 'Up'}}\n\t\treturn\n`
        }
      }
    })
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