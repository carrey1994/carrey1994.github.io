'use client'

import { useEffect, useState } from 'react'
import { fetchArticleBySlug } from '../../utils/api'
import { formatContent } from '../../utils/markdown'
import type { Article } from '../../types'
import { notFound } from 'next/navigation'
import CodeBlock from '../../components/CodeBlock'
import FadeIn from '../../components/FadeIn'

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<Article | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const data = await fetchArticleBySlug(params.slug)
        setArticle(data)
      } catch (error) {
        console.error('Failed to fetch article:', error)
        notFound()
      } finally {
        setIsLoading(false)
      }
    }

    loadArticle()
  }, [params.slug])

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 animate-pulse">
        <div className="h-12 bg-gray-700 rounded-lg mb-4 w-3/4"></div>
        <div className="flex gap-2 mb-6">
          {[1, 2].map((i) => (
            <div key={i} className="h-6 w-20 bg-gray-700 rounded-full"></div>
          ))}
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 bg-gray-700 rounded w-full"></div>
          ))}
        </div>
      </div>
    )
  }

  if (!article) {
    return notFound()
  }

  const formattedContent = formatContent(article.content)

  return (
    <FadeIn>
      <article className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 animate-text-gradient">
          {article.title}
        </h1>
        
        <div className="flex gap-2 mb-6">
          {article.tags.map((tag) => (
            <span
              key={tag.id}
              className="bg-blue-900/20 backdrop-blur-sm text-blue-200 px-3 py-1 rounded-full text-sm
                hover:text-blue-100 hover:bg-blue-800/40 transition-all duration-300 cursor-default
                transform hover:-translate-y-0.5"
            >
              {tag.name}
            </span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none">
          {formattedContent.map((block, index) => (
            <div key={index} className="mb-4">
              {block.type === 'code' ? (
                <CodeBlock code={block.content} language={block.language || 'typescript'} />
              ) : (
                <p className="text-gray-300">{block.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800">
          <time className="text-sm text-gray-400">
            Published on {new Date(article.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
      </article>
    </FadeIn>
  )
}
