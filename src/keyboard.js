export default appendKeys
import keys from "./keys"

function appendKeys(ctx) {
  for (const row in keys.standardRows) {
    const rowCtx = document.createElement('div')
    rowCtx.id = row + '_row'
    rowCtx.setAttribute('class', 'row')

    //append layers in rows ctx
    keys.standardRows[row].forEach((key, i) => {
      const btn = document.createElement('button')
      btn.setAttribute('class', renameToValidId(keys.standardHtkRows[row][i]))

      btn.textContent = key

      rowCtx.appendChild(btn)
    });

    ctx.appendChild(rowCtx)
  }
}
//helper function
function renameToValidId(key) {
  switch (key) {
    case (+key || key == 0 ? key : NaN): return `_${key}`; break
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