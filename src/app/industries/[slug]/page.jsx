import { client } from '@/lib/sanity/client';
import { industryPageBySlugQuery } from '@/lib/sanity/queries';
import DynamicIndustryPageClient from './DynamicIndustryPageClient';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const data = await client.fetch(industryPageBySlugQuery, { slug: params.slug });
  if (!data) return {};
  return {
    title: data.seo?.metaTitle || `${data.title} - PreciseFect`,
    description: data.seo?.metaDescription || data.tagline || '',
    keywords: data.seo?.metaKeywords || '',
  };
}

export default async function DynamicIndustryPage({ params }) {
  const data = await client.fetch(industryPageBySlugQuery, { slug: params.slug });
  if (!data) notFound();
  return <DynamicIndustryPageClient data={data} />;
}
