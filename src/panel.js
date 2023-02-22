import ahkUrl from './assets/UniParse.zip?url'
import msklcUrl from './assets/msklc.zip?url'
import { fieldset } from './panel_switcher'

export { switcherListener } from './panel_switcher'
export const panel = document.createElement('div')
panel.id = 'panel'
panel.append(fieldset)

const download = document.createElement('div')
download.id = 'download'
panel.append(download)

const msklc = document.createElement('a')
msklc.textContent = 'MsKLC'
msklc.download = 'msklc.zip'
msklc.href = msklcUrl
download.append(msklc)

const ahk = document.createElement('a')
ahk.textContent = 'AutoHotKey'
ahk.download = 'autohotkey.zip'
ahk.href = ahkUrl
download.append(ahk)