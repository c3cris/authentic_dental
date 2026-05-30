/** @type {import('next').NextConfig} */
const isPagesDeployment = process.env.IS_GH_PAGES === 'true';

const base = isPagesDeployment ? '/authentic_dental' : '';

const nextConfig = {
  output: 'export',
  basePath: base,
  assetPrefix: base,
  env: {
    NEXT_PUBLIC_BASE_PATH: base,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
