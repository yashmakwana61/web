'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from '@/components/Link';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export function ServicePageTemplate({ data }) {
  // Generate JSON-LD Schema
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": data.title,
    "provider": {
      "@type": "Organization",
      "name": "PreciseFect",
      "url": "https://precisefect.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@precisefect.com",
        "telephone": "+91-92134-87967",
        "contactType": "customer service"
      }
    },
    "description": data.metaDescription,
    "areaServed": ["IN", "US", "Global"]
  };

  return (
    <>
      

      <Header />
      
      <main className="min-h-screen pt-[72px] md:pt-[80px]">
        {/* 1. Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 border-b">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="section-container relative z-10 text-center max-w-4xl">
            <div className="inline-flex items-center justify-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              <span className="flex w-2 h-2 rounded-full bg-primary mr-2" /> {data.breadcrumb}
            </div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              {data.title}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              {data.tagline}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto text-base h-14 px-8 shadow-lg shadow-primary/20"><Link to="/contact">Book Free Consultation</Link></Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-14 px-8 border-gray-300"><Link to="#features">Explore Features</Link></Button>
            </motion.div>
          </div>
        </section>

        {/* 2. Overview Section */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{data.overview.headline}</h2>
              <p className="text-lg text-gray-600 mb-8">{data.overview.description}</p>
              <ul className="space-y-4">
                {data.overview.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 shadow-sm relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Why PreciseFect?</h3>
              <div className="space-y-6 relative z-10">
                {data.overview.whyUs.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white border shadow-sm flex items-center justify-center flex-shrink-0 text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Features Grid */}
        <section id="features" className="py-20 lg:py-24 bg-slate-50 border-y border-gray-100">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
              <p className="text-lg text-gray-600">Enterprise-grade features designed for scalable growth and operational excellence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {data.features.map((feat, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <feat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feat.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Process Timeline */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Implementation Process</h2>
              <p className="text-lg text-gray-600">A proven, risk-free methodology that ensures on-time and on-budget delivery.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              {data.process.map((step, i) => (
                <div key={i} className="flex gap-6 md:gap-10 mb-10 last:mb-0 relative">
                  {i !== data.process.length - 1 && <div className="absolute left-6 md:left-8 top-16 bottom-[-40px] w-px bg-gray-200" />}
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-50 border-2 border-primary text-primary flex items-center justify-center font-bold text-lg md:text-xl flex-shrink-0 z-10">
                    {i + 1}
                  </div>
                  <div className="pt-2 md:pt-4 pb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Pricing & 6. FAQs */}
        <section className="py-20 lg:py-24 bg-slate-50 border-t border-gray-100">
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Pricing Summary */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transparent Engagement Models</h2>
              <p className="text-gray-600 mb-8 text-lg">We offer flexible pricing structures tailored to enterprise requirements.</p>
              <div className="space-y-4">
                {data.pricing.map((tier, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{tier.name}</h3>
                      <p className="text-sm text-gray-500">{tier.desc}</p>
                    </div>
                    <Button variant="ghost" size="sm" asChild className="ml-4"><Link to="/contact">Get Quote</Link></Button>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {data.faqs.map((faq, i) => (
                  <details key={i} className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-gray-900">
                      <span>{faq.q}</span>
                      <span className="transition group-open:rotate-180"><ChevronDown className="w-5 h-5 text-gray-400" /></span>
                    </summary>
                    <div className="text-gray-600 px-6 pb-6 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. CTA Section */}
        <section className="py-20 bg-primary text-white text-center">
          <div className="section-container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Business?</h2>
            <p className="text-lg text-primary-foreground/90 mb-10">Our consultants are ready to map out your digital transformation journey.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 h-14 px-8 text-base">
                <Link to="/contact">Schedule a Strategy Call</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8 text-base">
                <a href="mailto:info@precisefect.com">Email Our Experts</a>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}