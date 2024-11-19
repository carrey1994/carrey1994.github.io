import type { Article, Profile } from '../types'

// Helper function to generate dates
const generateDate = (daysAgo: number) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date;
};

export const MOCK_PROFILE: Profile = {
  name: "James Wu",
  bio: "Software engineer passionate about web development and data science. I write about programming, algorithms, and web technologies.",
  avatar: "/avatar.jpg",
  socialLinks: {
    github: "https://github.com/carrey1994",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    email: "james.wu@example.com"
  }
}

// Additional articles for pagination
const additionalArticles: Article[] = Array.from({ length: 25 }, (_, index) => {
  const id = (index + 6).toString();
  const topics = [
    { title: 'TypeScript Advanced Types', tag: 'typescript' },
    { title: 'React State Management', tag: 'react' },
    { title: 'GraphQL Fundamentals', tag: 'graphql' },
    { title: 'Docker for Development', tag: 'docker' },
    { title: 'CSS Grid Mastery', tag: 'css' },
    { title: 'Node.js Best Practices', tag: 'nodejs' },
    { title: 'Vue.js Component Design', tag: 'vue' },
    { title: 'MongoDB Aggregation', tag: 'mongodb' },
    { title: 'AWS Lambda Functions', tag: 'aws' },
    { title: 'Kubernetes Basics', tag: 'kubernetes' }
  ];

  const topicIndex = index % topics.length;
  const partNumber = Math.floor(index / topics.length) + 1;

  return {
    id,
    title: `${topics[topicIndex].title} - Part ${partNumber}`,
    excerpt: `Learn about ${topics[topicIndex].title.toLowerCase()} and best practices. Part ${partNumber} of our comprehensive guide.`,
    content: `
      This is a detailed article about ${topics[topicIndex].title}.

      ## Introduction
      Understanding ${topics[topicIndex].title} is essential for modern development.

      ## Key Concepts
      Let's explore the main concepts and best practices.

      \`\`\`typescript
      // Example code for ${topics[topicIndex].title}
      function example() {
        console.log("Detailed implementation here");
      }
      \`\`\`

      ## Best Practices
      1. Follow established patterns
      2. Write clean code
      3. Test thoroughly

      ## Conclusion
      Keep learning and practicing these concepts.
    `,
    tags: [
      { id: `${10 + topicIndex + 1}`, name: topics[topicIndex].tag },
      { id: `${20 + index % 5}`, name: ['frontend', 'backend', 'devops', 'database', 'cloud'][index % 5] }
    ],
    createdAt: generateDate(10 + index * 2),
    slug: `${topics[topicIndex].title.toLowerCase().replace(/\s+/g, '-')}-part-${partNumber}`
  };
});

// First 5 articles with detailed content
const baseArticles: Article[] = [
  {
    id: '1',
    title: 'Understanding Data Structures',
    excerpt: 'An introduction to fundamental data structures in programming and their practical applications in solving real-world problems.',
    content: `
      Data structures are fundamental building blocks in computer programming that help us organize and manage data efficiently. In this comprehensive guide, we'll explore various data structures and their practical applications.

      ## Arrays and Lists
      Arrays are the simplest and most widely used data structures...
      \`\`\`typescript
      const numbers: number[] = [1, 2, 3, 4, 5];
      console.log(numbers[0]); // Access first element: 1
      numbers.push(6); // Add element to end: [1, 2, 3, 4, 5, 6]
      \`\`\`

      Lists, particularly linked lists, offer more flexibility than arrays. They can grow and shrink dynamically, making them ideal for situations where the size of your data structure needs to change frequently.

      ## Trees and Binary Search Trees
      Trees are hierarchical data structures with a root node and child nodes. They're commonly used in file systems, databases, and many algorithms. Binary search trees, in particular, are excellent for maintaining sorted data and performing quick searches.

      Here's an example of a binary search tree implementation:
      \`\`\`typescript
      class TreeNode {
        value: number;
        left: TreeNode | null;
        right: TreeNode | null;

        constructor(value: number) {
          this.value = value;
          this.left = null;
          this.right = null;
        }
      }

      class BinarySearchTree {
        root: TreeNode | null = null;

        insert(value: number) {
          const newNode = new TreeNode(value);
          if (!this.root) {
            this.root = newNode;
            return;
          }
          // Insert logic here
        }
      }
      \`\`\`

      ## Hash Tables
      Hash tables provide extremely fast insertion and lookup operations. They work by mapping keys to array indices using a hash function. This makes them perfect for implementing dictionaries, caches, and symbol tables in compilers.

      Example of using a Map in TypeScript (which is similar to a hash table):
      \`\`\`typescript
      const cache = new Map<string, number>();
      cache.set("one", 1);
      cache.set("two", 2);
      console.log(cache.get("one")); // Output: 1
      \`\`\`

      ## Graphs
      Graphs extend the concept of trees by allowing connections between any nodes. They're essential in social networks, routing algorithms, and representing any kind of networked data.

      Basic graph implementation:
      \`\`\`typescript
      class Graph {
        private adjacencyList: Map<string, string[]>;

        constructor() {
          this.adjacencyList = new Map();
        }

        addVertex(vertex: string) {
          if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
          }
        }

        addEdge(vertex1: string, vertex2: string) {
          this.adjacencyList.get(vertex1)?.push(vertex2);
          this.adjacencyList.get(vertex2)?.push(vertex1);
        }
      }
      \`\`\`

      ## Conclusion
      Choosing the right data structure is crucial for writing efficient programs. Each data structure has its own advantages and use cases:
      - Use arrays for fixed-size collections with frequent access by index
      - Use linked lists for dynamic collections with frequent insertions/deletions
      - Use trees for hierarchical data and maintaining sorted information
      - Use hash tables for key-value pairs with fast lookups
      - Use graphs for representing networks and relationships

      Understanding these fundamentals will help you write better, more efficient code. Remember to consider the specific requirements of your application when choosing a data structure, including:
      - Time complexity requirements
      - Space complexity constraints
      - Type of operations (insertions, deletions, searches)
      - Nature of the data being stored
    `,
    tags: [{ id: '1', name: 'data structures' }, { id: '2', name: 'algorithms' }],
    createdAt: generateDate(0),
    slug: 'understanding-data-structures'
  },
  {
    id: '2',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js, React, and TypeScript.',
    content: `
      Next.js has become one of the most popular frameworks for building modern web applications...

      ## Setting Up Your First Project
      Let's start by creating a new Next.js project with TypeScript:

      \`\`\`bash
      npx create-next-app@latest my-app --typescript
      cd my-app
      npm run dev
      \`\`\`

      ## Project Structure
      A typical Next.js project has a simple but powerful structure:
      \`\`\`typescript
      my-app/
      ├── app/
      │   ├── layout.tsx
      │   ├── page.tsx
      │   └── globals.css
      ├── public/
      │   └── assets/
      ├── components/
      │   └── Button.tsx
      └── package.json
      \`\`\`

      ## Creating Pages
      In Next.js 13+ with App Router, creating pages is straightforward:

      \`\`\`typescript
      // app/page.tsx
      export default function HomePage() {
        return (
          <div>
            <h1>Welcome to Next.js</h1>
            <p>This is your first Next.js page!</p>
          </div>
        )
      }
      \`\`\`

      ## Data Fetching
      Next.js provides powerful data fetching capabilities:

      \`\`\`typescript
      // app/posts/page.tsx
      async function getPosts() {
        const res = await fetch('https://api.example.com/posts')
        return res.json()
      }

      export default async function PostsPage() {
        const posts = await getPosts()
        
        return (
          <div>
            {posts.map(post => (
              <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </article>
            ))}
          </div>
        )
      }
      \`\`\`

      ## Styling in Next.js
      Next.js supports various styling solutions. Here's an example using CSS Modules:

      \`\`\`typescript
      // components/Button.tsx
      import styles from './Button.module.css'

      export default function Button({ children }) {
        return (
          <button className={styles.button}>
            {children}
          </button>
        )
      }
      \`\`\`

      ## API Routes
      You can create API endpoints directly in your Next.js app:

      \`\`\`typescript
      // app/api/hello/route.ts
      import { NextResponse } from 'next/server'

      export async function GET() {
        return NextResponse.json({ message: 'Hello World' })
      }
      \`\`\`

      ## Deployment
      Next.js applications can be easily deployed to various platforms:

      \`\`\`bash
      # Build your application
      npm run build

      # Start production server
      npm start
      \`\`\`

      ## Best Practices
      1. Use TypeScript for better type safety
      2. Implement proper error handling
      3. Optimize images using next/image
      4. Utilize incremental static regeneration when needed
      5. Follow the App Router directory structure conventions

      ## Conclusion
      Next.js provides an excellent foundation for building modern web applications. Its features and developer experience make it a top choice for both small and large projects. Start with the basics and gradually explore more advanced features as your needs grow.
    `,
    tags: [{ id: '3', name: 'nextjs' }, { id: '4', name: 'react' }],
    createdAt: generateDate(2),
    slug: 'getting-started-with-nextjs'
  },
  {
    id: '3',
    title: 'Machine Learning Basics',
    excerpt: 'An overview of machine learning concepts and how to implement basic algorithms.',
    content: `
      Machine learning is transforming the way we solve problems...

      ## Types of Machine Learning
      1. Supervised Learning
      2. Unsupervised Learning
      3. Reinforcement Learning

      Let's implement a simple linear regression example:

      \`\`\`python
      import numpy as np
      from sklearn.linear_model import LinearRegression
      
      # Generate sample data
      X = np.array([[1], [2], [3], [4], [5]])
      y = np.array([2, 4, 6, 8, 10])

      # Create and train the model
      model = LinearRegression()
      model.fit(X, y)

      # Make predictions
      predictions = model.predict([[6]])
      print(predictions)  # Output: [12.]
      \`\`\`

      ## Classification Example
      Here's a basic classification example using scikit-learn:

      \`\`\`python
      from sklearn.datasets import make_classification
      from sklearn.model_selection import train_test_split
      from sklearn.ensemble import RandomForestClassifier

      # Generate sample data
      X, y = make_classification(n_samples=1000, n_features=4)

      # Split data
      X_train, X_test, y_train, y_test = train_test_split(
          X, y, test_size=0.2
      )

      # Train model
      clf = RandomForestClassifier()
      clf.fit(X_train, y_train)

      # Evaluate
      score = clf.score(X_test, y_test)
      print(f"Accuracy: {score:.2f}")
      \`\`\`

      ## Neural Networks
      Basic neural network using TensorFlow:

      \`\`\`python
      import tensorflow as tf

      model = tf.keras.Sequential([
          tf.keras.layers.Dense(64, activation='relu'),
          tf.keras.layers.Dense(32, activation='relu'),
          tf.keras.layers.Dense(1, activation='sigmoid')
      ])

      model.compile(
          optimizer='adam',
          loss='binary_crossentropy',
          metrics=['accuracy']
      )
      \`\`\`

      ## Best Practices
      1. Always split your data into training and test sets
      2. Normalize your input features
      3. Handle missing data appropriately
      4. Use cross-validation
      5. Monitor for overfitting

      ## Conclusion
      Machine learning is a powerful tool when used correctly. Start with simple models and gradually move to more complex ones as you gain experience.
    `,
    tags: [{ id: '5', name: 'machine-learning' }, { id: '6', name: 'python' }],
    createdAt: generateDate(4),
    slug: 'machine-learning-basics'
  },
  {
    id: '4',
    title: 'Clean Code Principles',
    excerpt: 'Best practices for writing maintainable and scalable code.',
    content: `
      Writing clean code is essential for long-term project success...

      ## Naming Conventions
      Good naming is crucial for code readability:

      \`\`\`typescript
      // Bad
      const d = new Date();
      const x = users.find(u => u.n === "John");

      // Good
      const currentDate = new Date();
      const johnUser = users.find(user => user.name === "John");
      \`\`\`

      ## Function Design
      Functions should be small and do one thing well:

      \`\`\`typescript
      // Bad
      function processUserData(user: User) {
        // Validate user
        if (!user.name || !user.email) {
          throw new Error("Invalid user");
        }

        // Update database
        db.users.update(user);

        // Send notification
        sendEmail(user.email);
      }

      // Good
      function validateUser(user: User) {
        if (!user.name || !user.email) {
          throw new Error("Invalid user");
        }
      }

      function updateUserInDatabase(user: User) {
        return db.users.update(user);
      }

      function notifyUser(user: User) {
        return sendEmail(user.email);
      }

      async function processUserData(user: User) {
        validateUser(user);
        await updateUserInDatabase(user);
        await notifyUser(user);
      }
      \`\`\`

      ## SOLID Principles
      1. Single Responsibility Principle
      2. Open/Closed Principle
      3. Liskov Substitution Principle
      4. Interface Segregation Principle
      5. Dependency Inversion Principle

      Example of Single Responsibility Principle:

      \`\`\`typescript
      // Bad
      class User {
        constructor(private name: string, private email: string) {}

        save() {
          // Save to database
        }

        sendEmail() {
          // Send email
        }

        generateReport() {
          // Generate report
        }
      }

      // Good
      class User {
        constructor(private name: string, private email: string) {}

        getName() { return this.name; }
        getEmail() { return this.email; }
      }

      class UserRepository {
        save(user: User) {
          // Save to database
        }
      }

      class UserNotifier {
        sendEmail(user: User) {
          // Send email
        }
      }

      class UserReportGenerator {
        generateReport(user: User) {
          // Generate report
        }
      }
      \`\`\`

      ## Error Handling
      Proper error handling is crucial:

      \`\`\`typescript
      // Bad
      function divide(a: number, b: number) {
        return a / b;
      }

      // Good
      function divide(a: number, b: number) {
        if (b === 0) {
          throw new Error("Division by zero is not allowed");
        }
        return a / b;
      }

      // Even better
      class DivisionError extends Error {
        constructor(message: string) {
          super(message);
          this.name = "DivisionError";
        }
      }

      function divide(a: number, b: number) {
        if (b === 0) {
          throw new DivisionError("Division by zero is not allowed");
        }
        return a / b;
      }
      \`\`\`
    `,
    tags: [{ id: '7', name: 'clean-code' }, { id: '8', name: 'best-practices' }],
    createdAt: generateDate(6),
    slug: 'clean-code-principles'
  },
  {
    id: '5',
    title: 'Web Performance Optimization',
    excerpt: 'Techniques and strategies to improve your website performance.',
    content: `
    Performance is crucial for providing a good user experience...
    - User retention
    - Conversion rates
    - SEO rankings
    - Overall user experience

    ## Core Web Vitals
    Understanding and optimizing Core Web Vitals:

    \`\`\`typescript
    // Example of lazy loading images
    const LazyImage = () => {
      return (
        <img 
          loading="lazy"
          src="large-image.jpg"
          alt="Lazy loaded image"
          onLoad={() => {
            // Update Largest Contentful Paint
            performance.mark('lcp-end');
          }}
        />
      )
    }
    \`\`\`

    ## Code Splitting
    Implement code splitting to reduce bundle size:

    \`\`\`typescript
    // Before
    import { heavyComponent } from './HeavyComponent';

    // After
    const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
      loading: () => <LoadingSpinner />
    });
    \`\`\`

    ## Image Optimization
    Optimize images for better performance:

    \`\`\`typescript
    import Image from 'next/image';

    function OptimizedImage() {
      return (
        <Image
          src="/large-image.jpg"
          alt="Optimized image"
          width={800}
          height={600}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,..."
          priority={false}
        />
      )
    }
    \`\`\`

    ## Caching Strategies
    Implement effective caching:

    \`\`\`typescript
    // Service Worker registration
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
          console.log('SW registered:', registration);
        }).catch(error => {
          console.log('SW registration failed:', error);
        });
      });
    }

    // Cache API usage
    const cache = await caches.open('v1');
    await cache.addAll([
      '/',
      '/styles/main.css',
      '/scripts/app.js'
    ]);
    \`\`\`

    ## Performance Monitoring
    Set up performance monitoring:

    \`\`\`typescript
    // Performance monitoring setup
    export function initPerformanceMonitoring() {
      // Track Core Web Vitals
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          // Report to analytics
          reportToAnalytics({
            metric: entry.name,
            value: entry.value,
            rating: entry.rating
          });
        }
      }).observe({ entryTypes: ['web-vitals'] });
    }
    \`\`\`

    ## Best Practices
    1. Minimize HTTP requests
    2. Enable compression
    3. Use CDN for static assets
    4. Implement progressive loading
    5. Optimize critical rendering path

    ## Tools for Performance Testing
    - Lighthouse
    - WebPageTest
    - Chrome DevTools Performance panel
    - GTmetrix

    ## Conclusion
    Performance optimization is an ongoing process. Regularly monitor your application's performance and make incremental improvements based on real user metrics.
  `,
    tags: [{ id: '9', name: 'performance' }, { id: '10', name: 'web-optimization' }],
    createdAt: generateDate(8),
    slug: 'web-performance-optimization'
  }
];

// Additional articles 31-50
const moreArticles: Article[] = Array.from({ length: 20 }, (_, index) => {
  const id = (index + 31).toString();
  const topics = [
    { title: 'Rust for JavaScript Developers', tag: 'rust' },
    { title: 'WebAssembly Basics', tag: 'wasm' },
    { title: 'Svelte Framework', tag: 'svelte' },
    { title: 'Microservices Architecture', tag: 'microservices' },
    { title: 'Redis Caching Strategies', tag: 'redis' },
    { title: 'gRPC Communication', tag: 'grpc' },
    { title: 'Elasticsearch Tips', tag: 'elasticsearch' },
    { title: 'CI/CD Pipeline', tag: 'cicd' },
    { title: 'System Design', tag: 'system-design' },
    { title: 'Security Best Practices', tag: 'security' }
  ];

  const topicIndex = index % topics.length;
  const partNumber = Math.floor(index / topics.length) + 1;

  return {
    id,
    title: `${topics[topicIndex].title} - Part ${partNumber}`,
    excerpt: `Exploring ${topics[topicIndex].title.toLowerCase()} concepts and implementation details. Part ${partNumber}.`,
    content: `
      Quick guide about ${topics[topicIndex].title}.

      ## Overview
      Basic introduction to ${topics[topicIndex].title}.

      ## Main Points
      - Key concept 1
      - Key concept 2
      - Key concept 3

      ## Example
      \`\`\`typescript
      // Basic example for ${topics[topicIndex].title}
      function demo() {
        console.log("${topics[topicIndex].title} implementation");
      }
      \`\`\`

      ## Summary
      Quick recap of ${topics[topicIndex].title} concepts.
    `,
    tags: [
      { id: `${30 + topicIndex + 1}`, name: topics[topicIndex].tag },
      { id: `${40 + index % 5}`, name: ['architecture', 'tools', 'languages', 'frameworks', 'infrastructure'][index % 5] }
    ],
    createdAt: generateDate(60 + index * 2), // Older dates for these articles
    slug: `${topics[topicIndex].title.toLowerCase().replace(/\s+/g, '-')}-part-${partNumber}`
  };
});

// Combine all articles
export const MOCK_ARTICLES: Article[] = [...baseArticles, ...additionalArticles, ...moreArticles];
