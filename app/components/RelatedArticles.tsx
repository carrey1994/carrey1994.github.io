'use client'

import Link from 'next/link'
import type { Article } from '../types'

interface RelatedArticlesProps {
  currentArticle: Article
  articles: Article[]
}

export default function RelatedArticles({ currentArticle, articles }: RelatedArticlesProps) {
  // Get articles with matching tags, excluding the current article
  const relatedArticles = articles
    .filter(article => 
      article.id !== currentArticle.id && 
      article.tags.some(tag => 
        currentArticle.tags.some(currentTag => currentTag.id === tag.id)
      )
    )
    .slice(0, 3) // Show up to 3 related articles

  if (relatedArticles.length === 0) return null

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-6 animate-text-gradient">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <Link 
            key={article.id} 
            href={`/articles/${article.slug}`}
            className="glass-effect rounded-xl p-6 group relative overflow-hidden hover:-translate-y-1 transition-all duration-300"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-cyan-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <article className="relative">
              <h4 className="text-lg font-semibold mb-3 text-gray-200 group-hover:text-white transition-colors line-clamp-2">
                {article.title}
              </h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {article.tags.slice(0, 2).map((tag) => (
                  <span 
                    key={tag.id}
                    className="bg-blue-900/20 text-xs px-2 py-1 rounded-full text-blue-200"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                {article.excerpt}
              </p>
              <span className="text-blue-400 text-sm group-hover:text-blue-300 transition-colors inline-flex items-center">
                Read more
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200 ml-1">
                  →
                </span>
              </span>
            </article>

            {/* Border glow */}
            <div className="absolute inset-0 rounded-xl border border-blue-500/0 group-hover:border-blue-500/20 transition-colors duration-500" />
          </Link>
        ))}
      </div>
    </div>
  )
}