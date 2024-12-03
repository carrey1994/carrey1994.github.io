import { Profile } from '../types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

const fetchWithConfig = async (url: string, options: RequestInit = {}) => {
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  const response = await fetch(url, defaultOptions);
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} - ${response.statusText}`);
  }
  return response;
};

export const api = {
  // Articles
  async getArticles(page = 1, limit = 10) {
    const response = await fetchWithConfig(`${API_URL}/articles?page=${page}&limit=${limit}`);
    return response.json();
  },

  async getArticlesByTag(tag: string, page = 1, limit = 10) {
    const response = await fetchWithConfig(
      `${API_URL}/tags/${tag}/articles?page=${page}&limit=${limit}`
    );
    return response.json();
  },

  // Tags
  async getAllTags() {
    try {
      const response = await fetch(`${API_URL}/tags`);
      if (!response.ok) {
        throw new Error(`Failed to fetch tags: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching tags:', error);
      return [];
    }
  },

  // Profile (still using mock data as it's not in backend yet)
  async getProfile(): Promise<Profile> {
    // This is still using mock data
    return Promise.resolve({
      name: 'James Wu',
      bio: 'Software engineer passionate about web development and data science. I write about programming, algorithms, and web technologies.',
      avatar: '/tower.jpeg',
      socialLinks: {
        github: 'https://github.com/carrey1994',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        email: 'james.wu@example.com',
      },
    });
  },

  // Comments
  async getComments(articleId: number, page = 1, limit = 10) {
    const response = await fetchWithConfig(
      `${API_URL}/comments/article/${articleId}?page=${page}&limit=${limit}`
    );
    return response.json();
  },

  async addComment(articleId: number, comment: { author: string; email: string; content: string }) {
    const response = await fetchWithConfig(`${API_URL}/comments/article/${articleId}`, {
      method: 'POST',
      body: JSON.stringify(comment),
    });
    return response.json();
  },
};
