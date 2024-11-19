export default function TagListSkeleton() {
  return (
    <div className="glass-effect rounded-xl p-8 mt-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 to-blue-900/5 rounded-xl" />
      
      <div className="relative z-10">
        <div className="h-7 w-24 rounded-lg animate-shimmer mb-4" />
        <div className="flex flex-wrap gap-2">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="h-8 w-24 rounded-full animate-shimmer"
              style={{ animationDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/10 rounded-tl-xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/10 rounded-br-xl" />
    </div>
  )
}