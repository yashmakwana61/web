'use client';

import React from 'react';

import Link from '@/components/Link';
import { motion } from 'framer-motion';

import { AnimatedHero } from '@/components/AnimatedHero.jsx';
import { AnimatedProcessTimeline } from '@/components/AnimatedProcessTimeline.jsx';
import { AnimatedCaseStudyCard } from '@/components/AnimatedCaseStudyCard.jsx';
import { implementationExamples } from '@/lib/implementationExamples';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, DollarSign, BookOpen } from 'lucide-react';

function EducationIndustryPage() {
  const workflowSteps = [
    {
      number: '1',
      title: 'Admissions Automation',
      description: 'Streamline the entire admissions process with online applications, automated document verification, and enrollment workflows.',
    },
    {
      number: '2',
      title: 'Student Lifecycle Management',
      description: 'Track students from inquiry through graduation with comprehensive records including demographics, academic history, and attendance.',
    },
    {
      number: '3',
      title: 'Fee Management',
      description: 'Automated fee collection with payment gateway integration, installment tracking, and financial aid processing.',
    },
    {
      number: '4',
      title: 'LMS Integration',
      description: 'Connect your ERP with learning management systems for unified student data and seamless academic workflows.',
    },
  ];

  return (
    <>
      <div>
        <AnimatedHero 
          title="ERP solutions for education"
          subtitle="Comprehensive ERP and automation solutions designed specifically for schools, colleges, and universities."
          backgroundImage="https://images.unsplash.com/photo-1507131679781-70be42a343e7"
        >
          <Link to="/contact" className="industry-card-button">
            Book a consultation
          </Link>
        </AnimatedHero>

        {/* Key Solutions */}
        <section className="py-24 bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-center mb-16">Solutions for education institutions</h2>
              <AnimatedProcessTimeline steps={workflowSteps} />
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24 bg-muted">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Education ERP implementation examples</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore workflows for school admissions and university fee collection.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {['riverside-academy', 'coastal-university'].map((slug, index) => {
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
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="mb-6">Transform your education institution</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Schedule a consultation to see how our ERP solutions can streamline operations and improve student outcomes.
              </p>
              <Link to="/contact" className="inline-block industry-card-button max-w-xs">
                Talk to an expert
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default EducationIndustryPage;