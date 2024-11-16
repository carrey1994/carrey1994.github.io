import type { Article, Profile } from '../types'

export const MOCK_PROFILE: Profile = {
  name: "James Wu",
  bio: "Software engineer passionate about web development and data science. I write about programming, algorithms, and web technologies.",
  avatar: "/avatar.jpg",
  socialLinks: {
    github: "https://github.com/carrey1994",
    twitter: "https://twitter.com/carrey1994",
    linkedin: "https://linkedin.com/in/carrey1994"
  }
}

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Understanding Data Structures',
    excerpt: 'An introduction to fundamental data structures in programming and their practical applications in solving real-world problems.',
    content: `
      Data structures are fundamental building blocks in computer programming that help us organize and manage data efficiently. In this comprehensive guide, we'll explore various data structures and their practical applications.

      ## Arrays and Lists
      Arrays are the simplest and most widely used data structures. They store elements in contiguous memory locations, allowing for constant-time access to elements using their indices. Arrays are perfect for situations where you need quick access to elements and know the size of your data beforehand.

      Lists, particularly linked lists, offer more flexibility than arrays. They can grow and shrink dynamically, making them ideal for situations where the size of your data structure needs to change frequently.

      ## Trees and Graphs
      Trees are hierarchical data structures with a root node and child nodes. They're commonly used in file systems, databases, and many algorithms. Binary search trees, in particular, are excellent for maintaining sorted data and performing quick searches.

      Graphs extend the concept of trees by allowing connections between any nodes. They're essential in social networks, routing algorithms, and representing any kind of networked data.

      ## Hash Tables
      Hash tables provide extremely fast insertion and lookup operations. They work by mapping keys to array indices using a hash function. This makes them perfect for implementing dictionaries, caches, and symbol tables in compilers.

      ## Conclusion
      Choosing the right data structure is crucial for writing efficient programs. Each data structure has its own advantages and use cases. Understanding these fundamentals will help you write better, more efficient code.
    `,
    tags: [{ id: '1', name: 'data structures' }, { id: '2', name: 'algorithms' }],
    createdAt: new Date('2023-11-13'),
    slug: 'understanding-data-structures'
  },
  {
    id: '2',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js, React, and TypeScript.',
    content: `
      Next.js has become one of the most popular frameworks for building modern web applications. Let's explore why it's so powerful and how to get started.

      ## What is Next.js?
      Next.js is a React framework that enables features like server-side rendering and static site generation. It provides a great developer experience with features like fast refresh and automatic routing.

      ## Key Features
      Next.js comes with several powerful features out of the box:
      - Server-side rendering (SSR)
      - Static site generation (SSG)
      - API routes
      - File-system based routing
      - Built-in CSS and Sass support
      - Code splitting and bundling

      ## Getting Started
      To create a new Next.js project, you can use the create-next-app command:
      \`\`\`bash
      npx create-next-app@latest my-app
      cd my-app
      npm run dev
      \`\`\`

      ## Project Structure
      A typical Next.js project has a simple but powerful structure:
      - pages/ - Contains your application's pages
      - public/ - Stores static assets
      - styles/ - Houses your CSS files
      - components/ - Holds your React components

      ## Conclusion
      Next.js provides an excellent foundation for building modern web applications. Its features and developer experience make it a top choice for both small and large projects.
    `,
    tags: [{ id: '3', name: 'nextjs' }, { id: '4', name: 'react' }],
    createdAt: new Date('2023-11-12'),
    slug: 'getting-started-with-nextjs'
  },
  {
    id: '3',
    title: 'Machine Learning Basics',
    excerpt: 'An overview of machine learning concepts and how to implement basic algorithms.',
    content: `Machine learning is transforming the way we solve problems...`,
    tags: [{ id: '5', name: 'ml' }, { id: '1', name: 'data' }],
    createdAt: new Date('2023-11-11'),
    slug: 'machine-learning-basics'
  },
  {
    id: '4',
    title: 'Clean Code Principles',
    excerpt: 'Best practices for writing maintainable and scalable code.',
    content: `Writing clean code is essential for long-term project success...`,
    tags: [{ id: '6', name: 'clean-code' }, { id: '7', name: 'best-practices' }],
    createdAt: new Date('2023-11-10'),
    slug: 'clean-code-principles'
  },
  {
    id: '5',
    title: 'Web Performance Optimization',
    excerpt: 'Techniques and strategies to improve your website performance.',
    content: `Performance is crucial for providing a good user experience...`,
    tags: [{ id: '8', name: 'performance' }, { id: '9', name: 'web' }],
    createdAt: new Date('2023-11-09'),
    slug: 'web-performance-optimization'
  }
]