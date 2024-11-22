export default function Loading() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr),280px] gap-12 pt-8 max-w-7xl mx-auto">
      <div>
        <div className="glass-effect rounded-xl p-8 space-y-4">
          {/* Title skeleton */}
          <div className="space-y-3">
            <div className="h-8 w-3/4 bg-blue-900/30 rounded-lg animate-shimmer" />
            <div className="h-8 w-1/2 bg-blue-900/30 rounded-lg animate-shimmer" />
          </div>

          {/* Tags and metadata skeleton */}
          <div className="flex flex-wrap gap-2 my-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-6 w-24 bg-blue-900/30 rounded-full animate-shimmer" />
            ))}
          </div>

          {/* Content skeleton */}
          <div className="space-y-6">
            {/* Text blocks */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-3">
                {[...Array(3)].map((_, j) => (
                  <div 
                    key={j}
                    className="h-4 bg-blue-900/30 rounded animate-shimmer"
                    style={{ width: `${Math.random() * 20 + 80}%` }}
                  />
                ))}
              </div>
            ))}

            {/* Code block skeleton */}
            <div className="rounded-xl overflow-hidden">
              <div className="h-8 bg-blue-900/40 px-4 flex items-center">
                <div className="h-4 w-24 bg-blue-900/30 rounded animate-shimmer" />
              </div>
              <div className="bg-blue-900/30 p-4 space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="h-4 bg-blue-900/40 rounded animate-shimmer"
                    style={{ width: `${Math.random() * 40 + 60}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents skeleton */}
      <div className="hidden lg:block">
        <div className="glass-effect rounded-xl p-6 sticky top-24">
          <div className="h-6 w-40 bg-blue-900/30 rounded mb-6 animate-shimmer" />
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 bg-blue-900/30 rounded w-full animate-shimmer" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
