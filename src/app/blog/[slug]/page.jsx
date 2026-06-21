import { client } from '@/lib/sanity/client';
import { blogPostBySlugQuery } from '@/lib/sanity/queries';
import DynamicBlogPageClient from './DynamicBlogPageClient';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const data = await client.fetch(blogPostBySlugQuery, { slug: params.slug });
  if (!data) return {};
  return {
    title: data.seo?.metaTitle || `${data.title} - PreciseFect Blog`,
    description: data.seo?.metaDescription || data.excerpt || '',
    keywords: data.seo?.metaKeywords || '',
  };
}

export default async function DynamicBlogPage({ params }) {
  const data = await client.fetch(blogPostBySlugQuery, { slug: params.slug });
  if (!data) notFound();
  return <DynamicBlogPageClient data={data} />;
}
