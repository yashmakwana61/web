'use client';

import React from 'react';

import Link from '@/components/Link';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Target, Lightbulb, Users, Award } from 'lucide-react';

function AboutPage() {
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
              <h1 className="mb-6">About PreciseFect</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We combine deep industry expertise with cutting-edge technology to deliver ERP and automation solutions that drive real business results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl">Our vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the trusted partner for organizations seeking to transform their operations through intelligent automation and enterprise resource planning. We envision a future where businesses in education, healthcare, and manufacturing operate with unprecedented efficiency and insight.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-3xl">Our mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver precision-engineered ERP and automation solutions that eliminate inefficiencies, reduce costs, and empower teams to focus on strategic work. We achieve this through industry-specific expertise, proven methodologies, and unwavering commitment to client success.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-20 bg-muted">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-center mb-12">Our expertise</h2>
              <div className="space-y-8">
                <div className="bg-background rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">ERP implementation and customization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We specialize in selecting, implementing, and customizing ERP systems including Odoo and ERPNext. Our team has deployed solutions for organizations ranging from 50 to 5,000+ users, with expertise in complex multi-site implementations and legacy system migrations.
                  </p>
                </div>

                <div className="bg-background rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">AI and workflow automation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From intelligent document processing to automated approval workflows, we build AI-powered solutions that learn from your data and adapt to your processes. Our automation projects have reduced manual processing time by an average of 73% across client organizations.
                  </p>
                </div>

                <div className="bg-background rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Business intelligence and analytics</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We transform raw data into actionable insights through custom Power BI dashboards, KPI tracking systems, and predictive analytics. Our BI solutions help leadership teams make data-driven decisions with real-time visibility into operations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Experience */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-center mb-12">Industry experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    School ERP systems, student lifecycle management, admissions automation, and LMS integration for K-12 and higher education institutions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
                  <p className="text-muted-foreground">
                    Hospital ERP platforms, patient workflow automation, appointment scheduling, and billing systems for clinics and healthcare networks.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
                  <p className="text-muted-foreground">
                    Production planning, inventory automation, quality control dashboards, and supply chain optimization for discrete and process manufacturers.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-muted">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mb-6">Our team</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                PreciseFect is powered by a team of ERP consultants, automation engineers, and industry specialists with an average of 12 years of experience. We combine technical expertise with deep understanding of education, healthcare, and manufacturing operations to deliver solutions that truly fit your needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our consultants hold certifications in Odoo, ERPNext, Power BI, and leading automation platforms. More importantly, they bring real-world experience from working inside the industries we serve.
              </p>
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
              <h2 className="mb-6">Ready to work with us?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Let's discuss how PreciseFect can help transform your operations with precision-engineered ERP and automation solutions.
              </p>
              <Button asChild size="lg" className="transition-all duration-200 hover:scale-105 active:scale-[0.98]">
                <Link to="/contact">Talk to an expert</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;