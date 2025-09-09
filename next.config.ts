// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",           // When frontend calls /api/anything
        destination: `${process.env.TP_API_URL}/:path*`, // It proxies to your backend
      },
    ];
  },
};

module.exports = nextConfig;
