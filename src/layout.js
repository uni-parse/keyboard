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
            (key[index][1].includes('`') && key[index][1].length > 1) ? key[index][1].replare('`', '') : key[index][1]
          ) : (
            (key[index].includes('`') && key[index].length > 1) ? key[index].replace('`', '') : key[index]
          )
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
      addSpan(2, 'extend')
    }
    if (key[3]) {
      addSpan(3, 'symbol')
    }
    if (key[4]) {
      addSpan(4, 'symbol2')
    }
    keyboard.appendChild(keySpan)
  })
}
export default layout