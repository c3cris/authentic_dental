/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static Site Generation -> outputs a fully static site to ./out on `next build`
  output: 'export',
  trailingSlash: true,
  images: {
    // next/image optimization is unavailable in static export; we use plain <img>,
    // but keep this here so next/image would also work if you add it later.
    unoptimized: true,
  },
};

export default nextConfig;
