import { autohotkeyStr } from './ahk'
import { sleep } from './utilities'
import { Prism } from './lib/prism'

export const script = document.createElement('div')
script.id = 'ahkCtx'

const pre = document.createElement('pre')
pre.className = 'language-autohotkey'
script.append(pre)

//append line indexes
autohotkeyStr.split('\n').map((str, i) => {
  const lineIndex = document.createElement('div')
  lineIndex.className = 'lineIndex'
  lineIndex.innerText = i
  lineIndex.style.userSelect = 'none'

  const lineContent = document.createElement('div')
  lineContent.className = 'lineContent'
  lineContent.innerHTML =
    Prism.highlight(str, Prism.languages.autohotkey)

  pre.append(lineIndex, lineContent)
})

//copy button
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


//download button
const downloadBtn = document.createElement('button')
downloadBtn.id = 'downloadBtn'
downloadBtn.textContent = 'download'
script.append(downloadBtn)

//onClick download uniparse.ahk
downloadBtn.addEventListener('click', () => {
  const ilnk = document.createElement('a')
  ilnk.download = 'uniparse.ahk'
  ilnk.href = URL.createObjectURL(
    new Blob([autohotkeyStr], { type: 'text/plain' }))
  ilnk.click()

  URL.revokeObjectURL(ilnk.href)
})