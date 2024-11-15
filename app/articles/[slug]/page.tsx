import { MOCK_ARTICLES } from '@/app/data/mockData'
import { notFound } from 'next/navigation'
import ClientArticlePage from './ClientArticlePage'

const formatContent = (content: string) => {
  const lines = content.split('\n')
  let inCodeBlock = false
  let currentCodeBlock: string[] = []
  let currentLanguage = ''
  const formattedContent: Array<{ type: 'text' | 'code'; content: string; language?: string }> = []

  lines.forEach(line => {
    const trimmedLine = line.trim()
    
    if (trimmedLine.startsWith('```')) {
      if (inCodeBlock) {
        formattedContent.push({
          type: 'code',
          content: currentCodeBlock.join('\n'),
          language: currentLanguage
        })
        currentCodeBlock = []
        currentLanguage = ''
        inCodeBlock = false
      } else {
        inCodeBlock = true
        currentLanguage = trimmedLine.slice(3).trim() || 'typescript'
      }
    } else if (inCodeBlock) {
      currentCodeBlock.push(line)
    } else if (trimmedLine) {
      formattedContent.push({
        type: 'text',
        content: line
      })
    }
  })

  return formattedContent
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = MOCK_ARTICLES.find(article => article.slug === slug)

  if (!article) {
    notFound()
  }

  const formattedContent = formatContent(article.content)

  // Get related articles based on matching tags
  const relatedArticles = MOCK_ARTICLES
    .filter(a => 
      a.id !== article.id && 
      a.tags.some(tag => article.tags.some(currentTag => currentTag.id === tag.id))
    )
    .slice(0, 3)

  return (
    <ClientArticlePage 
      article={article}
      formattedContent={formattedContent}
      relatedArticles={relatedArticles}
    />
  )
}
