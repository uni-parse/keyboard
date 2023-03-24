//⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾⤿⥁🔍
import './sass/main.scss'
import { attachMedia } from './mediaIcons'
import { keyboard, fetchAudios, typeListener } from './keyboard'
import { panel, switcherListener } from './panel'
import { script } from './scriptAhk'
import { pendingLoader } from './loader'
import { sleep } from './utilities'

(async () => {
  const main = document.createElement('main')
  document.body.append(main);

  const audiosPromises = fetchAudios()
  await sleep(150)//audios buffer
  await pendingLoader(audiosPromises, main)

  const kbdCtx = document.createElement('div')
  kbdCtx.id = 'kbdCtx'
  kbdCtx.append(keyboard, panel)
  main.append(kbdCtx, script)

  switcherListener()
  typeListener()

  attachMedia(main, 2000)
  console.log('💡💡done💡💡');
})();