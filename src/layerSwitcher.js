export default layerSwitcher
import keys from "./keys";

function layerSwitcher(fieldset) {
  fieldset.addEventListener('change', event => {
    for (const row in keys) {
      const buttons = document.querySelectorAll(`#${row}>button`)

      //update layer buttons keys
      let layer = event.target.value //input[type=radio].value
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = keys[row][i][layer]
      }
    }
  })
}