import { fieldset } from './panel_switcher'
import ahkUrl from './assets/UniParse.zip?url'
import msklcUrl from './assets/msklc.zip?url'

const msklc = document.createElement('a')
msklc.textContent = 'MsKLC'
msklc.download = 'msklc.zip'
msklc.href = msklcUrl

const ahk = document.createElement('a')
ahk.textContent = 'AutoHotKey'
ahk.download = 'autohotkey.zip'
ahk.href = ahkUrl

const download = document.createElement('div')
download.id = 'download'
download.append(msklc, ahk)

const panel = document.createElement('div')
panel.id = 'panel'
panel.append(fieldset, download)

export default panel