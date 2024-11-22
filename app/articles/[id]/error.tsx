'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to your error reporting service
    console.error('Article page error:', error);
  }, [error]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr),280px] gap-12 pt-8 max-w-7xl mx-auto">
      <div>
        <div className="glass-effect rounded-xl p-8 text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Something went wrong!</h1>
          <p className="text-gray-300 mb-6">
            {error.message || 'An unexpected error occurred while loading the article.'}
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 
                rounded-full transition-colors text-blue-200 hover:text-blue-100"
            >
              Try again
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 
                rounded-full transition-colors text-blue-200 hover:text-blue-100"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
