export { fetchAudios, typeListener }

import pop1 from "./assets/audio/pop1.wav"
import pop2 from "./assets/audio/pop2.wav"
import pop3 from "./assets/audio/pop3.wav"

const audios = [pop1, pop2, pop3]

function fetchAudios(delay = 0, promises = []) {
  promises.push(
    new Promise(rs => setTimeout(rs, delay)),
    ...audios.map((url, i) => audioPromise(i, fetchAudio(url)))
  )
  return promises
}

function typeListener() {
  const buttons = document.querySelectorAll(`#keyboard button`)
  document.addEventListener('keydown', e => {
    const { key: keyDown, code } = e

    console.log(code, keyDown)

    const targetBtn = Array.prototype.find.call(buttons, btn =>
      btn.innerText == keyDown
      || btn.classList.contains(keyDown)
      || btn.classList.contains('_' + keyDown)
      || btn.classList.contains('space') && keyDown == ' '
      || btn.classList.contains('LShift') && keyDown == 'Shift'
    )
    if (!targetBtn) return

    audios[Math.floor(Math.random() * 3)].play()

    targetBtn.style.boxShadow = '0 0 1px 0 #111'
    targetBtn.style.transform = 'translate(0.1em, 0.1em)'

    document.addEventListener('keyup', function handler({ key: keyUp }) {
      if (keyDown != keyUp) return

      document.removeEventListener('keyup', handler)

      targetBtn.style.boxShadow = ''
      targetBtn.style.transform = ''
    }, { once: false })
  })
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

async function audioPromise(i, fetchPromise) {
  audios[i] = await fetchPromise
}