import { EditorialLink, EditorialPage, EditorialSection } from '@/components/EditorialPage';
import { implementationExamples } from '@/lib/implementationExamples';
import { client } from '@/lib/sanity/client';
import { caseStudyBySlugQuery } from '@/lib/sanity/queries';
import DynamicCaseStudyPageClient from './DynamicCaseStudyPageClient';
import { notFound } from 'next/navigation';
import { cache } from 'react';

const getCaseStudy = cache(async (slug) => {
  const example = Object.hasOwn(implementationExamples, slug) ? implementationExamples[slug] : null;
  const data = await client.fetch(caseStudyBySlugQuery, { slug }).catch((error) => {
    if (!example) throw error;
    return null;
  });
  return { data, example };
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data, example } = await getCaseStudy(slug);
  if (!data && !example) return {};

  const alternates = { canonical: `/case-studies/${slug}` };
  if (data) {
    return {
      title: data.seo?.metaTitle || `${data.title} Case Study`,
      description: data.seo?.metaDescription || data.excerpt || '',
      keywords: data.seo?.metaKeywords || '',
      alternates,
    };
  }
  return { title: example.title, description: example.description, alternates };
}

export default async function DynamicCaseStudyPage({ params }) {
  const { slug } = await params;
  const { data, example } = await getCaseStudy(slug);
  if (data) return <DynamicCaseStudyPageClient data={data} />;
  if (!example) notFound();

  return (
    <EditorialPage eyebrow={`${example.industry} implementation example`} title={example.title} description={example.description}>
      <EditorialSection title="Illustrative scenario">
        <p>{example.scenario}</p>
      </EditorialSection>
      <EditorialSection title="How the workflow could work">
        <ol className="list-decimal space-y-4 pl-6">
          {example.steps.map(([title, detail]) => (
            <li key={title}>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
      </EditorialSection>
      <EditorialSection title="What to measure in a pilot">
        <p>{example.measures}</p>
      </EditorialSection>
      <p>
        <EditorialLink href={example.industryPath}>Explore {example.industry.toLowerCase()} ERP solutions</EditorialLink>
        {' or '}
        <EditorialLink href="/contact">discuss a similar project</EditorialLink>.
      </p>
    </EditorialPage>
  );
}
