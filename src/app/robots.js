export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/studio/'],
      },
    ],
    sitemap: 'https://precisefect.com/sitemap.xml',
  };
}
