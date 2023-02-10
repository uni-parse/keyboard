import keys from "./keys"

const keyboard = document.createElement('div')
export default keyboard

keyboard.id = 'keyboard'

//append Buttons in keyboard
for (let [row, rowKeys] of Object.entries(keys.standardRows)) {
  const rowCtx = document.createElement('div')
  rowCtx.id = `${row}_row`
  rowCtx.className = 'row'

  //append layers in rows ctx
  rowKeys.forEach((key, i) => {
    const btn = document.createElement('button')
    btn.textContent = key
    //💡use .id and .class after fixing doublicate modifiers in getHotKey() in keys.mjs
    btn.className = getValidId(keys.standardHtkRows[row][i])
    if ('⌫ ⇄ ⏎ alt ⇧ ⊞ ⨁ 💲 space ⭐ ≣'.split(' ').includes(key))
      btn.classList.add('modifier')

    rowCtx.append(btn)
  })

  keyboard.append(rowCtx)
}


//helper functions
function getValidId(key) {
  if (+key || key == 0) return `_${key}`
  switch (key) {
    case '`': return 'backtick'
    case '-': return 'hyphon'
    case '=': return 'equal'
    case '/': return 'slash'
    case '\\': return 'backSlash'
    case '[': return 'openBreacket'
    case ']': return 'closeBracket'
    case "'": return 'quate'
    case '`;': return 'semiColon'
    case ',': return 'comma'
    case '.': return 'period'
    default: return key
  }
}