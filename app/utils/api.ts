import type { Article, ArticleListResponse, Tag } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

function transformArticle(apiArticle: any): Article {
  return {
    id: apiArticle.id,
    title: apiArticle.title,
    excerpt: apiArticle.excerpt,
    content: apiArticle.content,
    tags: apiArticle.tags || [],
    createdAt: new Date(apiArticle.createdAt),
    published: apiArticle.published ?? true,
    coverImage: apiArticle.coverImage || null,
    updatedAt: apiArticle.updatedAt ? new Date(apiArticle.updatedAt) : undefined,
    comments: apiArticle.comments || []
  };
}

export async function fetchArticles(page: number = 1, limit: number = 5): Promise<ArticleListResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/articles?page=${page}&limit=${limit}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch articles');
    }
    
    const data = await response.json();

    return {
      articles: (data.articles || []).map(transformArticle),
      total: data.meta.total || 0,
      page: data.meta.page || page,
      limit: data.meta.limit || limit
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
}

export async function fetchArticleById(id: string): Promise<Article> {
  const response = await fetch(`${API_BASE_URL}/api/articles/id/${id}`);
  
  if (!response.ok) {
    const errorData = await response.json();
    if (response.status === 404) {
      throw new Error('Article not found');
    }
    if (response.status === 400) {
      throw new Error('Invalid article ID');
    }
    throw new Error(errorData.error || 'Failed to fetch article');
  }
  
  const data = await response.json();
  return transformArticle(data);
}

export async function fetchArticlesByTag(tag: string, page: number = 1, limit: number = 5): Promise<ArticleListResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/articles?tag=${tag}&page=${page}&limit=${limit}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch articles');
    }
    
    const data = await response.json();

    return {
      articles: (data.articles || []).map(transformArticle),
      total: data.meta.total || 0,
      page: data.meta.page || page,
      limit: data.meta.limit || limit
    };
  } catch (error) {
    console.error('Error fetching articles by tag:', error);
    throw error;
  }
}

export async function fetchTags(): Promise<Tag[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/tags`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch tags');
    }
    
    const data = await response.json();
    return data.tags || [];
  } catch (error) {
    console.error('Error fetching tags:', error);
    throw error;
  }
}
