//⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾ ⤿⥁🔍⎈⎇⇥⊞📋⨁
const keys = [
  ['`', ['', '` ~'], ['Capslock', '⇪'], '⋆'],
  ['1', ['', '1 !'], ['Browser_Search', '🔍'], '▪','⅒'],
  ['2', ['', '2 @'], ['Media_Stop', '◼'], '▸', '½'],
  ['3', ['', '3 #'], ['Media_Prev', '⏮'], '{', '⅓'],
  ['4', ['', '4 $'], ['Media_Next', '⏭'], '}', '¼'],
  ['5', ['', '5 %'], ['', ''], '»','⅕ '],
  ['6', ['', '6 ^'], ['', ''], ['', ' '], ''],
  ['\\', ['', '\\ |', ''], ['', ''], ['', ' '], ''],
  ['7', ['', '7 &'], ['', ''], '›', '¾'],
  ['8', ['', '8 *'], ['^Numpad0', '⊚'], '•', '⁰'],
  ['9', ['', '9 ('], ['^NumpadAdd', '⊕'], '<', '≤'],
  ['0', ['', '0 )'], ['^NumpadSub', '⊝'], '>', '≥'],
  ['=', ['', '= +'], ['Volume_Mute', '🔇'], '⁃'],
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
  ['q', '', ['WheelUp', '⇈'], '@', '💡'],
  ['w', '', ['Esc', '⊗'], '#', '⚠️'],
  ['f', '', ['mouseU', '▴'], '$', '↑'],
  ['p', '', ['speed', '⎇'], '`%', 'π'],
  ['b', '', ['', ''], '~', '≈'],
  ['[', ['', '[ {'], ['', '☀'], '√','∉'],
  ['j', '', ['PgUp', '⇞'], '^', 'F12'],
  ['l', '', ['Home', '⇱'], [7, '7 &'], 'F7'],
  ['u', '', ['Up', '↑'], [8, '8 *'], 'F8'],
  ['y', '', ['End', '⇲'], [9, '9 ('], 'F9'],
  ['\'', ['', '\' "'], ['Volume_Down', '🔉'], ['`', '` ~'], '…'],
  ['-', ['', '- _'], ['Volume_Up', '🔊'], '+', '±'],
  ['Enter', ['', '⏎']],

  //㊿½⅓¼⅕⅒¾ ²ⁿ³ⅻ∞√∫≡Ω
  //⇉⇇⇊⇈⇒⇐⇑⇓⇨⇦⇩⇧↟↡↠↞⇡⇣◷◴◎⩀◉◂▸▴▾▹◃▵▿▫▪◽◾
  //⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾ ⤿⥁🔍⎈🎡⎇⇥⊞📋⨁⎙
  ['LAlt', ['', 'Alt']],
  ['a', '', ['WheelDown', '⇊'], ['/', '/ ?'],'×'],
  ['r', '', ['mouseL', '◂'], '(', '←'],
  ['s', '', ['mouseD', '▾'], ')', '↓'],
  ['t', '', ['mouseR', '▸'], ['=', '= +'], '→'],
  ['g', '', ['AppsKey', '≣'], '!', '≠'],
  [']', ['', '] }'], ['', '✳'], '€','∈'],
  ['m', '', ['PgDn', '⇟'], '*', 'F11'],
  ['n', '', ['Left', '←'], [4, '4 $'], 'F4'],
  ['e', '', ['Down', '↓'], [5, '5 `%'], 'F5'],
  ['i', '', ['Right', '→'], [6, '6 ^'], 'F6'],
  ['o', '', ['Enter', '⏎'], ':', 'Ø'],
  ['`;', ['', '; :'], ['Media_Play_Pause', '⏯'], ['\\', '\\ |'], '∞'],

  //
  //↑π√→✗✓©Ⓓ📌
  //º⁈‼⁇≣
  //½₂₃₁ⅠⅡⅢ∭∬∫∮∯∰⋙⋘📱🎵
  //⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾ ⤿⥁🔍⎈⎇⇥⊞📋⇄⨁⎘✂️📑💾
  ['LShift', ['', '⇧']],
  ['SC056', ['', '⇧']],
  ['x', '', ['XButton1', '↩'], ['[', '[ {'], '✗'],
  ['c', '', ['XButton2', '↪'], [']', '] }'], '㊿'],
  ['d', '', ['Bs', '⌫'], '&', 'Ⓓ'],
  ['v', '', ['Del', '⌦'], '|', '✓'],
  ['z', '', ['PrintScreen', '⎙'], '_','²'],
  ['/', ['', '/ ?'], ['Run calc', '📱'], '?', '÷'],
  ['k', '', ['Tab', '⇄'], [0, '0 )'], 'F10'],
  ['h', '', ['LButton', '◴'], [1, '1 !'], 'F1'],
  [',', ['', ', <'], ['MButton', '⦺'], [2, '2 @'], 'F2'],
  ['.', ['', '. >'], ['RButton', '◷'], [3, '3 #'], 'F3'],
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
export default keys
