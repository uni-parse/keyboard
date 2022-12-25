import autohotkeyStr from './ahk'

const pre = document.createElement('pre')
pre.innerText = autohotkeyStr

const copyBtn = document.createElement('button')
copyBtn.id = 'copyBtn'
copyBtn.textContent = 'copy'
copyBtn.addEventListener('click', () =>
  navigator.clipboard.writeText(autohotkeyStr)
    .then(() => copyBtn.textContent = 'copied')
)

const script = document.createElement('div')
script.id = 'autoHotKeyCtx'
script.appendChild(copyBtn)
script.appendChild(pre)

export default script