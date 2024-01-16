import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import './globals.css'

import { cn } from "../lib/utils"

export const metadata: Metadata = {
  title: 'Hug mental health',
  description: 'Research among a curated set of tools for better mental health resources',
}

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
