import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Com from '@/components/com/Com'
import 'animate.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Go investment',
  description: 'Start earning with GOI today!!!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Com>
        {children}
        </Com>
        </body>
    </html>
  )
}
