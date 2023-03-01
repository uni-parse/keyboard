
import { keys } from "./keys.mjs"
import { config } from "./ahk_config.mjs"
import { mouse } from "./ahk_mouse.mjs"

const base = keys.standard.map(k => k == ';' ? '`;' : k)
let mouseL, mouseR, mouseU, mouseD

export const autohotkeyStr = `${config.intro}
;config layers ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
${config.switchers}


;extend layer 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟
#HotIf ${config.layer_condition.ext}
${getExt()}#HotIf


;extend2 layer 🌟🌟 🌟🌟 🌟🌟 🌟🌟 🌟🌟 🌟🌟
#HotIf ${config.layer_condition.ext2}
${getExt('ext2Htk')}#HotIf


;symbol layer 💲  💲  💲  💲  💲  💲  💲  💲  💲
#HotIf ${config.layer_condition.sym}
${getSym()}#HotIf


;symbol1 layer ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲
#HotIf ${config.layer_condition.sym1}
${getSymShift()}#HotIf


;symbol2 layer 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲
#HotIf ${config.layer_condition.sym2}
${getSym2()}#HotIf


;mouse in extend layer 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺
#HotIf ${config.layer_condition.ext}
${mouse.getHover(config.extKey, mouseU, mouseR, mouseD, mouseL)}
${mouse.getWheel(config.extKey, 'q', 'wheelUp')}
${mouse.getWheel(config.extKey, 'a', 'wheelDown')}#HotIf`



function getExt(ext2 = 0) {
  let str = ''
  keys[ext2 ? 'ext2Htk' : 'extHtk'].forEach((key, i) => {
    if (key == '.') return
    switch (key) {
      case 'LButton':
      case 'RButton':
      case 'MButton':
      case 'XButton1':
      case 'XButton2': str += `\t${base[i]}::${key}\n`; break
      case 'Capslock': str += `\t${base[i]}:: {
    SetCapsLockState !GetKeyState("CapsLock","T")\n\t}\n`
        break
      case 'mouseL': mouseL = base[i]; break
      case 'mouseR': mouseR = base[i]; break
      case 'mouseU': mouseU = base[i]; break
      case 'mouseD': mouseD = base[i]; break
      case 'brightnessUp': str += `\t${base[i]}:: {\n\tglobal
    ${getBrightness(1)}\n\t}\n`
        break
      case 'brightnessDown': str += `\t${base[i]}:: {\n\tglobal
    ${getBrightness()}\n\t}\n`
        break
      case 'speed': str += `\t${base[i]}:: {
    global
		speed_switcher := !speed_switcher
		resetSpeed()\n\t}\n`
        break
      default:
        if (key.includes('mouse') || key.includes('Wheel'))
          return
        str += `\t${base[i]}::${key}\n`
    }
  })
  return str
}
function getSym() {
  let str = ''
  keys.sym.forEach((key, i) => {
    if (key == '.') return
    str += `\t${base[i]}::`
    str += +key || '0`\\/=[]'.includes(key) ?
      `${key}\n` : send(key)
  })
  return str
}
function getSym2() {
  let str = ''
  keys.sym2.forEach((key, i) => {
    if (key == '.') return
    str += `\t${base[i]}::`
    str += key.startsWith('F') || key.startsWith('^') ?
      `${key}\n` : send(key)
  })
  return str
}
function getSymShift() {
  let str = ''
  keys.symShift.forEach((key, i) => {
    if (key == '.') return
    str += `\t${base[i]}::${send(key)}`
  })
  return str
}


//helpers
function getUnicode(char) {
  switch (char) {
    case '⚠️': return 'U+26a0}{U+fe0f'
    default: return `U+${char.codePointAt(0).toString(16)}`
  }
}
function getBrightness(isIncreasing = 0) {
  return isIncreasing
    ? 'ChangeBrightness(CurrentBrightness < 100 - brightnessJump ? CurrentBrightness += brightnessJump : 100)'
    : 'ChangeBrightness(CurrentBrightness > brightnessJump ? CurrentBrightness -= brightnessJump : 0)'
}
function send(key) {
  return key <= '~'
    ? ` {\n\t\tSendText '${key}'\n\t}\n`
    : ` {\n\t\tSend '{${getUnicode(key)}}'\n\t}\n`
}