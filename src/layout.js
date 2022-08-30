function layout(keys, keyboard) {
  keys.forEach(key => {
    const keySpan = document.createElement('span')
    function addSpan(index, className) {
      const kbd = document.createElement('kbd')
      if (className) {
        kbd.setAttribute('class', className)
        if (className.includes('shift')) {
          kbd.setAttribute('data-shift', key[index][1].split(' ')[1])
        }
      }
      kbd.appendChild(
        document.createTextNode(
          Array.isArray(key[index]) ? (
            className.includes('shift') ?
              key[index][1].split(' ')[0] : key[index][1]
          ) : (
            typeof key[index] != 'number' && key[index].includes('`') && key[index].length > 1 ?
              key[index].replace('`', '') : key[index]
          )
        )
      )
      keySpan.appendChild(kbd)
    }

    if (key[0] == 'Bs' || key[0] == 'Enter' || key[0] == 'RShift' || key[0] == 'LShift' || key[0] == 'SC056' || key[0] == 'LCtrl' || key[0] == 'RCtrl' || key[0] == 'AppsKey' || key[0] == 'LWin' || key[0] == 'RWin' || key[0] == 'CapsLock' || key[0] == 'Tab' || key[0] == 'LAlt' || key[0] == 'RAlt' || key[0] == 'Space') {
      addSpan(1, 'modifier')
    } else if (Array.isArray(key[1]) && key[1][1].includes(' ')) {
      addSpan(1, 'key shift')
    } else if (!key[1]) {
      addSpan(0, 'key')
    } else {
      addSpan(1, 'key')
    }
    if (key[2]) {
      addSpan(2, 'extend')
    }

    if (Array.isArray(key[3])) {
      addSpan(3, 'symbol shift')
    } else if (key[3] || key[3] == 0) {
      addSpan(3, 'symbol')
    }

    if (key[4] && key[4].startsWith('F')) {
      addSpan(4, 'symbol2 f')
    } else if (key[4]) {
      addSpan(4, 'symbol2')
    }
    keyboard.appendChild(keySpan)
  })
}
export default layout