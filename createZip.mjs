import JsZip from 'jszip'
import fs from 'node:fs'
import { get } from 'node:https'

const zip = new JsZip(),
  output = './ahk/UniParse.zip',
  [ahk, exe] = [
    './ahk/UniParse.ahk',
    './ahk/UniParse.exe'
  ]

zip
  .file(
    'UniParse.ahk',      //output in same /data_path
    fs.readFileSync(ahk) //data
  )
  .file(
    'UniParse.exe',
    fs.readFileSync(exe)
  )
  .generateAsync({ type: "base64" })
  .then(data =>
    fs.writeFile(
      output, data, 'base64',
      err => {
        if (err) throw err
        else console.log(`${ahk} ${getSize(ahk)}
${exe} ${getSize(exe)}
${output} ${getSize(output)}`)
      }
    )
  )

//extra for console.log('size')
function getSize(file) {
  return formatBytes(fs.statSync(file).size)
}
function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return '0 Bytes'

  const k = 1024,
    dm = decimals < 0 ? 0 : decimals,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],

    i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}