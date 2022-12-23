import { fieldset } from './switcher'

const panel = document.createElement('div')
panel.id = 'panel'
panel.appendChild(fieldset)
panel.appendChild(getDownload())

export default panel

function getDownload() {
  const msklc = document.createElement('a')
  msklc.textContent = 'MSKLC.zip'
  msklc.href = './../src/assets/uniparse/msklc.zip'
  msklc.download = 'msklc.zip'

  const ahk = document.createElement('a')
  ahk.textContent = 'AutoHotKey.zip'
  ahk.href = './../src/assets/uniparse/autohotkey.zip'
  ahk.download = 'autohotkey.zip'

  const download = document.createElement('div')
  download.id = 'download'
  download.appendChild(msklc)
  download.appendChild(ahk)

  return download
}