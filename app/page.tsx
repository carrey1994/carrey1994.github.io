'use client'

import { useState, useEffect } from 'react'
import ArticleCard from './components/ArticleCard'
import ArticleCardSkeleton from './components/ArticleCardSkeleton'
import Pagination from './components/Pagination'
import { MOCK_ARTICLES, MOCK_PROFILE } from './data/mockData'
import Image from 'next/image'
import MouseFollowGradient from './components/MouseFollowGradient'
import FadeIn from './components/FadeIn'

const ITEMS_PER_PAGE = 5 // Set to exactly 5 articles per page

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  // Sort articles by date (most recent first)
  const sortedArticles = [...MOCK_ARTICLES].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
  
  const totalPages = Math.ceil(sortedArticles.length / ITEMS_PER_PAGE) // Should be exactly 10 pages
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedArticles = sortedArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handlePageChange = (page: number) => {
    setIsLoading(true)
    setCurrentPage(page)
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // Simulate page loading delay
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-8">
        <FadeIn>
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold animate-text-gradient">
              Latest Articles
            </h1>
            <p className="text-gray-400">
              {sortedArticles.length} articles
            </p>
          </div>
        </FadeIn>
        
        <div className="space-y-8">
          {isLoading ? (
            // Show exactly 5 skeletons
            Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
              <FadeIn key={`skeleton-${index}`} delay={index * 100}>
                <ArticleCardSkeleton />
              </FadeIn>
            ))
          ) : (
            // Show exactly 5 articles
            paginatedArticles.map((article, index) => (
              <FadeIn key={article.id} delay={index * 100}>
                <ArticleCard article={article} />
              </FadeIn>
            ))
          )}
        </div>

        <FadeIn delay={400}>
          <div className="mt-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              itemsPerPage={ITEMS_PER_PAGE}
              totalItems={sortedArticles.length}
            />
          </div>
        </FadeIn>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <FadeIn delay={200}>
          <div className="glass-effect rounded-xl p-8 sticky top-10 relative group">
            {/* Mouse follow gradient effect */}
            <MouseFollowGradient className="absolute inset-0" />
            
            <div className="text-center relative z-10">
              {!imageError ? (
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/30 to-cyan-900/30 animate-pulse"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-blue-500/20 transition-all duration-300 group-hover:ring-blue-400/40">
                    <Image
                      src={MOCK_PROFILE.avatar}
                      alt={MOCK_PROFILE.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={() => setImageError(true)}
                    />
                  </div>
                </div>
              ) : (
                <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-900/30 to-cyan-900/30 flex items-center justify-center ring-2 ring-blue-500/20 group-hover:ring-blue-400/40 transition-all duration-300">
                  <span className="text-4xl font-bold animate-text-gradient">
                    {MOCK_PROFILE.name.charAt(0)}
                  </span>
                </div>
              )}
              <h2 className="text-2xl font-bold mb-3 animate-text-gradient">
                {MOCK_PROFILE.name}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {MOCK_PROFILE.bio}
              </p>
              <div className="flex justify-center space-x-6">
                {Object.entries(MOCK_PROFILE.socialLinks).map(([platform, url]) => (
                  url && (
                    <a 
                      key={platform}
                      href={url}
                      className="group/link relative px-2 py-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="relative z-10 text-gray-400 group-hover/link:text-blue-400 transition-colors duration-300">
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </span>
                      <div className="absolute inset-0 bg-blue-900/0 group-hover/link:bg-blue-900/20 rounded-lg transition-colors duration-300"></div>
                    </a>
                  )
                ))}
              </div>
            </div>

            {/* Subtle border glow on hover */}
            <div className="absolute inset-0 rounded-xl border border-blue-500/0 group-hover:border-blue-500/20 transition-colors duration-500" />
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-tl-xl transition-colors duration-500" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-br-xl transition-colors duration-500" />
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
