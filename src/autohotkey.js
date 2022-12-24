
import keys from "./keys"
import config from "./config"
import mouse from "./mouse"

let mouseL, mouseR, mouseU, mouseD,
  base = keys.standard.map(k => k == ';' ? '`;' : k)

const autohotkeyStr = `${config.intro}
;config layers ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
${config.switchers}


;extend layer 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟
#If ${config.layer_condition.ext}
${getExt()}#If


;extend2 layer 🌟🌟 🌟🌟 🌟🌟 🌟🌟 🌟🌟 🌟🌟
#If ${config.layer_condition.ext2}
${getExt2()}#If


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
${mouse.move(config.extKey, mouseU, mouseR, mouseD, mouseL)}
${mouse.wheel(config.extKey, 'q', 'wheelUp')}
${mouse.wheel(config.extKey, 'a', 'wheelDown')}#If`

export default autohotkeyStr


function getExt() {
  let str = ''
  keys.extHtk.forEach((key, i) => {
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
function getExt2() {
  //keys.ext2Htk.forEach(key => {})
  return ''
}
function getSym() {
  let str = ''
  keys.sym.forEach((key, i) => {
    if (+key || key == 0 || key == '`' || key == '\\' || key == '/' || key == '=' || key == '[' || key == ']')
      str += `\t${base[i]}::${key}\n`
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
    else if (key != '.')
      str += `\t${base[i]}::SendRaw ${key}\n\t\treturn\n`
  })
  return str
}
function getSymShift() {
  return keys.symShift.reduce((prev, key, i) => key != '.'
    ? prev + `\t${base[i]}::sendRaw ${key == '%' ? '`%' : key}\n\t\treturn\n`
    : prev
    , '')
}

function getBrightness(key, isIncreasing = 0) {
  return isIncreasing ?
    `\t${key}::ChangeBrightness(CurrentBrightness < 100 - brightnessJump ? CurrentBrightness += brightnessJump : 100)
    return\n`
    : `\t${key}::ChangeBrightness(CurrentBrightness > brightnessJump ? CurrentBrightness -= brightnessJump : 0)
    return\n`
}