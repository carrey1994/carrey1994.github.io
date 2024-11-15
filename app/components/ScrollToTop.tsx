'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full glass-effect backdrop-blur-lg transition-all duration-300 group z-50 ${
        isVisible 
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="relative">
        <span className="block w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors relative z-10">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </span>
        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 rounded-full transition-colors duration-300" />
      </div>
      
      {/* Ripple effect on hover */}
      <div className="absolute inset-0 rounded-full">
        <div className="absolute inset-0 rounded-full bg-blue-400/10 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
      </div>
      
      {/* Border glow */}
      <div className="absolute inset-0 rounded-full border border-blue-500/0 group-hover:border-blue-500/20 transition-colors duration-500" />
    </button>
  )
}