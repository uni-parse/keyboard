//⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾ ⤿⥁🔍

import './sass/main.scss'
import keys from './keys'
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

autohotkey(keys, pre, btn, navigator)
layout(keys, keyboard)

let toggle_extend = false, toggle_symbol = false
const span_key = document.querySelectorAll('.key'), span_extend = document.querySelectorAll('.extend'),
  span_symbol = document.querySelectorAll('.symbol'),
  span_symbol2 = document.querySelectorAll('.symbol2'),
  extend = document.querySelector('#keyboard>span:nth-child(59)'),
  symbol = document.querySelector('#keyboard>span:nth-child(57)')
function display(keys = 1, extend = 0, symbol = 0, symbol2 = 0) {
  span_key.forEach(key => key.style.opacity = keys)
  span_extend.forEach(key => key.style.opacity = extend);
  span_symbol.forEach(key => key.style.opacity = symbol)
  span_symbol2.forEach(key => key.style.opacity = symbol2)
}
extend.addEventListener('click', () => {
  toggle_extend = !toggle_extend
  if (toggle_extend && !toggle_symbol) {
    display(0, 1)
  } else if (toggle_extend && toggle_symbol) {
    display(0, 0, 0, 1)
  } else if (!toggle_extend && toggle_symbol) {
    display()
    toggle_symbol = 0
  } else {
    display()
  }
})

symbol.addEventListener('click', () => {
  toggle_symbol = !toggle_symbol
  if (!toggle_extend && toggle_symbol) {
    display(0, 0, 1)
  } else if (toggle_extend && toggle_symbol) {
    display(0, 0, 0, 1)
  } else if (toggle_extend && !toggle_symbol) {
    display()
    toggle_extend = 0
  } else {
    display()
  }
})