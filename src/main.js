const pre = document.createElement('pre')
document.body.appendChild(pre)
const remap = {
  keys: {
    // 'old': ['new', '!', '<!>!', '<!', '>!', { '<^<!': ['^',3], '<!>!': ['!',4], '+>!': ['+',4] }],
    '`': ['`', '', ''],
    1: ['!', '', '', 'Media_Prev', '?', { '+': '{?}' }],
    2: ['[', 'Media_Next', ''],
    3: [']', 'Media_Play_Pause', ''],
    4: ['"', 'Volume_Mute', ''],
    5: ['{', '→', '', '', '', { '+': '→' }],
    6: ['}', '←', '', '', '', { '+': '←' }],
    7: ['CapsLock', '★', '', '', '', { '+': '★' }],
    8: ['*', '', '', '*', '▶', { '+': '▶' }],
    9: ['/', '', '', '/', '►', { '+': '►' }],
    0: ["'", '▬', '', '', '', { '+': '▬' }],
    '-': [')', '•', '', '', '', { '+': '•' }],
    '=': ['(', '', '', '›', 'PgUp', { '+': '›' }],
    'Bs': ['\\', '»', '', '', '', { '+': '»' }],


    q: ['', '@', 'F12'],
    w: ['', '#', 'π'],
    e: ['f', '$', '⁰'],
    r: ['p', '<', '≤'],
    t: ['b', '>', '≥'],
    y: ['Enter'],
    u: ['j', '+', '±'],
    i: ['l', '', '', 7, 'Home', { '<^<!': '^7' }],
    o: ['u', '', '', 8, 'Up', {
      '<^<!': '^8',
      '<!>!': '!{Up}',
      // '<+<!>!': '+!{Up}',
      '+>!': '+{Up}',
      '<#>!': '#{Up}',
      '<^<!>!': '^!{Up}',
    }],
    p: ['y', '', '', 9, 'End', { '<^<!': '^9' }],
    '[': [':', '=', '≠', '', ''],
    ']': ['`;', '', '≈', '`;', 'PgDn'],
    'Enter': ['Bs'],


    'CapsLock': ['LShift'],
    a: ['', 'Bs', 'Browser_Back', '', '', {
      '>#': 'Bs',
      // '>+>!': 'Bs'
    }],
    s: ['r', 'Esc', 'Browser_Refresh'],
    d: ['s', 'Volume_Down', 'Browser_Search'],
    f: ['t', 'Volume_Up', 'Browser_Forward'],
    g: ['', 'Del', '', '', '', { '+!': '+{Del}' }],
    h: ['=', '≠', '≈'],
    j: ['m', '-', '∞'],
    k: ['n', '', '', 1, 'Left', {
      '<^<!': '^1',
      '<!>!': '!{Left}',
      '+>!': '+{Left}',
      '<#>!': '#{Left}',
    }],
    l: ['e', '', '', 2, 'Down', {
      '<^<!': '^2',
      '<!>!': '!{Down}',
      // '<+<!>!': '+!{Down}',
      '+>!': '+{Down}',
      '<#>!': '#{Down}',
      '<^<!>!': '^!{Down}',
    }],
    '`;': ['i', '', '', 3, 'Right', {
      '<^<!': '^3',
      '<!>!': '!{Right}',
      '+>!': '+{Right}',
      '<#>!': '#{Right}',
    }],
    "'": ['o', '', 'Ø', '0', 'Enter', { '<^<!': '^0' }],
    '\\': ['RShift', '', ''],


    'LShift': ['LCtrl', '', ''],
    'SC056': ['z', '', ''],
    z: ['x', '×', '✗'],
    x: ['c', '``', '©', '', '', { '^!': '^{``}' }],
    c: ['d', '&', 'Ⓓ'],
    v: ['', '|', '✓'],
    b: ['z', '', ''],
    n: ['_', '', '∈'],
    m: ['k', '`%', '㊿'],
    ',': ['h', '', '', 4, '^', { '<^<!': '^4' }],
    '.': [',', '', '', 5, '~', { '<^<!': '^5', '+': ',' }],
    '/': ['.', '', '', 6, '…', { '<^<!': '^6', '+': '.' }],
    'RShift': ['RCtrl'],
    'RCtrl': ['LCtrl', ''],
    'Space': ['', 'Space',],
    'LAlt': ['return'],
    'RAlt': ['return'],
    'RWin': ['return'],
  },
  output: '',
  switch(key) {
    let str = ''
    for (const mode in this.keys[key][5]) {
      if (this.keys[key][5][mode]) {
        str += `\n\t${mode}${key}::SendInput, ${this.keys[key][5][mode]}\n\t\treturn`
      } else {
        str += `\n\t${mode}${key}::BlockInput, on\n\t\treturn`
      }
    }
    return str
  },
  show() {
    for (const key in this.keys) {
      this.output += `${this.keys[key][0] ? `\t${key}::${this.keys[key][0]}\n` : ''}${this.keys[key][1] ? `\t!${key}::SendInput, {${this.keys[key][1]}}\n\t\treturn` : ''}${this.keys[key][2] ? `\n\t<!>!${key}::SendInput, {${this.keys[key][2]}}\n\t\treturn` : ''}${this.keys[key][3] ? `\n\t<!${key}::SendInput, {${this.keys[key][3]}}\n\t\treturn` : ''}${this.keys[key][4] ? `\n\t>!${key}::SendInput, {${this.keys[key][4]}}\n\t\treturn` : ''}${this.keys[key][5] ? this.switch(key) : ''}\n`
    }
    console.log(this.output)
    pre.innerText = this.output
  }
}
remap.show()


// class Shape z
//   name;
//   sides;
//   sideLength;
//   constructor(name, sides, sideLength) {
//     this.name = name
//     this.sides = sides
//     this.sideLength = sideLength
//   }
//   calcPerimeter() {
//     console.log(`${ this.name } outer length = ${ this.sides * this.sideLength } `)
//   }
// }
// const square = new Shape('square', 4, 5)
//  //square.calcPerimeter()
// const triangle = new Shape('triangle', 3, 3)
//  //triangle.calcPerimeter()
// class Square extends Shape {
//   constructor(sideLength) {
//     super('square', 4, sideLength)
//   }
//   calcArea() {
//     console.log(`square area = ${ this.sideLength ** 2
//       }`)
//   }
// }
// const square1 = new Square(5)
// square1.calcPerimeter()
// square1.calcArea()









// class person {
//   constructor(name) { this.name = name }
//   introduceSelf() { console.log(`Hi I'm ${this.name}`) }
// }
// const momen = new person('momen')
// momen.introduceSelf()
// class professor extends person {
//   teaches
//   #privatPro
//   constructor(name, teaches) {
//     super(name)
//     this.teaches = teaches
//     this.#privatPro = 'I\'m private property'
//   }
//   introduceSelf() {
//     console.log(`I'm ${this.name} professor of ${this.teaches}`)
//   }
//   grade(paper) {
//     const grade = Math.floor(Math.random() * (5 - 1) + 1)
//     console.log(grade)
//   }
//   public() { this.#privateMethod() }
//   #privateMethod(){console.log('u call private mehtod');}
// }

// const sara = new professor('sara', 'web development')
// sara.introduceSelf()
// sara.public()
//  // sara.#privateMethod() //error
//  // sara.#privatePro //error





// const templateProto = {
//   protoGreet() { console.log(`hi I'm ${this.name} !!`) }
// }
// function template(name) {
//   const templateName = name
//   this.name = templateName
//   this.greet = () => console.log(`hi I'm ${this.name} !!`)
// }
// template.prototype = templateProto
// template.prototype.constructor = template
// const instance1 = new template('instance1')
// instance1.greet()
// instance1.objGreet = () => console.log(`hi I'm ${instance1.name} !!`)
// instance1.objGreet()
// // instance1.templateGreet() //error templateGreet not a function
// console.log(instance1.templateName)//undefined
// console.log(Object.hasOwn(instance1, 'templateName'))//false
// console.log(Object.hasOwn(instance1, 'name'))//true
// console.log(Object.hasOwn(instance1, 'protoGreet'))//false
// console.log(Object.hasOwn(instance1, 'greet'))//true
// console.log(Object.hasOwn(instance1, 'objGreet'))//true








// const myDate = new Date();
// let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);






// const myPrototype = {
//   one() { console.log(1) }
// }
// const myObj = Object.create(myPrototype)
// myObj.one()
// console.log(myObj)
// console.log(Object.getPrototypeOf(myObj))
// console.log(Object.getPrototypeOf(myObj) === myObj.__proto__)
// console.log(Object.getPrototypeOf(myObj) === myPrototype)
// console.log(Object.prototype === myPrototype.__proto__)
// console.log(myPrototype.prototype)//undefined
// console.log(myPrototype.valueOf)
// console.log(Object.prototype)




/* object basics
function oldSocialMedia(platform, username) {
  return {
    username: username,
    url() {
      console.log(`https://${platform}.com/${this.username}`)
    }
  }
}
const oldGithub = oldSocialMedia('github', 'TheUniParse')
const oldTwitter = oldSocialMedia('twitter', 'UniParse')
//oldGithub.url()
//oldTwitter.url()


function socialMedia(platform, username) {
  this.username = username
  this.url = () => {
    console.log(`https://${platform}.com/${this.username}`)
  }
}
const github = new socialMedia('github', 'TheUniParse')
const twitter = new socialMedia('twitter', 'UniParse')
github.url()
twitter.url()
*/




/*
const person = {
  name: { first: 'Bob', last: 'Smith' },
  age: 32,
  bio() {
    console.log(`${this.name.first} ${this['name']['last']} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name.first}.`);
  }
};

//console.log(person['name']['first'])
//person.bio()
//person.introduceSelf()

person.name.first = 'update property'
// console.log(person['name']['first'])
person.bio = () => console.log('update method')
// person['bio']()

//person.name.new = 'setting new property'
//console.log(person['name']['new'])

const myDataName = 'height'
const myDataValue = '1.75m'
person[myDataName] = myDataValue
//console.log(person[myDataName])
*/










// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function randomRgb() {
//   return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
// }

// const container = document.querySelector('#container');

// container.addEventListener('click', e => {
//   e.target.style.backgroundColor = randomRgb()
//   //e.currentTarget.style.backgroundColor = randomRgb()
// });








/*
 * source 1: https://dom.spec.whatwg.org/#dom-event-eventphase
 * source 2: https://stackoverflow.com/a/4616720/15266715
// */
// const evtPhasestr = ["NONE: ", "CAPTURING_PHASE: ", "AT_TARGET: ", "BUBBLING_PHASE: "];
// const logElement = document.querySelector('section#log');

// function log(msg) {
//   logElement.innerHTML += (`<p>${msg}</p>`);
// }

// function phase(evt) {
//   evt.stopPropagation();
//   log(evtPhasestr[evt.eventPhase] + this.firstChild.nodeValue.trim());
// }
// function gphase(evt) {
//   log(evtPhasestr[evt.eventPhase] + evt.currentTarget.toString().slice(8, -1));
// }

// function clearOutput(evt) {
//   evt.stopPropagation();
//   logElement.innerHTML = '';
// }

// const divs = document.getElementsByTagName('div');
// for (const div of divs) {
//   // div.addEventListener('click', phase, true);
//   div.addEventListener('click', phase);
// }

// // document.addEventListener('click', gphase, true);
// document.addEventListener('click', gphase);
// // window.addEventListener('click', gphase, true);
// window.addEventListener('click', gphase);

// const clearButton = document.getElementById('clear');
// clearButton.addEventListener('click', clearOutput);














/*
import './style.scss'
import { width, height, format, density, isProgressive, src } from './assets/gaara.png?webp&meta'//meta required!!
import srcset from './assets/gaara.png?w=320;375;425;width&format=avif;webp&srcset'
//console.log(srcset);
const gaara = document.querySelector('#gaara')
gaara.src = src
gaara.srcset = srcset
gaara.sizes = `(max-width:375px) 100vw, (max-width:${width / .7}px) 70vw, ${width}px`
//...........event listener...........
function random(max) {
  return Math.floor(Math.random() * (max + 1))
}
function randomRgb(max = 255) {
  return `rgb(${random(max)},${random(max)},${random(max)})`
}
function randomHsl(saturate = 100, lightness = 50) {
  return `hsl(${random(360)},${saturate}%,${lightness}%)`
}
function randomBg() {
  document.body.style.backgroundColor = randomHsl(100, 18)
}

gaara.addEventListener('wheel', randomBg)
gaara.removeEventListener('wheel', randomBg)

const controller = new AbortController()
gaara.addEventListener('mousemove', randomBg,
  { signal: controller.signal })
gaara.addEventListener('click', randomBg,
  { signal: controller.signal })
gaara.addEventListener('dblclick', () => controller.abort())



//alert('done')
//...........loop....................
const loop = {
  for: () => {
    for (let i = 1; i <= 10; i++) {
      if (i == 2) { continue } //skip alert(`alert ${2}`)
      alert(`alert ${i}`)
      if (i == 5) { break } //stop loop entirely
    }
  },
  while: () => {
    let access = prompt('Enter password')
    while (access != 'access') {
      if (access == 'fuck') {
        access = prompt('Enter valid password or fallback!')
        continue
      }
      alert('⚠️ invalid password!!')
      access = prompt('Enter valid password or fallback!')
      if (access == 'fallback') { break }
    }
  },
  doWhile: () => {
    let access = prompt('Enter password')
    do {
      if (access == 'access' || access == 'fallback') { break }
      if (access == 'fuck') {
        access = prompt('Enter valid password or fallback!')
        continue
      }
      alert('⚠️ invalid password!!')
      access = prompt('Enter valid password or fallback!')
    } while (access != 'access');
  }
}
//loop.doWhile()


//alert([1,3,5].map(i=>i*2))
*/