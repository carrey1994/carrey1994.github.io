'use client'

import { Highlight, themes } from 'prism-react-renderer'
import { useState } from 'react'
import { getLanguageColor } from '../utils/languageColors'

interface CodeBlockProps {
  code: string
  language?: string
}

export default function CodeBlock({ code, language = 'typescript' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [hoveredLine, setHoveredLine] = useState<number | null>(null)
  const [focusedLine, setFocusedLine] = useState<number | null>(null)
  const languageInfo = getLanguageColor(language)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.trim())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleLineClick = (lineNumber: number) => {
    if (focusedLine === lineNumber) {
      setFocusedLine(null)
    } else {
      setFocusedLine(lineNumber)
    }
  }

  return (
    <div className="code-block group/code">
      {/* Header with language and copy button */}
      <div className="absolute left-0 right-0 top-0 h-10 bg-gray-800/80 rounded-t-lg border-b border-gray-700/50 flex items-center justify-between px-4 backdrop-blur-sm z-10">
        <div className="flex items-center gap-3">
          <div 
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{ 
              backgroundColor: languageInfo.color,
              boxShadow: `0 0 10px ${languageInfo.color}40`,
              border: `2px solid ${languageInfo.color}40`
            }}
          />
          <span className="text-xs text-gray-400 group-hover/code:text-gray-300 transition-colors">
            {languageInfo.name}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="text-xs bg-gray-700/50 hover:bg-gray-700/70 px-3 py-1.5 rounded-md transition-all duration-300 relative group/copy flex items-center gap-2"
        >
          <span className={`text-gray-400 group-hover/copy:text-gray-300 flex items-center gap-2 transition-all duration-200 ${
            copied ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          }`}>
            <svg 
              className="w-3 h-3"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" 
              />
            </svg>
            Copy code
          </span>
          <span className={`absolute inset-0 flex items-center justify-center text-green-400 transition-all duration-200 ${
            copied ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}>
            <svg 
              className="w-3 h-3 mr-2"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            Copied!
          </span>
        </button>
      </div>

      {/* Code content */}
      <Highlight
        theme={themes.nightOwl}
        code={code.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className="relative">
            {/* Background gradient */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent rounded-lg opacity-0 group-hover/code:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${languageInfo.color}05 0%, transparent 50%, ${languageInfo.color}05 100%)`
              }}
            />
            
            <pre 
              className="bg-gray-800/50 rounded-lg overflow-x-auto relative group-hover/code:bg-gray-800/70 transition-colors min-h-[60px] code-scroll"
              style={{
                ...style,
                backgroundColor: 'transparent',
                marginTop: 0
              }}
            >
              <code className="text-sm block pt-12 pb-4">
                {tokens.map((line, i) => (
                  <div 
                    key={i} 
                    {...getLineProps({ line })}
                    className={`table-row transition-all duration-300 w-full cursor-pointer group/line
                      ${hoveredLine === i ? 'bg-gray-800/50' : ''}
                      ${focusedLine === i ? 'bg-blue-900/20' : ''}
                      ${focusedLine !== null && focusedLine !== i ? 'opacity-50' : ''}
                    `}
                    onMouseEnter={() => setHoveredLine(i)}
                    onMouseLeave={() => setHoveredLine(null)}
                    onClick={() => handleLineClick(i)}
                  >
                    <span className="table-cell text-right pr-4 pl-4 text-gray-500 select-none w-12 text-xs border-r border-gray-700/50 group-hover/code:border-gray-600/50 transition-colors">
                      {i + 1}
                    </span>
                    <span className="table-cell pl-4 pr-4 w-full">
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </span>
                    {/* Line highlight indicator */}
                    <span 
                      className={`absolute left-0 w-1 h-full transition-all duration-300 ${
                        focusedLine === i 
                          ? 'opacity-100 bg-blue-500'
                          : 'opacity-0 bg-transparent'
                      }`}
                    />
                  </div>
                ))}
              </code>
            </pre>
          </div>
        )}
      </Highlight>

      {/* Code block border glow */}
      <div 
        className="absolute inset-0 rounded-lg border opacity-0 group-hover/code:opacity-100 transition-all duration-500"
        style={{ 
          borderColor: `${languageInfo.color}30`
        }}
      />

      {/* Corner accents */}
      <div 
        className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg opacity-0 group-hover/code:opacity-100 transition-all duration-500"
        style={{ borderColor: `${languageInfo.color}30` }}
      />
      <div 
        className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-lg opacity-0 group-hover/code:opacity-100 transition-all duration-500"
        style={{ borderColor: `${languageInfo.color}30` }}
      />
    </div>
  )
}
