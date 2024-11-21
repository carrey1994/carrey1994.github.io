'use client'

import { useEffect, useState } from 'react'
import { fetchTags } from '../utils/api'
import type { Tag } from '../types'
import MouseFollowGradient from './MouseFollowGradient'

interface TagListProps {
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export default function TagList({ selectedTag, onTagSelect }: TagListProps) {
  const [tags, setTags] = useState<Tag[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadTags = async () => {
      try {
        const fetchedTags = await fetchTags()
        setTags(fetchedTags)
      } catch (error) {
        console.error('Failed to fetch tags:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadTags()
  }, [])

  if (isLoading) {
    return (
      <div className="glass-effect rounded-xl p-6">
        <div className="animate-pulse space-y-2">
          <div className="h-6 bg-gray-700 rounded w-1/4 mb-4"></div>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 bg-gray-700 rounded-full w-20"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="glass-effect rounded-xl p-6 relative group overflow-hidden">
      <MouseFollowGradient className="absolute inset-0" />
      
      <div className="relative z-10">
        <h2 className="text-xl font-bold mb-4 animate-text-gradient">Topics</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onTagSelect(null)}
            className={`px-3 py-1 rounded-full text-sm transition-all duration-300 transform hover:-translate-y-0.5
              ${!selectedTag 
                ? 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30' 
                : 'bg-blue-900/20 text-blue-200 hover:bg-blue-800/40'
              }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => onTagSelect(tag.name)}
              className={`px-3 py-1 rounded-full text-sm transition-all duration-300 transform hover:-translate-y-0.5
                ${selectedTag === tag.name
                  ? 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30'
                  : 'bg-blue-900/20 text-blue-200 hover:bg-blue-800/40'
                }`}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-tl-xl transition-colors duration-500" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-br-xl transition-colors duration-500" />
    </div>
  )
}
