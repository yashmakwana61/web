'use client';

import React from 'react';

import Link from '@/components/Link';
import { Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';

import { ContactFormSection } from '@/components/ContactFormSection.jsx';

import { HeroSection } from '@/components/HeroSection.jsx';
import { TrustIndicatorsSection } from '@/components/TrustIndicatorsSection.jsx';
import { ServicesOverviewSection } from '@/components/ServicesOverviewSection.jsx';
import { IndustriesFocusSection } from '@/components/IndustriesFocusSection.jsx';
import { ProcessMethodologySection } from '@/components/ProcessMethodologySection.jsx';
import { KeyMetricsDashboardSection } from '@/components/KeyMetricsDashboardSection.jsx';
import { CaseStudiesShowcaseSection } from '@/components/CaseStudiesShowcaseSection.jsx';
import { TechnologyStackSection } from '@/components/TechnologyStackSection.jsx';

function HomePage() {
  return (
    <>
      <div className="min-h-screen">
        <HeroSection />
        <TrustIndicatorsSection />
        <ServicesOverviewSection />
        <IndustriesFocusSection />
        <ProcessMethodologySection />
        <KeyMetricsDashboardSection />
        <CaseStudiesShowcaseSection />
        <TechnologyStackSection />

        {/* Contact Form Section */}
        <ContactFormSection />

      </div>
    </>
  );
}

export default HomePage;