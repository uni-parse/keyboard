//⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾⤿⥁🔍
import './sass/main.scss'
import { attachMedias } from './mediaIcons'
import { keyboard, typeListener } from './keyboard'
import { panel, switcherListener } from './panel'
import { script } from './scriptAhk'

const main = document.createElement('main')
document.body.append(main)

const kbdCtx = document.createElement('div')
kbdCtx.id = 'kbdCtx'
kbdCtx.append(keyboard, panel)
main.append(kbdCtx, script)

attachMedias(main)

switcherListener()
typeListener()


console.log('💡💡done💡💡')