//⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾ ⤿⥁🔍

import './sass/main.scss'
import { keys, x1, y1, x2, y2 } from './keys'
import autohotkey from './autohotkey'
import layout from './layout'

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

autohotkey(keys, x1, y1, x2, y2, pre, btn, navigator)
layout(keys, keyboard)

let toggle_extend = false, toggle_shift = false, toggle_symbol = false
const span_key = document.querySelectorAll('.key'), span_extend = document.querySelectorAll('.extend'),
  span_shift = document.querySelectorAll('.shift'),
  span_symbol = document.querySelectorAll('.symbol'),
  extend = document.querySelector('#keyboard>span:nth-child(59)'),
  shift = document.querySelector('#keyboard>span:nth-child(57)'),
  symbol = document.querySelector('#keyboard>span:nth-child(29)')

function showLayout() {

}
extend.addEventListener('click', () => {
  toggle_extend = !toggle_extend
  if (toggle_extend) {
    span_extend.forEach(key => {
      key.style.opacity = 1
    });
    span_shift.forEach(key => {
      key.style.opacity = 0
    })
    span_key.forEach(key => {
      key.style.opacity = 0
    })
    span_symbol.forEach(key => {
      key.style.opacity = 0
    })
  } else {
    span_extend.forEach(key => {
      key.style.opacity = 0
    });
    span_shift.forEach(key => {
      key.style.opacity = 0
    })
    span_symbol.forEach(key => {
      key.style.opacity = 0
    })
    span_key.forEach(key => {
      key.style.opacity = 1
    })
  }
})

shift.addEventListener('click', () => {
  toggle_shift = !toggle_shift
  if (toggle_shift) {
    span_shift.forEach(key => {
      key.style.opacity = 1
    })
    span_extend.forEach(key => {
      key.style.opacity = 0
    });
    span_key.forEach(key => {
      key.style.opacity = 0
    })
    span_symbol.forEach(key => {
      key.style.opacity = 0
    })
  } else {
    span_shift.forEach(key => {
      key.style.opacity = 0
    })
    span_extend.forEach(key => {
      key.style.opacity = 0
    });
    span_symbol.forEach(key => {
      key.style.opacity = 0
    })
    span_key.forEach(key => {
      key.style.opacity = 1
    })
  }
})
symbol.addEventListener('click', () => {
  toggle_symbol = !toggle_symbol
  if (toggle_symbol) {
    span_shift.forEach(key => {
      key.style.opacity = 0
    })
    span_extend.forEach(key => {
      key.style.opacity = 0
    });
    span_key.forEach(key => {
      key.style.opacity = 0
    })
    span_symbol.forEach(key => {
      key.style.opacity = 1
    })
  } else {
    span_shift.forEach(key => {
      key.style.opacity = 0
    })
    span_extend.forEach(key => {
      key.style.opacity = 0
    });
    span_symbol.forEach(key => {
      key.style.opacity = 0
    })
    span_key.forEach(key => {
      key.style.opacity = 1
    })
  }
})