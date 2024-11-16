export default function Loading() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Main Content Loading Skeleton */}
      <div className="lg:col-span-2">
        <div className="h-12 w-64 glass-effect rounded-lg mb-8 shimmer"></div>
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-effect rounded-xl p-6 relative overflow-hidden">
              <div className="shimmer absolute inset-0"></div>
              <div className="relative">
                <div className="h-8 w-3/4 bg-blue-900/20 rounded-lg mb-4"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-6 w-16 bg-blue-900/20 rounded-full"></div>
                  <div className="h-6 w-16 bg-blue-900/20 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-full bg-blue-900/20 rounded-lg"></div>
                  <div className="h-4 w-5/6 bg-blue-900/20 rounded-lg"></div>
                  <div className="h-4 w-4/6 bg-blue-900/20 rounded-lg"></div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div className="h-4 w-24 bg-blue-900/20 rounded-lg"></div>
                  <div className="h-4 w-32 bg-blue-900/20 rounded-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Loading Skeleton */}
      <div className="lg:col-span-1">
        <div className="glass-effect rounded-xl p-8 sticky top-24 relative overflow-hidden">
          <div className="shimmer absolute inset-0"></div>
          <div className="relative flex flex-col items-center">
            <div className="w-40 h-40 rounded-full mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/30 to-cyan-900/30 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full ring-2 ring-blue-500/20"></div>
            </div>
            <div className="h-8 w-48 bg-blue-900/20 rounded-lg mb-4"></div>
            <div className="space-y-2 mb-6 w-full">
              <div className="h-4 w-full bg-blue-900/20 rounded-lg"></div>
              <div className="h-4 w-5/6 mx-auto bg-blue-900/20 rounded-lg"></div>
              <div className="h-4 w-4/6 mx-auto bg-blue-900/20 rounded-lg"></div>
            </div>
            <div className="flex gap-6">
              <div className="h-8 w-16 bg-blue-900/20 rounded-lg"></div>
              <div className="h-8 w-16 bg-blue-900/20 rounded-lg"></div>
              <div className="h-8 w-16 bg-blue-900/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
