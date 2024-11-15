'use client'

import { useEffect, useRef } from 'react'

interface MouseFollowGradientProps {
  className?: string
}

export default function MouseFollowGradient({ className = '' }: MouseFollowGradientProps) {
  const gradientRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const gradient = gradientRef.current

    if (!container || !gradient) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Calculate position in percentages
      const xPercent = (x / rect.width) * 100
      const yPercent = (y / rect.height) * 100

      gradient.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
    }

    const handleMouseLeave = () => {
      gradient.style.background = 'transparent'
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div 
        ref={gradientRef}
        className="absolute inset-0 transition-all duration-200 ease-out rounded-xl"
      />
    </div>
  )
}