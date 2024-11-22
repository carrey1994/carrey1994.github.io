'use client'

import { MDXRemote } from 'next-mdx-remote'
import { useEffect, useState } from 'react'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrettyCode from 'rehype-pretty-code'
import { Check, Copy } from 'lucide-react'
import Link from 'next/link'
import '../styles/mdx.css'

const options = {
  theme: 'github-dark',
  keepBackground: true,
  defaultLang: 'plaintext',
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className = ['highlighted']
  },
  onVisitHighlightedWord(node: any, id: string) {
    node.properties.className = ['word', `${id}`]
  },
  showLineNumbers: true,
}

interface MDXContentProps {
  content: string
}

export default function MDXContent({ content }: MDXContentProps) {
  const [mdxSource, setMdxSource] = useState<any>(null)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  useEffect(() => {
    const prepareMDX = async () => {
      try {
        console.log('Preparing MDX for content:', content);
        if (!content) {
          console.warn('Content is empty or undefined');
          return;
        }

        // Clean up the content by removing the outer <pre><code> tags and decoding HTML entities
        let cleanContent = content
          .replace(/<\/?pre>/g, '')
          .replace(/<\/?code>/g, '')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&');
        
        console.log('Cleaned content:', cleanContent);
        
        const mdx = await serialize(cleanContent, {
          mdxOptions: {
            rehypePlugins: [
              [rehypePrettyCode, options],
            ],
          },
        })
        console.log('MDX serialization successful:', mdx);
        setMdxSource(mdx)
      } catch (error) {
        console.error('Error preparing MDX:', error)
      }
    }

    prepareMDX()
  }, [content])

  useEffect(() => {
    console.log('MDX source state updated:', mdxSource);
  }, [mdxSource]);

  const handleCopy = async (code: string) => {
    try {
      const cleanCode = code.replace(/^\d+\s+/gm, '')
      await navigator.clipboard.writeText(cleanCode)
      setCopiedCode(code)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const components = {
    pre: ({ children, ...props }: any) => {
      const childArray = Array.isArray(children) ? children : [children]
      const code = childArray
        .find((child: any) => child?.props?.mdxType === 'code')
        ?.props?.children || ''
      
      const language = childArray
        .find((child: any) => child?.props?.className?.startsWith('language-'))
        ?.props?.className?.replace('language-', '') || ''

      return (
        <pre {...props} data-language={language}>
          {children}
          <button
            onClick={() => handleCopy(code)}
            className="copy-button group"
            aria-label={copiedCode === code ? 'Copied!' : 'Copy code'}
            title={copiedCode === code ? 'Copied!' : 'Copy code'}
          >
            {copiedCode === code ? (
              <Check className="w-4 h-4 transition-transform group-hover:scale-110" />
            ) : (
              <Copy className="w-4 h-4 transition-transform group-hover:scale-110" />
            )}
          </button>
        </pre>
      )
    },
    a: ({ href, children }: any) => {
      const isInternal = href?.startsWith('/')
      if (isInternal) {
        return <Link href={href}>{children}</Link>
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
  }

  if (!mdxSource) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
      </div>
    )
  }

  return (
    <article className="mdx-content">
      <MDXRemote {...mdxSource} components={components} />
    </article>
  )
}
