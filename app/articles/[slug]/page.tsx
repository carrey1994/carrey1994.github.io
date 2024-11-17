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

// Generate static paths at build time
export function generateStaticParams() {
  return MOCK_ARTICLES.map((article) => ({
    slug: article.slug,
  }))
}

// Get article data
async function getArticleData(slug: string) {
  // Add a small delay to ensure async behavior
  await new Promise(resolve => setTimeout(resolve, 0))
  
  const article = MOCK_ARTICLES.find(article => article.slug === slug)
  if (!article) return null

  return {
    article,
    formattedContent: formatContent(article.content),
    relatedArticles: MOCK_ARTICLES
      .filter(a => 
        a.id !== article.id && 
        a.tags.some(tag => article.tags.some(currentTag => currentTag.id === tag.id))
      )
      .slice(0, 3)
  }
}

// Main page component
export default async function Page(props: { params: Promise<{ slug: string }> }) {
  // Await the params if it is wrapped in a Promise
  const { slug } = await props.params;

  // Fetch the article data using the slug
  const data = await getArticleData(slug);

  // Handle cases where data is not found
  if (!data) {
    notFound();
  }

  // Render the client-side article page
  return (
    <ClientArticlePage
      article={data.article}
      formattedContent={data.formattedContent}
      relatedArticles={data.relatedArticles}
    />
  );
}
