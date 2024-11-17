export default function Loading() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-8">
      {/* Main Content */}
      <div className="lg:col-span-3 space-y-8">
        <article className="glass-effect rounded-xl p-8 relative overflow-hidden">
          <header className="mb-12 relative">
            {/* Title shimmer */}
            <div className="space-y-3 mb-6">
              <div className="h-10 bg-blue-900/30 rounded-lg relative overflow-hidden w-3/4">
                <div className="absolute inset-0 shimmer" />
              </div>
              <div className="h-10 bg-blue-900/30 rounded-lg relative overflow-hidden w-1/2">
                <div className="absolute inset-0 shimmer" />
              </div>
            </div>

            {/* Tags shimmer */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="h-7 w-24 bg-blue-900/30 rounded-full relative overflow-hidden"
                >
                  <div className="absolute inset-0 shimmer" />
                </div>
              ))}
              <div className="h-7 w-32 bg-blue-900/30 rounded-lg relative overflow-hidden ml-4">
                <div className="absolute inset-0 shimmer" />
              </div>
            </div>

            {/* Date and share buttons shimmer */}
            <div className="flex items-center justify-between">
              <div className="h-5 w-40 bg-blue-900/30 rounded relative overflow-hidden">
                <div className="absolute inset-0 shimmer" />
              </div>
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="h-8 w-8 bg-blue-900/30 rounded-full relative overflow-hidden"
                  >
                    <div className="absolute inset-0 shimmer" />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 left-0 w-24 h-1 bg-gradient-to-r from-blue-500/50 to-cyan-500/50 rounded-full" />
          </header>

          {/* Content shimmer */}
          <div className="space-y-8">
            {/* Paragraphs */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-3">
                {[...Array(3)].map((_, j) => (
                  <div 
                    key={j}
                    className="h-6 bg-blue-900/30 rounded relative overflow-hidden"
                    style={{ width: `${Math.random() * 20 + 80}%` }}
                  >
                    <div className="absolute inset-0 shimmer" />
                  </div>
                ))}
              </div>
            ))}

            {/* Code block */}
            <div className="rounded-xl overflow-hidden">
              <div className="h-8 bg-blue-900/40 px-4 flex items-center">
                <div className="h-4 w-24 bg-blue-900/30 rounded relative overflow-hidden">
                  <div className="absolute inset-0 shimmer" />
                </div>
              </div>
              <div className="bg-blue-900/30 p-4">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i}
                    className="h-5 bg-blue-900/40 rounded my-2 relative overflow-hidden"
                    style={{ width: `${Math.random() * 40 + 60}%` }}
                  >
                    <div className="absolute inset-0 shimmer" />
                  </div>
                ))}
              </div>
            </div>

            {/* More paragraphs */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="space-y-3">
                {[...Array(3)].map((_, j) => (
                  <div 
                    key={j}
                    className="h-6 bg-blue-900/30 rounded relative overflow-hidden"
                    style={{ width: `${Math.random() * 20 + 80}%` }}
                  >
                    <div className="absolute inset-0 shimmer" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </article>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="glass-effect rounded-xl p-6 sticky top-8">
          <div className="h-8 w-40 bg-blue-900/30 rounded mb-6 relative overflow-hidden">
            <div className="absolute inset-0 shimmer" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-900/30 relative overflow-hidden">
                  <div className="absolute inset-0 shimmer" />
                </div>
                <div 
                  className="h-6 bg-blue-900/30 rounded relative overflow-hidden flex-1"
                >
                  <div className="absolute inset-0 shimmer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}