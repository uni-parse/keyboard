import { keys } from "./keys.mjs";

export { switcherListener }
export const fieldset = document.createElement('fieldset')
fieldset.id = 'switcher'
fieldset.name = 'layer'

const legend = document.createElement('legend')
legend.innerText = 'layout switcher'
fieldset.append(legend)

const switcherLayers = 'power standard shift ext ext2 sym symShift sym2'
const radioBtns = switcherLayers.split(' ').map(layer => {
  const label = document.createElement('label')
  label.id = `label_${layer}`

  const radio = document.createElement('input')
  radio.type = 'radio'
  radio.id = `radio_${layer}`
  radio.name = 'layer'
  radio.value = layer
  if (layer == 'standard') radio.setAttribute('checked', true)
  label.append(radio, layer)

  return label
})
fieldset.append(...radioBtns)

function switcherListener() {
  const buttons = document.querySelectorAll(`#keyboard button`);
  fieldset.addEventListener('change', e =>
    buttons.forEach((btn, i) =>
      btn.textContent = keys[e.target.value][i]
    )
  )
}