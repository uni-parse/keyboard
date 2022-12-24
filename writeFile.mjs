import { writeFile } from 'node:fs'
import autohotkeyStr from './src/autohotkey.mjs'

writeFile(
  './src/UniParse.ahk',          //target file
  autohotkeyStr,                 //data
  err => { if (err) throw err }  //error handler
)
