import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr),280px] gap-12 pt-8 max-w-7xl mx-auto">
      <div>
        <div className="glass-effect rounded-xl p-8 text-center">
          <h1 className="text-2xl font-bold text-amber-400 mb-4">Article Not Found</h1>
          <p className="text-gray-300 mb-6">
            Sorry, the article you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 
              rounded-full transition-colors text-blue-200 hover:text-blue-100 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
