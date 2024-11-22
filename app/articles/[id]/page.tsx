import { notFound } from 'next/navigation';
import { fetchArticleById, fetchRelatedArticles } from '@/app/utils/api';
import ClientArticlePage from './ClientArticlePage';

// Helper function to check if a line is a list item
function isListItem(line: string): boolean {
  return line.trim().startsWith('-') || 
         line.trim().startsWith('*') || 
         /^\d+\.\s/.test(line.trim());
}

// Helper function to format content
function formatContent(content: string) {
  // Split content by code blocks
  const blocks = [];
  const parts = content.split('```');

  parts.forEach((part, index) => {
    if (index % 2 === 0) {
      // Text content - split by double newlines to separate blocks
      const textBlocks = part.split('\n\n');
      textBlocks.forEach(block => {
        const lines = block.split('\n');
        
        // Check if this block is a list
        if (lines.some(line => isListItem(line))) {
          // Keep list items together as one block
          blocks.push({
            type: 'text',
            content: lines.join('\n')
          });
        } else {
          // Regular text block
          const trimmedBlock = block.trim();
          if (trimmedBlock) {
            blocks.push({
              type: 'text',
              content: trimmedBlock
            });
          }
        }
      });
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

export default async function ArticlePage({ params }: { params: { id: string } }) {
  try {
    const [article, relatedArticles] = await Promise.all([
      fetchArticleById(params.id),
      fetchRelatedArticles(params.id)
    ]);

    if (!article) {
      return notFound();
    }

    const formattedContent = formatContent(article.content);

    return (
      <ClientArticlePage 
        article={article}
        formattedContent={formattedContent}
        relatedArticles={relatedArticles}
      />
    );
  } catch (error) {
    console.error('Error loading article:', error);
    return notFound();
  }
}
