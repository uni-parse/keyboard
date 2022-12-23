import keys from "./keys"
const keyboard = document.createElement('div')

keyboard.id = 'keyboard'
appendButtons(keyboard)

export default keyboard

//helper functions
function appendButtons(ctx) {
  for (const row in keys.standardRows) {
    const rowCtx = document.createElement('div')
    rowCtx.id = row + '_row'
    rowCtx.setAttribute('class', 'row')

    //append layers in rows ctx
    keys.standardRows[row].forEach((key, i) => {
      const btn = document.createElement('button')
      btn.textContent = key
      //💡use .id and .class after fixing doublicate modifiers in getHotKey() in keys.js
      btn.setAttribute('class',
        `${getValidId(keys.standardHtkRows[row][i])}${'⌫ ⇄ ⏎ alt ⇧ ⊞ ⨁ 💲 space ⭐ ≣'.split(' ').includes(key) ? ' modifier' : ''}`
      )

      rowCtx.appendChild(btn)
    })

    ctx.appendChild(rowCtx)
  }
}
function getValidId(key) {
  if (+key || key == 0) return `_${key}`
  switch (key) {
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