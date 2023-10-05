import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UniParrse Keyboard',
  description:
    'uniparse kyboard layout, its an windows app build by AutoHotkey, based on colemak dh wide, with 6 layors',
  icons: {
    icon: '/favicon.ico',
  },
  viewport: 'width=device-width,initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
