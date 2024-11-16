'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import ScrollProgress from '@/app/components/ScrollProgress'
import TableOfContents from '@/app/components/TableOfContents'
import EstimatedReadTime from '@/app/components/EstimatedReadTime'
import ShareButtons from '@/app/components/ShareButtons'
import FadeIn from '@/app/components/FadeIn'
import CodeBlock from '@/app/components/CodeBlock'
import { Article } from '@/app/types'

interface ClientArticlePageProps {
  article: Article
  formattedContent: Array<{ type: 'text' | 'code'; content: string; language?: string }>
  relatedArticles: Article[]
}

export default function ClientArticlePage({ article, formattedContent, relatedArticles }: ClientArticlePageProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && <ScrollProgress />}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          <FadeIn>
            <article className="glass-effect rounded-xl p-8 relative overflow-hidden group">
              <header className="mb-12 relative">
                <h1 className="text-4xl font-bold mb-6 animate-text-gradient">
                  {article.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span 
                        key={tag.id}
                        className="bg-blue-900/20 backdrop-blur-sm text-sm px-3 py-1 rounded-full text-blue-200 hover:bg-blue-800/30 transition-colors cursor-default"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  {mounted && <EstimatedReadTime content={article.content} />}
                </div>
                <div className="flex items-center justify-between">
                  <time className="text-gray-400 text-sm block">
                    {new Date(article.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  {mounted && <ShareButtons title={article.title} />}
                </div>
                <div className="absolute -bottom-6 left-0 w-24 h-1 bg-gradient-to-r from-blue-500/50 to-cyan-500/50 rounded-full" />
              </header>

              <div className="prose prose-invert prose-lg max-w-none relative space-y-6">
                {formattedContent.map((block, index) => {
                  if (block.type === 'code') {
                    return (
                      <CodeBlock 
                        key={index}
                        code={block.content}
                        language={block.language}
                      />
                    )
                  }

                  if (block.content.trim().startsWith('##')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-12 mb-6 animate-text-gradient relative group/heading">
                        {block.content.replace('##', '').trim()}
                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500/50 opacity-0 group-hover/heading:opacity-100 transition-opacity" />
                      </h2>
                    )
                  }

                  return (
                    <p key={index} className="mb-6 text-gray-300 leading-relaxed hover:text-gray-200 transition-colors">
                      {block.content.trim()}
                    </p>
                  )
                })}
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex justify-between items-center">
              <Link 
                href="/"
                className="glass-effect inline-flex items-center px-6 py-3 rounded-lg hover:bg-blue-900/20 transition-all duration-300 text-gray-300 hover:text-white group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <span className="inline-block group-hover:-translate-x-1 transition-transform duration-200 mr-2">
                    ←
                  </span>
                  Back to articles
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/0 to-cyan-900/0 group-hover:from-blue-900/20 group-hover:to-cyan-900/20 transition-colors duration-300" />
              </Link>

              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="glass-effect p-3 rounded-lg hover:bg-blue-900/20 transition-all duration-300 text-gray-300 hover:text-white group"
              >
                <span className="inline-block group-hover:-translate-y-1 transition-transform duration-200">
                  ↑
                </span>
              </button>
            </div>
          </FadeIn>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <FadeIn delay={400}>
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6 animate-text-gradient">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <Link 
                      key={relatedArticle.id}
                      href={`/articles/${relatedArticle.slug}`}
                      className="glass-effect rounded-xl p-6 group relative overflow-hidden hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-cyan-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <article className="relative">
                        <h4 className="text-lg font-semibold mb-3 text-gray-200 group-hover:text-white transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {relatedArticle.tags.slice(0, 2).map((tag) => (
                            <span 
                              key={tag.id}
                              className="bg-blue-900/20 text-xs px-2 py-1 rounded-full text-blue-200"
                            >
                              {tag.name}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-400 line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <FadeIn delay={300}>
            {mounted && <TableOfContents />}
          </FadeIn>
        </div>
      </div>
    </>
  )
}