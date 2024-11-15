export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="glass-effect rounded-xl p-12 max-w-lg w-full relative overflow-hidden group">
        {/* Animated background waves */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 wave-animation opacity-10" />
          <div className="absolute inset-0 wave-animation opacity-10" style={{ animationDelay: '-2s', scale: '0.85' }} />
          <div className="absolute inset-0 wave-animation opacity-10" style={{ animationDelay: '-4s', scale: '1.15' }} />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-900/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-900/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '-2s' }} />
        
        <div className="relative">
          <div className="mb-8 relative">
            <h2 className="text-[150px] font-bold animate-text-gradient leading-none">
              404
            </h2>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm" />
          </div>
          
          <h3 className="text-3xl font-semibold mb-4 animate-text-gradient">
            Page Not Found
          </h3>
          <p className="text-gray-300 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved to a different location.
          </p>
          <a 
            href="/"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-900/20 to-cyan-900/20 hover:from-blue-900/30 hover:to-cyan-900/30 text-white transition-all duration-300 group border border-blue-500/20 hover:border-blue-500/40 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <span className="inline-block group-hover:-translate-x-1 transition-transform duration-200 mr-2">
                ←
              </span>
              Return Home
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-cyan-400/0 group-hover:from-blue-400/10 group-hover:to-cyan-400/10 transition-colors duration-300" />
            <div className="absolute inset-0 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Subtle border glow on hover */}
        <div className="absolute inset-0 rounded-xl border border-blue-500/0 group-hover:border-blue-500/20 transition-colors duration-500" />
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500/20 rounded-tl-xl" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-500/20 rounded-tr-xl" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-500/20 rounded-bl-xl" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-500/20 rounded-br-xl" />
      </div>
    </div>
  )
}
