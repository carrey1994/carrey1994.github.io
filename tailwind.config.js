/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.gray[300]'),
            '--tw-prose-headings': theme('colors.blue[200]'),
            '--tw-prose-links': theme('colors.blue[400]'),
            '--tw-prose-links-hover': theme('colors.blue[300]'),
            '--tw-prose-underline': theme('colors.blue[400]/40'),
            '--tw-prose-underline-hover': theme('colors.blue[400]'),
            '--tw-prose-bold': theme('colors.blue[200]'),
            '--tw-prose-counters': theme('colors.blue[400]'),
            '--tw-prose-bullets': theme('colors.blue[400]'),
            '--tw-prose-hr': theme('colors.gray[800]'),
            '--tw-prose-quote-borders': theme('colors.blue[500]/30'),
            '--tw-prose-captions': theme('colors.gray[400]'),
            '--tw-prose-code': theme('colors.blue[300]'),
            '--tw-prose-pre-code': theme('colors.gray[300]'),
            '--tw-prose-pre-bg': 'transparent',
            '--tw-prose-pre-border': theme('colors.gray[800]/50'),
            '--tw-prose-th-borders': theme('colors.gray[800]'),
            '--tw-prose-td-borders': theme('colors.gray[800]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
