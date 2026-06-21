import React from 'react';
import { client } from '@/lib/sanity/client';
import { caseStudiesListQuery, caseStudiesCountQuery } from '@/lib/sanity/queries';
import ScrollToTop from '@/components/ScrollToTop';
import { AnimatedCaseStudyCard } from '@/components/AnimatedCaseStudyCard';
import { Pagination } from '@/components/Pagination';

export const metadata = {
  title: 'Case Studies - PreciseFect',
  description: 'Real-world success stories from our ERP and automation clients.',
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function CaseStudiesPage({ searchParams }) {
  const page = parseInt(searchParams.page || '1', 10);
  const pageSize = 6;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const industry = searchParams.industry || null;

  // Fetch data in parallel
  const [caseStudies, totalCount] = await Promise.all([
    client.fetch(caseStudiesListQuery, { start, end, industry }),
    client.fetch(caseStudiesCountQuery, { industry })
  ]);

  return (
    <>
      <ScrollToTop />
      

      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-20 bg-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 animate-gradient-shift" />
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Real-world implementations across education, healthcare, and manufacturing with measurable results.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24 bg-background">
          <div className="section-container">
            {caseStudies.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {caseStudies.map((caseStudy, index) => (
                    <AnimatedCaseStudyCard 
                      key={caseStudy.slug.current} 
                      title={caseStudy.title}
                      industry={caseStudy.industryLabel || caseStudy.industry?.title || 'Case Study'}
                      excerpt={caseStudy.excerpt}
                      metrics={caseStudy.metrics}
                      link={`/case-studies/${caseStudy.slug.current}`}
                      index={index} 
                    />
                  ))}
                </div>
                
                <Pagination 
                  totalCount={totalCount} 
                  currentPage={page} 
                  pageSize={pageSize} 
                  basePath="/case-studies" 
                />
              </>
            ) : (
              <div className="text-center py-20 text-slate-500">
                <p className="text-xl">No case studies found.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      
    </>
  );
}

