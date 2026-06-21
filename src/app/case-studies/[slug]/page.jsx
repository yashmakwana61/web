import { client } from '@/lib/sanity/client';
import { caseStudyBySlugQuery } from '@/lib/sanity/queries';
import DynamicCaseStudyPageClient from './DynamicCaseStudyPageClient';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const data = await client.fetch(caseStudyBySlugQuery, { slug: params.slug });
  if (!data) return {};
  return {
    title: data.seo?.metaTitle || `${data.title} - PreciseFect Case Study`,
    description: data.seo?.metaDescription || data.excerpt || '',
    keywords: data.seo?.metaKeywords || '',
  };
}

export default async function DynamicCaseStudyPage({ params }) {
  const data = await client.fetch(caseStudyBySlugQuery, { slug: params.slug });
  if (!data) notFound();
  return <DynamicCaseStudyPageClient data={data} />;
}
