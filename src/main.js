const pre = document.createElement('pre')
document.body.appendChild(pre)
const remap = {
  keys: {
    // 'old': ['new', '!', '<!>!', '<!', '>!', { '<^<!': ['^',3], '<!>!': ['!',4], '+>!': ['+',4] }],
    '`': ['`', '', ''],
    1: ['!', '', '', 'Media_Prev', '?', { '+': '{?}' }],
    2: ['[', 'Media_Next', ''],
    3: [']', 'Media_Play_Pause', ''],
    4: ['"', 'Volume_Mute', ''],
    5: ['{', '→', '', '', '', { '+': '→' }],
    6: ['}', '←', '', '', '', { '+': '←' }],
    7: ['CapsLock', '★', '', '', '', { '+': '★' }],
    8: ['*', '', '', '*', '▶', { '+': '▶' }],
    9: ['/', '', '', '/', '►', { '+': '►' }],
    0: ["'", '▬', '', '', '', { '+': '▬' }],
    '-': [')', '•', '', '', '', { '+': '•' }],
    '=': ['(', '', '', '›', 'PgUp', { '+': '›' }],
    'Bs': ['\\', '»', '', '', '', { '+': '»' }],


    q: ['', '@', 'F12'],
    w: ['', '#', 'π'],
    e: ['f', '$', '⁰'],
    r: ['p', '<', '≤'],
    t: ['b', '>', '≥'],
    y: ['Bs'],
    u: ['j', '+', '±'],
    i: ['l', '', '', 7, 'Home', { '<^<!': '^7' }],
    o: ['u', '', '', 8, 'Up', {
      '<^<!': '^8',
      '<^>!': '^{Up}',
      '<!>!': '!{Up}',
      // '<+<!>!': '+!{Up}',
      '+>!': '+{Up}',
      '<#>!': '#{Up}',
      '<^<!>!': '^!{Up}',
    }],
    p: ['y', '', '', 9, 'End', { '<^<!': '^9' }],
    '[': [':', '=', '≠', '', ''],
    ']': ['`;', '', '≈', '`;', 'PgDn'],
    'Enter': ['Bs'],


    'CapsLock': ['LShift'],
    a: ['', 'Bs', 'Browser_Back', '', '', {
      '>#': 'Bs',
      // '>+>!': 'Bs'
    }],
    s: ['r', 'Esc', 'Browser_Refresh'],
    d: ['s', 'Volume_Down', 'Browser_Search'],
    f: ['t', 'Volume_Up', 'Browser_Forward'],
    g: ['', 'Del', '', '', '', { '+!': '+{Del}' }],
    h: ['Enter'],
    j: ['m', '-', '∞'],
    k: ['n', '', '', 1, 'Left', {
      '<^<!': '^1',
      '<^>!': '^{Left}',
      '<!>!': '!{Left}',
      '+>!': '+{Left}',
      '<#>!': '#{Left}',
    }],
    l: ['e', '', '', 2, 'Down', {
      '<^<!': '^2',
      '<^>!': '^{Down}',
      '<!>!': '!{Down}',
      // '<+<!>!': '+!{Down}',
      '+>!': '+{Down}',
      '<#>!': '#{Down}',
      '<^<!>!': '^!{Down}',
    }],
    '`;': ['i', '', '', 3, 'Right', {
      '<^<!': '^3',
      '<^>!': '^{Right}',
      '<!>!': '!{Right}',
      '+>!': '+{Right}',
      '<#>!': '#{Right}',
    }],
    "'": ['o', '', 'Ø', '0', 'Enter', { '<^<!': '^0' }],
    '\\': ['RShift', '', ''],


    'LShift': ['LCtrl', '', ''],
    'SC056': ['z', '', ''],
    z: ['x', '×', '✗'],
    x: ['c', '``', '©', '', '', { '^!': '^{``}' }],
    c: ['d', '&', 'Ⓓ'],
    v: ['', '|', '✓'],
    b: ['z', '', ''],
    n: ['_', '', '∈'],
    m: ['k', '`%', '㊿'],
    ',': ['h', '', '', 4, '^', { '<^<!': '^4' }],
    '.': [',', '', '', 5, '~', { '<^<!': '^5', '+': ',' }],
    '/': ['.', '', '', 6, '…', { '<^<!': '^6', '+': '.' }],
    'RShift': ['RCtrl'],
    'RCtrl': ['LCtrl', ''],
    'Space': ['', 'Space',],
    'LAlt': ['return'],
    'RAlt': ['return'],
    'RWin': ['return'],
  },
  output: '',
  switch(key) {
    let str = ''
    for (const mode in this.keys[key][5]) {
      if (this.keys[key][5][mode]) {
        str += `\t${mode}${key}::SendInput, ${this.keys[key][5][mode]}\n\t\treturn\n`
      } else {
        str += `\t${mode}${key}::BlockInput, on\n\t\treturn\n`
      }
    }
    return str
  },
  show() {
    for (const key in this.keys) {
      this.output += `;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ${key}\n${this.keys[key][0] ? `\t${key}::${this.keys[key][0]}\n` : ''}${this.keys[key][1] ? `\t!${key}::SendInput, {${this.keys[key][1]}}\n\t\treturn\n` : ''}${this.keys[key][2] ? `\t<!>!${key}::SendInput, {${this.keys[key][2]}}\n\t\treturn\n` : ''}${this.keys[key][3] ? `\t<!${key}::SendInput, {${this.keys[key][3]}}\n\t\treturn\n` : ''}${this.keys[key][4] ? `\t>!${key}::SendInput, {${this.keys[key][4]}}\n\t\treturn\n` : ''}${this.keys[key][5] ? this.switch(key) : ''}\n`
    }
    console.log(this.output)
    pre.innerText = this.output
  }
}
remap.show()

