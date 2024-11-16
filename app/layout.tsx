import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'Personal blog and articles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-[#0a1120]`}>
        {/* Animated wave background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,17,32,0.8),rgba(10,17,32,0.8))]" />
          <div className="absolute inset-0 wave-animation opacity-10" />
          <div className="absolute inset-0 wave-animation opacity-10" style={{ animationDelay: '-2s', scale: '0.85' }} />
          <div className="absolute inset-0 wave-animation opacity-10" style={{ animationDelay: '-4s', scale: '1.15' }} />
        </div>

        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>

        <footer className="backdrop-blur-md bg-[#0a1120]/50 border-t border-blue-900/30 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center text-gray-400">
              <p className="text-sm">© {new Date().getFullYear()} My Blog. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <ScrollToTop />
      </body>
    </html>
  )
}
