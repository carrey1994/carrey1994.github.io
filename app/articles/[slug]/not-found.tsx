import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
      <div className="glass-effect rounded-xl p-8 max-w-lg w-full space-y-6">
        <h2 className="text-2xl font-bold animate-text-gradient">
          Article Not Found
        </h2>
        <p className="text-gray-400">
          Sorry, the article you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center">
          <Link
            href="/"
            className="glass-effect px-6 py-3 rounded-lg hover:bg-blue-900/20 transition-all duration-300 text-gray-300 hover:text-white group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <span className="inline-block group-hover:-translate-x-1 transition-transform duration-200 mr-2">
                ←
              </span>
              Back to articles
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/0 to-cyan-900/0 group-hover:from-blue-900/20 group-hover:to-cyan-900/20 transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </div>
  )
}