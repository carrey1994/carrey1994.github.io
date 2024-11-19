'use client'

import { MOCK_ARTICLES } from '../data/mockData'
import MouseFollowGradient from './MouseFollowGradient'

interface TagListProps {
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export default function TagList({ selectedTag, onTagSelect }: TagListProps) {
  const tagCounts = MOCK_ARTICLES.reduce((acc, article) => {
    article.tags.forEach(tag => {
      acc[tag.name] = (acc[tag.name] || 0) + 1
    })
    return acc
  }, {} as Record<string, number>)

  const sortedTags = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)

  return (
    <div className="glass-effect rounded-lg p-5 mt-4 relative group">
      <MouseFollowGradient className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/98 to-black/95 rounded-lg" />
      
      <div className="relative z-10">
        <h3 className="text-sm font-medium mb-4 uppercase tracking-wider text-blue-400/70">Topics</h3>
        <div className="flex flex-wrap gap-2.5">
          {sortedTags.map(([tag, count]) => (
            <button 
              key={tag}
              onClick={() => onTagSelect(selectedTag === tag ? null : tag)}
              className={`px-3.5 py-[6px] rounded-full text-[13px] font-medium leading-relaxed
                transition-all duration-200 ease-out cursor-pointer group/tag
                backdrop-blur-sm hover:-translate-y-0.5 ring-1
                active:translate-y-0 active:scale-95 hover:shadow-[0_0_10px_rgba(59,130,246,0.1)]
                ${selectedTag === tag 
                  ? 'bg-black/95 text-blue-300 -translate-y-0.5 ring-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.1)]' 
                  : 'bg-black/80 text-blue-400 hover:bg-black/90 ring-blue-500/10 hover:ring-blue-500/20'
                }`}
            >
              <span className="group-hover/tag:text-blue-300 transition-colors duration-200">{tag}</span>
              <span className={`ml-1.5 text-[11px] inline-block opacity-70 group-hover/tag:opacity-90 transition-opacity duration-200 ${
                selectedTag === tag ? 'text-blue-300 opacity-90' : 'text-blue-400'
              }`}>({count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blue-500/10 rounded-tl-lg" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue-500/10 rounded-br-lg" />
    </div>
  )
}
