/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['github.com'], // Allow GitHub images for README preview
  },
}

export default nextConfig
