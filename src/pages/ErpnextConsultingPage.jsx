'use client';

import React from 'react';
import { ServicePageTemplate } from '@/components/service/ServicePageTemplate.jsx';
import { Code, Zap, Server, Shield } from 'lucide-react';

function ErpnextConsultingPage() {
  const pageData = {
    title: "ERPNext Consulting",
    tagline: "Agile, scalable, and beautifully designed ERP solutions built on the Frappe framework.",
    breadcrumb: "Services / ERPNext",
    metaDescription: "Professional ERPNext services for Education, Healthcare & Manufacturing. Expert implementation, training & support. Contact us today.",
    metaKeywords: "ERPNext Consulting, Frappe framework, Open Source ERP, implementation",
    overview: {
      headline: "The Modern Open-Source Alternative",
      description: "ERPNext provides an incredibly intuitive user interface backed by the powerful Frappe framework. We deploy ERPNext to give you 100% control over your data and code.",
      benefits: [
        "100% Open Source with no vendor lock-in",
        "Rapid customization via Frappe Framework",
        "Beautiful, modern, and mobile-friendly UI",
        "Comprehensive out-of-the-box functionality"
      ],
      whyUs: [
        { icon: Code, title: "Frappe Masters", desc: "Deep technical expertise in Frappe framework customization." },
        { icon: Server, title: "Cloud Native", desc: "Optimized deployment on AWS, AWS, or private clouds." }
      ]
    },
    features: [
      { icon: Zap, title: "Rapid Deployment", description: "Get core modules running in weeks, not months." },
      { icon: Code, title: "Frappe Customization", description: "Doctypes, Server Scripts, and Custom Apps built to spec." },
      { icon: Shield, title: "Data Security", description: "Private cloud hosting ensures your data never leaves your control." },
      { icon: Server, title: "API First", description: "Seamlessly integrate with external systems via robust REST APIs." }
    ],
    process: [
      { title: "System Architecture", description: "Defining server infrastructure and core module selection." },
      { title: "Frappe Customization", description: "Building custom DocTypes and workflows specific to your business." },
      { title: "Data Migration", description: "Securely importing historical data via ERPNext data tools." },
      { title: "Training & Handover", description: "Empowering your team to manage the system independently." }
    ],
    pricing: [
      { name: "Standard Implementation", desc: "Setup of core ERPNext modules on optimized infrastructure." },
      { name: "Advanced Customization", desc: "Heavy Frappe framework modifications and custom app development." },
      { name: "Frappe Cloud Management", desc: "Dedicated hosting, updates, and database maintenance." }
    ],
    faqs: [
      { q: "Is ERPNext really free?", a: "The software itself is 100% free and open-source. You only pay for hosting, implementation services, and customization." },
      { q: "How does it compare to Odoo?", a: "ERPNext offers all features for free without a dual-licensing model, whereas Odoo locks advanced features behind the Enterprise paywall. ERPNext is generally simpler to customize via Frappe." },
      { q: "Can we host it on our own servers?", a: "Yes, ERPNext can be deployed on your on-premise servers or any cloud provider." }
    ]
  };

  return <ServicePageTemplate data={pageData} />;
}

export default ErpnextConsultingPage;