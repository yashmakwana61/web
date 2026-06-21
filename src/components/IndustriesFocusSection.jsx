'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading.jsx';
import { AnimatedDivider } from './AnimatedDivider.jsx';
import { IndustryCard } from './IndustryCard.jsx';
import { BookOpen, HeartPulse, Factory, Zap, Smile, ShieldCheck, Clock, TrendingUp, Settings2 } from 'lucide-react';

const industriesData = [
  {
    id: 'education',
    icon: BookOpen,
    title: "Education",
    description: "Modernize educational institutions with comprehensive ERP solutions, LMS integrations, and intelligent admissions automation.",
    features: [
      "Streamlined student & faculty onboarding",
      "Automated fee collection & financials",
      "Unified learning management systems"
    ],
    diagram: {
      steps: ["Inquiry & Lead Gen", "Application Processing", "Enrollment & Billing", "Academic Lifecycle"]
    },
    metrics: [
      { icon: Zap, value: "87%", label: "Faster Admissions" },
      { icon: Smile, value: "92%", label: "Satisfaction Rate" }
    ],
    ctaText: "Explore Education",
    link: "/industries/education",
    colorTheme: "primary"
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    title: "Healthcare",
    description: "Transform patient care with compliant hospital ERPs, seamless clinical workflows, and advanced appointment automation.",
    features: [
      "HIPAA-compliant patient record management",
      "Automated appointment scheduling",
      "Integrated billing & insurance claims"
    ],
    diagram: {
      steps: ["Patient Registration", "Triage & Diagnostics", "Treatment & Care", "Discharge & Billing"]
    },
    metrics: [
      { icon: Clock, value: "73%", label: "Faster Processing" },
      { icon: ShieldCheck, value: "99%", label: "Compliance Score" }
    ],
    ctaText: "Explore Healthcare",
    link: "/industries/healthcare",
    colorTheme: "secondary"
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: "Manufacturing",
    description: "Drive operational excellence with real-time production planning, automated inventory control, and factory floor dashboards.",
    features: [
      "Real-time supply chain visibility",
      "Predictive equipment maintenance",
      "Automated quality control workflows"
    ],
    diagram: {
      steps: ["Procurement", "Production Planning", "Quality Assurance", "Distribution"]
    },
    metrics: [
      { icon: TrendingUp, value: "2.3x", label: "Production Efficiency" },
      { icon: Settings2, value: "64%", label: "Inventory Reduction" }
    ],
    ctaText: "Explore Manufacturing",
    link: "/industries/manufacturing",
    colorTheme: "accent"
  }
];

export function IndustriesFocusSection() {
  return (
    <section className="py-[40px] md:py-[60px] lg:py-[80px] bg-background relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="mb-8 md:mb-12">
          <SectionHeading 
            headline="Industry-Specific Solutions" 
            subheadline="Tailored ERP & Automation for Your Sector" 
            align="center"
          />
        </div>

        <div className="mb-10 md:mb-14">
          <AnimatedDivider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {industriesData.map((industry) => (
            <div key={industry.id} className="h-full">
              <IndustryCard
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                features={industry.features}
                diagram={industry.diagram}
                metrics={industry.metrics}
                ctaText={industry.ctaText}
                link={industry.link}
                colorTheme={industry.colorTheme}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}