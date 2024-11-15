interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex justify-center gap-3 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="glass-effect px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-900/20 transition-all duration-300 text-gray-300 hover:text-white disabled:hover:text-gray-300 group"
      >
        <span className="inline-block group-hover:enabled:-translate-x-0.5 transition-transform duration-200">←</span>
        {" "}Previous
      </button>
      
      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, i) => {
          const isCurrentPage = currentPage === i + 1;
          return (
            <button
              key={i + 1}
              onClick={() => onPageChange(i + 1)}
              className={`min-w-[2.5rem] px-4 py-2 rounded-lg transition-all duration-300 ${
                isCurrentPage
                  ? 'bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 text-white'
                  : 'glass-effect hover:bg-blue-900/20 text-gray-300 hover:text-white'
              }`}
            >
              <span className={isCurrentPage ? 'animate-text-gradient font-bold' : ''}>
                {i + 1}
              </span>
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="glass-effect px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-900/20 transition-all duration-300 text-gray-300 hover:text-white disabled:hover:text-gray-300 group"
      >
        Next{" "}
        <span className="inline-block group-hover:enabled:translate-x-0.5 transition-transform duration-200">→</span>
      </button>
    </div>
  )
}
