import { notFound } from 'next/navigation';
import { fetchArticleById, fetchRelatedArticles } from '@/app/utils/api';
import ClientArticlePage from './ClientArticlePage';

// Helper function to format content
function formatContent(content: string) {
  // First, clean up the content by removing extra whitespace and indentation
  const cleanContent = content
    .split('\n')
    .map(line => line.trim()) // Remove leading/trailing whitespace
    .join('\n')
    .trim(); // Remove leading/trailing newlines

  // Split content by code blocks
  const blocks = [];
  const parts = cleanContent.split('```');

  parts.forEach((part, index) => {
    if (index % 2 === 0) {
      // Text content
      if (part.trim()) {
        blocks.push({
          type: 'text',
          content: part.trim()
        });
      }
    } else {
      // Code block
      const lines = part.split('\n');
      const language = lines[0].trim();
      const code = lines.slice(1).join('\n').trim();
      if (code) {
        blocks.push({
          type: 'code',
          language,
          content: code
        });
      }
    }
  });

  return blocks;
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  try {
    const [article, relatedArticles] = await Promise.all([
      fetchArticleById(resolvedParams.id),
      fetchRelatedArticles(resolvedParams.id)
    ]);

    if (!article) {
      console.error('Article not found:', resolvedParams.id);
      return notFound();
    }

    if (!article.content) {
      console.error('Article has no content:', resolvedParams.id);
      return notFound();
    }

    const formattedContent = formatContent(article.content);
    console.log('Formatted content:', formattedContent);

    return (
      <ClientArticlePage 
        article={article}
        formattedContent={formattedContent}
        relatedArticles={relatedArticles}
      />
    );
  } catch (error) {
    console.error('Error loading article:', resolvedParams.id, error);
    if (error instanceof Error && error.message === 'Article not found') {
      return notFound();
    }
    throw error;
  }
}
