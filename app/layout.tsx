import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Mustafa Kemal Atatürk'ün Hayatı",
  description: "Kronolojik olarak Mustafa Kemal Atatürk'ün hayatı",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
