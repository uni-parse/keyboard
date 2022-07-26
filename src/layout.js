function layout(keys, keyboard) {
  keys.forEach(key => {
    const keySpan = document.createElement('span')
    function addSpan(index, className) {
      const kbd = document.createElement('kbd')
      if (className) {
        kbd.setAttribute('class', className)
      }
      kbd.appendChild(
        document.createTextNode(
          (
            typeof key[index] == 'object'
          ) ? (
            (
              key[index][1].includes('`') && key[index][1].length > 1
            ) ? key[index][1].replare('`', '') : key[index][1]
          ) : (
            (
              typeof key[index] != 'number' && key[index].includes('`') && key[index].length > 1
            ) ? key[index].replace('`', '') : key[index]
          )
        )
      )
      keySpan.appendChild(kbd)
    }

    if (key[0] == 'Bs' || key[0] == 'Enter' || key[0] == 'RShift' || key[0] == 'LShift' || key[0] == 'SC056' || key[0] == 'LCtrl' || key[0] == 'RCtrl' || key[0] == 'AppsKey' || key[0] == 'LWin' || key[0] == 'RWin' || key[0] == 'CapsLock' || key[0] == 'Tab' || key[0] == 'LAlt' || key[0] == 'RAlt') {
      addSpan(1, 'modifier')
    } else if (!key[1] || key[1] == 'return') {
      addSpan(0, 'key')
    } else {
      addSpan(1, 'key')
    }
    if (key[2]) {
      addSpan(2, 'extend')
    }
    if (key[3] || key[3] == 0) {
      addSpan(3, 'symbol')
    }
    if (key[4]) {
      addSpan(4, 'symbol2')
    }
    keyboard.appendChild(keySpan)
  })
}
export default layout