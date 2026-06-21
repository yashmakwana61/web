import { client } from '@/lib/sanity/client';
import { useCasePageBySlugQuery } from '@/lib/sanity/queries';
import DynamicUseCasePageClient from './DynamicUseCasePageClient';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const data = await client.fetch(useCasePageBySlugQuery, { slug: params.slug });
  if (!data) return {};
  return {
    title: data.seo?.metaTitle || `${data.title} - PreciseFect`,
    description: data.seo?.metaDescription || data.tagline || '',
    keywords: data.seo?.metaKeywords || '',
  };
}

export default async function DynamicUseCasePage({ params }) {
  const data = await client.fetch(useCasePageBySlugQuery, { slug: params.slug });
  if (!data) notFound();
  return <DynamicUseCasePageClient data={data} />;
}
