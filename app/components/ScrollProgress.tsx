import { throttle } from 'lodash'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = throttle(() => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100
      setProgress(scrolled)
    }, 10) // Update every 50ms (you can adjust this)

    window.addEventListener('scroll', updateProgress)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateProgress)
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
