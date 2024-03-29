import { writeFile } from 'node:fs'
import { autohotkeyStr } from './src/ahk.mjs'

writeFile(
  './src/assets/UniParse.ahk',   //target file
  autohotkeyStr,                 //data
  err => { if (err) throw err }  //error handler
)