export interface Tag {
  id: string;
  name: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  tags: Tag[];
  createdAt: Date;
  slug: string;
}

export interface Profile {
  name: string;
  bio: string;
  avatar: string;
  socialLinks: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}