import autohotkeyStr from './ahk'

const ol = document.createElement('ol')
autohotkeyStr.split('\n').forEach((line, i) => {
  const li = document.createElement('li')
  li.textContent=line
  ol.appendChild(li)
})


const copyBtn = document.createElement('button')
copyBtn.id = 'copyBtn'
copyBtn.textContent = 'copy'
copyBtn.addEventListener('click', () =>
  navigator.clipboard.writeText(autohotkeyStr)
    .then(() => copyBtn.textContent = 'copied')
)

const script = document.createElement('div')
script.id = 'ahkCtx'
script.appendChild(copyBtn)
script.appendChild(ol)

export default script