import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ScrollToTop from './components/ScrollToTop'

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

        <nav className="backdrop-blur-md bg-[#0a1120]/50 border-b border-blue-900/30 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text hover:from-blue-300 hover:to-cyan-300 transition-all">
                Blog
              </a>
              <div className="space-x-8">
                <a href="/" className="text-gray-300 hover:text-blue-400 transition-colors relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>

        <footer className="backdrop-blur-md bg-[#0a1120]/50 border-t border-blue-900/30 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center text-gray-400">
              <p className="mb-2">© {new Date().getFullYear()} My Blog. All rights reserved.</p>
              <p className="text-sm">
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </footer>

        <ScrollToTop />
      </body>
    </html>
  )
}
