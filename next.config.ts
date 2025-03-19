import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/api/core/:path*',
        destination: 'https://parking-radar.onrender.com/:path*',
      },
    ];
  },
};

export default nextConfig;
