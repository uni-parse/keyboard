import keys from "./keys"
const keyboard = document.createElement('div')
export default keyboard

keyboard.id = 'keyboard'
appendButtons(keyboard)


function appendButtons(ctx) {
  keys.get('standardRows').forEach((rowKeys, row) => {
    const rowCtx = document.createElement('div')
    rowCtx.id = row + '_row'
    rowCtx.setAttribute('class', 'row')

    //append layers in rows ctx
    rowKeys.forEach((key, i) => {
      const btn = document.createElement('button')
      btn.textContent = key
      //💡use .id and .class after fixing doublicate modifiers in getHotKey() in keys.mjs
      btn.setAttribute('class',
        `${getValidId(
          keys.get('standardHtkRows').get(row)[i]
        )}${'⌫ ⇄ ⏎ alt ⇧ ⊞ ⨁ 💲 space ⭐ ≣'
          .split(' ')
          .includes(key) ? ' modifier' : ''}`
      )

      rowCtx.appendChild(btn)
    })

    ctx.appendChild(rowCtx)
  })
}

//helper functions
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
    case '`;': return 'semiColon'; break
    case ',': return 'comma'; break
    case '.': return 'period'; break
    default: return key
  }
}