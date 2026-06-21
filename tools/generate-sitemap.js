/**
 * generate-sitemap.js
 *
 * Pre-build script that queries Sanity CMS for all published slugs and
 * writes a standards-compliant sitemap.xml into the public/ directory.
 *
 * This approach is necessary because the project uses Next.js `output: 'export'`
 * (static site generation), which is incompatible with the App Router's dynamic
 * `sitemap()` convention.
 *
 * Run: node tools/generate-sitemap.js
 */

import { createClient } from '@sanity/client';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'https://precisefect.com';

// ── Sanity Client ────────────────────────────────────────────────────────────
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'e0ws8top',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Always fetch fresh data at build time
});

// ── GROQ Query ───────────────────────────────────────────────────────────────
const SITEMAP_QUERY = `
  *[_type in ["servicePage", "industryPage", "useCasePage", "blogPost", "caseStudy", "landingPage"] && defined(slug.current)] {
    "slug": slug.current,
    "lastModified": _updatedAt,
    _type
  }
`;

// ── Type → URL prefix mapping ────────────────────────────────────────────────
const TYPE_PREFIX = {
  servicePage: '/services',
  industryPage: '/industries',
  useCasePage: '/use-cases',
  blogPost: '/blog',
  caseStudy: '/case-studies',
  landingPage: '',
};

// ── Static routes (always present) ───────────────────────────────────────────
const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.7' },
  { path: '/services', changefreq: 'weekly', priority: '0.9' },
  { path: '/blog', changefreq: 'daily', priority: '0.8' },
  { path: '/case-studies', changefreq: 'weekly', priority: '0.8' },
];

// ── Helpers ──────────────────────────────────────────────────────────────────
function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toW3CDate(date) {
  return new Date(date).toISOString().split('T')[0];
}

function buildUrlEntry({ loc, lastmod, changefreq, priority }) {
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function generateSitemap() {
  console.log('📍 Generating sitemap.xml …');

  const today = toW3CDate(new Date());

  // Static entries
  const staticEntries = STATIC_ROUTES.map((route) =>
    buildUrlEntry({
      loc: `${BASE_URL}${route.path}`,
      lastmod: today,
      changefreq: route.changefreq,
      priority: route.priority,
    })
  );

  // Dynamic entries from Sanity
  let dynamicEntries = [];
  try {
    const pages = await client.fetch(SITEMAP_QUERY);
    console.log(`   ✓ Fetched ${pages.length} dynamic page(s) from Sanity`);

    dynamicEntries = pages
      .filter((p) => p.slug && TYPE_PREFIX[p._type] !== undefined)
      .map((p) => {
        const prefix = TYPE_PREFIX[p._type];
        const isBlog = p._type === 'blogPost';
        const isService = p._type === 'servicePage';

        return buildUrlEntry({
          loc: `${BASE_URL}${prefix}/${p.slug}`,
          lastmod: p.lastModified ? toW3CDate(p.lastModified) : today,
          changefreq: isBlog ? 'weekly' : 'monthly',
          priority: isService ? '0.8' : isBlog ? '0.7' : '0.6',
        });
      });
  } catch (error) {
    console.warn('   ⚠ Could not fetch from Sanity – generating with static routes only');
    console.warn('  ', error.message);
  }

  // Assemble XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...dynamicEntries].join('\n')}
</urlset>
`;

  // Write to public/
  const outPath = resolve(__dirname, '..', 'public', 'sitemap.xml');
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, xml, 'utf-8');

  const totalUrls = staticEntries.length + dynamicEntries.length;
  console.log(`   ✓ Wrote ${totalUrls} URL(s) → ${outPath}`);
}

generateSitemap().catch((err) => {
  console.error('❌ Sitemap generation failed:', err);
  process.exit(1);
});
