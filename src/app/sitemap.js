export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const pages = ['/', '/projects', '/experience', '/about', '/contact'];
  const now = new Date().toISOString();
  return pages.map((p) => ({ url: `${base}${p}`, lastModified: now }));
}

