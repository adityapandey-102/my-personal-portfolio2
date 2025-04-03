/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      turbo: {
        rules: {
          // Configure image handling for Turbopack
          '*.{png,jpg,jpeg,webp,avif,svg}': {
            loaders: ['next-image-loader'],
          },
        },
      },
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
        // Add more domains as needed
      ],
    },
  };

export default nextConfig;
