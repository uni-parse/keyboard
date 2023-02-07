import { fieldset } from './panel_switcher'

const panel = document.createElement('div')
panel.id = 'panel'
panel.append(fieldset, getDownloadEl())

export default panel

function getDownloadEl() {
  const msklc = document.createElement('a')
  msklc.textContent = 'MsKLC.zip'
  msklc.href = './../ahk/msklc.zip'
  msklc.download = 'msklc.zip'

  const ahk = document.createElement('a')
  ahk.textContent = 'AutoHotKey.zip'
  ahk.href = './../ahk/UniParse.zip'
  ahk.download = 'autohotkey.zip'

  const download = document.createElement('div')
  download.id = 'download'
  download.append(msklc, ahk)

  return download
}