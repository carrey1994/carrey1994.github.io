interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  totalItems: number;
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange,
  itemsPerPage,
  totalItems 
}: PaginationProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' && currentPage > 1) {
      onPageChange(currentPage - 1);
    } else if (e.key === 'ArrowRight' && currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Function to get page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    
    if (currentPage <= 3) {
      // If we're on pages 1-3, show 1, 2, 3, ..., last
      pageNumbers.push(1, 2, 3);
      if (totalPages > 4) {
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (totalPages === 4) {
        pageNumbers.push(4);
      }
    } else if (currentPage >= totalPages - 2) {
      // If we're on last 3 pages, show 1, ..., last-2, last-1, last
      pageNumbers.push(1);
      if (totalPages > 4) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages - 2, totalPages - 1, totalPages);
    } else {
      // We're somewhere in the middle
      pageNumbers.push(1);
      pageNumbers.push('...');
      pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
      pageNumbers.push('...');
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div 
      className="space-y-4" 
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="navigation"
      aria-label="Pagination"
    >
      <div className="text-center text-sm">
        <span className="glass-effect px-3 py-1.5 rounded-full text-gray-400">
          Showing {startItem}-{endItem} of {totalItems} articles
        </span>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="glass-effect px-2 sm:px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-900/20 transition-all duration-300 text-gray-300 hover:text-white disabled:hover:text-gray-300 group order-1"
          aria-label="Previous page"
        >
          <span className="inline-block group-hover:enabled:-translate-x-0.5 transition-transform duration-200">←</span>
          <span className="hidden sm:inline">{" "}Prev</span>
        </button>
        
        <div 
          className="flex flex-wrap justify-center gap-1 sm:gap-2 order-3 sm:order-2 w-full sm:w-auto my-2 sm:my-0" 
          role="list"
        >
          {getPageNumbers().map((pageNum, i) => {
            if (pageNum === '...') {
              return (
                <span 
                  key={`ellipsis-${i}`}
                  className="px-2 py-2 text-gray-400 select-none"
                  aria-hidden="true"
                >
                  <span className="tracking-wider">•••</span>
                </span>
              );
            }

            const isCurrentPage = currentPage === pageNum;
            return (
              <button
                key={`page-${pageNum}`}
                onClick={() => onPageChange(pageNum as number)}
                className={`min-w-[2rem] sm:min-w-[2.5rem] px-2 sm:px-4 py-2 rounded-lg transition-all duration-300 ${
                  isCurrentPage
                    ? 'bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 text-white'
                    : 'glass-effect hover:bg-blue-900/20 text-gray-300 hover:text-white'
                }`}
                aria-current={isCurrentPage ? 'page' : undefined}
                aria-label={`Page ${pageNum}`}
              >
                <span className={isCurrentPage ? 'animate-text-gradient font-bold' : ''}>
                  {pageNum}
                </span>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="glass-effect px-2 sm:px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-900/20 transition-all duration-300 text-gray-300 hover:text-white disabled:hover:text-gray-300 group order-2 sm:order-3"
          aria-label="Next page"
        >
          <span className="hidden sm:inline">Next{" "}</span>
          <span className="inline-block group-hover:enabled:translate-x-0.5 transition-transform duration-200">→</span>
        </button>
      </div>
    </div>
  )
}
