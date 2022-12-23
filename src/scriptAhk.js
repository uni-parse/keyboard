import autohotkeyStr from './autohotkey'

const pre = document.createElement('pre')
pre.innerText = autohotkeyStr

const copyBtn = document.createElement('button')
copyBtn.textContent = 'copy'
copyBtn.addEventListener('click', () =>
  navigator.clipboard.writeText(autohotkeyStr)
    .then(() => copyBtn.textContent = 'copied')
)

const script = document.createElement('div')
script.id = 'script'
script.appendChild(copyBtn)
script.appendChild(pre)

export default script