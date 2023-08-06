import { ReactNode } from 'react'
import { layersByRows } from '@/ahk/layers'
import styles from '@/components/keyboard.module.scss'

const keysEntries = Object.entries(layersByRows.standard)

export default function Keyboard() {
  return (
    <div>
      {keysEntries.map(([rowName, keys]) => (
        <Row key={rowName} rowName={rowName} keys={keys} />
      ))}
    </div>
  )
}

type RowProps = { rowName: string; keys: string[] }

function Row({ rowName, keys }: RowProps) {
  return (
    <div>
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
    <button className={`${bgClass} text-[white]`} type='button'>
      {children}
    </button>
  )
}
