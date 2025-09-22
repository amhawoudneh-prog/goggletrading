import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Goggle Trading PLC - Quality Import, Export & Distribution in Ethiopia",
  description:
    "Leading supplier of agricultural equipment, laboratory supplies, and educational materials in Ethiopia since 2003. Quality products, reliable service, expert support.",
  keywords:
    "Ethiopia, import, export, agricultural equipment, laboratory supplies, educational materials, Addis Ababa, trading company",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light" storageKey="goggle-trading-theme">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
