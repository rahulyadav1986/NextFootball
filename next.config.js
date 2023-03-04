/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images:{
    domains: ['www.scorebat.com']
  }
}

module.exports = nextConfig
