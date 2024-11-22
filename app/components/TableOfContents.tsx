'use client'

import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string;
}

// Helper function to create slug from text
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove invalid chars
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/-+/g, '-') // Replace multiple - with single -
    .trim();
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Handle initial hash if present
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 96;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'instant' // Use instant to prevent animation on page load
          });
          setActiveId(hash);
        }
      }, 100);
    }
  }, [])

  useEffect(() => {
    // Parse headings from markdown content
    const lines = content.split('\n');
    const headings = lines
      .filter(line => line.trim().startsWith('##')) // Get lines that start with ## (h2)
      .map(line => {
        const text = line.replace(/^##\s+/, '').trim(); // Remove ## and trim
        return {
          id: slugify(text),
          text,
          level: 2, // We're only using h2 for now
        };
      });

    setHeadings(headings);

    // Wait for the content to be rendered in the DOM
    setTimeout(() => {
      // Get the actual elements from the rendered content
      const headingElements = document.querySelectorAll('h2[id]');
      
      // Intersection Observer for active heading
      const observer = new IntersectionObserver(
        (entries) => {
          // Get all intersecting entries
          const intersectingEntries = entries.filter(entry => entry.isIntersecting);
          
          // If there are intersecting entries, use the first one
          if (intersectingEntries.length > 0) {
            setActiveId(intersectingEntries[0].target.id);
          }
        },
        { 
          rootMargin: '-64px 0px -66% 0px',
          threshold: [0, 1]
        }
      );

      headingElements.forEach(element => observer.observe(element));

      return () => observer.disconnect();
    }, 100);
  }, [content]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Update URL hash without scrolling
      history.pushState(null, '', `#${id}`);
      
      // Smooth scroll with offset
      const offset = 96; // Adjust based on your header height + some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  if (headings.length === 0) return null;

  return (
    <nav className={`glass-effect rounded-xl p-6 sticky top-24 transition-all duration-500 group/toc
      ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <h3 className="text-lg font-bold mb-4 animate-text-gradient">
        Table of Contents
      </h3>
      <div className="overflow-hidden transition-[height] duration-300">
        <ul className="space-y-3 max-h-[calc(100vh-12rem)] overflow-y-auto pr-2
          scrollbar-thin scrollbar-thumb-blue-600/20 scrollbar-track-blue-900/10
          group-hover/toc:scrollbar-thumb-blue-500/30 
          scrollbar-thumb-rounded-full scrollbar-track-rounded-full
          transition-colors duration-300"
        >
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={`text-left w-full group transition-all duration-300 ${
                  activeId === heading.id
                    ? 'text-blue-300'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <span className="inline-block w-full px-4 py-1.5 rounded-lg group-hover:bg-blue-900/20 transition-colors duration-300 relative">
                  {heading.text}
                  <span 
                    className={`absolute left-0.5 top-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 
                      ${activeId === heading.id 
                        ? 'opacity-100 bg-blue-400/70 shadow-glow-lg animate-glow-pulse scale-110' 
                        : 'opacity-0 bg-blue-400/50 group-hover:opacity-100 scale-90'
                      }`}
                    style={{ 
                      transform: 'translateY(-50%)'
                    }}
                  />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
