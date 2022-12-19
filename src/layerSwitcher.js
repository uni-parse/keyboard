export default layerSwitcherListener
import { keys, allkeys } from "./keys";
let buttons = []

function layerSwitcherListener(fieldset) {
  fieldset.addEventListener('click', () =>
    buttons = document.querySelectorAll(`#keyboard button`)
    , { once: true })
  fieldset.addEventListener('change', e => {
    const layer = e.target.value
    buttons.forEach((btn, i) =>
      btn.textContent = keys[layer][allkeys][i]
    )
  })
}