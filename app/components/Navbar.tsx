'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import MouseFollowGradient from './MouseFollowGradient'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-[#0a1120]/70 shadow-lg border-b border-blue-900/30' : 'backdrop-blur-md bg-[#0a1120]/50 border-b border-blue-900/30'
    }`}>
      <MouseFollowGradient className="absolute inset-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text hover:from-blue-300 hover:to-cyan-300 transition-all duration-300"
          >
            Blog
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinkBlue href="/">Home</NavLinkBlue>
            <NavLinkBlue href="/about">About</NavLinkBlue>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-md p-2 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-5 bg-gray-300 transform transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`} />
              <span className={`block h-0.5 w-5 bg-gray-300 transform transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block h-0.5 w-5 bg-gray-300 transform transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileLinkBlue href="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </MobileLinkBlue>
            <MobileLink href="/blog" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </MobileLink>
            <MobileLink href="/projects" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </MobileLink>
            <MobileLinkBlue href="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </MobileLinkBlue>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
    </Link>
  )
}

function NavLinkBlue({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-blue-400/80 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
    </Link>
  )
}

function MobileLink({ href, onClick, children }: { 
  href: string; 
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:bg-clip-text hover:bg-white/10 transition-colors"
    >
      {children}
    </Link>
  )
}

function MobileLinkBlue({ href, onClick, children }: { 
  href: string; 
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-base font-medium text-blue-400/80 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:bg-clip-text hover:bg-white/10 transition-colors"
    >
      {children}
    </Link>
  )
}
