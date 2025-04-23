import type React from "react"
import "./globals.css"
import { Vollkorn } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const vollkorn = Vollkorn({ subsets: ["latin"] })

export const metadata = {
  title: "Jan Granacher",
  description: "Personal website of Jan Granacher.",
  generator: 'v0.dev'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={`${vollkorn.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}


import './globals.css'