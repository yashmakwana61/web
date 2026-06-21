'use client';

import React from 'react';

import Link from '@/components/Link';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

function HrUseCasePage() {
  return (
    <>
      <div>
        {/* Hero */}
        <section className="py-20 bg-muted">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="mb-6">HR automation</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Streamline employee onboarding, recruitment, and HR workflows with intelligent automation.
              </p>
              <Button asChild size="lg" className="transition-all duration-200 hover:scale-105 active:scale-[0.98]">
                <Link to="/contact">Book a consultation</Link>
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
              <h2 className="text-center mb-12">Automated HR processes</h2>
              <div className="space-y-8">
                <div className="bg-muted rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Employee onboarding automation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Transform new hire onboarding from days to hours:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Automated offer letter generation and digital signature collection
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Pre-boarding document collection with automated reminders
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      IT provisioning automation for email, system access, and equipment
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Automated training assignment and progress tracking
                    </li>
                  </ul>
                </div>

                <div className="bg-muted rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Recruitment workflow automation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Accelerate hiring with automated recruitment processes:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      AI-powered resume screening and candidate ranking
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Automated interview scheduling with calendar integration
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Candidate communication automation with status updates
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Background check initiation and tracking
                    </li>
                  </ul>
                </div>

                <div className="bg-muted rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Leave and attendance management</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Automate time-off requests and attendance tracking:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Self-service leave application with automated approval routing
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Leave balance tracking and accrual calculations
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Attendance integration with biometric or card systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Automated payroll integration for leave deductions
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Context */}
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
                  <h3 className="text-xl font-semibold mb-2">Education: Faculty onboarding</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Automate teacher credential verification, course assignment, and training on school systems. Track certification renewals and professional development requirements.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Healthcare: Medical staff credentialing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Streamline physician and nurse onboarding with automated license verification, hospital privilege tracking, and compliance training. Manage shift scheduling and on-call rotations.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold mb-2">Manufacturing: Workforce management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Automate shop floor worker onboarding, safety training tracking, and shift scheduling. Manage skill certifications and equipment operation qualifications.
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
              <h2 className="mb-6">Ready to automate your HR processes?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Schedule a consultation to see how HR automation can reduce onboarding time and improve employee experience.
              </p>
              <Button asChild size="lg" className="transition-all duration-200 hover:scale-105 active:scale-[0.98]">
                <Link to="/contact">Talk to an expert</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HrUseCasePage;