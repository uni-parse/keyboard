
import { keys } from "./keys.mjs"
import { config } from "./ahk_config.mjs"
import { mouse } from "./ahk_mouse.mjs"

const base = keys.standard.map(k => k == ';' ? '`;' : k)
let mouseL, mouseR, mouseU, mouseD

export const autohotkeyStr = `${config.intro}
;config layers ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
${config.switchers}


;extend layer 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟
#If ${config.layer_condition.ext}
${getExt()}#If


;extend2 layer 🌟🌟 🌟🌟 🌟🌟 🌟🌟 🌟🌟 🌟🌟
#If ${config.layer_condition.ext2}
${getExt('ext2Htk')}#If


;symbol layer 💲  💲  💲  💲  💲  💲  💲  💲  💲
#If ${config.layer_condition.sym}
${getSym()}#If


;symbol1 layer ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲 ⇧💲
#If ${config.layer_condition.sym1}
${getSymShift()}#If


;symbol2 layer 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲 💲💲
#If ${config.layer_condition.sym2}
${getSym2()}#If


;mouse in extend layer 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺ 🌟⦺
#If ${config.layer_condition.ext}
${mouse.getHover(config.extKey, mouseU, mouseR, mouseD, mouseL)}
${mouse.getWheel(config.extKey, 'q', 'wheelUp')}
${mouse.getWheel(config.extKey, 'a', 'wheelDown')}#If`



function getExt(ext2 = 0) {
  let str = ''
  keys[ext2 ? 'ext2Htk' : 'extHtk'].forEach((key, i) => {
    switch (key) {
      case 'LButton':
      case 'RButton':
      case 'MButton':
      case 'XButton1':
      case 'XButton2': str += `\t${base[i]}::${key}\n`; break
      case 'Capslock': str += `\t${base[i]}::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"\n\t\treturn\n`
        break
      case 'mouseL': mouseL = base[i]; break
      case 'mouseR': mouseR = base[i]; break
      case 'mouseU': mouseU = base[i]; break
      case 'mouseD': mouseD = base[i]; break
      case 'brightnessUp': str += getBrightness(base[i], 1)
        break
      case 'brightnessDown': str += getBrightness(base[i])
        break
      case 'speed': str += `\t${base[i]}::
		speed_switcher := !speed_switcher
		resetSpeed()
		return\n`
        break
      default: if (key != '.' && !key.includes('mouse') && !key.includes('Wheel'))
        str += `\t${base[i]}::${key}\n`
    }
  })
  return str
}
function getSym() {
  let str = ''
  keys.sym.forEach((key, i) => {
    if (+key || '0`\\/=[]'.includes(key))
      str += `\t${base[i]}::${key}\n`
    else if (key > '~')
      str += `\t${base[i]}::Send {${getUnicode(key)}}\n\t\treturn\n`
    else if (key != '.')
      str += `\t${base[i]}::SendRaw ${key}\n\t\treturn\n`
  })
  return str
}
function getSym2() {
  let str = ''
  keys.sym2.forEach((key, i) => {
    if (key.startsWith('F') || key.startsWith('^'))
      str += `\t${base[i]}::${key}\n`
    else if (key > '~')
      str += `\t${base[i]}::Send {${getUnicode(key)}}\n\t\treturn\n`
    else if (key != '.')
      str += `\t${base[i]}::SendRaw ${key}\n\t\treturn\n`
  })
  return str
}
function getSymShift() {
  let str = ''
  keys.symShift.forEach((key, i) => {
    if (key == '%')
      str += `\t${base[i]}::sendRaw \`%\n\t\treturn\n`
    else if (key > '~')
      str += `\t${base[i]}::send {${getUnicode(key)}}\n\t\treturn\n`
    else if (key != '.')
      str += `\t${base[i]}::sendRaw ${key}\n\t\treturn\n`
  })
  return str
}

function getUnicode(char) {
  switch (char) {
    case '⚠️': return 'U+26a0}{U+fe0f'
    default: return `U+${char.codePointAt(0).toString(16)}`
  }
}
function getBrightness(key, isIncreasing = 0) {
  return isIncreasing ?
    `\t${key}::ChangeBrightness(CurrentBrightness < 100 - brightnessJump ? CurrentBrightness += brightnessJump : 100)
    return\n`
    : `\t${key}::ChangeBrightness(CurrentBrightness > brightnessJump ? CurrentBrightness -= brightnessJump : 0)
    return\n`
}