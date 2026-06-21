import { client } from '@/lib/sanity/client';
import { servicePageBySlugQuery, servicesListQuery } from '@/lib/sanity/queries';
import DynamicServicePageClient from './DynamicServicePageClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const services = await client.fetch(servicesListQuery);
  return services.map((s) => ({ slug: s.slug.current }));
}

export async function generateMetadata({ params }) {
  const data = await client.fetch(servicePageBySlugQuery, { slug: params.slug });
  if (!data) return {};
  return {
    title: data.seo?.metaTitle || `${data.title} - PreciseFect`,
    description: data.seo?.metaDescription || data.tagline || '',
    keywords: data.seo?.metaKeywords || '',
  };
}

export default async function DynamicServicePage({ params }) {
  const data = await client.fetch(servicePageBySlugQuery, { slug: params.slug });
  if (!data) notFound();
  return <DynamicServicePageClient data={data} />;
}
