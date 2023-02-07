export default layout

function layout(keys, keyboard) {
  keys.forEach(key => {
    const keySpan = document.createElement('span')

    if ('Bs Enter RShift LShift SC056 LCtrl RCtrl AppsKey LWin RWin CapsLock Tab LAlt RAlt Space'.split(' ').includes(key[0]))
      addSpan(1, 'modifier')
    else if (Array.isArray(key[1]) && key[1][1].includes(' ')) addSpan(1, 'key shift')
    else if (!key[1]) addSpan(0, 'key')
    else addSpan(1, 'key')

    if (key[2]) addSpan(2, 'extend')

    if (Array.isArray(key[3])) addSpan(3, 'symbol shift')
    else if (key[3] || key[3] == 0) addSpan(3, 'symbol')

    if (key[4]?.startsWith('F')) addSpan(4, 'symbol2 f')
    else if (key[4]) addSpan(4, 'symbol2')

    keyboard.appendChild(keySpan)

    function addSpan(i, className) {
      const kbd = document.createElement('kbd')
      if (className) {
        kbd.setAttribute('class', className)
        if (className.includes('shift')) {
          kbd.setAttribute('data-shift', key[i][1].split(' ')[1])
        }
      }
      kbd.appendChild(
        document.createTextNode(
          Array.isArray(key[i]) ? (
            className.includes('shift') ?
              key[i][1].split(' ')[0] : key[i][1]
          ) : (
            typeof key[i] != 'number' && key[i].includes('`') && key[i].length > 1 ?
              key[i].replace('`', '') : key[i]
          )
        )
      )
      keySpan.appendChild(kbd)
    }
  })
}