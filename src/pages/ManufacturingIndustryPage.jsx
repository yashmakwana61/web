'use client';

import React from 'react';

import Link from '@/components/Link';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Factory, Package, TrendingUp, Settings } from 'lucide-react';

function ManufacturingIndustryPage() {
  return (
    <>
      

      <Header />

      <main>
        {/* Hero */}
        <section className="py-20 bg-muted">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="mb-6">Manufacturing ERP solutions</h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Production-focused ERP and automation solutions that optimize manufacturing operations from planning to delivery.
                </p>
                <Link to="/contact" className="inline-block industry-card-button max-w-xs">
                  Book a consultation
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1612758456015-3d41b5d04c8b"
                  alt="Modern manufacturing facility with automated production line and digital monitoring systems"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Solutions */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-center mb-12">Solutions for manufacturers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-muted rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Factory className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Production planning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Optimize production schedules, manage work orders, and track job progress with real-time visibility into shop floor operations.
                  </p>
                </div>

                <div className="bg-muted rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <Package className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Inventory automation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Automated inventory tracking, reorder point management, and warehouse optimization across multiple locations.
                  </p>
                </div>

                <div className="bg-muted rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Quality control</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Automated quality inspections, defect tracking, and root cause analysis to maintain product standards.
                  </p>
                </div>

                <div className="bg-muted rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Factory dashboards</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Real-time production metrics, OEE tracking, and performance analytics for data-driven manufacturing decisions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-muted">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-center mb-12">Key features</h2>
              <div className="space-y-6">
                <div className="bg-background rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Bill of materials management</h3>
                  <p className="text-muted-foreground">
                    Create and manage multi-level BOMs with component tracking, version control, and cost rollup calculations.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Work order tracking</h3>
                  <p className="text-muted-foreground">
                    Generate work orders from sales orders, track production progress, and manage job cards for shop floor operations.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Inventory and warehouse management</h3>
                  <p className="text-muted-foreground">
                    Real-time inventory tracking with barcode scanning, bin location management, and automated stock transfers between warehouses.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Quality inspection workflows</h3>
                  <p className="text-muted-foreground">
                    Define quality checkpoints, record inspection results, manage non-conformance reports, and track corrective actions.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Purchase and vendor management</h3>
                  <p className="text-muted-foreground">
                    Automated purchase requisitions, vendor comparison, purchase order tracking, and goods receipt processing.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Production analytics</h3>
                  <p className="text-muted-foreground">
                    Dashboards showing OEE, cycle time, throughput, downtime analysis, and cost per unit for continuous improvement.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-center mb-12">Common use cases</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Discrete manufacturing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Manage assembly operations, track components, and coordinate production across multiple work centers for products like electronics, machinery, or automotive parts.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Process manufacturing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Handle batch production, recipe management, and quality control for industries like food processing, chemicals, or pharmaceuticals.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold mb-2">Make-to-order manufacturing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Manage custom orders, configure BOMs based on customer specifications, and track project-based production with delivery timelines.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="mb-6">Optimize your manufacturing operations</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Schedule a consultation to see how our manufacturing ERP solutions can improve production efficiency and reduce costs.
              </p>
              <Link to="/contact" className="inline-block industry-card-button max-w-xs">
                Talk to an expert
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ManufacturingIndustryPage;