/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    // using local public/ images; allow SVG in Image component
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
