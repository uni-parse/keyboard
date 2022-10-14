export default appendKeys
import keys from "./keys"

function appendKeys(ctx) {
  for (const row in keys) {
    const rowCtx = document.createElement('div')
    rowCtx.id = row
    rowCtx.setAttribute('class', 'row')

    //append keys in rows ctx
    keys[row].forEach(key => {
      const btn = document.createElement('button')
      btn.id = renameToValidId(key.standard)
      btn.textContent = key.standard

      rowCtx.appendChild(btn)
    });

    ctx.appendChild(rowCtx)
  }
}

//helper function
function renameToValidId(key) {
  switch (key) {
    case (typeof key == 'number' ? key : undefined): return `_${key}`; break
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