
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias.canvas = false;

    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: /component/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.svg$/i,
        resourceQuery: { not: [/component/] },
        loader: 'next-image-loader',
        options: {
          compilerType: 'client',
          basePath: '',
          assetPrefix: '',
        },
      },
    );

    return config;
  },
};

export default nextConfig;