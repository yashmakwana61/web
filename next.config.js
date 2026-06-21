/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  // distDir defaults to '.next' — keeping it inside the project to avoid module resolution issues
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Ensure that we don't fail builds on lint errors if any exist, to make the migration smoother
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
