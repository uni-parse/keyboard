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

const copyMessage = document.createElement('span')
copyBtn.prepend(copyMessage)

let msgVisible
copyBtn.addEventListener('click', async () => {
  await navigator.clipboard.writeText(autohotkeyStr)

  if (msgVisible) return
  msgVisible = true

  copyMessage.textContent = 'copied ✓'
  copyMessage.style.opacity = 1
  await sleep(1500)
  copyMessage.style.opacity = 0
  await sleep(500)
  copyMessage.textContent = ''

  msgVisible = false
}, { once: false })

const script = document.createElement('div')
script.id = 'ahkCtx'
script.append(copyBtn, ol)

export default script