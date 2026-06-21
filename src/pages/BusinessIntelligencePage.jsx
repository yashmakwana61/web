'use client';

import React from 'react';
import { ServicePageTemplate } from '@/components/service/ServicePageTemplate.jsx';
import { LineChart, Database, BarChart3, Presentation } from 'lucide-react';

function BusinessIntelligencePage() {
  const pageData = {
    title: "Business Intelligence & Analytics",
    tagline: "Turn scattered databases into vivid, real-time dashboards that drive executive decisions.",
    breadcrumb: "Services / Business Intelligence",
    metaDescription: "Professional Business Intelligence services for Education, Healthcare & Manufacturing. Expert implementation, training & support. Contact us today.",
    metaKeywords: "Business Intelligence, PowerBI, Tableau, Data Analytics, Dashboards, Data Warehousing",
    overview: {
      headline: "See the Full Picture of Your Business",
      description: "Stop relying on static spreadsheets. We build dynamic data pipelines that aggregate information from your ERP, CRM, and financial systems into centralized, interactive dashboards.",
      benefits: [
        "Single source of truth for all company data",
        "Real-time KPI tracking on mobile and desktop",
        "Identify hidden revenue leaks and opportunities",
        "Automated reporting eliminates manual Excel work"
      ],
      whyUs: [
        { icon: Database, title: "Data Integrity", desc: "We ensure complex data models are cleaned, validated, and secure." },
        { icon: LineChart, title: "Actionable UX", desc: "We design dashboards for decision-makers, not data scientists." }
      ]
    },
    features: [
      { icon: Database, title: "Data Warehousing", description: "Consolidating siloed data into Snowflake, BigQuery, or Redshift." },
      { icon: BarChart3, title: "Interactive Dashboards", description: "Custom PowerBI, Tableau, or Metabase implementations." },
      { icon: Presentation, title: "Financial Reporting", description: "Automated P&L, Cash Flow, and Balance Sheet generation." },
      { icon: LineChart, title: "Predictive Modeling", description: "Moving from historical reporting to future forecasting." }
    ],
    process: [
      { title: "Metric Definition", description: "Identifying the KPIs that actually matter to your executive team." },
      { title: "Data Engineering", description: "Building robust ETL pipelines to clean and transport your data." },
      { title: "Visualization Design", description: "Drafting user-friendly, high-contrast dashboards." },
      { title: "Deployment & Training", description: "Rolling out dashboards and training staff to self-serve analytics." }
    ],
    pricing: [
      { name: "Analytics Audit", desc: "Evaluating current data health and tool stacks." },
      { name: "Dashboard Development", desc: "End-to-end creation of specific departmental dashboards." },
      { name: "Enterprise Data Warehouse", desc: "Full-scale data centralization and BI rollout." }
    ],
    faqs: [
      { q: "We have messy data. Can you still help?", a: "Absolutely. Data cleansing and structuring (ETL) is the most critical part of our BI implementations. We fix the data before visualizing it." },
      { q: "Which BI tool do you recommend?", a: "We typically recommend PowerBI or Tableau for large enterprises, and Metabase or Looker for agile startups, but we tailor recommendations to your existing stack." },
      { q: "Is the data real-time?", a: "We can configure pipelines for real-time streaming or scheduled batch updates (e.g., every hour or overnight) depending on your cost constraints and business needs." }
    ]
  };

  return <ServicePageTemplate data={pageData} />;
}

export default BusinessIntelligencePage;