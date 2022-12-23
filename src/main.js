//⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾⤿⥁🔍
import './sass/main.scss'
import attachMedias from './mediaIcons'
import keyboard from './keyboard'
import panel from './panel'
import { switcherListener } from './switcher'
import script from './scriptAhk'

const main = document.createElement('main')
main.appendChild(keyboard)
main.appendChild(panel)
main.appendChild(script)

attachMedias(main)
document.body.appendChild(main)

switcherListener()

console.log('💡💡done💡💡')