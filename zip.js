const JsZip = require('jszip')
const { saveAs } = require('file-saver')
const fs = require('node:fs')

const zip = new JsZip()

fs.readFile(
  './src/UniParse.ahk',
  'utf-8',
  (err, data) => {
    if (err) throw err
    zip.file('UniParse.ahk', data)
  }
)
fs.readFile(
  './src/UniParse.exe',
  'binary',
  (err, data) => {
    if (err) throw err
    //zip.file('UniParse.ahk', data)
  }
)

zip.generateAsync({ type: "base64" })
  //.then(content => saveAs(content, 'output.zip'))
  .then(content => fs.writeFile(
    './src/output.zip',
    content,
    'base64',
    err => {
      if (err) throw err
      console.log(content)
    }
  ))