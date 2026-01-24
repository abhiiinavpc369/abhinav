/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // REQUIRED for static export (Cloudflare Pages / GitHub Pages)
  output: "export",

  images: {
    unoptimized: true, // IMPORTANT for static hosting
  },

  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
};

export default nextConfig;
