'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let rafId: number
    
    const updateProgress = () => {
      // Calculate how far the user has scrolled
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx * 100
      
      setProgress(scrolled)
      // Request next frame
      rafId = requestAnimationFrame(updateProgress)
    }

    // Start the animation frame loop
    rafId = requestAnimationFrame(updateProgress)
    
    // Cleanup
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-blue-900/20 z-50">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
