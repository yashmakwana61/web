'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading';
import { AnimatedCard } from './AnimatedCard';
import { AnimatedIcon } from './AnimatedIcon';
import { AnimatedButton } from './AnimatedButton';
import { ArrowRight, Database, Settings, Cpu, Bot, LineChart, FileText } from 'lucide-react';
import Link from '@/components/Link';

const services = [
  { icon: Database, title: 'ERP Consulting', description: 'Expert guidance for selecting and customizing ERP systems that align perfectly with your operational needs.', link: '/services/erp-consulting' },
  { icon: Settings, title: 'Odoo Consulting', description: 'Comprehensive Odoo implementation services. Maximize the value of this flexible, open-source suite.', link: '/services/odoo' },
  { icon: Cpu, title: 'ERPNext Consulting', description: 'Deploy ERPNext for an agile, scalable enterprise foundation that grows with your organization.', link: '/services/erpnext' },
  { icon: Bot, title: 'AI & Workflow Automation', description: 'Harness artificial intelligence to automate complex decisions and eliminate manual repetitive tasks.', link: '/services/ai-automation' },
  { icon: FileText, title: 'RPA Services', description: 'Robotic Process Automation solutions that act as digital workers, ensuring 24/7 task execution.', link: '/services/rpa' },
  { icon: LineChart, title: 'Business Intelligence', description: 'Transform raw data into actionable insights through custom dashboards and predictive analytics.', link: '/services/business-intelligence' },
];

export function ServicesOverviewSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="section-container">
        <SectionHeading 
          headline="Comprehensive Solutions Across ERP, Automation & Intelligence" 
          subheadline="Our Core Services"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
          {services.map((service, index) => (
            <AnimatedCard key={index} delay={index * 0.1} className="p-6 md:p-8 lg:p-10 flex flex-col justify-between h-full bg-card active:scale-[0.98] transition-transform">
              <div>
                <AnimatedIcon icon={service.icon} wrapperClassName="mb-4 md:mb-6 w-10 h-10 md:w-12 md:h-12" />
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <Link to={service.link} className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group mt-auto btn-touch py-2">
                Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedCard>
          ))}
        </div>

        <div className="text-center">
          <AnimatedButton to="/services" size="lg" className="w-full sm:w-auto btn-touch" icon={ArrowRight}>
            View All Services
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}