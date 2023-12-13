import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AUOps - Accelerate your digital transformation with cloud DEVOps technology',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative bg-white">
        {children}
      </body>
    </html>
  )
}
