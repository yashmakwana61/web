'use client';

import React from 'react';
import { ServicePageTemplate } from '@/components/service/ServicePageTemplate.jsx';
import { Layers, Puzzle, Coins, Rocket } from 'lucide-react';

function OdooConsultingPage() {
  const pageData = {
    title: "Odoo Implementation & Consulting",
    tagline: "Unlock the power of the world's most flexible open-source ERP with our custom deployment strategies.",
    breadcrumb: "Services / Odoo Consulting",
    metaDescription: "Professional Odoo Consulting services for Education, Healthcare & Manufacturing. Expert implementation, training & support. Contact us today.",
    metaKeywords: "Odoo Consulting, Odoo Implementation, Open Source ERP, Python ERP",
    overview: {
      headline: "The All-in-One Management Software",
      description: "Odoo offers a suite of perfectly integrated business apps. We help you navigate its modular architecture to build a system that perfectly matches your workflow without heavy licensing fees.",
      benefits: [
        "Zero per-user license lock-in (Community) or low-cost (Enterprise)",
        "Highly modular - start small and scale up",
        "Seamless integration between CRM, Sales, Inventory, and Accounting",
        "Custom Python module development"
      ],
      whyUs: [
        { icon: Puzzle, title: "Deep Expertise", desc: "Our Python developers build robust custom Odoo modules." },
        { icon: Coins, title: "Cost Effective", desc: "Maximize ROI with optimized server setups and architecture." }
      ]
    },
    features: [
      { icon: Layers, title: "Modular Setup", description: "Deploy only the apps you need right now, add more later seamlessly." },
      { icon: Rocket, title: "Custom App Dev", description: "Building specialized modules for unique industry requirements." },
      { icon: Puzzle, title: "3rd-Party Integrations", description: "Connecting Odoo with your existing legacy systems or APIs." },
      { icon: Coins, title: "Performance Tuning", description: "Optimizing PostgreSQL and Odoo server for enterprise workloads." }
    ],
    process: [
      { title: "Gap Analysis", description: "Mapping standard Odoo features against your business needs." },
      { title: "Prototyping", description: "Creating a functional Sandbox environment for early testing." },
      { title: "Customization & Integrations", description: "Developing necessary modules and connecting external APIs." },
      { title: "Deployment", description: "Data import, user training, and launching the live system." }
    ],
    pricing: [
      { name: "Odoo QuickStart", desc: "Rapid deployment of standard modules for small businesses." },
      { name: "Custom Implementation", desc: "Tailored workflows and custom module development." },
      { name: "Managed Hosting & Support", desc: "24/7 server monitoring, backups, and user support." }
    ],
    faqs: [
      { q: "Odoo Community vs Enterprise?", a: "Community is free and open-source but lacks some advanced accounting/manufacturing features. Enterprise requires a license but includes all features and mobile apps. We help you choose the best ROI." },
      { q: "Can Odoo replace my current accounting software?", a: "Yes, Odoo has a robust, localized accounting engine that can replace systems like QuickBooks or Xero." },
      { q: "Do you offer post-go-live support?", a: "Absolutely. We offer SLA-backed support, version upgrades, and ongoing training." }
    ]
  };

  return <ServicePageTemplate data={pageData} />;
}

export default OdooConsultingPage;