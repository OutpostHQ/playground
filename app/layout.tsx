import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "@/styles/globals.css"
import "@/styles/tokens.css"

import { ThemeProvider } from "@/components/providers/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Outpost playground",
  description: "Outpost Ai playground",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
