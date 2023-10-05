'use client'

import { type ReactNode } from 'react'

type KeyProps = {
  bgClass: string
  children: ReactNode
}

export default function Key({ bgClass, children }: KeyProps) {
  return (
    <button
      className={`${bgClass} h-[2.5em] rounded-[.5em_.5em_50%_50%/.5em_.5em_.5em_.5em] p-0 text-[white] [border:black_thin_groove] [box-shadow:.2em_.3em_7px_0_#111]`}
      type='button'
      onClick={e =>
        console.log(
          getComputedStyle(e.target as Element).fontSize
        )
      }>
      {children}
    </button>
  )
}
