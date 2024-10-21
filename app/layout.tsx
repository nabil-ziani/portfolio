import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google"
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: "400" })

export const metadata: Metadata = {
  title: "Nabil's Portfolio",
  description: "A portfolio website for Nabil Ziani.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${calistoga.variable} antialiased bg-gray-900 text-white font-sans`}>
        {children}
      </body>
    </html>
  )
}