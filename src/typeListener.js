export default typeListener
import keyboard from "./keyboard"
import pop1 from "./assets/audio/pop1.wav"
import pop2 from "./assets/audio/pop2.wav"
import pop3 from "./assets/audio/pop3.wav"

const pops = [pop1, pop2, pop3]
pops.forEach(pop => new Audio(pop))//pre fetch

const buttons = [...keyboard.querySelectorAll(`button`)]
//console.log(buttons)

function typeListener() {
  document.addEventListener('keydown', ({ key: keyDown, code }) => {
    console.log(code, keyDown)

    const targetBtn = buttons.find(btn =>
      btn.innerText == keyDown
      || btn.className.split(' ').find(className =>
        className == keyDown || className == '_' + keyDown
        || className == 'space' && keyDown == ' '
        || className == 'LShift' && keyDown == 'Shift'
        //|| className == 'LShift' && code == 'ShiftLeft'
        //|| className == 'LShift' && code == 'ShiftRight'
        //|| className == 'LShift' && code == 'IntlBackslash'
        //|| c == 'sym' && code == 'AltLeft'
      )
    )
    if (!targetBtn) return

    new Audio(pops[Math.floor(Math.random() * 3)]).play()

    targetBtn.style.borderStyle = 'inset'
    if (targetBtn.className.includes('modifier'))
      targetBtn.style.backgroundColor = 'darkcyan'
    else targetBtn.style.backgroundColor = '#333'

    document.addEventListener('keyup', ({ key: keyUp }) => {
      if (keyDown != keyUp) return

      targetBtn.style.borderStyle = 'outset'
      if (targetBtn.className.includes('modifier'))
        targetBtn.style.backgroundColor = '#222'
      else targetBtn.style.backgroundColor = '#666'
    }, { once: false }) //can't make it once, too fast
  })
}
