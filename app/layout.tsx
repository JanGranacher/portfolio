import type React from "react"
import "./globals.css"
import { Vollkorn } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const vollkorn = Vollkorn({ subsets: ["latin"] })

export const metadata = {
  title: "Jan Granacher - AI Researcher & Entrepreneur",
  description:
    "Personal website of Jan Granacher, AI researcher and entrepreneur specializing in frontier AI and semiconductor technology.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={vollkorn.className}>
        {children}
      </body>
    </html>
  )
}


import './globals.css'