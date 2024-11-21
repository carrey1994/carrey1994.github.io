'use client';

import { ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import EstimatedReadTime from '../../components/EstimatedReadTime';
import FadeIn from '../../components/FadeIn';
import MDXContent from '../../components/MDXContent';
import ScrollProgress from '../../components/ScrollProgress';
import ShareButtons from '../../components/ShareButtons';
import TableOfContents from '../../components/TableOfContents';
import type { Article } from '../../types';
import { fetchArticleById, fetchRelatedArticles } from '../../utils/api';

export default function ArticlePage({ params }: { params: { id: string } }) {
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingRelated, setIsLoadingRelated] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setIsLoadingRelated(true);
      setError(null);

      try {
        const articleData = await fetchArticleById(params.id);
        setArticle(articleData);
        setIsLoading(false);

        const relatedData = await fetchRelatedArticles(params.id);
        setRelatedArticles(relatedData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Failed to load article');
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr),280px] gap-12 pt-8 max-w-7xl mx-auto">
        <div>
          <div className="glass-effect rounded-xl p-8 animate-pulse space-y-4">
            <div className="h-8 w-32 bg-gray-700 rounded"></div>
            <div className="h-12 bg-gray-700 rounded w-3/4"></div>
            <div className="flex gap-2">
              {[1, 2].map((i) => (
                <div key={i} className="h-6 w-20 bg-gray-700 rounded-full"></div>
              ))}
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-4 bg-gray-700 rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Table of Contents skeleton */}
        <div className="hidden lg:block">
          <div className="sticky top-8">
            <div className="glass-effect rounded-xl p-6 animate-pulse">
              <div className="h-6 w-32 bg-gray-700 rounded mb-4"></div>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-4 bg-gray-700 rounded w-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr),280px] gap-12 pt-8 max-w-7xl mx-auto">
        <div>
          <div className="glass-effect rounded-xl p-8 text-center">
            <h1 className="text-2xl font-bold text-red-400 mb-4">Error</h1>
            <p className="text-gray-300 mb-6">{error}</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-full transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return notFound();
  }

  return (
    <>
      <ScrollProgress />
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr),280px] gap-12 pt-8 max-w-7xl mx-auto">
        {/* Main Content */}
        <div>
          <FadeIn>
            <article className="glass-effect rounded-xl p-8 relative group overflow-hidden">
              <h1 className="text-4xl font-bold mb-6 animate-text-gradient">{article.title}</h1>

              {/* Tags and Read Time */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex flex-wrap gap-2">
                  {article.tags?.map(tag => (
                    <span
                      key={tag.id}
                      className="bg-blue-900/20 backdrop-blur-sm text-blue-200 px-3 py-1 rounded-full text-sm
                        hover:text-blue-100 hover:bg-blue-800/40 transition-all duration-300"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <EstimatedReadTime content={article.content} />
              </div>

              {/* Creation Date and Share Buttons */}
              <div className="flex items-center justify-between text-sm mb-4 text-gray-400">
                <div className="space-y-2">
                  <time>
                    {new Date(article.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  {/* Divider line with gradient */}
                  <div className="flex">
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-blue-400/80 to-transparent 
                      shadow-[0_0_8px_rgba(59,130,246,0.5)] rounded-full"></div>
                  </div>
                </div>
                <ShareButtons title={article.title} />
              </div>

              {/* Article content */}
              <MDXContent content={article.content} />

              {/* Centered shorter divider line with blue gradient and glow */}
              <div className="flex justify-center my-8">
                <div className="w-48 h-px bg-gradient-to-r from-transparent via-blue-800/50 to-transparent 
                  shadow-[0_0_2px_rgba(59,130,246,0.3)]"></div>
              </div>

              <div className="flex justify-between items-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-blue-900/20 hover:bg-blue-800/30 
                    transition-all duration-300 text-blue-200 hover:text-blue-100 text-sm rounded-md
                    hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-x-0.5 backdrop-blur-sm
                    border border-blue-500/20 hover:border-blue-500/30"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Articles
                </Link>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-blue-900/20 hover:bg-blue-800/30 
                    transition-all duration-300 text-blue-200 hover:text-blue-100 text-sm rounded-md
                    hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-0.5 backdrop-blur-sm
                    border border-blue-500/20 hover:border-blue-500/30"
                >
                  Up to Top
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>

              {/* Related Articles */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 animate-text-gradient">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {isLoadingRelated ? (
                    // Loading skeleton for related articles
                    [...Array(2)].map((_, index) => (
                      <div 
                        key={index}
                        className="glass-effect rounded-xl p-6 animate-pulse"
                      >
                        <div className="flex gap-2 mb-3">
                          {[1, 2].map((i) => (
                            <div key={i} className="w-16 h-5 bg-gray-700 rounded-full"></div>
                          ))}
                        </div>
                        <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>
                        <div className="h-4 bg-gray-700 rounded w-24"></div>
                      </div>
                    ))
                  ) : relatedArticles.length > 0 ? (
                    relatedArticles.map(relatedArticle => (
                      <Link 
                        key={relatedArticle.id}
                        href={`/articles/${relatedArticle.id}`}
                        className="group glass-effect rounded-xl p-6 transition-all duration-300 
                          hover:shadow-lg hover:shadow-blue-900/20 border border-blue-500/20 hover:border-blue-500/30"
                      >
                        <div className="flex flex-wrap gap-2 mb-3">
                          {relatedArticle.tags.map(tag => (
                            <span 
                              key={tag.id}
                              className="px-2 py-1 rounded-full bg-blue-900/20 text-xs text-blue-200"
                            >
                              {tag.name}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-blue-200 group-hover:text-blue-100 
                          transition-colors duration-300 line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                          {relatedArticle.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-blue-400 group-hover:text-blue-300">
                          Read article
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))
                  ) : null}
                  </div>
                </div>

              {/* Comments section */}
              {article.comments && article.comments.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <h2 className="text-2xl font-bold mb-4">Comments</h2>
                  <div className="space-y-4">
                    {article.comments.map(comment => (
                      <div key={comment.id} className="glass-effect rounded-lg p-4">
                        <p className="text-gray-300 mb-2">{comment.content}</p>
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>{comment.author}</span>
                          <time>
                            {new Date(comment.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </time>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-tl-xl transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-br-xl transition-colors duration-500" />
            </article>
          </FadeIn>
        </div>

        {/* Table of Contents Sidebar */}
        <div className="hidden lg:block">
          <div className="sticky top-8">
            <TableOfContents content={article.content} />
          </div>
        </div>
      </div>
    </>
  );
}
