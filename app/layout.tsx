import "./globals.css";
import { ReactNode } from 'react'
import NavBar from './NavBar/page'
import Footer from './Footer/page'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`text text-2xl font-semibold`}>
      <body className="flex flex-col min-h-screen">
        
        <NavBar />
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
