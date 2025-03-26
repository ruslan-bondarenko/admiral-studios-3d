/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**",
    },
    {
      protocol: "http",
      hostname: "**",
    },
  ],
},
};

export default nextConfig;
