class key {
  /* constructor(standard, power, ext, ext2, sym, sym2) {
    this.standard = standard
    this.standardHtk = this.convertToHotkey(standard)
    this.shift = this.getKeyShift(standard)
    this.power = power
    this.sym = sym
    this.symShift = sym ? this.getKeyShift(sym) : undefined
    this.sym2 = sym2
    this.ext = ext
    this.extHtk = ext ? this.convertToHotkey(ext) : undefined
    this.ext2 = ext2
    this.ext2Htk = ext2 ? this.convertToHotkey(ext2) : undefined
  } */
  constructor(args) {
    this.standard = args.split(' ')[0]
    this.standardHtk = args.split(' ')[1] || this.convertToHotkey(args.split(' ')[0])
    this.shift = getKeyShift(args.split(' ')[0])
    this.power = args.split(' ')[2]
    this.sym = args.split(' ')[3]
    this.symShift = args.split(' ')[3] ? getKeyShift(args.split(' ')[3]) : undefined
    this.sym2 = args.split(' ')[4]
    this.ext = args.split(' ')[5]
    this.extHtk = args.split(' ')[5] ? this.convertToHotkey(args.split(' ')[5]) : undefined
    this.ext2 = args.split(' ')[6]
    this.ext2Htk = args.split(' ')[6] ? this.convertToHotkey(args.split(' ')[6]) : undefined
  }
  //helper methods
  convertToHotkey(key) {
    switch (key) {
      case '💲': return 'F23'; break
      case '⭐': return 'F24'; break
      case '⎋': return 'Esc'; break
      case '⇄': return 'Tab'; break
      case '⏎': return 'Enter'; break
      case '⇪': return 'Capslock'; break
      case '⇧': return 'LShift'; break
      case '⨁': return 'LCtrl'; break
      case '⊞': return 'LWin'; break
      case '≣': return 'AppsKey'; break
      case '⌫': return 'Bs'; break
      case '⌦': return 'Del'; break
      case '⇱': return 'Home'; break
      case '⇲': return 'End'; break
      case '⇞': return 'PgUp'; break
      case '⇟': return 'PgDown'; break
      case '↑': return 'Up'; break
      case '↓': return 'Down'; break
      case '→': return 'Right'; break
      case '←': return 'Left'; break
      case '▴': return 'mouseU'; break
      case '▾': return 'mouseD'; break
      case '▸': return 'mouseR'; break
      case '◂': return 'mouseL'; break
      case '◴': return 'LButton'; break
      case '◷': return 'RButton'; break
      case '⦺': return 'MButton'; break
      case '↩': return 'XButton1'; break
      case '↪': return 'XButton2'; break
      case '⇈': return 'WheelDown'; break
      case '⇊': return 'WheelUp'; break
      case '⎇': return 'speed'; break
      case '⏯': return 'Media_Play_Pause'; break
      case '◼': return 'Media_Stop'; break
      case '⏭': return 'Media_Next'; break
      case '⏮': return 'Media_Prev'; break
      case '🔇': return 'Volume_Mute'; break
      case '🔊': return 'Volume_Up'; break
      case '🔈': return 'Volume_Down'; break
      case '☀': return 'brightnessUp'; break
      case '✳': return 'brightnessDown'; break
      case '⊚': return '^Numpad0'; break
      case '⊕': return '^NumpadAdd'; break
      case '⊝': return '^NumpadSub'; break
      case '⎙': return 'PrintScreen'; break
      case '📱': return 'Run calc'; break
      case '%': return '`%'; break
      case ';': return '`;'; break
      default: return key;
    }
  }
  getKeyShift(key) {
    switch (key) {
      case '`': return '~'; break
      case 1: return '!'; break
      case 2: return '@'; break
      case 3: return '#'; break
      case 4: return '$'; break
      case 5: return '%'; break
      case 6: return '^'; break
      case 7: return '&'; break
      case 8: return '*'; break
      case 9: return '('; break
      case 0: return ')'; break
      case '=': return '+'; break
      case '-': return '_'; break
      case '\\': return '|'; break
      case '/': return '?'; break
      case '[': return '{'; break
      case ']': return '}'; break
      case ',': return '<'; break
      case '.': return '>'; break
      case ';': return ':'; break
      case "'": return '"'; break
      default: return key.length == 1 && key >= 'a' && key <= 'z' ? key.toUpperCase() : null
    }
  }
}
const keysMap = {
  power: `
55 46 40 34 29 29 35   47   29 29 30 35 42  51
42  30 25 21 23 26   44   34 22 20 24 30 36  47
34   16 13 11 10 29   42   29 10 11 13 16 34  48
46  33 27 24 18 22  37  37  22 18 24 27 33
40     26  10         18         10  26   40  60`,
  standard: `
\`  1 2 3 4 5 6   \\   7 8 9 0 =  ⌫
⇄    q w f p b   [   j i u y ' -  ⏎
alt   a r s t g   ]   m n e i o ;  ⏎
⇧    ⇧ x c d v   z /   k h , . ⇧
⊞      ⨁ 💲     space    ⭐ ⨁ ⨁ ≣`,
  ext: `
⇪  . ◼ ⏮ ⏭ . .   .   . ⊚ ⊕ ⊝ 🔇  .
.   ⇈ ⊗ ▴ ⎇ .   ☀   ⇞ ⇱ ↑ ⇲ 🔉 🔊  .
.    ⇊ ◂ ▾ ▸ ≣   ✳   ⇟ ← ↓ → ⏎  ⏯  .
.   . ↩ ↪ ⌫ ⌦   ⎙ 📱  ⇄ ◴ ⦺ ◷ .
.       . .      .        . . . .`,
  ext2: `
.  . . . . . .   .   . . . . .  .
.   . . . . .   .   . . . . . .  .
.   . . . . .   .   . . . . . .  .
.  . . . . .   . .   . . . . .
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
.      .   .         .         .   .   .   .`,
}
keysMap.shift = (() => {
  let shift = ''
  keysMap.standard
    .replace('\n', '')         //remove extra new line #1
    .replaceAll('    ', ' ')   //remove extra spaces
    .replaceAll('   ', ' ')    //remove extra spaces
    .replaceAll('  ', ' ')     //remove extra spaces
    .split('\n')
    .forEach((row, index) => {
      index == 0
        ? null                //do nothing
        : shift += '\n'
      row.split(' ').forEach((key, index) =>
        index == 0
          ? shift += getKeyShift(key)
          : shift += ' ' + getKeyShift(key)
      )
    })
    return shift
  })();
  console.log(keysMap.shift)

const keys = {
  topRow: [
    new key('`  55 ⇪  ⋆ '),
    new key('1  46   ▪ ⅒'),
    new key('2  40 ◼  ▸ ½'),
    new key('3  34 ⏮   ⅓'),
    new key('4  29 ⏭   ¼'),
    new key('5  29   » ⅕'),
    new key('6  35    '),
    new key('\\  47    '),
    new key('7  29   › ¾'),
    new key('8  29 ⊚  • ⁰'),
    new key('9  30 ⊕   '),
    new key('0  35 ⊝   '),
    new key('=  42 🔇  ⁃ '),
    new key('⌫  51    '),
  ],
  upperRow: [
    new key('⇄  42    '),
    new key('a  30 ⇈  ` 💡'),
    new key('w  25 ⊗  [ ⚠️'),
    new key('f  21 ▴  ] ↑'),
    new key('p  23 ⎇   π'),
    new key('b  26    ≈'),
    new key('[  44 ☀   ∉'),
    new key('j  34 ⇞   '),
    new key('l  22 ⇱   '),
    new key('u  20 ↑  ( ≤'),
    new key('y  24 ⇲  ) ≥'),
    new key(`'  30 🔉  " …`),
    new key('-  36 🔊  _ ±'),
    new key('⏎  47    '),
  ],
  homeRow: [
    new key('alt  34    '),
    new key('a  16 ⇊  1 F1'),
    new key('r  13 ◂  2 F2'),
    new key('s  11 ▾  3 F3'),
    new key('t  10 ▸  4 F4'),
    new key('g  29 ≣    ≠'),
    new key(']  42 ✳  € ∈'),
    new key('m  29 ⇟  \\ '),
    new key('n  10 ←  7 F7'),
    new key('e  11 ↓  8 F8'),
    new key('i  13 →  9 F9'),
    new key('o  16 ⏎  0 F10'),
    new key(';  34 ⏯  : '),
    new key('⏎  48     '),
  ],
  lowerRow: [
    new key('⇧  46    '),
    new key('⇧  33    '),
    new key('x  27 ↩  { ✗'),
    new key('c  24 ↪  } ㊿'),
    new key('d  18 ⌫  5 F5'),
    new key('v  22 ⌦  = F11'),
    new key('z  37 ⎙   '),
    new key('/  37 📱   '),
    new key('k  22 ⇄  / F12'),
    new key('h  18 ◴  6 F6'),
    new key(',  24 ⦺  < ≤'),
    new key('.  27 ◷  > ≥'),
    new key('⇧  33    '),
  ],
  bottomRow: [
    new key('⊞  40    '),
    new key('⨁  26    '),
    new key('sym  10    '),
    new key('space  18    '),
    new key('ext  10    '),
    new key('⨁  26    '),
    new key('⨁  40    '),
    new key('≣  60    ')
  ]
}

export default keys

//helpers functions
function getKeyShift(key) {
  switch (key) {
    case '`': return '~'; break
    case '1': return '!'; break
    case '2': return '@'; break
    case '3': return '#'; break
    case '4': return '$'; break
    case '5': return '%'; break
    case '6': return '^'; break
    case '7': return '&'; break
    case '8': return '*'; break
    case '9': return '('; break
    case '0': return ')'; break
    case '=': return '+'; break
    case '-': return '_'; break
    case '\\': return '|'; break
    case '/': return '?'; break
    case '[': return '{'; break
    case ']': return '}'; break
    case ',': return '<'; break
    case '.': return '>'; break
    case ';': return ':'; break
    case "'": return '"'; break
    default: return (
      key.length == 1
        && key >= 'a'
        && key <= 'z'
        ? key.toUpperCase()
        : key
    )
  }
}

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