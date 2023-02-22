//⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾⤿⥁🔍
import './sass/main.scss'
import { attachMedias } from './mediaIcons'
import { keyboard, typeListener } from './keyboard'
import { panel, switcherListener } from './panel'
import { script } from './scriptAhk'


const kbdCtx = document.createElement('div')
kbdCtx.id = 'kbdCtx'
kbdCtx.append(keyboard, panel)

const main = document.createElement('main')
main.append(kbdCtx, script)

attachMedias(main)
document.body.append(main)

switcherListener()
typeListener()


console.log('💡💡done💡💡')