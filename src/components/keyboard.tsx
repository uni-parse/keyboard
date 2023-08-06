import { ReactNode } from 'react'
import { layersByRows } from '@/ahk/layers'
import styles from '@/components/keyboard.module.scss'

const keysEntries = Object.entries(layersByRows.standard)

export default function Keyboard() {
  return (
    <div className='grid gap-1 overflow-auto rounded-xl bg-[#3337] p-1 [font:clamp(1em,1.5vw,1.25em)_monospace] [user-select:none]'>
      {keysEntries.map(([rowName, keys]) => (
        <Row key={rowName} rowName={rowName} keys={keys} />
      ))}
    </div>
  )
}

type RowProps = { rowName: string; keys: string[] }

function Row({ rowName, keys }: RowProps) {
  return (
    <div
      className={`${
        styles[`row_${rowName}`]
      } grid justify-between gap-1`}>
      {keys.map((key, i) => (
        <Key
          key={key}
          bgClass={styles[layersByRows.bg[rowName][i]]}>
          {key}
        </Key>
      ))}
    </div>
  )
}

type KeyProps = {
  bgClass: string
  children: ReactNode
}

function Key({ bgClass, children }: KeyProps) {
  return (
    <button
      className={`${bgClass} h-[2em] rounded-[.5em_.5em_50%_50%/.5em_.5em_.5em_.5em] p-0 text-center text-[white] [border:black_thin_groove] [box-shadow:.2em_.3em_7px_0_#111]`}
      type='button'>
      {children}
    </button>
  )
}
