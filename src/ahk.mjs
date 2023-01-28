
import keys from "./keys.mjs"
import config from "./ahk_config.mjs"
import mouse from "./ahk_mouse.mjs"

const base = keys.get('standard').map(k => k == ';' ? '`;' : k)
let mouseL, mouseR, mouseU, mouseD

const autohotkeyStr = `${config.intro}
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

export default autohotkeyStr


function getExt(ext2 = 0) {
  let str = ''
  keys.get(ext2 ? 'ext2Htk' : 'extHtk').forEach((key, i) => {
    if (key.includes('Button'))
      str += `\t${base[i]}::${key}\n`
    else if (key == 'Capslock')
      str += `\t${base[i]}::SetCapsLockState, % GetKeyState("CapsLock","T") ? "Off" : "On"\n\t\treturn\n`
    else if (key == 'mouseL') mouseL = base[i]
    else if (key == 'mouseR') mouseR = base[i]
    else if (key == 'mouseU') mouseU = base[i]
    else if (key == 'mouseD') mouseD = base[i]
    else if (key == 'brightnessUp')
      str += getBrightness(base[i], 1)
    else if (key == 'brightnessDown')
      str += getBrightness(base[i])
    else if (key == 'speed') str += `\t${base[i]}::
		speed_switcher := !speed_switcher
		resetSpeed()
		return\n`
    else if (key != '.' && !key.includes('mouse') && !key.includes('Wheel')) str += `\t${base[i]}::${key}\n`
  })
  return str
}
function getSym() {
  let str = ''
  keys.get('sym').forEach((key, i) => {
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
  keys.get('sym2').forEach((key, i) => {
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
  keys.get('symShift').forEach((key, i) => {
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
  let comp
  if (char.length === 1) comp = char.charCodeAt(0)
  else comp = (char.charCodeAt(0) - 0xD800) * 0x400
    + (char.charCodeAt(1) - 0xDC00) + 0x10000
  if (comp < 0) comp = char.charCodeAt(0)
  return `U+${comp.toString("16")}`
}
function getBrightness(key, isIncreasing = 0) {
  return isIncreasing ?
    `\t${key}::ChangeBrightness(CurrentBrightness < 100 - brightnessJump ? CurrentBrightness += brightnessJump : 100)
    return\n`
    : `\t${key}::ChangeBrightness(CurrentBrightness > brightnessJump ? CurrentBrightness -= brightnessJump : 0)
    return\n`
}