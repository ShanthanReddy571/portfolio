/** @type {import('next').NextConfig} */
const nextConfig = {
  // Let Vercel handle its optimized serverless output. Standalone is for self-hosting.
  images: {
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
