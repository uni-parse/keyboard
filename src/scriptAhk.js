import autohotkeyStr from './ahk'
import { sleep } from './utilities'

const ol = document.createElement('ol')
autohotkeyStr.split('\n').forEach((line, i) => {
  const li = document.createElement('li')
  li.textContent = line
  ol.appendChild(li)
})


const copyBtn = document.createElement('button')
copyBtn.id = 'copyBtn'
copyBtn.textContent = 'copy'

const span = document.createElement('span')
span.textContent = 'copied ✓'
span.style.transition = 'opacity 500ms'
copyBtn.prepend(span)

copyBtn.addEventListener('click', async e => {
  await navigator.clipboard.writeText(autohotkeyStr)
  span.style.opacity = 1
  await sleep(1000)
  span.style.opacity = 0
}, { once: false })

const script = document.createElement('div')
script.id = 'ahkCtx'
script.appendChild(copyBtn)
script.appendChild(ol)

export default script