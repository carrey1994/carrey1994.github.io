import type { Article, ArticleListResponse, Tag } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

// Helper function to transform API data to match our frontend types
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
    updatedAt: apiArticle.updatedAt ? new Date(apiArticle.updatedAt) : undefined
  };
}

export async function fetchArticles(page: number = 1, limit: number = 5): Promise<ArticleListResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/articles?page=${page}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('API Response:', data);

    return {
      articles: (data.articles || []).map(transformArticle),
      total: data.total || 0,
      page: data.page || page,
      limit: data.limit || limit
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      articles: [],
      total: 0,
      page: page,
      limit: limit
    };
  }
}

export async function fetchArticleById(id: string): Promise<Article> {
  const response = await fetch(`${API_BASE_URL}/api/articles/${id}`);
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Article not found');
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  console.log('API Article Response:', data);
  
  return transformArticle(data);
}

export async function fetchArticlesByTag(tag: string, page: number = 1, limit: number = 5): Promise<ArticleListResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/articles?tag=${tag}&page=${page}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('API Tag Response:', data);

    return {
      articles: (data.articles || []).map(transformArticle),
      total: data.total || 0,
      page: data.page || page,
      limit: data.limit || limit
    };
  } catch (error) {
    console.error('Error fetching articles by tag:', error);
    return {
      articles: [],
      total: 0,
      page: page,
      limit: limit
    };
  }
}

export async function fetchTags(): Promise<Tag[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/tags`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('API Tags Response:', data);
    return data.tags || [];
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}
