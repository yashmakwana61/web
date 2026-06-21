'use client';

import React from 'react';

import Link from '@/components/Link';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

function FinanceUseCasePage() {
  return (
    <>
      

      <Header />

      <main>
        {/* Hero */}
        <section className="py-20 bg-muted">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="mb-6">Finance automation</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Streamline accounts payable, vendor management, and financial workflows with intelligent automation.
              </p>
              <Button asChild size="lg" className="transition-all duration-200 hover:scale-105 active:scale-[0.98]">
                <Link to="/contact">Get a free automation audit</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Core Processes */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-center mb-12">Automated finance processes</h2>
              <div className="space-y-8">
                <div className="bg-muted rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Accounts payable automation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Eliminate manual invoice processing with end-to-end AP automation:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      AI-powered invoice data extraction from PDFs and emails
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Automated three-way matching against purchase orders and receipts
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Intelligent routing for approval based on amount thresholds and departments
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Automated payment scheduling and vendor communication
                    </li>
                  </ul>
                </div>

                <div className="bg-muted rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Vendor workflow automation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Streamline vendor onboarding and management:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Automated vendor registration with document collection and verification
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Vendor performance tracking and rating systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Automated vendor statement reconciliation
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Self-service vendor portal for invoice submission and payment status
                    </li>
                  </ul>
                </div>

                <div className="bg-muted rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Expense management</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Automate employee expense reporting and reimbursement:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Mobile expense capture with receipt scanning
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Policy compliance checks and automated approval workflows
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Integration with accounting systems for automatic posting
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Automated reimbursement processing
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Variations */}
        <section className="py-20 bg-muted">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-center mb-12">Industry-specific applications</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Education: Budget management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Automate department budget tracking, grant fund management, and expense allocation across programs. Track spending against approved budgets with automated alerts for overruns.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Healthcare: Medical billing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Automate medical supply invoicing, pharmaceutical vendor payments, and insurance reimbursement tracking. Integrate with revenue cycle management for complete financial visibility.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold mb-2">Manufacturing: Cost tracking</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Automate raw material purchase invoices, track cost per unit production, and manage vendor payments for components and supplies. Real-time cost variance analysis.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="mb-6">Ready to automate your finance processes?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Get a free automation audit to identify opportunities for streamlining accounts payable and vendor workflows.
              </p>
              <Button asChild size="lg" className="transition-all duration-200 hover:scale-105 active:scale-[0.98]">
                <Link to="/contact">Get a free automation audit</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default FinanceUseCasePage;