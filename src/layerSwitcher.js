export default layerSwitcherListener
import keys from "./keys";

function layerSwitcherListener(fieldset) {
  const buttons = document.querySelectorAll(`#keyboard button`);
  fieldset.addEventListener('change', e =>
    buttons.forEach((btn, i) =>
      btn.textContent = keys[e.target.value][i]
    )
  )
}