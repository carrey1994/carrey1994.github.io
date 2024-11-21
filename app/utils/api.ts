import type { Article, Tag } from '../types';

// Get the backend URL from environment variable or default to localhost
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

interface ArticleResponse {
  articles: Article[];
  total: number;
}

export async function fetchArticles(page: number = 1, limit: number = 5): Promise<ArticleResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/articles?page=${page}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return {
      articles: data.articles || [],
      total: data.total || 0
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      articles: [],
      total: 0
    };
  }
}

export async function fetchArticleBySlug(slug: string): Promise<Article> {
  const response = await fetch(`${API_BASE_URL}/api/articles/${slug}`);
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Article not found');
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
}

export async function fetchArticlesByTag(tag: string, page: number = 1, limit: number = 5): Promise<ArticleResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/articles?tag=${tag}&page=${page}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return {
      articles: data.articles || [],
      total: data.total || 0
    };
  } catch (error) {
    console.error('Error fetching articles by tag:', error);
    return {
      articles: [],
      total: 0
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
    return data.tags || [];
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}
