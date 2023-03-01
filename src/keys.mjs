export const keys = {
  power: `
55 46 40 34 29 29 35   47   29 29 30 35 42  51
42  30 25 21 23 26   44   34 22 20 24 30 36  47
34   16 13 11 10 29   42   29 10 11 13 16 34  48
46  33 27 24 18 22  37  37  22 18 24 27 33
40     26  10         18         10  26   40  60`,
  standard: `
\`  1 2 3 4 5 6   \\   7 8 9 0 =   ⌫
⇄    q w f p b   [   j l u y ' -   ⏎
alt   a r s t g   ]   m n e i o ;   ⏎
⇧    ⇧ x c d v   z /   k h , . ⇧
⊞      ⨁ 💲     space    ⭐ ⨁ ⨁ ≣`,
  ext: `
.  . . . . . .   .   . . . . .    .
.   ⇈ ⊗ ▴ ⎇ .   .   . ⇱ ↑ ⇲ ⇞ ⇟   .
.    ⇊ ◂ ▾ ▸ ≣   .   ⇄ ← ↓ → ⏎ .   .
.   . ↩ ↪ ⌫ ⌦   . .   ⇪ ◴ ⦺ ◷ .
.       . .      .        . . . .`,
  ext2: `
.  . . . . . .   .   . . . . .      .
.   . . . . .   .   . ⎙ 🔊 ⊚ ◼ .   .
.   . . 🔍 . .   .  📱 ⏮ 🔉 ⏭ ⏯ 🔇   .
.  . . . . .   . .   ☀ ✳ ⊕ ⊝ .
.       . .     .     . . . .`,
  sym: `
⋆  ▪ ▸ . . » .   .   › • . . ⁃  .
. \` [ ] . .   .   .  . ( ) " _  .
.   1 2 3 4 .   €  \\ 7 8 9 0 :  .
.  . { } 5 =   . .   / 6 < > .
.     . .       .      . . . .`,
  sym2: `
. ⅒ ½  ⅓  ¼  ⅕  .    .    ¾  ⁰  .  .  .   .
.  💡 ⚠️  ↑  π  ≈    ∉   .  .  ≤  ≥  …   ±   .
.   F1 F2 F3 F4 ≠    ∈   .  F7 F8 F9 F10  .   .
.  .  ✗  ㊿ F5 F11  . .  F12 F6  .  .  .
.      .   .         .         .   .   .   .`
}



const standardStr = keys.standard

formateKeysToArrays() // keys = { layer1: ['key1', ...], ... }

keys.shift = getShifts(keys.standard)
keys.symShift = getShifts(keys.sym, !'shiftDot')

keys.standardHtk = keys.standard.map(key => getHotKey(key))
keys.extHtk = keys.ext.map(key => getHotKey(key))
keys.ext2Htk = keys.ext2.map(key => getHotKey(key))

keys.standardRows = getKeysByRows(standardStr)
keys.standardHtkRows = getKeysByRows(
  standardStr.split('')
    .map(key => getHotKey(key))
    .join('')
)


function formateKeysToArrays() {
  Object.entries(keys).forEach(([key, value]) =>
    keys[key] = value
      .replace('\n', '')         //remove first new line
      .replaceAll('\n', ' ')     //remove all new lines
      .replaceAll('    ', ' ')   //remove extra spaces
      .replaceAll('   ', ' ')    //remove extra spaces
      .replaceAll('  ', ' ')     //remove extra spaces
      .split(' ')
  )

}
function getKeysByRows(standardStr) {
  const names = ['top', 'upper', 'home', 'lower', 'bottom'],
    rows = standardStr
      .replace('\n', '')         //remove first newLine0
      .replaceAll('    ', ' ')   //remove extra spaces
      .replaceAll('   ', ' ')    //remove extra spaces
      .replaceAll('  ', ' ')     //remove extra spaces
      .split('\n')
  rows.forEach((row, i) => rows[i] = row.split(' '))
  return Object.fromEntries(names.map((n, i) => [n, rows[i]]))
}
function getShifts(layer, shiftDot = true) {
  return layer.map(key => {
    if (shiftDot && key == '.') return '>'
    switch (key) {
      case '`': return '~'
      case '1': return '!'
      case '2': return '@'
      case '3': return '#'
      case '4': return '$'
      case '5': return '%'
      case '6': return '^'
      case '7': return '&'
      case '8': return '*'
      case '9': return '('
      case '0': return ')'
      case '=': return '+'
      case '-': return '_'
      case '\\': return '|'
      case '/': return '?'
      case '[': return '{'
      case ']': return '}'
      case ',': return '<'
      case ';': return ':'
      case "'": return '"'
      default: return (
        key.length == 1 && key >= 'a' && key <= 'z'
          ? key.toUpperCase()
          : key
      )
    }
  })
}

function getHotKey(key) {
  switch (key) {
    case '💲': return 'F23'
    case '⭐': return 'F24'
    case '⊗': return 'Esc'
    case '⎋': return 'Esc'
    case '⇄': return 'Tab'
    case '⏎': return 'Enter'
    case '⇪': return 'Capslock'
    case '⇧': return 'LShift'
    case '⨁': return 'LCtrl'
    case '⊞': return 'LWin'
    case '≣': return 'AppsKey'
    case '⌫': return 'Bs'
    case '⌦': return 'Del'
    case '⇱': return 'Home'
    case '⇲': return 'End'
    case '⇞': return 'PgUp'
    case '⇟': return 'PgDn'
    case '↑': return 'Up'
    case '↓': return 'Down'
    case '→': return 'Right'
    case '←': return 'Left'
    case '▴': return 'mouseU'
    case '▾': return 'mouseD'
    case '▸': return 'mouseR'
    case '◂': return 'mouseL'
    case '◴': return 'LButton'
    case '◷': return 'RButton'
    case '⦺': return 'MButton'
    case '↩': return 'XButton1'
    case '↪': return 'XButton2'
    case '⇈': return 'WheelDown'
    case '⇊': return 'WheelUp'
    case '⎇': return 'speed'
    case '⏯': return 'Media_Play_Pause'
    case '◼': return 'Media_Stop'
    case '⏭': return 'Media_Next'
    case '⏮': return 'Media_Prev'
    case '🔇': return 'Volume_Mute'
    case '🔊': return 'Volume_Up'
    case '🔉': return 'Volume_Down'
    case '☀': return 'brightnessUp'
    case '✳': return 'brightnessDown'
    case '🔍': return 'Browser_Search'
    case '⊚': return '^Numpad0'
    case '⊕': return '^NumpadAdd'
    case '⊝': return '^NumpadSub'
    case '⎙': return 'PrintScreen'
    case '📱': return 'Run( "calc")'
    case '%': return '`%'
    case ';': return '`;'
    default: return key
  }
}



//.  . . . . . .   .   . . . . .  .
//.   . . . . .   .   . . . . . .  .
//.   . . . . .   .   . . . . . .  .
//.  . . . . .   . .   . . . . .
//.       . .     .     . . . .`

//55 46  40  34  29  29  35    47    29  29  30  35  42   51
//42  30  25  21  23  26    44    34  22  20  24  30  36   47
//34  .16--13--11--10. 29    42    29 .10--11--13--16. 34   48
//46 33  27  24 .18. 22    37  37    22 .18. 24  27  33
//⎋⇄⏎⇪⇧⨁⊞≣⌫⌦⎇▴▾▸◂◴◷⦺↩↪⇊⇈↑↓→←⇞⇟⇱⇲⏯◼⏭⏮🔇🔊🔈☀✳⎙📱⊚⊕⊝

/*
const keys = {
  topRow: [
    new key('`', 55, '⇪', '', '⋆', ''),
    new key(1, 46, '', '', '▪', '⅒'),
    new key(2, 40, '◼', '', '▸', '½'),
    new key(3, 34, '⏮', '', '', '⅓'),
    new key(4, 29, '⏭', '', '', '¼'),
    new key(5, 29, '', '', '»', '⅕'),
    new key(6, 35, '', '', '', ''),
    new key('\\', 47, '', '', '', ''),
    new key(7, 29, '', '', '›', '¾'),
    new key(8, 29, '⊚', '', '•', '⁰'),
    new key(9, 30, '⊕', '', '', ''),
    new key(0, 35, '⊝', '', '', ''),
    new key('=', 42, '🔇', '', '⁃', ''),
    new key('⌫', 51, '', '', '', ''),
  ],
  upperRow: [
    new key('⇄', 42, '', '', '', ''),
    new key('a', 30, '⇈', '', '`', '💡'),
    new key('w', 25, '⊗', '', '[', '⚠️'),
    new key('f', 21, '▴', '', ']', '↑'),
    new key('p', 23, '⎇', '', '', 'π'),
    new key('b', 26, '', '', '', '≈'),
    new key('[', 44, '☀', '', '', '∉'),
    new key('j', 34, '⇞', '', '', ''),
    new key('l', 22, '⇱', '', '', ''),
    new key('u', 20, '↑', '', '(', '≤'),
    new key('y', 24, '⇲', '', ')', '≥'),
    new key("'", 30, '🔉', '', '"', '…'),
    new key('-', 36, '🔊', '', '_', '±'),
    new key('⏎', 47, '', '', '', ''),
  ],
  homeRow: [
    new key('alt', 34, '', '', '', ''),
    new key('a', 16, '⇊', '', 1, 'F1'),
    new key('r', 13, '◂', '', 2, 'F2'),
    new key('s', 11, '▾', '', 3, 'F3'),
    new key('t', 10, '▸', '', 4, 'F4'),
    new key('g', 29, '≣', '', '', '≠'),
    new key(']', 42, '✳', '', '€', '∈'),
    new key('m', 29, '⇟', '', '\\', ''),
    new key('n', 10, '←', '', 7, 'F7'),
    new key('e', 11, '↓', '', 8, 'F8'),
    new key('i', 13, '→', '', 9, 'F9'),
    new key('o', 16, '⏎', '', 0, 'F10'),
    new key(';', 34, '⏯', '', ':', ''),
    new key('⏎', 48, '', '', '', ''),
  ],
  lowerRow: [
    new key('⇧', 46, '', '', '', ''),
    new key('⇧', 33, '', '', '', ''),
    new key('x', 27, '↩', '', '{', '✗'),
    new key('c', 24, '↪', '', '}', '㊿'),
    new key('d', 18, '⌫', '', 5, 'F5'),
    new key('v', 22, '⌦', '', '=', 'F11'),
    new key('z', 37, '⎙', '', '', ''),
    new key('/', 37, '📱', '', '', ''),
    new key('k', 22, '⇄', '', '/', 'F12'),
    new key('h', 18, '◴', '', '6', 'F6'),
    new key(',', 24, '⦺', '', '<', '≤'),
    new key('.', 27, '◷', '', '>', '≥'),
    new key('⇧', 33, '', '', '', ''),
  ],
  bottomRow: [
    new key('⊞', 40, '', '', '', ''),
    new key('⨁', 26, '', '', '', ''),
    new key('sym', 10, '', '', '', ''),
    new key('space', 18, '', '', '', ''),
    new key('ext', 10, '', '', '', ''),
    new key('⨁', 26, '', '', '', ''),
    new key('⨁', 40, '', '', '', ''),
    new key('≣', 60, '', '', '', '')
  ]
}
*/


/* 
//⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾ ⤿⥁🔍⎈⎇⇥⊞📋⨁
const keys = [
  ['`', ['', '` ~'], ['Capslock', '⇪'],        '⋆'],
  ['1', ['', '1 !'], ['Browser_Search', '🔍'], '▪', '⅒'],
  ['2', ['', '2 @'], ['Media_Stop', '◼'], '▸', '½'],
  ['3', ['', '3 #'], ['Media_Prev', '⏮'], '',  '⅓'],
  ['4', ['', '4 $'], ['Media_Next', '⏭'], '',  '¼'],
  ['5', ['', '5 %'], ['', ''],  '»',            '⅕'],
  ['6', ['', '6 ^'], ['', ''], ['', ' '], ''],
  ['\\', ['', '\\ |', ''], ['', ''], ['', ' '], ''],
  ['7', ['', '7 &'], ['', ''],            '›', '¾'],
  ['8', ['', '8 *'],   ['^Numpad0', '⊚'], '•', '⁰'],
  ['9', ['', '9 ('], ['^NumpadAdd', '⊕'],],
  ['0', ['', '0 )'], ['^NumpadSub', '⊝'],],
  ['=', ['', '= +'],['Volume_Mute', '🔇'], '⁃'],
  ['Bs', ['', '⌫']],

  //
  //⬤∈∉∞≳≲⊛⊝⊜⨸⨶⨷💡🔦🏮🕯🪔🌕🌑🌒🌖☀🌙🌚🌝☀🌞⭐👓🚀🔅🔆✅❎🚫✔🔻®©™◾◽💭💭🗯💬🗨💲❇✳♻☢☣🌟☀ↀↂↈ⒒ ●
  //⊙⊚⊕⊘⊗⊖⊜⊝⊞⊟⊠⊡⨭⨮⨴⨵⨶⨷⨸⨺⨹◬
  //⋆▪▫▸▹•◦»›⬤〇⦺●◼▣◻▶▷◉◎◈◇ʘ°‣•®™▾▼↩↪
  //⋆▪▫•◦▸▹⁃ ➡ ➼ ➢➣➤➨➪➜ ☆★✪☰ §○●∙
  //⋆▪▸•⁃
  //✪★◼⬤▶➤➜
  //
  //★
  //  ◼
  //    ⬤
  //      ▶
  //
  //★▶►▬•»›⚠️💡⚙️±×÷²√π⁰≠≈≤≥Ø∞✓✗✖ € ← → ↑ ↓ ⇆♪©Ⓓ㊿†₱…
  //⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔊🔉🔈🔇⤾ ⤿⥁🔍⎈⎇⇥⊞📋⨁⎘✂️
  ['Tab', ['', '⇄']],
  ['q', '', ['WheelUp', '⇈'],  ['`', '` ~'], '💡'],
  ['w', '',     ['Esc', '⊗'],  ['[', '[ {'], '⚠️'],
  ['f', '',  ['mouseU', '▴'],  [']', '] }'], '↑'],
  ['p', '',   ['speed', '⎇'], '', 'π'],
  ['b', '', ['', ''], '', '≈'],
  ['[', ['', '[ {'], ['brightnessUp', '☀'], '', '∉'],
  ['j', '', ['PgUp', '⇞'], ''],
  ['l', '', ['Home', '⇱'],],
  ['u', '',   ['Up', '↑'], ['(','( <'], '≤'],
  ['y', '',  ['End', '⇲'], [')',') >'], '≥'],
  ['\'', ['', '\' "'], ['Volume_Down', '🔉'], '"', '…'],
  ['-', ['', '- _'],     ['Volume_Up', '🔊'], '_', '±'],
  ['Enter',       ['', '⏎']],

  //㊿½⅓¼⅕⅒¾ ²ⁿ³ⅻ∞√∫≡Ω
  //⇉⇇⇊⇈⇒⇐⇑⇓⇨⇦⇩⇧↟↡↠↞⇡⇣≣◷◴◎⩀◉⦺◂▸▴▾▹◃▵▿▫▪◽◾
  //⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾ ⤿⥁🔍⎈🎡⎇⇥⊞📋⨁⎙
  ['LAlt', ['', 'Alt']],
  ['a', '', ['WheelDown', '⇊'], [1, '1 !'], 'F1'],
  ['r', '',    ['mouseL', '◂'], [2, '2 @'], 'F2'],
  ['s', '',    ['mouseD', '▾'], [3, '3 #'], 'F3'],
  ['t', '',    ['mouseR', '▸'], [4, '4 $'], 'F4'],
  ['g', '',   ['AppsKey', '≣'], '', '≠'],
  [']', ['', '] }'], ['brightnessDown', '✳'], '€', '∈'],
  ['m', '', ['PgDn', '⇟'], ['\\', '\\ |'],],
  ['n', '', ['Left', '←'], [7, '7 &'], 'F7'],
  ['e', '', ['Down', '↓'], [8, '8 *'], 'F8'],
  ['i', '',['Right', '→'], [9, '9 ('], 'F9'],
  ['o', '',['Enter', '⏎'], [0, '0 )'], 'F10'],
  ['`;', ['', '; :'], ['Media_Play_Pause', '⏯'], ':'],

  //
  //↑π√→✗✓©Ⓓ📌
  //º⁈‼⁇≣
  //½₂₃₁ⅠⅡⅢ∭∬∫∮∯∰⋙⋘📱🎵
  //⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾ ⤿⥁🔍⎈⎇⇥⊞📋⇄⨁⎘✂️📑💾
  ['LShift', ['', '⇧']],
  ['SC056', ['', '⇧']],
  ['x', '', ['XButton1', '↩'], '{', '✗'],
  ['c', '', ['XButton2', '↪'], '}', '㊿'],
  ['d', '',       ['Bs', '⌫'], [5, '5 `%'], 'F5'],
  ['v', '',       ['Del','⌦'], ['=', '= +'], 'F11'],
  ['z','',['PrintScreen','⎙'],],
  ['/', ['', '/ ?'], ['Run calc', '📱'],],
  ['k', '',     ['Tab', '⇄'], ['/', '/ ?'], 'F12'],
  ['h', '', ['LButton', '◴'], [6, '6 ^'], 'F6'],
  [',', ['', ', <'], ['MButton', '⦺'],'<'],
  ['.', ['', '. >'], ['RButton', '◷'],'>'],
  ['RShift', ['', '⇧'],],

  //
  //⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾ ⤿⥁🔍⎈⎇⇶⇉⇥⊞📋⨁⇐⇒📄
  ['LWin', ['', '⊞']],
  ['LCtrl', ['', 'Ctrl']],
  ['F23', ['', 'Sym']],
  ['Space', ['', '']],
  ['F24', ['', 'Ext']],
  ['RCtrl', ['', 'Ctrl']],
  ['RCtrl', ['', 'Ctrl']],
  ['AppsKey', ['', '≣']]
]
 */