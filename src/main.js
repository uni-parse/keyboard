//⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾⤿⥁🔍
import './sass/main.scss'
import attachMedias from './mediaIcons'
import keyboard from './keyboard'
import panel from './panel'
import { switcherListener } from './panel_switcher'
import typeListener from './typeListener'
import script from './scriptAhk'


const kbdCtx = document.createElement('div')
kbdCtx.id = 'kbdCtx'
kbdCtx.appendChild(keyboard)
kbdCtx.appendChild(panel)

const main = document.createElement('main')
main.appendChild(kbdCtx)
main.appendChild(script)

attachMedias(main)
document.body.appendChild(main)

switcherListener()
typeListener()


console.log('💡💡done💡💡')