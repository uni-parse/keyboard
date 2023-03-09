
import { keys } from "./keys.mjs"
import { config } from "./ahk_config.mjs"
import { move } from "./ahk_mouse_move.mjs"
import { scroll } from "./ahk_scroll.mjs"
import { brightness } from "./ahk_brightness.mjs"

const base = keys.standard.map(k => k == ';' ? '`;' : k)
let mouseL, mouseR, mouseU, mouseD, scrollU, scrollD

export const autohotkeyStr = `${config.intro}
;config layers ⚙️      ⚙️       ⚙️      ⚙️      ⚙️     ⚙️
${config.switchers}


;extend layer 🌟    🌟    🌟    🌟    🌟    🌟    🌟    🌟
#HotIf ${config.layer_condition.ext}
${getExt('extHtk')}#HotIf


;extend2 layer 🌟🌟     🌟🌟     🌟🌟     🌟🌟     🌟🌟
#HotIf ${config.layer_condition.ext2}
${getExt('ext2Htk')}#HotIf


;symbol layer 💲     💲     💲     💲     💲     💲     💲
#HotIf ${config.layer_condition.sym}
${getSym()}#HotIf


;symbol1 layer ⇧💲      ⇧💲      ⇧💲      ⇧💲      ⇧💲
#HotIf ${config.layer_condition.sym1}
${getSymShift()}#HotIf


;symbol2 layer 💲💲    💲💲    💲💲    💲💲    💲💲    💲💲
#HotIf ${config.layer_condition.sym2}
${getSym2()}#HotIf


;standard
ins::switchWindow()


;helper functions 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺
window_toggle := 0
switchWindow() {
  global
  window_toggle := !window_toggle
  SendInput( window_toggle ? "#^{left}" : "#^{right}")
}
${config.config}
${brightness()}
${scroll(config.extKey, scrollU, scrollD)}
${move(config.extKey, mouseU, mouseR, mouseD, mouseL)}`

function getExt(layer) {
  return keys[layer].reduce((prev, key, i) => {
    if (key == '.') return prev

    switch (key) {
      case 'WheelUp': return prev
        + `\t*${scrollU = base[i]}::wheelScroll_up()\n`
      case 'WheelDown': return prev
        + `\t*${scrollD = base[i]}::wheelScroll_down()\n`
    }

    prev += `\t${base[i]}::`

    switch (key) {
      case 'mouseU': prev += `mouse_move('up')`
        mouseU = base[i]; break
      case 'mouseD': prev += `mouse_move('down')`
        mouseD = base[i]; break
      case 'mouseL': prev += `mouse_move('left')`
        mouseL = base[i]; break
      case 'mouseR': prev += `mouse_move('right')`
        mouseR = base[i]; break

      case 'toggleMouseSpeed':
      case 'brightnessUp':
      case 'brightnessDown': prev += `${key}()`; break

      case 'Capslock': prev +=
        `SetCapsLockState(!GetKeyState("CapsLock","T"))`; break

      default: prev += key
    }

    return prev + '\n'
  }, '')
}
function getSym() {
  return keys.sym.reduce((prev, key, i) => {
    if (key == '.') return prev

    prev += `\t${base[i]}::`
    prev += (+key || '0`\\/=[]'.includes(key)) ? key : send(key)

    return prev + '\n'
  }, '')
}
function getSym2() {
  return keys.sym2.reduce((prev, key, i) => {
    if (key == '.') return prev

    prev += `\t${base[i]}::`
    prev += (key.startsWith('F') || key.startsWith('^')) ?
      key : send(key)

    return prev + '\n'
  }, '')
}
function getSymShift() {
  return keys.symShift.reduce((prev, key, i) => {
    if (key == '.') return prev

    return prev + `\t${base[i]}::${send(key)}\n`
  }, '')
}


//helpers
function getUnicode(char) {
  switch (char) {
    case '⚠️': return 'U+26a0}{U+fe0f'
    default: return `U+${char.codePointAt(0).toString(16)}`
  }
}
function send(key) {
  return key <= '~'
    ? `SendText('${key}')`
    : `Send('{${getUnicode(key)}}')`
}