//⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾ ⤿⥁🔍⎈⎇⇥⊞📋⨁
const x1 = 4, y1 = x1, x2 = 18, y2 = x2

const keys = [
  ['`', ['', '` ~'], ['Capslock', '⇪'], '', ''],
  ['1', ['', '1 !'], ['Browser_Search', '🔍'], '', ''],
  ['2', ['', '2 @'], ['Media_Stop', '◼'], '', ''],
  ['3', ['', '3 #'], ['Media_Prev', '⏮'], '', ''],
  ['4', ['', '4 $'], ['Media_Next', '⏭'], ''],
  ['5', ['', '5 %'], '', ''],
  ['6', ['', '6 ^']],
  ['\\', ['', '\\ |']],
  ['7', ['', '7 &']],
  ['8', ['', '8 *'], ['', ''], '',],
  ['9', ['', '9 ('], ['^NumpadAdd', '⊕'], '',],
  ['0', ['', '0 )'], ['^NumpadSub', '⊝'], '', '…'],
  ['=', ['', '= +'], ['^Numpad0', '⊚'], '', '±'],
  ['Bs', ['', '⌫'], ['Volume_Mute', '🔇']],

  //
  //∈∉∞≳≲⊛⊝⊜⨸⨶⨷💡🔦🏮🕯🪔🌕🌑🌒🌖☀🌙🌚🌝☀🌞⭐🌟☀ↀↂↈ⒒
  //⊙⊚⊕⊘⊗⊖⊜⊝⊞⊟⊠⊡⨭⨮⨴⨵⨶⨷⨸⨺⨹◬
  //⋆▪▫▸▹•◦»›◼▣◻▶▷◉◎◈◇ʘ°‣•®™▾▼↩↪
  //★▶►▬•»›⚠️💡⚙️±×÷²√π⁰≠≈≤≥Ø∞✓✗✖ € ← → ↑ ↓ ⇆♪©Ⓓ㊿†₱…
  //⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔊🔉🔈🔇⤾ ⤿⥁🔍⎈⎇⇥⊞📋⨁⎘✂️
  ['Tab', ['', '⇄']],
  ['q', '', ['WheelUp', '⇈'],],
  ['w', '', ['Esc', '⊗'], '{'],
  ['f', '', ['mouseU', '▴'], '}'],
  ['p', '', ['speed', '⎇'],],
  ['b', '', ['PgUp', '⇞']],
  ['[', ['', '[ {'], ['', '☀']],
  ['j', '', ['', ''],],
  ['l', '', ['Home', '⇱'],],
  ['u', '', ['Up', '↑'], ')'],
  ['y', '', ['End', '⇲'], '('],
  ["'", ['', "' \""], ['Volume_Down', '🔉'], ['`', '` ~'], 'F11'],
  ['-', ['', '- _'], ['Volume_Up', '🔊'], ['=', '= +'], 'F12'],
  ['Enter', ['', '⏎']],

  //㊿½⅓¼⅕⅒¾ ²ⁿ³ⅻ∞√∫≡Ω
  //⇉⇇⇊⇈⇒⇐⇑⇓⇨⇦⇩⇧↟↡↠↞⇡⇣◷◴◎⩀◉◂▸▴▾▹◃▵▿▫▪◽◾
  //⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾ ⤿⥁🔍⎈🎡⎇⇥⊞📋⨁⎙
  ['CapsLock', ['LAlt', 'Alt']],
  ['a', '', ['WheelDown', '⇊'], [1, '1 !'], 'F1'],
  ['r', '', ['mouseL', '◂'], [2, '2 @'], 'F2'],
  ['s', '', ['mouseD', '▾'], [3, '3 #'], 'F3'],
  ['t', '', ['mouseR', '▸'], [4, '4 $'], 'F4'],
  ['g', '', ['PgDn', '⇟'],],
  [']', ['', '] }'], ['', '☀']],
  ['m', '', ['AppsKey', '≣'], '*'],
  ['n', '', ['Left', '←'], [7, '7 &'], 'F7'],
  ['e', '', ['Down', '↓'], [8, '8 *'], 'F8'],
  ['i', '', ['Right', '→'], [9, '9 ('], 'F9'],
  ['o', '', ['Enter', '⏎'], [0, '0 )'], 'F10'],
  ['`;', ['', '; :'], ['Media_Play_Pause', '⏯'], ':', '≠'],


  //
  //▶▶↑π▶▶▶√▶→✗©Ⓓ✓📌☠💀
  //º⁈‼⁇≣
  //½₂₃₁ⅠⅡⅢ∭∬∫∮∯∰⋙⋘📱🎵
  //⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾ ⤿⥁🔍⎈⎇⇥⊞📋⇄⨁⎘✂️📑💾
  ['LShift', ['', '⇧']],
  ["SC056", ['LShift', '⇧']],
  ['x', '', ['XButton1', '↩'], ['[', '[ {']],
  ['c', '', ['XButton2', '↪'], [']', '] }']],
  ['d', '', ['Bs', '⌫'], [5, '5 %'], 'F5'],
  ['v', '', ['Del', '⌦'], ['\\', '\\ |']],
  ['z', '', ['PrintScreen', '⎙'], '', ''],
  ['/', ['', '/ ?'], ['Run calc', '📱'], '', ''],
  ['k', '', ['Tab', '⇄'], ['/', '/ ?'], ''],
  ['h', '', ['LButton', '◴'], [6, '6 ^'], 'F6'],
  [',', ['', ', <'], ['MButton', '⩀'], '<', '≤'],
  ['.', ['', '. >'], ['RButton', '◷'], '>', '≥'],
  ["RShift", ['', '⇧'],],

  //
  //⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾ ⤿⥁🔍⎈⎇⇶⇉⇥⊞📋⨁⇐⇒📄
  ["LCtrl", ['', '⊕']],
  ["LWin", ['', '⊞']],
  ["LAlt", ['F23', 'Sym']],
  ["Space", ['', '']],
  ["RAlt", ['F24', 'Ext']],
  ["RWin", ['', '⊞']],
  ["AppsKey", ['Alt', 'Alt']],
  ["RCtrl", ['', '⊕']]
]
export default keys
export { keys, x1, y1, x2, y2 }
