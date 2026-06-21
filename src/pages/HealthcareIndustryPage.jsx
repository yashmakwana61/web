'use client';

import React from 'react';

import Link from '@/components/Link';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Heart, Calendar, FileText, Activity } from 'lucide-react';

function HealthcareIndustryPage() {
  return (
    <>
      <div>
        {/* Hero */}
        <section className="py-20 bg-muted">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="mb-6">Healthcare ERP solutions</h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Comprehensive ERP and automation solutions for hospitals, clinics, and healthcare networks.
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
                  src="https://images.unsplash.com/photo-1601841197690-6f0838bdb005"
                  alt="Healthcare professionals using digital patient management system in modern hospital"
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
              <h2 className="text-center mb-12">Solutions for healthcare providers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-muted rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Hospital ERP systems</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Integrated platforms that manage patient records, appointments, billing, pharmacy, and administrative workflows.
                  </p>
                </div>

                <div className="bg-muted rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Appointment automation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Online booking, automated reminders, and intelligent scheduling that optimizes doctor availability and reduces no-shows.
                  </p>
                </div>

                <div className="bg-muted rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Patient workflows</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Streamline patient intake, registration, consultation, and discharge processes with automated workflows.
                  </p>
                </div>

                <div className="bg-muted rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Billing automation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Automated billing, insurance claim processing, and payment tracking to improve revenue cycle management.
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
                  <h3 className="text-lg font-semibold mb-2">Electronic health records</h3>
                  <p className="text-muted-foreground">
                    Comprehensive patient records including medical history, prescriptions, lab results, and treatment plans accessible to authorized staff.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Appointment management</h3>
                  <p className="text-muted-foreground">
                    Online booking portal, automated SMS/email reminders, doctor schedule management, and waitlist handling.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Patient registration</h3>
                  <p className="text-muted-foreground">
                    Quick patient check-in with automated data capture from insurance cards, ID verification, and consent form management.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Pharmacy and inventory</h3>
                  <p className="text-muted-foreground">
                    Track medication inventory, manage prescriptions, automate reorder points, and integrate with billing systems.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Insurance and billing</h3>
                  <p className="text-muted-foreground">
                    Automated insurance eligibility verification, claim submission, payment posting, and accounts receivable management.
                  </p>
                </div>

                <div className="bg-background rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Analytics and reporting</h3>
                  <p className="text-muted-foreground">
                    Dashboards tracking patient volume, wait times, revenue cycles, bed occupancy, and clinical outcomes for informed decision-making.
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
                  <h3 className="text-xl font-semibold mb-2">Multi-specialty hospitals</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Coordinate care across departments with unified patient records, centralized scheduling, and integrated billing for inpatient and outpatient services.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Clinics and diagnostic centers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Manage appointments, patient records, lab test orders, and result delivery. Automate billing and insurance claims for outpatient services.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold mb-2">Healthcare networks</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Centralized patient data across multiple locations, standardized workflows, and consolidated reporting for multi-site healthcare organizations.
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
              <h2 className="mb-6">Modernize your healthcare operations</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Schedule a consultation to see how our healthcare ERP solutions can improve patient care and operational efficiency.
              </p>
              <Link to="/contact" className="inline-block industry-card-button max-w-xs">
                Talk to an expert
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HealthcareIndustryPage;