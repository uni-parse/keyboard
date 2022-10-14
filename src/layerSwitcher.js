export default layerSwitcher
import keys from "./keys";

function layerSwitcher(fieldset) {
  fieldset.addEventListener('change', () => {
    let layer = document.querySelector('input[name=layer]:checked').value

    for (const row in keys) {
      const buttons = document.querySelectorAll(`#${row}>button`)
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = keys[row][i][layer]
      }

    }
  })
}