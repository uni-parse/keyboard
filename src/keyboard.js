
function key(standard, power, sym, sym2, ext, ext2) {
  return {
    standard: [standard, getKeyShift(standard)],
    power: power,
    sym: sym ? [sym, getKeyShift(sym)] : undefined,
    sym2: sym2,
    ext: ext ? [ext, getKeyHotkey(ext)] : undefined,
    ext2: ext2 ? [ext2, getKeyHotkey(ext2)] : undefined
  }
}
//55 46  40  34  29  29  35    47    29  29  30  35  42   51
//42  30  25  21  23  26    44    34  22  20  24  30  36   47
//34  .16--13--11--10. 29    42    29 .10--11--13--16. 34   48
//46 33  27  24 .18. 22    37  37    22 .18. 24  27  33
//⎋⇄⏎⇪⇧⨁⊞≣⌫⌦⎇▴▾▸◂◴◷⦺↩↪⇊⇈↑↓→←⇞⇟⇱⇲⏯◼⏭⏮🔇🔊🔈☀✳⎙📱⊚⊕⊝

let keys = [
  [
    key('`', 55),
    key(1, 46),
    key(2, 40),
    key(3, 34),
    key(4, 29),
    key(5, 29),
    key(6, 35),
    key('\\', 47),
    key(7, 29),
    key(8, 29),
    key(9, 30),
    key(0, 35),
    key('=', 42),
    key('⌫', 51),
  ],
  [
    key('⇄', 42),
    key('a', 30),
    key('w', 25),
    key('f', 21),
    key('p', 23),
    key('b', 26),
    key('[', 44),
    key('j', 34),
    key('l', 22),
    key('u', 20),
    key('y', 24),
    key("'", 30),
    key('-', 36),
    key('⏎', 47),
  ],
  [
    key('alt', 34),
    key('a', 16),
    key('r', 13),
    key('s', 11),
    key('t', 10),
    key('g', 29),
    key(']', 42),
    key('m', 29),
    key('n', 10),
    key('e', 11),
    key('i', 13),
    key('o', 16),
    key(';', 34),
    key('⏎', 48),
  ],
  [
    key('⇧', 46),
    key('⇧', 33),
    key('x', 27),
    key('c', 24),
    key('d', 18),
    key('v', 22),
    key('z', 37),
    key('/', 37),
    key('k', 22),
    key('h', 18),
    key(',', 24),
    key('.', 27),
    key('⇧', 33),
  ],
  [
    key('⊞', 40),
    key('⨁', 26),
    key('sym', 10),
    key('space', 18),
    key('ext', 10),
    key('⨁', 26),
    key('⨁', 40),
    key('≣', 60)
  ]
]

//⎋⇄⏎⇪⇧⨁⊞≣⌫⌦⎇▴▾▸◂◴◷⦺↩↪⇊⇈↑↓→←⇞⇟⇱⇲⏯◼⏭⏮🔇🔊🔈☀✳⎙📱⊚⊕⊝
function getKeyHotkey(symbol) {
  switch (symbol) {
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
    default: return symbol;
  }
}
function getKeyShift(key) {
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
    default: return key >= 'a' && key <= 'z' ? key.toUpperCase() : undefined
  }
}
function renameToValidId(key) {
  switch (key) {
    case (typeof key == 'number' ? key : undefined): return `_${key}`; break
    case '`': return 'backtick'; break
    case '-': return 'hyphon'; break
    case '=': return 'equal'; break
    case '/': return 'slash'; break
    case '\\': return 'backSlash'; break
    case '[': return 'openBreacket'; break
    case ']': return 'closeBracket'; break
    case "'": return 'quate'; break
    case ';': return 'semiColon'; break
    case ',': return 'comma'; break
    case '.': return 'period'; break
    default: return key
  }
}


function appendKeys(ctx) {
  keys.forEach(rowKeys => {
    const rowDiv = document.createElement('div')
    rowDiv.setAttribute('class', 'row')
    rowKeys.forEach(key => {
      const btn = document.createElement('button')
      btn.id = renameToValidId(key.standard[0])
      btn.textContent = key.standard[0]
      rowDiv.appendChild(btn)
    });
    ctx.appendChild(rowDiv)
  })
}

export default appendKeys