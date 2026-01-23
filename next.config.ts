/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimizations
  reactStrictMode: true,

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.screenshotmachine.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Compression
  compress: true,

  // Performance
  poweredByHeader: false,

  // For static export (GitHub Pages)
  // Uncomment these lines when deploying to GitHub Pages
  // output: 'export',
  // basePath: '/your-repo-name',
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
