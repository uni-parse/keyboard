'use client'

/* eslint-disable react/jsx-no-constructed-context-values */

import {
  createContext,
  useState,
  type ReactNode,
  type SetStateAction,
  type Dispatch,
} from 'react'
import KeyDialog from './KeyDialog'

interface Props {
  children: ReactNode
}

interface DialogContextType {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}
export const DialogContext = createContext<
  DialogContextType | undefined
>(undefined)

export default function DialogProvider({ children }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      <KeyDialog open={open} setOpen={setOpen} />
      {children}
    </DialogContext.Provider>
  )
}
