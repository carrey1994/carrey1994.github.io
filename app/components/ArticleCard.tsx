import Link from 'next/link'
import type { Article } from '../types'
import MouseFollowGradient from './MouseFollowGradient'

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="glass-effect card-hover rounded-xl p-6 group relative overflow-hidden">
      {/* Mouse follow gradient effect */}
      <MouseFollowGradient className="absolute inset-0 z-0" />
      
      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-cyan-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <h2 className="text-2xl font-bold mb-3 relative z-10">
        <Link 
          href={`/articles/${article.slug}`} 
          className="relative inline-block animate-text-gradient hover:opacity-90 transition-all duration-300 group/title"
        >
          {article.title}
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover/title:w-full transition-all duration-300" />
        </Link>
      </h2>
      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        {article.tags.map((tag, index) => (
          <span 
            key={tag.id}
            className="bg-blue-900/20 backdrop-blur-sm text-sm px-3 py-1 rounded-full text-blue-200 hover:text-blue-100 hover:bg-blue-800/40 transition-all duration-300 cursor-default transform hover:-translate-y-0.5 relative group/tag"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {tag.name}
            <div className="absolute inset-0 rounded-full bg-blue-400/0 group-hover/tag:bg-blue-400/10 transition-colors duration-300" />
            <div 
              className="absolute inset-0 rounded-full opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                animation: 'pulse 2s infinite'
              }}
            />
          </span>
        ))}
      </div>
      <p className="text-gray-300 mb-6 line-clamp-3 group-hover:text-gray-200 transition-colors relative z-10">
        {article.excerpt}
      </p>
      <div className="flex justify-between items-center relative z-10">
        <Link 
          href={`/articles/${article.slug}`}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group/link relative overflow-hidden px-2 py-1 -ml-2"
        >
          <span className="relative z-10">Read more</span>
          <span className="relative z-10 transform translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200 ml-1">
            →
          </span>
          <div className="absolute inset-0 bg-blue-900/0 group-hover/link:bg-blue-900/20 rounded-lg transition-colors duration-300" />
        </Link>
        <time className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
          {new Date(article.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </time>
      </div>

      {/* Make the entire card clickable */}
      <Link 
        href={`/articles/${article.slug}`}
        className="absolute inset-0 z-0"
        aria-label={`Read more about ${article.title}`}
      />

      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 rounded-xl border border-blue-500/0 group-hover:border-blue-500/20 transition-colors duration-500" />

      {/* Card corner accents */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-tl-xl transition-colors duration-500" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-br-xl transition-colors duration-500" />

      {/* Hover spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-cyan-400/0 group-hover:from-blue-400/3 group-hover:to-cyan-400/3 transition-colors duration-500" />
    </article>
  )
}
