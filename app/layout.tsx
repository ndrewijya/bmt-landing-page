import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Roboto } from "next/font/google"

export const metadata: Metadata = {
  title: "BMT Fatihul Barokah",
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${roboto.variable} antialiased`}>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
