'use client'

import { useEffect, useState } from 'react'
import { fetchArticleById } from '../../utils/api'
import type { Article } from '../../types'
import { notFound, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ArticlePage({ params }: { params: { id: string } }) {
  const [article, setArticle] = useState<Article | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const loadArticle = async () => {
      setIsLoading(true)
      setError(null)
      
      try {
        console.log('Fetching article with ID:', params.id)
        const data = await fetchArticleById(params.id)
        console.log('Received article data:', data)
        setArticle(data)
      } catch (error) {
        console.error('Failed to fetch article:', error)
        setError('Failed to load article')
      } finally {
        setIsLoading(false)
      }
    }

    if (params.id) {
      loadArticle()
    }
  }, [params.id])

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="h-8 w-32 bg-gray-700 rounded-full animate-pulse"></div>
        </div>
        <div className="animate-pulse space-y-4">
          <div className="h-12 bg-gray-700 rounded w-3/4"></div>
          <div className="flex gap-2">
            {[1, 2].map((i) => (
              <div key={i} className="h-6 w-20 bg-gray-700 rounded-full"></div>
            ))}
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 bg-gray-700 rounded w-full"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="glass-effect rounded-xl p-8 text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Error</h1>
          <p className="text-gray-300 mb-6">{error}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-full transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </div>
      </div>
    )
  }

  if (!article) {
    return notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 hover:bg-blue-800/30 
            transition-all duration-300 text-blue-200 hover:text-blue-100 transform hover:-translate-y-0.5"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>
      </div>

      <article>
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {article.tags?.map((tag) => (
            <span
              key={tag.id}
              className="bg-blue-900/20 backdrop-blur-sm text-blue-200 px-3 py-1 rounded-full text-sm"
            >
              {tag.name}
            </span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none">
          <pre className="whitespace-pre-wrap text-gray-300">{article.content}</pre>
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
    </div>
  )
}
