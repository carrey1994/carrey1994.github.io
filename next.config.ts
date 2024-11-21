/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  typescript: {
    // We're handling TypeScript errors in development
    ignoreBuildErrors: true,
  },
}

export default nextConfig
