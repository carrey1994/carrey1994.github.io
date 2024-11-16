'use client'

import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Get all h2 elements from the article
    const elements = Array.from(document.querySelectorAll('h2'))
      .map((element, index) => ({
        id: `heading-${index}`,
        text: element.textContent || '',
        level: 2,
        element
      }))

    // Add IDs to the headings if they don't have them
    elements.forEach(({ id, element }) => {
      if (!element.id) {
        element.id = id
      }
    })

    setHeadings(elements)

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -80% 0px' }
    )

    elements.forEach(({ element }) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (headings.length === 0) return null

  return (
    <nav className="glass-effect rounded-xl p-6 sticky top-24">
      <h3 className="text-lg font-semibold mb-4 animate-text-gradient">
        Table of Contents
      </h3>
      <ul className="space-y-3">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`text-left w-full group transition-all duration-300 ${
                activeId === heading.id
                  ? 'text-blue-400'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <span className="inline-block w-full px-4 py-1 rounded-lg group-hover:bg-blue-900/20 transition-colors duration-300">
                {heading.text}
                <span className="absolute left-0 w-1 rounded-full transition-all duration-300 bg-blue-500/50 opacity-0 group-hover:opacity-100" 
                      style={{ 
                        height: activeId === heading.id ? '1.75rem' : '0.75rem',
                        transform: `translateY(${activeId === heading.id ? '0.25rem' : '0.5rem'})`
                      }}
                />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}