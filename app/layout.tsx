import type React from "react"
import type { Metadata } from "next"
import { Cinzel, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "600", "700"] })
const lora = Lora({ subsets: ["latin"], weight: ["400", "500"] })

export const metadata: Metadata = {
  title: "Merry Christmas ❤️",
  description: "A romantic Christmas gift for you",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
