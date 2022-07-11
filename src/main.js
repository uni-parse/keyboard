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
      this.output += `;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ${key[0]}\n${key[1] && !(typeof key[1] == 'object' && !key[1][0]) ?
        `\t${key[0]}::${((typeof key[1] == 'object') ? key[1][0] : key[1])}\n` : ''}${key[2] ?
          `\t!${key[0]}::SendInput, {${((typeof key[2] == 'object') ? key[2][0] : key[2])}}\n\t\treturn\n` : ''}${key[3] ?
            `\t<!>!${key[0]}::SendInput, {${((typeof key[3] == 'object') ? key[3][0] : key[3])}}\n\t\treturn\n` : ''}${key[4] ?
              `\t<!${key[0]}::SendInput, {${((typeof key[4] == 'object') ? key[4][0] : key[4])}}\n\t\treturn\n` : ''}${key[5] ?
                `\t>!${key[0]}::SendInput, {${((typeof key[5] == 'object') ? key[5][0] : key[5])}}\n\t\treturn\n` : ''}${key[6] ?
                  this.switch(key) : ''}\n`
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
          (key[index][1].includes('`') && key[index].length > 1) ? key[index][1].replare('`', '') : key[index][1]
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
    addSpan(2, 'alt')
  } else {
    if (key[5]) {
      addSpan(5, 'rAlt')
    }
    if (key[4]) {
      addSpan(4, 'lAlt')
    }
  }

  if (key[3]) {
    addSpan(3, 'dblAlt')
  }

  keyboard.appendChild(keySpan)
})



/*
fetch('/src/qwerty.json')
  .then(response => response.json())
  .then(json => {
    remap.show(json)
    json.forEach(key => {
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
              (key[index][1].includes('`') && key[index].length > 1) ? key[index][1].replare('`', '') : key[index][1]
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
        addSpan(2, 'alt')
      } else {
        if (key[5]) {
          addSpan(5, 'rAlt')
        }
        if (key[4]) {
          addSpan(4, 'lAlt')
        }
      }

      if (key[3]) {
        addSpan(3, 'dblAlt')
      }

      keyboard.appendChild(keySpan)
    })
  })*/


// remap.show(remap.keys)




