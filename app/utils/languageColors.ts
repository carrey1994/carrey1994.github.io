interface LanguageColors {
  [key: string]: {
    color: string
    name: string
  }
}

export const languageColors: LanguageColors = {
  typescript: {
    color: 'rgb(49, 120, 198)',
    name: 'TypeScript'
  },
  javascript: {
    color: 'rgb(241, 224, 90)',
    name: 'JavaScript'
  },
  python: {
    color: 'rgb(55, 118, 171)',
    name: 'Python'
  },
  jsx: {
    color: 'rgb(97, 218, 251)',
    name: 'JSX'
  },
  tsx: {
    color: 'rgb(49, 120, 198)',
    name: 'TSX'
  },
  css: {
    color: 'rgb(86, 61, 124)',
    name: 'CSS'
  },
  html: {
    color: 'rgb(227, 76, 38)',
    name: 'HTML'
  },
  bash: {
    color: 'rgb(46, 160, 67)',
    name: 'Bash'
  },
  json: {
    color: 'rgb(251, 146, 60)',
    name: 'JSON'
  },
  markdown: {
    color: 'rgb(103, 205, 204)',
    name: 'Markdown'
  },
  sql: {
    color: 'rgb(207, 158, 59)',
    name: 'SQL'
  }
}

export const getLanguageColor = (language: string) => {
  const lang = language.toLowerCase()
  return languageColors[lang] || {
    color: 'rgb(156, 163, 175)',
    name: language.charAt(0).toUpperCase() + language.slice(1)
  }
}