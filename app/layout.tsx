import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fire Fighting System Installation | Ramdas G Fabricator",
  description:
    "Specialists in fire fighting system installation. We are authorised for all kinds of fire fighting equipment, fire extinguisher refilling, hydrant systems, sprinkler systems & alarm systems.",
    generator: 'v0.app',
  icons: {
    icon: '/logo-removebg.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <WhatsAppButton />
        {/* <Analytics /> */} 
      </body>
    </html>
  )
}
