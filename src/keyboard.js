import { keys } from "./keys"
import { keyboard_backgrounds } from "./keyboard_backgrounds"

export { typeListener, fetchAudios } from './keyboard_listener'
export const keyboard = document.createElement('div')
keyboard.id = 'keyboard'

//append Buttons in keyboard row by row
const rows = [...Object.entries(keys.standardRows)]
const rowsCtxs = rows.map(([row, rowKeys]) => {
  const rowCtx = document.createElement('div')
  rowCtx.id = `${row}_row`
  rowCtx.className = 'row'

  //append buttons keys in row
  const btns = rowKeys.map((key, i) => {
    const btn = document.createElement('button')
    btn.textContent = key
    //💡use .id and .class after fixing doublicate modifiers in getHotKey() in keys.mjs
    btn.className = getValidId(keys.standardHtkRows[row][i])
    if ('⌫ ⇄ ⏎ alt ⇧ ⊞ ⨁ 💲 space ⭐ ≣'.split(' ').includes(key))
      btn.classList.add('modifier')

    return btn
  })
  rowCtx.append(...btns)

  return rowCtx
})
keyboard.append(...rowsCtxs)

keyboard_backgrounds(keyboard)

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