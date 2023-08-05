import { layersByRows } from '@/ahk/layers'

const entries = Object.entries(layersByRows.standard)

export default function Keyboard() {
  return (
    <div>
      {entries.map(([row, keys]) => (
        <Row key={row} keys={keys} />
      ))}
    </div>
  )
}

interface RowCtxType {
  keys: string[]
}

function Row({ keys }: RowCtxType) {
  return (
    <div>
      {keys.map(key => (
        <Key key={key}>{key}</Key>
      ))}
    </div>
  )
}

function Key({ children }: any) {
  return <button type='button'>{children}</button>
}
