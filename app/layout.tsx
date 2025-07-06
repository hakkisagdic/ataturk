import type { Metadata } from 'next'
import './globals.css'
import { Barlow } from 'next/font/google'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['100', '400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

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
    <html lang='tr'>
      <body className={barlow.className}>{children}</body>
    </html>
  )
}
