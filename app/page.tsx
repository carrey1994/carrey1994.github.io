'use client'

import { useState, useEffect, useRef } from 'react'
import ArticleCard from './components/ArticleCard'
import TagList from './components/TagList'
import ProfileSkeleton from './components/ProfileSkeleton'
import ArticleCardSkeleton from './components/ArticleCardSkeleton'
import Pagination from './components/Pagination'
import { MOCK_PROFILE } from './data/mockData'
import Image from 'next/image'
import MouseFollowGradient from './components/MouseFollowGradient'
import FadeIn from './components/FadeIn'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import TagListSkeleton from './components/TagListSkeleton'
import { fetchArticles, fetchArticlesByTag } from './utils/api'
import type { Article } from './types'

const ITEMS_PER_PAGE = 5 // Set to exactly 5 articles per page

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [profileLoading, setProfileLoading] = useState(true)
  const [tagsLoading, setTagsLoading] = useState(true)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [isFiltering, setIsFiltering] = useState(false)
  const [isTitleTransitioning, setIsTitleTransitioning] = useState(false)
  const [articles, setArticles] = useState<Article[]>([])
  const [totalArticles, setTotalArticles] = useState(0)
  const [totalPages, setTotalPages] = useState(1)  // Add state for totalPages
  const [error, setError] = useState<string | null>(null)
  const articlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadArticles = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = selectedTag 
          ? await fetchArticlesByTag(selectedTag, currentPage, ITEMS_PER_PAGE)
          : await fetchArticles(currentPage, ITEMS_PER_PAGE)
        
        setArticles(response.articles)
        setTotalArticles(response.total)
        // Use totalPages from API response, or calculate if not provided
        setTotalPages(response.totalPages || Math.ceil(response.total / ITEMS_PER_PAGE))
      } catch (error) {
        console.error('Failed to fetch articles:', error)
        setError('Failed to load articles. Please try again later.')
        setArticles([])
        setTotalArticles(0)
      } finally {
        setIsLoading(false)
      }
    }

    loadArticles()
  }, [currentPage, selectedTag])

  useEffect(() => {
    const profileTimer = setTimeout(() => {
      setProfileLoading(false)
    }, 1000)

    const tagsTimer = setTimeout(() => {
      setTagsLoading(false)
    }, 1200)

    return () => {
      clearTimeout(profileTimer)
      clearTimeout(tagsTimer)
    }
  }, [])


  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleTagSelect = (tag: string | null) => {
    setIsFiltering(true)
    setIsTitleTransitioning(true)
    setSelectedTag(tag)
    setCurrentPage(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => {
      setIsFiltering(false)
      setIsTitleTransitioning(false)
    }, 300)
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <div className="glass-effect rounded-xl p-8">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Error</h1>
          <p className="text-gray-300 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-full transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
      {/* Main Content */}
      <div ref={articlesRef} className="lg:col-span-2">
        <FadeIn>
          <div className="flex justify-between items-center mb-3">
            <h1 className={`text-4xl font-bold animate-text-gradient transition-opacity duration-300 ${
              isTitleTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
              {selectedTag ? `Articles about ${selectedTag}` : 'Latest Articles'}
            </h1>
            <p className={`text-gray-400 transition-opacity duration-300 ${
              isTitleTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
              {totalArticles} article{totalArticles !== 1 ? 's' : ''}
            </p>
          </div>
        </FadeIn>
        
        {isLoading ? (
          <div className="space-y-3">
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
              <FadeIn key={`skeleton-${index}`} delay={index * 100}>
                <ArticleCardSkeleton />
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className={`space-y-3 transition-all duration-300 ${
            isFiltering ? 'opacity-50 scale-[0.99]' : 'opacity-100 scale-100'
          }`}>
            {articles.map((article, index) => (
              <FadeIn key={article.id} delay={index * 100}>
                <ArticleCard article={article} />
              </FadeIn>
            ))}
            {articles.length === 0 && !isLoading && (
              <div className="text-center py-8 text-gray-400">
                No articles found{selectedTag ? ` for tag "${selectedTag}"` : ''}.
              </div>
            )}
          </div>
        )}

        {totalArticles > 0 && (
          <FadeIn delay={400}>
            <div className="mt-3">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                itemsPerPage={ITEMS_PER_PAGE}
                totalItems={totalArticles}
              />
            </div>
          </FadeIn>
        )}
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1 space-y-3">
        <FadeIn delay={200}>
          <div className="relative">
            {/* Profile Skeleton */}
            <div className={`absolute inset-0 transition-all duration-300 ease-out ${
              !profileLoading ? 'opacity-0 pointer-events-none transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              <ProfileSkeleton />
            </div>

            {/* Profile Content */}
            <div className={`transition-all duration-300 ease-out ${
              profileLoading ? 'opacity-0 pointer-events-none transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              <div className="glass-effect rounded-xl p-8 sticky top-10 relative group overflow-hidden">
                <MouseFollowGradient className="absolute inset-0" />
                
                <div className="text-center relative z-10">
                  {!imageError ? (
                    <div className="relative w-32 h-32 mx-auto mb-6 group/image">
                      {/* Base gradient background */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/30 to-cyan-900/30 animate-pulse"></div>
                      {/* Interactive gradient overlay */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 group-hover/image:from-blue-500/10 group-hover/image:via-transparent group-hover/image:to-cyan-500/10 transition-all duration-300"></div>
                      {/* Image container */}
                      <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-blue-500/20 transition-all duration-300 group-hover:ring-blue-400/30 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent group-hover:from-blue-950/0 transition-colors duration-300"></div>
                        <Image
                          src={MOCK_PROFILE.avatar}
                          alt={MOCK_PROFILE.name}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          onError={() => setImageError(true)}
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-900/30 to-cyan-900/30 flex items-center justify-center ring-1 ring-blue-500/20 group-hover:ring-blue-400/30 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all duration-300">
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
                  <div className="flex justify-center items-center space-x-4">
                    {[
                      { type: 'github', icon: Github, url: MOCK_PROFILE.socialLinks.github },
                      { type: 'twitter', icon: Twitter, url: MOCK_PROFILE.socialLinks.twitter },
                      { type: 'linkedin', icon: Linkedin, url: MOCK_PROFILE.socialLinks.linkedin },
                      { type: 'email', icon: Mail, url: `mailto:${MOCK_PROFILE.socialLinks.email}` }
                    ].map(({ type, icon: Icon, url }, index) => (
                      url && (
                        <a 
                          key={type}
                          href={url}
                          className="group/link relative p-2 rounded-full hover:bg-blue-900/20 transition-all duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="group-hover/link:icon-hover">
                            <Icon className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-all duration-200 ease-in-out drop-shadow-[0_0_3px_rgba(59,130,246,0.3)]" />
                          </div>
                        </a>
                      )
                    ))}
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-tl-xl transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-br-xl transition-colors duration-500" />
              </div>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={300}>
          <div className="relative">
            {/* Tags Skeleton */}
            <div className={`absolute inset-0 transition-all duration-300 ease-out ${
              !tagsLoading ? 'opacity-0 pointer-events-none transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              <TagListSkeleton />
            </div>

            {/* Actual Tags */}
            <div className={`transition-all duration-300 ease-out ${
              tagsLoading ? 'opacity-0 pointer-events-none transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              <TagList 
                selectedTag={selectedTag} 
                onTagSelect={handleTagSelect}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
