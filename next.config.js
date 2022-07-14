/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SANITY_ID: process.env.SANITY_ID,
  },
}

module.exports = nextConfig
