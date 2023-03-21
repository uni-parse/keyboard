export const audios = {}
export { fetchAudios }

import { sleep } from "./utilities"
import audioPop1 from "./assets/audio/pop1.wav"
import audioPop2 from "./assets/audio/pop2.wav"
import audioPop3 from "./assets/audio/pop3.wav"

function fetchAudios(delay = 0, promises = []) {
  new Map()
    .set('pop1', fetchAudio(audioPop1))
    .set('pop2', fetchAudio(audioPop2))
    .set('pop3', fetchAudio(audioPop3))
    .forEach((v, k) => promises.push(audioPromise([k, v])))

  promises.push(sleep(delay))
  return promises
}


//helpers
async function audioPromise([key, fetchPromise]) {
  audios[key] = await fetchPromise
}

async function fetchAudio(url) {
  const
    ctx = new AudioContext(),
    data = await fetch(url),
    arrayBuffer = await data.arrayBuffer(),
    audioBuffer = await ctx.decodeAudioData(arrayBuffer)

  function play() {
    const playSound = ctx.createBufferSource()
    playSound.buffer = audioBuffer
    playSound.connect(ctx.destination)
    playSound.start(ctx.currentTime)

    return playSound
    //playSound.stop( when?: ctx.currentTime )
    //playSound.addEventListener('ended', handler)
  }

  return { play }
}