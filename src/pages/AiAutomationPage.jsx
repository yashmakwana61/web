'use client';

import React from 'react';
import { ServicePageTemplate } from '@/components/service/ServicePageTemplate.jsx';
import { Brain, Cpu, Bot, TrendingUp } from 'lucide-react';

function AiAutomationPage() {
  const pageData = {
    title: "AI & Workflow Automation",
    tagline: "Replace repetitive tasks with intelligent logic that learns, adapts, and accelerates your business.",
    breadcrumb: "Services / AI Automation",
    metaDescription: "Professional AI Automation services for Education, Healthcare & Manufacturing. Expert implementation, training & support. Contact us today.",
    metaKeywords: "AI Automation, Workflow Automation, Machine Learning, Cognitive Automation, Business Process",
    overview: {
      headline: "Make Your Operations Intelligent",
      description: "We integrate state-of-the-art Artificial Intelligence and Machine Learning models directly into your business workflows, turning manual decisions into automated, data-driven actions.",
      benefits: [
        "Reduce manual data entry by up to 90%",
        "Intelligent document processing (OCR + NLP)",
        "Predictive analytics for inventory and sales",
        "24/7 automated customer service workflows"
      ],
      whyUs: [
        { icon: Brain, title: "Applied AI", desc: "We focus on practical AI that drives immediate ROI, not science projects." },
        { icon: Cpu, title: "Seamless Integration", desc: "Connecting AI models securely to your existing ERP and CRM." }
      ]
    },
    features: [
      { icon: Bot, title: "Intelligent Document Processing", description: "Automatically extract data from invoices, POs, and forms using NLP." },
      { icon: Brain, title: "Predictive Analytics", description: "Forecast demand and optimize supply chains using historical data." },
      { icon: Cpu, title: "Smart Routing", description: "AI-driven logic that assigns tasks to the right human or bot based on context." },
      { icon: TrendingUp, title: "Cognitive Chatbots", description: "Deploy internal or external bots that understand context and trigger workflows." }
    ],
    process: [
      { title: "Process Identification", description: "Finding the highest ROI opportunities for cognitive automation." },
      { title: "Model Training", description: "Training machine learning models on your specific dataset." },
      { title: "Integration Build", description: "Connecting the AI inference engine to your ERP via APIs." },
      { title: "Continuous Learning", description: "Deploying feedback loops so the AI improves accuracy over time." }
    ],
    pricing: [
      { name: "AI Readiness Assessment", desc: "Evaluating your data and identifying automation targets." },
      { name: "Custom Model Deployment", desc: "Training and integrating specific ML models for your business." },
      { name: "AI-as-a-Service", desc: "Managed cloud AI infrastructure with ongoing tuning." }
    ],
    faqs: [
      { q: "Is our data safe with your AI models?", a: "Yes. We use private, isolated instances of AI models. Your proprietary data is never used to train public models." },
      { q: "Do we need a massive dataset to start?", a: "Not necessarily. We leverage pre-trained foundational models and fine-tune them with your specific data to achieve high accuracy quickly." },
      { q: "How do we measure ROI on AI?", a: "We establish clear KPIs before starting, typically focusing on hours saved, error reduction rates, and increased throughput." }
    ]
  };

  return <ServicePageTemplate data={pageData} />;
}

export default AiAutomationPage;