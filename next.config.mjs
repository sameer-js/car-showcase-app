/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.imagin.studio',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
