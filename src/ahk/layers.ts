const layersByStr = {
  power: `
55 46 40 34 29 29   35 47   29 29 30 35 42  51
42  30 25 21 23 26   44   34 22 20 24 30 36  47
34   16 13 11 10 29   42   29 10 11 13 16 34  48
46  33 27 24 18 22  37  37  22 18 24 27 33
40     26  10         18       10  26   40  60`,
// ⚠️ remove lR Mr Rm Lr
// 💡 add iL
// replace il/ir with ww/ee
  bg: `
pp pp rr Rm mw wW   ww ee   eE em Mr rr pp  gg
Gg  Pp Rr Mm Ww Ww   We   eE Ee Mm Rr Pp Pp  gg
Gg   PP RR MM WW Ww   we   Ee EE MM RR PP Pp  gg
gg  Gg Rr Mm WW Ww  ww  ee  Ee EE Mm Rr Gg
gg     gg  sym        GG      ext  gg   gg  gg`,
  standard: `
\`  1 2 3 4 5   = \\   6 7 8 9 0   ⌫
⇄    q w f p b   [   j l u y ' -   ⏎
alt   a r s t g   ]   m n e i o ;   ⏎
⇧    ⇧ x c d v   z /   k h , . ⇧
⊞      ⨁ 💲     space    ⭐ ⨁ ⨁ ≣`,
  ext: `
.  . . . . .    . .   . . . . .    .
.   ⇈ ⊗ ▴ ⎇ .   .   . ⇱ ↑ ⇲ ⇞ ⇟   .
.    ⇊ ◂ ▾ ▸ ≣   .   ⇄ ← ↓ → ⏎ .   .
.   . ↩ ↪ ⌫ ⌦   . .   ⇪ ◴ ⦺ ◷ .
.       . .      .        . . . .`,
  ext2: `
.  . . . . .   . .   . . . . .      .
.   . . . . .   .   . ⎙ 🔊 ⊚ ◼ .   .
.   . . 🔍 . .  .   📱 ⏮ 🔉 ⏭ ⏯ 🔇   .
.  . . . . .   . .   ☀ ✳ ⊕ ⊝ .
.       . .     .     . . . .`,
  sym: `
⋆  ▪ ▸ . . »   . .   › • . . ⁃  .
. \` [ ] . .    .  .  . ( ) " _  .
.   1 2 3 4 .   €  \\ 7 8 9 0 :  .
.  . { } 5 =   . .   / 6 < > .
.     . .       .      . . . .`,
  sym2: `
. ⅒  ½  ⅓  ¼  ⅕    . .    ¾  ⁰  .  .  .   .
.  💡 ⚠️  ↑  π  ≈   ∉    .  .  ≤  ≥  …   ±   .
.   F1 F2 F3 F4 ≠    ∈   .  F7 F8 F9 F10  .   .
.  .  ✗  ㊿ F5 F11  . .  F12 F6  .  .  .
.      .   .         .         .   .   .   .`,
}

// layersByArr ........................................

const power = toArr(layersByStr.power)
const standard = toArr(layersByStr.standard)
const ext = toArr(layersByStr.ext)
const ext2 = toArr(layersByStr.ext2)
const sym = toArr(layersByStr.sym)
const sym2 = toArr(layersByStr.sym2)

export const layersByArr = {
  power,
  shift: getShifts(standard),

  standard,
  standardHtk: standard.map(getHotKey),

  ext,
  extHtk: ext.map(getHotKey),
  ext2,
  ext2Htk: ext2.map(getHotKey),

  sym,
  symShift: getShifts(sym, false),
  sym2,
}

// layersByRows .........................................

const standardHtkStr = layersByStr.standard
  .split('')
  .map(getHotKey)
  .join('')

const layersByRows = {
  standard: getLayerByRows(layersByStr.standard),
  standardHtk: getLayerByRows(standardHtkStr),
  bg: getLayerByRows(layersByStr.bg),
}

export const rowsLayersByKeys = {
  top: getRowLayersByKeys('top'),
  upper: getRowLayersByKeys('upper'),
  home: getRowLayersByKeys('home'),
  lower: getRowLayersByKeys('lower'),
  bottom: getRowLayersByKeys('bottom'),
}

// helper functions .........................................

function toArr(layer: string) {
  const layerArr = layer.match(/\S+/gu)!
  return layerArr as string[]
}

function getLayerByRows(standardStr: string) {
  const rows = standardStr
    .replace('\n', '') // remove first newLine
    .replace(/ {2,}/g, ' ') // remove extra spaces
    .split('\n')
    .map(row => row.split(' ')) // row: string => string[]

  const rowsNames = ['top', 'upper', 'home', 'lower', 'bottom']
  const layerByRows = Object.fromEntries(
    rowsNames.map((n, i) => [n, rows[i]])
  )

  type LayerByRows = {
    top: string[]
    upper: string[]
    home: string[]
    lower: string[]
    bottom: string[]
  }

  return layerByRows as LayerByRows
}

function getRowLength(row: string) {
  const rowsLengths = {
    top: 14,
    upper: 14,
    home: 14,
    lower: 13,
    bottom: 8,
  }
  return (rowsLengths as any)[row] as number
}

function getRowLayersByKeys(row: string) {
  const range = new Array(getRowLength(row)).fill(null)

  const rowLayersByKeys = range.map((el, i) => ({
    standard: (layersByRows.standard as any)[row][i] as string,
    bg: (layersByRows.bg as any)[row][i] as string,
  }))

  return rowLayersByKeys
}

function getShifts(layer: string[], shiftDot = true) {
  const shiftMap = new Map(
    Object.entries({
      '`': '~',
      '1': '!',
      '2': '@',
      '3': '#',
      '4': '$',
      '5': '%',
      '6': '^',
      '7': '&',
      '8': '*',
      '9': '(',
      '0': ')',
      '=': '+',
      '-': '_',
      '\\': '|',
      '/': '?',
      '[': '{',
      ']': '}',
      ',': '<',
      ';': ':',
      "'": '"',
    })
  )

  const shifts = layer.map(key => {
    if (shiftDot && key === '.') return '>'

    const shiftKey =
      shiftMap.get(key) ??
      (key.length === 1 && key >= 'a' && key <= 'z'
        ? key.toUpperCase()
        : key)

    return shiftKey
  })

  return shifts
}

function getHotKey(key: string) {
  const hotkeysMap = new Map(
    Object.entries({
      '💲': 'F23',
      '⭐': 'F24',
      '⊗': 'Esc',
      '⎋': 'Esc',
      '⇄': 'Tab',
      '⏎': 'Enter',
      '⇪': 'Capslock',
      '⇧': 'LShift',
      '⨁': 'LCtrl',
      '⊞': 'LWin',
      '≣': 'AppsKey',
      '⌫': 'Bs',
      '⌦': 'Del',
      '⇱': 'Home',
      '⇲': 'End',
      '⇞': 'PgUp',
      '⇟': 'PgDn',
      '↑': 'Up',
      '↓': 'Down',
      '→': 'Right',
      '←': 'Left',
      '▴': 'mouseU',
      '▾': 'mouseD',
      '▸': 'mouseR',
      '◂': 'mouseL',
      '◴': 'LButton',
      '◷': 'RButton',
      '⦺': 'MButton',
      '↩': 'XButton1',
      '↪': 'XButton2',
      '⇈': 'WheelUp',
      '⇊': 'WheelDown',
      '⎇': 'toggleMouseSpeed',
      '⏯': 'Media_Play_Pause',
      '◼': 'Media_Stop',
      '⏭': 'Media_Next',
      '⏮': 'Media_Prev',
      '🔇': 'Volume_Mute',
      '🔊': 'Volume_Up',
      '🔉': 'Volume_Down',
      '☀': 'brightnessUp',
      '✳': 'brightnessDown',
      '🔍': 'Browser_Search',
      '⊚': '^Numpad0',
      '⊕': '^NumpadAdd',
      '⊝': '^NumpadSub',
      '⎙': 'PrintScreen',
      '📱': 'Run("calc")',
      '%': '`%',
      ';': '`;',
    })
  )

  const hotkey = hotkeysMap.get(key) ?? key
  return hotkey
}