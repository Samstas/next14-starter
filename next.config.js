/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        //   pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;
