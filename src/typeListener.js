export default typeListener
import pop1 from "./assets/audio/pop1.wav"
import pop2 from "./assets/audio/pop2.wav"
import pop3 from "./assets/audio/pop3.wav"
const pops = [pop1, pop2, pop3]
pops.forEach(pop => new Audio(pop))//pre fetch

function typeListener() {
  const buttons = document.querySelectorAll(`#keyboard button`);
  document.addEventListener('keydown', e => {
    console.log(e.code, e.key)
    const targetBtn = Array.from(buttons)
      .find(b =>
        b.innerText == e.key
        || b.className.split(' ').includes(e.key)
        || b.className.split(' ').includes('_' + e.key)
        || b.className.split(' ').includes('space') && e.code == 'Space'
        || b.className.split(' ').includes('sym') && e.code == 'AltLeft'
        || b.className.split(' ').includes('LShift') && e.key == 'Shift'
      )
    if (targetBtn) {
      new Audio(pops[Math.floor(Math.random() * 3)])
        .play()

      if (targetBtn.className.includes('modifier'))
        targetBtn.style.backgroundColor = 'darkcyan'
      else targetBtn.style.backgroundColor = '#333'

      targetBtn.style.borderStyle = 'inset'

      document.addEventListener('keyup', e2 => {
        if (e.key == e2.key) {
          targetBtn.style.borderStyle = 'outset'
          if (targetBtn.className.includes('modifier'))
            targetBtn.style.backgroundColor = '#222'
          else targetBtn.style.backgroundColor = '#666'
        }
      }, { once: false }) //can't make it once, too fast
    }
  })
}
