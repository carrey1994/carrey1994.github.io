'use client'

import { MDXRemote } from 'next-mdx-remote'
import { useEffect, useState } from 'react'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrettyCode from 'rehype-pretty-code'
import { Check, Copy } from 'lucide-react'
import Link from 'next/link'
import '../styles/mdx.css'

const options = {
  theme: 'dark-plus',
  keepBackground: true,
  defaultLang: 'typescript',
  keepIndent: true,
  showLineNumbers: true,
  grid: true,
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
        if (!content) {
          console.warn('Content is empty or undefined');
          return;
        }
        
        const normalizedContent = content.replace(/\r\n?/g, '\n');
        
        const mdx = await serialize(normalizedContent, {
          mdxOptions: {
            rehypePlugins: [
              [rehypePrettyCode, options],
            ],
            format: 'mdx',
          },
        })
        setMdxSource(mdx)
      } catch (error) {
        console.error('Error preparing MDX:', error)
      }
    }

    prepareMDX()
  }, [content])

  const handleCopy = async (code: string) => {
    try {
      const cleanCode = code
        .split('\n')
        .map(line => line.replace(/^\d+\s{2}/, ''))
        .join('\n')
        .trim();
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
        <div className="relative group">
          <pre {...props} data-language={language}>
            <div className="absolute right-2 top-2">
              <button
                onClick={() => handleCopy(code)}
                className="copy-button"
                aria-label={copiedCode === code ? 'Copied!' : 'Copy code'}
                title={copiedCode === code ? 'Copied!' : 'Copy code'}
              >
                {copiedCode === code ? (
                  <Check className="w-4 h-4 transition-transform group-hover:scale-110" />
                ) : (
                  <Copy className="w-4 h-4 transition-transform group-hover:scale-110" />
                )}
              </button>
            </div>
            <code className="code-content">
              {children}
            </code>
          </pre>
        </div>
      )
    },
    code: ({ children, className, ...props }: any) => {
      if (!className) {
        return <code className="inline-code">{children}</code>
      }
      return (
        <code className={className} {...props}>
          {children}
        </code>
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
