'use client';

import React from 'react';

import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { AnimatedBarChart } from '@/components/charts/AnimatedBarChart';
import { AnimatedLineChart } from '@/components/charts/AnimatedLineChart';
import Link from '@/components/Link';
import { Button } from '@/components/ui/button';
import { Database, Settings, Cpu, Bot, LineChart, FileText, ArrowRight } from 'lucide-react';

function ServicesPage() {
  const chartData = [
    { name: 'Q1', Efficiency: 40, Cost: 100 },
    { name: 'Q2', Efficiency: 60, Cost: 80 },
    { name: 'Q3', Efficiency: 85, Cost: 50 },
    { name: 'Q4', Efficiency: 100, Cost: 30 },
  ];

  const services = [
    { icon: Database, title: "ERP Consulting", path: "/services/erp-consulting" },
    { icon: Settings, title: "Odoo Consulting", path: "/services/odoo" },
    { icon: Cpu, title: "ERPNext Consulting", path: "/services/erpnext" },
    { icon: Bot, title: "AI & Automation", path: "/services/ai-automation" },
    { icon: LineChart, title: "Business Intelligence", path: "/services/business-intelligence" },
    { icon: FileText, title: "RPA Services", path: "/services/rpa" },
  ];

  return (
    <>
      
      <Header />
      <main className="pt-24 lg:pt-32">
        <section className="section-container pb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="mb-6">Comprehensive Digital Transformation</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide end-to-end consulting, deployment, and optimization for enterprise systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {services.map((svc, i) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={svc.path} className="flex flex-col h-full bg-card border hover:border-primary/50 rounded-2xl p-8 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svc.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow mb-6">Explore our specialized approach and implementation methodology.</p>
                  <span className="text-primary font-semibold flex items-center text-sm mt-auto group-hover:underline">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-muted/30 rounded-3xl p-8 lg:p-12 border border-border/50">
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
      <Footer />
    </>
  );
}

export default ServicesPage;