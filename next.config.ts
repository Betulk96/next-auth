/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.auth0.com",
      },
    ],
  },
};

module.exports = nextConfig;
