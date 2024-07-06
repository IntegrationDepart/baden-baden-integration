/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_IMAGE_DOMAIN,
        port: '',
        pathname: '**', // This allows images from any path on the specified domain
      },
    ],
    deviceSizes: [450, 640, 768, 1024, 1280, 1536],
  },
};

export default nextConfig;