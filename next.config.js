/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'picsum.photos',
      "yt3.googleusercontent.com",
      "www.alura.com.br"
    ]
  }
}

module.exports = nextConfig
