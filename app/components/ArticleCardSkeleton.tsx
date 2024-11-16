export default function ArticleCardSkeleton() {
  return (
    <article className="glass-effect rounded-xl p-6 relative overflow-hidden">
      {/* Title skeleton */}
      <div className="h-8 w-3/4 bg-blue-900/20 rounded-lg mb-3 shimmer" />
      
      {/* Tags skeleton */}
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="h-6 w-16 bg-blue-900/20 rounded-full shimmer" />
        <div className="h-6 w-20 bg-blue-900/20 rounded-full shimmer" />
        <div className="h-6 w-24 bg-blue-900/20 rounded-full shimmer" />
      </div>

      {/* Content skeleton */}
      <div className="space-y-2 mb-6">
        <div className="h-4 w-full bg-blue-900/20 rounded shimmer" />
        <div className="h-4 w-5/6 bg-blue-900/20 rounded shimmer" />
        <div className="h-4 w-4/6 bg-blue-900/20 rounded shimmer" />
      </div>

      {/* Footer skeleton */}
      <div className="flex justify-between items-center">
        <div className="h-4 w-24 bg-blue-900/20 rounded shimmer" />
        <div className="h-4 w-32 bg-blue-900/20 rounded shimmer" />
      </div>

      {/* Card corner accents */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-500/10 rounded-tl-xl" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-500/10 rounded-br-xl" />
    </article>
  )
}