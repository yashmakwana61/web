'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading.jsx';
import { AnimatedCaseStudyCard } from './AnimatedCaseStudyCard.jsx';
import { implementationExamples } from '@/lib/implementationExamples';
import { AnimatedButton } from './AnimatedButton.jsx';

export function CaseStudiesShowcaseSection() {
  const slugs = ['riverside-academy', 'meridian-health', 'apex-manufacturing'];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="section-container">
        <SectionHeading 
          headline="ERP and Automation in Practice"
          subheadline="Implementation Examples"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {slugs.map((slug, index) => {
            const example = implementationExamples[slug];
            return (
              <AnimatedCaseStudyCard
                key={slug}
                title={example.title}
                industry={example.industry}
                excerpt={example.description}
                link={`/case-studies/${slug}`}
                linkLabel="Read implementation example"
                index={index}
              />
            );
          })}
        </div>

        <div className="text-center">
          <AnimatedButton to="/case-studies" variant="outline" size="lg" className="w-full sm:w-auto btn-touch">
            View Case Studies and Examples
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
