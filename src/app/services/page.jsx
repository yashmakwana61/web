import React from 'react';
import { client } from '@/lib/sanity/client';
import { servicesListQuery } from '@/lib/sanity/queries';
import ScrollToTop from '@/components/ScrollToTop';
import { AnimatedLineChart } from '@/components/charts/AnimatedLineChart';
import Link from '@/components/Link';
import { Settings, ArrowRight, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export const metadata = {
  title: 'Services - PreciseFect',
  description: 'Explore our services including ERP consulting, Odoo, ERPNext, AI automation, RPA, and business intelligence.',
};

export const revalidate = 60; // Revalidate every 60 seconds

const chartData = [
  { name: 'Q1', Efficiency: 40, Cost: 100 },
  { name: 'Q2', Efficiency: 60, Cost: 80 },
  { name: 'Q3', Efficiency: 85, Cost: 50 },
  { name: 'Q4', Efficiency: 100, Cost: 30 },
];

export default async function ServicesPage() {
  const services = await client.fetch(servicesListQuery);

  return (
    <>
      <ScrollToTop />
      
      <main className="pt-24 lg:pt-32">
        <section className="section-container pb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="mb-6">Comprehensive Digital Transformation</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide end-to-end consulting, deployment, and optimization for enterprise systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 max-w-6xl mx-auto">
            {services.map((svc, i) => (
              <div key={svc.slug.current} className="relative group flex flex-col h-full bg-card border hover:border-primary/50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
                <p className="text-muted-foreground text-sm flex-grow mb-6">
                  {svc.tagline || 'Explore our specialized approach and implementation methodology.'}
                </p>
                <Link href={`/services/${svc.slug.current}`} className="text-primary font-semibold flex items-center text-sm mt-auto group-hover:underline">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-muted/30 rounded-3xl p-8 lg:p-12 border border-border/50 max-w-7xl mx-auto">
            <div>
              <h2 className="mb-6">The ROI of our implementations</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our clients typically see a massive drop in operational costs within the first three quarters, coupled with near-immediate efficiency gains.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-1))]" /> Operational Efficiency (Up 150%)</li>
                <li className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-2))]" /> Process Costs (Down 70%)</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-xl border shadow-sm">
              <AnimatedLineChart 
                data={chartData} 
                lines={[
                  { key: 'Efficiency', name: 'Efficiency', color: 'hsl(var(--chart-1))' },
                  { key: 'Cost', name: 'Costs', color: 'hsl(var(--chart-2))' }
                ]} 
                height={300} 
              />
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
}

