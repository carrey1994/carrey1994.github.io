import { notFound } from 'next/navigation';
import { fetchArticleById, fetchRelatedArticles } from '@/app/utils/api';
import ClientArticlePage from './ClientArticlePage';

export default async function ArticlePage({ params }: { params: { id: string } }) {
  try {
    const [article, relatedArticles] = await Promise.all([
      fetchArticleById(params.id),
      fetchRelatedArticles(params.id)
    ]);

    if (!article) {
      return notFound();
    }

    return (
      <ClientArticlePage 
        article={article}
        relatedArticles={relatedArticles}
      />
    );
  } catch (error) {
    console.error('Error loading article:', error);
    return notFound();
  }
}
