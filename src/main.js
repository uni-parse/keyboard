//⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾⤿⥁🔍
import './sass/main.scss'
import attachMedias from './mediaIcons'
import keyboard from './keyboard'
import panel from './panel'
import { switcherListener } from './switcher'

const main = document.createElement('main')
main
  .appendChild(keyboard)
  .appendChild(panel)

attachMedias(main)
document.body.appendChild(main)

switcherListener()

console.log('💡💡done💡💡')

/*
import './sass/main.scss'
import keys from './keys'
import autohotkeyStr from './autohotkey'
import layout from './layout'
import showMedias from './mediaIcons'


const pre = document.createElement('pre'),
btn = document.createElement('button'),
script = document.createElement('div'),
  keyboard = document.createElement('div'),
  keyboardCtx = document.createElement('div'),
  download = document.createElement('div'),
  msklc = document.createElement('a'),
  ahk = document.createElement('a'),
  main = document.createElement('main')
  script.id = 'script'
  keyboard.id = 'keyboard'
  keyboardCtx.id = 'keyboardCtx'
btn.textContent = 'copy'
msklc.textContent = 'MSKLC.zip'
msklc.href = './../src/assets/uniparse/msklc.zip'
msklc.download = 'msklc.zip'
ahk.textContent = 'AUTOHOTKEY.zip'
ahk.href = './../src/assets/uniparse/autohotkey.zip'
ahk.download = 'autohotkey.zip'
download.id ='download'
download.appendChild(msklc)
download.appendChild(ahk)
script.appendChild(btn)
script.appendChild(pre)
keyboardCtx.appendChild(keyboard)
main.appendChild(keyboardCtx)
main.appendChild(download)
main.appendChild(script)
document.body.appendChild(main)

showMedias(main)


pre.innerText = autohotkeyStr
btn.addEventListener('click', () => {
  navigator.clipboard.writeText(autohotkeyStr)
    .then(() => btn.textContent = 'copied')
})
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

*/