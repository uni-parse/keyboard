import keys from "./keys.mjs";

const legend = document.createElement('legend')
legend.innerText = 'layout switcher'

const fieldset = document.createElement('fieldset')
fieldset.id = 'switcher'
fieldset.appendChild(legend)
fieldset.name = 'layer'

appendRadioBtns('power', 'standard', 'shift', 'ext', 'ext2', 'sym', 'symShift', 'sym2')

export default fieldset
export { fieldset, switcherListener }

function switcherListener() {
  const buttons = document.querySelectorAll(`#keyboard button`);
  fieldset.addEventListener('change', ({ target: { value } }) =>
    buttons.forEach((btn, i) =>
      btn.textContent = keys.get(value)[i]
    )
  )
}

//helper functions
function appendRadioBtns(...switcherLabels) {
  switcherLabels.forEach(layer => {
    const label = document.createElement('label'),
      radio = document.createElement('input')

    radio.setAttribute('type', 'radio')
    radio.id = `radio_${layer}`
    radio.name = 'layer'
    radio.value = layer
    if (layer == 'standard') radio.setAttribute('checked', true)

    label.id = `label_${layer}`
    label.appendChild(radio); label.innerHTML += layer
    fieldset.appendChild(label)
  })
}