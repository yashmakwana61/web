'use client';

import React from 'react';

import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { AnimatedCaseStudyCard } from '@/components/AnimatedCaseStudyCard.jsx';

function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Riverside Academy reduces admissions processing time by 68%',
      industry: 'Education',
      excerpt: 'How a K-12 school automated their admissions workflow and improved parent satisfaction with online application processing.',
      metrics: '68% faster',
      link: '/case-studies/riverside-academy',
    },
    {
      title: 'Meridian Health Systems improves patient throughput by 43%',
      industry: 'Healthcare',
      excerpt: 'A multi-specialty clinic implemented automated appointment scheduling and patient intake, reducing wait times and administrative overhead.',
      metrics: '43% improvement',
      link: '/case-studies/meridian-health',
    },
    {
      title: 'Apex Manufacturing achieves 2.7x ROI with ERP implementation',
      industry: 'Manufacturing',
      excerpt: 'How a mid-size manufacturer streamlined production planning and inventory management with custom ERPNext deployment.',
      metrics: '2.7x ROI',
      link: '/case-studies/apex-manufacturing',
    },
    {
      title: 'Coastal University automates fee collection for 12,000 students',
      industry: 'Education',
      excerpt: 'A higher education institution implemented automated fee management with payment gateway integration and installment tracking.',
      metrics: '$2.1M processed',
      link: '/case-studies/coastal-university',
    },
    {
      title: 'Summit Healthcare Network reduces billing errors by 91%',
      industry: 'Healthcare',
      excerpt: 'A healthcare network automated insurance claim processing and billing workflows across 8 facilities.',
      metrics: '91% error reduction',
      link: '/case-studies/summit-healthcare',
    },
    {
      title: 'Precision Parts Co. cuts inventory costs by $340K annually',
      industry: 'Manufacturing',
      excerpt: 'A precision manufacturing company optimized inventory management with automated reorder points and demand forecasting.',
      metrics: '$340K saved',
      link: '/case-studies/precision-parts',
    },
  ];

  return (
    <>
      

      <Header />

      <main>
        {/* Hero */}
        <section className="py-20 bg-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 animate-gradient-shift" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="mb-6">Case studies</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Real-world implementations across education, healthcare, and manufacturing with measurable results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24 bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {caseStudies.map((caseStudy, index) => (
                <AnimatedCaseStudyCard key={caseStudy.link} {...caseStudy} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default CaseStudiesPage;