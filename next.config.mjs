/** @type {import('next').NextConfig} */
const isPagesDeployment = process.env.IS_GH_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isPagesDeployment ? '/authentic_dental' : '',
  assetPrefix: isPagesDeployment ? '/authentic_dental' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
