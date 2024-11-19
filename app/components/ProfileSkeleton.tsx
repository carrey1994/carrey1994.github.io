export default function ProfileSkeleton() {
  return (
    <div className="glass-effect rounded-xl p-8 relative backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 to-blue-900/5 rounded-xl" />
      
      <div className="text-center relative z-10">
        {/* Avatar skeleton with gradient background */}
        <div className="relative w-40 h-40 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/30 to-cyan-900/30" />
          <div className="w-full h-full rounded-full animate-shimmer ring-2 ring-blue-500/20 will-change-transform" />
        </div>

        {/* Name skeleton */}
        <div className="h-7 w-44 mx-auto mb-3 rounded-lg animate-shimmer will-change-transform" 
          style={{ animationDelay: '50ms' }} />

        {/* Bio skeleton with faster stagger */}
        <div className="space-y-2 mb-6">
          <div className="h-4 w-[95%] mx-auto rounded animate-shimmer will-change-transform" 
            style={{ animationDelay: '100ms' }} />
          <div className="h-4 w-[90%] mx-auto rounded animate-shimmer will-change-transform" 
            style={{ animationDelay: '150ms' }} />
          <div className="h-4 w-[85%] mx-auto rounded animate-shimmer will-change-transform" 
            style={{ animationDelay: '200ms' }} />
        </div>

        {/* Social links skeleton with faster stagger */}
        <div className="flex justify-center space-x-4">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className="w-9 h-9 p-2 rounded-full animate-shimmer ring-1 ring-blue-500/20 will-change-transform" 
              style={{ animationDelay: `${250 + (i * 50)}ms` }}
            />
          ))}
        </div>
      </div>

      {/* Glass effect corners */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-500/10 rounded-tl-xl" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-500/10 rounded-br-xl" />
    </div>
  )
}
