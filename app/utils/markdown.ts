interface FormattedContent {
  type: 'text' | 'code';
  content: string;
  language?: string;
}

export function formatContent(content: string): FormattedContent[] {
  const lines = content.split('\n')
  let inCodeBlock = false
  let currentCodeBlock: string[] = []
  let currentLanguage = ''
  const formattedContent: FormattedContent[] = []

  lines.forEach(line => {
    const trimmedLine = line.trim()
    
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
    } else if (inCodeBlock) {
      currentCodeBlock.push(line)
    } else if (trimmedLine) {
      formattedContent.push({
        type: 'text',
        content: line
      })
    }
  })

  return formattedContent
}