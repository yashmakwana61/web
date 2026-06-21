'use client';

import React from 'react';
import { ServicePageTemplate } from '@/components/service/ServicePageTemplate.jsx';
import { Globe, Shield, Zap, Target } from 'lucide-react';

function ErpConsultingPage() {
  const pageData = {
    title: "Enterprise ERP Consulting",
    tagline: "Strategic consulting, vendor-agnostic selection, and seamless deployment of Tier-1 ERP systems.",
    breadcrumb: "Services / ERP Consulting",
    metaDescription: "Professional ERP Consulting services for Education, Healthcare & Manufacturing. Expert implementation, training & support. Contact us today.",
    metaKeywords: "ERP Consulting, Enterprise Resource Planning, SAP, Oracle, implementation, digital transformation",
    overview: {
      headline: "Transform Your Operations with the Right ERP",
      description: "An ERP system is the central nervous system of your business. We ensure you select, customize, and deploy the perfect solution without the typical risks of scope creep and budget overruns.",
      benefits: [
        "Unbiased, vendor-agnostic system selection",
        "Process re-engineering prior to software mapping",
        "Rigorous risk management and change management",
        "Post-go-live optimization and training"
      ],
      whyUs: [
        { icon: Shield, title: "Risk Mitigation", desc: "Our proven methodology reduces implementation failures by 90%." },
        { icon: Target, title: "Business Aligned", desc: "We focus on your ROI, not just software installation." }
      ]
    },
    features: [
      { icon: Globe, title: "Vendor Selection", description: "Comprehensive analysis of SAP, Oracle, Microsoft, and niche vendors against your needs." },
      { icon: Zap, title: "Process Mapping", description: "Identifying bottlenecks and designing optimized 'To-Be' workflows." },
      { icon: Shield, title: "Data Migration", description: "Secure ETL processes to ensure historical data integrity." },
      { icon: Target, title: "Change Management", description: "Ensuring high user adoption through targeted training programs." }
    ],
    process: [
      { title: "Discovery & Blueprinting", description: "Deep dive into your current state and defining exact system requirements." },
      { title: "Selection & Architecture", description: "Evaluating vendors and designing the target technical architecture." },
      { title: "Implementation & Testing", description: "Agile configuration, custom development, and rigorous UAT." },
      { title: "Go-Live & Support", description: "Phased rollout with continuous performance monitoring and support." }
    ],
    pricing: [
      { name: "Strategic Advisory", desc: "For companies needing system selection and roadmap planning." },
      { name: "End-to-End Implementation", desc: "Full lifecycle deployment from blueprint to go-live." },
      { name: "Rescue & Recovery", desc: "Fixing and optimizing failed or stalled ERP projects." }
    ],
    faqs: [
      { q: "How long does a typical ERP implementation take?", a: "Depending on complexity, implementations range from 4 to 12 months. We use an agile phased approach to deliver value faster." },
      { q: "Are you partnered with specific vendors?", a: "We maintain strategic partnerships but remain vendor-agnostic during selection to ensure the best fit for your specific needs." },
      { q: "How do you handle data migration?", a: "We use automated ETL tools, rigorous data cleansing, and multiple test migrations before the final cutover." }
    ]
  };

  return <ServicePageTemplate data={pageData} />;
}

export default ErpConsultingPage;