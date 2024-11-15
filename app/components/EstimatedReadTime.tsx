'use client'

interface EstimatedReadTimeProps {
  content: string
  className?: string
}

export default function EstimatedReadTime({ content, className = '' }: EstimatedReadTimeProps) {
  // Average reading speed (words per minute)
  const WORDS_PER_MINUTE = 200
  
  const getReadingTime = () => {
    const words = content.trim().split(/\s+/).length
    const minutes = Math.ceil(words / WORDS_PER_MINUTE)
    return minutes
  }

  const readingTime = getReadingTime()

  return (
    <div className={`flex items-center gap-2 text-sm ${className}`}>
      <svg 
        className="w-4 h-4 text-blue-400" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
        />
      </svg>
      <span className="text-gray-400">
        {readingTime} min read
      </span>
    </div>
  )
}