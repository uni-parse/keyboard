export { attachMedia }

import { eventPromise, sleep } from './utilities'

import iconsUrl from './assets/images/mediaIcons.json?url'
import srcsetUniparse from './assets/images/UniParse.jpg?w=66&format=avif;webp&srcset'

let user = {
  name: 'uniparse',
  side: 'right',
  srcset: srcsetUniparse,
  urls: [
    'https://youtube.com/channel/UCvNOch5x46MDaejgQ6SkzUg',
    'https://facebook.com/UniParse',
    'https://instagram.com/UniParse',
    'https://linkedin.com/in/UniParse',
    'https://github.com/TheUniParse',
    'https://twitter.com/UniParse'
  ]
}

async function attachMedia(ctx, delay = 0, mediasDelay = 2500) {
  const address = await getAddress()
  ctx.append(address)

  const img = address.querySelector('img.userMedias')
  await eventPromise(img, 'load')

  await sleep(delay)//fix append & transition issue
  showMedias(mediasDelay)
}

//helpers
async function getAddress() {
  const address = document.createElement('address')
  address.id = 'mediaIcons'

  const icons = await fetchMediaIcons()

  //append ...<a><svg> in <address>
  const anchors = user.urls.map(url => {
    const a = document.createElement('a')
    a.target = '_blank'
    a.href = url

    const mediaName = url.slice(8, url.indexOf('.'))
    const svg_html = icons[mediaName]
    a.innerHTML = svg_html

    //accessibility
    const svg = a.querySelector('svg')
    svg.role = 'img'
    const title = document.createElement('title')
    title.innerText = `${mediaName} of ${user.name}`
    svg.prepend(title)

    return a
  })
  address.append(...anchors)

  //append <img> in <address>
  const img = document.createElement('img')
  img.srcset = user.srcset
  img.alt = user.name
  img.className = 'userMedias'
  address.append(img)

  user = null // trash
  return address
}

async function showMedias(mediasDelay = 2500) {
  const address = document.querySelector('#mediaIcons')

  address.style.transform = 'translateY(-.3rem)' //show up img

  let visible, timerId

  //toggle show/hide svgs on click on img
  const img = address.querySelector('img')
  img.addEventListener('click', transition)

  //hide svgs after delay, if not hover over it.
  address.addEventListener('pointerenter', async () => {
    clearTimeout(timerId)

    await eventPromise(address, 'pointerleave')

    timerId = setTimeout(() => {
      if (visible) transition()
    }, mediasDelay)

  }, { once: false })


  //helpers
  const anchors = [...address.querySelectorAll('a')]
  function transition() {
    anchors.forEach((a, i) => {
      //transition configuration
      const delay = 60 * (visible ? i : anchors.length - i)
      const coordinates = visible
        ? '.3, -1,      1, 1'
        : ' 0,  0,     .7, 2'
      a.style.transition = `transform 200ms ${delay}ms cubic-bezier(${coordinates})`

      //toggle show/hide svgs
      a.style.transform = visible ? '' : 'translateX(0)'
    })

    visible = !visible
  }
}

async function fetchMediaIcons() {
  const response = await fetch(iconsUrl)
  const icons = await response.json()
  return icons
}
