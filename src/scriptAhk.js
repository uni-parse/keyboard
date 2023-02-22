import { autohotkeyStr } from './ahk'
import { sleep } from './utilities'

export const script = document.createElement('div')
script.id = 'ahkCtx'


const ol = document.createElement('ol')
script.append(ol)

const listItems = autohotkeyStr.split('\n').map(line => {
  const li = document.createElement('li')
  li.textContent = line
  return li
})
ol.append(...listItems)


const copyBtn = document.createElement('button')
copyBtn.id = 'copyBtn'
copyBtn.textContent = 'copy'
script.append(copyBtn)

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


