/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'baden-baden.uz',
        port: '',
      },
    ],
  },};

export default nextConfig;
