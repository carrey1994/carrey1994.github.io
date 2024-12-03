export interface Tag {
  id: number;
  name: string;
}

export enum AccessLevel {
  Guest = "GUEST",
  MEMBER = "MEMBER",
  PREMIUM = "PREMIUM"
}

export interface Article {
  id: number;
  title: string;
  excerpt: string | null;
  content: string;
  tags: Tag[];
  accessLevel: AccessLevel;
  createdAt: Date;
  published: boolean;
  coverImage?: string | null;
  updatedAt?: Date;
}

export interface ArticleListResponse {
  articles: Article[];
  total: number;
  page: number;
  limit: number;
  totalPages?: number; // Add this to match API response
}

export interface Profile {
  name: string;
  bio: string;
  avatar: string;
  socialLinks: {
    github: string;
    twitter: string;
    linkedin: string;
    email: string;
  };
}
