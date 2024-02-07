import DialogProvider from '@/components/DialogProvider'
import Keyboard from '@/components/Keyboard'

export default function Home() {
  return (
    <main>
      <h1 className='text-center'>Home</h1>
      <DialogProvider>
        <Keyboard />
      </DialogProvider>
    </main>
  )
}
