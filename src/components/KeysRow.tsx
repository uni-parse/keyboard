import styles from '@/components/keyboard.module.scss'
import Key from './Key'

type RowProps = {
  rowName: string
  keys: { [k: string]: string }[]
  // { [k: string]: string }[]
}

export default function KeysRow({ rowName, keys }: RowProps) {
  const rowStyle = styles[`row_${rowName}`]

  return (
    <div
      className={`${rowStyle} grid justify-between gap-[.25em]`}>
      {keys.map((layers, i) => {
        const { standard, bg } = layers
        const key = standard === 'space' ? '' : standard

        return (
          <Key
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            bgClass={styles[bg]}>
            {key}
          </Key>
        )
      })}
    </div>
  )
}
