//⎋⇥⇪⇧␣⏎⌦⌫⇱⇲⇟⇞↑↓←→⌧⏵⏸⏯⏮⏭🔈🔊🔇⤾ ⤿⥁🔍

import './sass/main.scss'
// import srcset from './assets/uniparse-layout.png?w=320;375;425;768;1024;width&format=avif;webp&srcset'
const pre = document.createElement('pre'),
  // img = document.createElement('img'),
  btn = document.createElement('button'),
  script = document.createElement('div'),
  keyboard = document.createElement('div'),
  main = document.createElement('main')
// img.srcset = srcset
// img.alt = 'UniParse keyboard layout'
script.id = 'script'
keyboard.id = 'keyboard'
btn.textContent = 'copy'
script.appendChild(btn)
script.appendChild(pre)
// main.appendChild(img)
main.appendChild(keyboard)
main.appendChild(script)
document.body.appendChild(main)
const remap = {
  output: '',
  keys: [
    ['`', '`', '', ''],
    [1, '!', '', '', ['Media_Prev', '⏮'], '?', { '+': '{?}' }],
    [2, '[', ['Media_Next', '⏭'], ''],
    [3, ']', ['Media_Play_Pause', '⏯'], ''],
    [4, '"', ['Volume_Mute', '🔇'], ''],
    [5, '{', '→', '', '', '', { '+': '→' }],
    [6, '}', '←', '', '', '', { '+': '←' }],
    [7, ['CapsLock', '⇪'], '★', '', '', '', { '+': '★' }],
    [8, '*', '', '', '*', '▶', { '+': '▶' }],
    [9, '/', '', '', '/', '►', { '+': '►' }],
    [0, "'", '▬', '', '', '', { '+': '▬' }],
    ['-', ')', '•', '', '', '', { '+': '•' }],
    ['=', '(', '', '', '›', ['PgUp', '⇞'], { '+': '›' },],
    ['Bs', '\\', '»', '', '', '', { '+': '»' }],


    //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬top row
    ['Tab'],
    ['q', '', '@', 'F12'],
    ['w', '', '#', 'π'],
    ['e', 'f', '$', '⁰'],
    ['r', 'p', '<', '≤'],
    ['t', 'b', '>', '≥'],
    ['y', ['Del', '⌦']],
    ['u', 'j', '+', '±'],
    ['i', 'l', '', '', '7', ['Home', '⇱'], { '<^<!': '^7' }],
    ['o', 'u', '', '', '8', ['Up', '↑'], {
      '<^<!': '^8',
      '<^>!': '^{Up}',
      '<!>!': '!{Up}',
      // '<+<!>!': '+!{Up}',
      '+>!': '+{Up}',
      '<#>!': '#{Up}',
      '<^<!>!': '^!{Up}',
    }],
    ['p', 'y', '', '', '9', ['End', '⇲'], { '<^<!': '^9' }],
    ['[', ':', '`;', '≈'],
    [']', '=', '', '≠', '=', ['PgDn', '⇟']],
    ['Enter', ['Bs', '⌫']],


    //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬home row
    ['CapsLock', 'LShift'],
    ['a', '', ['Bs', '⌫'], ['Browser_Back', '⤾'], '', '', {
      '>#': 'Bs',
      // '>+>!': 'Bs'
    }],
    ['s', 'r', ['Esc', '⎋'], ['Browser_Refresh', '⥁'], '', '', ''],
    ['d', 's', ['Volume_Down', '🔈'], ['Browser_Search', '🔍']],
    ['f', 't', ['Volume_Up', '🔊'], ['Browser_Forward', '⤿']],
    ['g', '', ['Del', '⌦'], '', '', '', { '+!': '+{Del}' }],
    ['h', ['Enter', '⏎']],
    ['j', 'm', '-', '∞'],
    ['k', 'n', '', '', '1', ['Left', ''], {
      '<^<!': '^1',
      '<^>!': '^{Left}',
      '<!>!': '!{Left}',
      '+>!': '+{Left}',
      '<#>!': '#{Left}',
    }],
    ['l', 'e', '', '', '2', ['Down', ''], {
      '<^<!': '^2',
      '<^>!': '^{Down}',
      '<!>!': '!{Down}',
      // '<+<!>!': '+!{Down}',
      '+>!': '+{Down}',
      '<#>!': '#{Down}',
      '<^<!>!': '^!{Down}',
    }],
    ['`;', 'i', '', '', '3', ['Right', ''], {
      '<^<!': '^3',
      '<^>!': '^{Right}',
      '<!>!': '!{Right}',
      '+>!': '+{Right}',
      '<#>!': '#{Right}',
    }],
    ["'", 'o', '', 'Ø', '0', ['Enter', '⏎'], { '<^<!': '^0' }],
    ['\\', 'RShift', '', ''],


    //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬below row
    ['LShift', 'LCtrl', '', ''],
    ['SC056', 'LCtrl', '', ''],
    ['z', 'x', '×', '✗'],
    ['x', 'c', '``', '©', '', '', { '^!': '^{``}' }],
    ['c', 'd', '&', 'Ⓓ'],
    ['v', '', '|', '✓'],
    ['b', 'z', '', ''],
    ['n', '_', '', '∈'],
    ['m', 'k', '`%', '㊿'],
    [',', 'h', '', '', '4', '^', { '<^<!': '^4' }],
    ['.', ',', '', '', '5', '~', { '<^<!': '^5', '+': ',' }],
    ['/', '.', '', '', '6', '…', { '<^<!': '^6', '+': '.' }],
    ['RShift', 'RCtrl'],


    //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    ['LCtrl'],
    ['LWin'],
    ['LAlt', 'return'],
    ['Space', '', 'Space'],
    ['RAlt', 'return'],
    ['RWin', 'return'],
    ['AppsKey'],
    ['RCtrl', 'LCtrl', ''],
  ],
  switch(key) {
    let str = ''
    for (const mode in key[6]) {
      if (Object.hasOwnProperty.call(key[6], mode)) {
        if (key[6][mode]) {
          str += `\t${mode}${key[0]}::SendInput, ${key[6][mode]}\n\t\treturn\n`
        } else {
          str += `\t${mode}${key[0]}::BlockInput, on\n\t\treturn\n`
        }
      }
    }
    return str
  },
  show(keys) {
    keys.forEach(key => {
      this.output += `;▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ${key[0]}\n${key[1] ?
        `\t${key[0]}::${((typeof key[1] == 'object') ? key[1][0] : key[1])}\n` : ''}${key[2] ?
          `\t!${key[0]}::SendInput, {${((typeof key[1] == 'object') ? key[1][0] : key[1])}}\n\t\treturn\n` : ''}${key[3] ?
            `\t<!>!${key[0]}::SendInput, {${((typeof key[3] == 'object') ? key[3][0] : key[3])}}\n\t\treturn\n` : ''}${key[4] ?
              `\t<!${key[0]}::SendInput, {${((typeof key[4] == 'object') ? key[4][0] : key[4])}}\n\t\treturn\n` : ''}${key[5] ?
                `\t>!${key[0]}::SendInput, {${((typeof key[5] == 'object') ? key[5][0] : key[5])}}\n\t\treturn\n` : ''}${key[6] ?
                  this.switch(key) : ''}\n`
    })

    //console.log(this.output)
    pre.innerText = this.output
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(this.output)
        .then(() => btn.textContent = 'copied')
    }, { once: true })
  },
}

remap.show(remap.keys)

remap.keys.forEach(key => {
  const keySpan = document.createElement('span')
  function addSpan(index, className) {
    const kbd = document.createElement('kbd')
    if (className) {
      kbd.setAttribute('class', className)
    }
    kbd.appendChild(
      document.createTextNode(
        (typeof key[index] == 'object') ?
          ((key[index][1].includes('`') && key[index].length > 1) ? key[index][1].replare('`', '') : key[index][1])
          : ((key[index].includes('`') && key[index].length > 1) ? key[index].replace('`', '') : key[index])
      )
    )
    keySpan.appendChild(kbd)
  }
  if (!key[1] || key[1] == 'return') {
    addSpan(0, 'key')
  } else {
    addSpan(1, 'key')
  }

  if (key[2]) {
    addSpan(2, 'alt')
  } else if (key[4]) {
    addSpan(4, 'lAlt')
  } else if (key[5]) {
    addSpan(5, 'rAlt')
  }

  if (key[3]) {
    addSpan(3, 'dblAlt')
  }

  keyboard.appendChild(keySpan)
})


