'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading.jsx';
import { AnimatedCard } from './AnimatedCard.jsx';
import AnimatedCounter from './AnimatedCounter.jsx';
import { AnimatedButton } from './AnimatedButton.jsx';
import { ArrowRight, Quote } from 'lucide-react';
import Link from '@/components/Link';

export function CaseStudiesShowcaseSection() {
  const cases = [
    {
      industry: "Education",
      title: "Riverside Academy",
      metricValue: 87,
      metricLabel: "Faster Admissions",
      quote: "PreciseFect eliminated our paperwork backlog. We now process applications in hours instead of weeks.",
      link: "/case-studies/riverside-academy"
    },
    {
      industry: "Healthcare",
      title: "Meridian Health Systems",
      metricValue: 73,
      metricLabel: "Process Improvement",
      quote: "Patient onboarding is completely seamless now. The automation ensures zero data entry errors.",
      link: "/case-studies/meridian-health"
    },
    {
      industry: "Manufacturing",
      title: "Apex Manufacturing",
      metricValue: 2.3,
      decimals: 1,
      suffix: "x",
      metricLabel: "Production Efficiency",
      quote: "Our factory floor is synchronized in real-time. Inventory holding costs dropped dramatically.",
      link: "/case-studies/apex-manufacturing"
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="section-container">
        <SectionHeading 
          headline="Real Implementations, Real Results" 
          subheadline="Success Stories from Our Clients"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {cases.map((c, i) => (
            <AnimatedCard key={i} delay={i * 0.1} className="p-6 md:p-8 flex flex-col h-full bg-card border">
              <div className="text-xs md:text-sm font-bold text-primary mb-2 uppercase tracking-wider">{c.industry}</div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">{c.title}</h3>
              
              <div className="mb-4 md:mb-6 flex items-baseline gap-3 min-h-[3rem] md:min-h-[4rem]">
                <span 
                  className="text-3xl md:text-4xl font-black text-primary leading-none flex-shrink-0"
                  style={{ textShadow: '0 2px 12px rgba(16, 185, 129, 0.25), 0 4px 20px rgba(16, 185, 129, 0.15)' }}
                >
                  <AnimatedCounter end={c.metricValue} decimals={c.decimals || 0} suffix={c.suffix || "%"} />
                </span>
                <span className="text-xs md:text-sm font-medium uppercase tracking-tight text-muted-foreground leading-tight">{c.metricLabel}</span>
              </div>

              <div className="bg-muted/50 p-4 rounded-xl mb-6 md:mb-8 flex-grow relative">
                <Quote className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8 text-border opacity-50" />
                <p className="text-muted-foreground italic text-xs md:text-sm relative z-10">"{c.quote}"</p>
              </div>

              <Link to={c.link} className="inline-flex items-center text-sm font-semibold hover:text-primary transition-colors group mt-auto btn-touch py-2">
                View Full Case Study <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedCard>
          ))}
        </div>

        <div className="text-center">
          <AnimatedButton to="/case-studies" variant="outline" size="lg" className="w-full sm:w-auto btn-touch">
            View All Case Studies
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}