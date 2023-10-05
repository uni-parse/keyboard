import { rowsLayersByKeys } from '@/ahk/layers'
import KeysRow from '@/components/KeysRow'

const rowsEntries = Object.entries(rowsLayersByKeys)

export default function Keyboard() {
  return (
    <div className='grid gap-[.25em] overflow-auto rounded-xl bg-[#fff] p-1 [user-select:none]'>
      {
        // max-w-[24em]
        // [font:clamp(1em,1.5vw,1.25em)_monospace]
      }
      {rowsEntries.map(([rowName, keys]) => (
        <KeysRow key={rowName} rowName={rowName} keys={keys} />
      ))}
    </div>
  )
}
