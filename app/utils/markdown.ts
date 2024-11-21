interface FormattedContent {
  type: 'text' | 'code' | 'heading';
  content: string;
  language?: string;
  level?: number;
}

export function formatContent(content: string): FormattedContent[] {
  const lines = content.split('\n')
  let inCodeBlock = false
  let currentCodeBlock: string[] = []
  let currentLanguage = ''
  const formattedContent: FormattedContent[] = []

  lines.forEach(line => {
    const trimmedLine = line.trim()
    
    // Handle code blocks
    if (trimmedLine.startsWith('```')) {
      if (inCodeBlock) {
        formattedContent.push({
          type: 'code',
          content: currentCodeBlock.join('\n'),
          language: currentLanguage
        })
        currentCodeBlock = []
        currentLanguage = ''
        inCodeBlock = false
      } else {
        inCodeBlock = true
        currentLanguage = trimmedLine.slice(3).trim() || 'typescript'
      }
      return
    }

    if (inCodeBlock) {
      currentCodeBlock.push(line)
      return
    }

    // Handle headings
    if (trimmedLine.startsWith('#')) {
      const match = trimmedLine.match(/^(#{1,6})\s+(.+)/)
      if (match) {
        formattedContent.push({
          type: 'heading',
          content: match[2],
          level: match[1].length
        })
        return
      }
    }

    // Handle regular text
    if (trimmedLine || line.includes('  ')) { // Keep lines with double spaces for markdown line breaks
      formattedContent.push({
        type: 'text',
        content: line
      })
    }
  })

  // Handle any remaining code block
  if (inCodeBlock && currentCodeBlock.length > 0) {
    formattedContent.push({
      type: 'code',
      content: currentCodeBlock.join('\n'),
      language: currentLanguage
    })
  }

  return formattedContent
}
