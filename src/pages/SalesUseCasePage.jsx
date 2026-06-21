'use client';

import React from 'react';

import Link from '@/components/Link';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

function SalesUseCasePage() {
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
              <h1 className="mb-6">Sales automation</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Streamline CRM workflows, lead management, and sales pipelines with intelligent automation.
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
              <h2 className="text-center mb-12">Automated sales processes</h2>
              <div className="space-y-8">
                <div className="bg-muted rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">CRM workflow automation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Automate customer relationship management from lead to close:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Automated lead capture from website forms, emails, and social media
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Lead scoring and qualification based on engagement and demographics
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Automated lead assignment to sales reps based on territory or criteria
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Follow-up task creation and reminder automation
                    </li>
                  </ul>
                </div>

                <div className="bg-muted rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Lead nurturing automation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Keep prospects engaged with automated nurture campaigns:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Drip email campaigns based on lead behavior and stage
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Personalized content delivery based on industry and interests
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Automated webinar invitations and follow-up sequences
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Lead re-engagement campaigns for dormant prospects
                    </li>
                  </ul>
                </div>

                <div className="bg-muted rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Quote and proposal automation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Speed up the sales cycle with automated documentation:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Automated quote generation from CRM opportunity data
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Proposal template population with customer-specific details
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Electronic signature collection and contract management
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Automated order creation upon contract signing
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Pipelines */}
        <section className="py-20 bg-muted">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-center mb-12">Industry-specific sales pipelines</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Education: Enrollment pipeline</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Automate student inquiry management, campus tour scheduling, application follow-ups, and enrollment conversion tracking. Nurture parent leads with program information and success stories.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Healthcare: Patient acquisition</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Manage patient referrals, appointment booking automation, and new patient onboarding. Track patient acquisition sources and conversion rates for marketing optimization.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold mb-2">Manufacturing: B2B sales pipeline</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Automate RFQ responses, technical specification sharing, sample request tracking, and multi-stakeholder approval workflows. Manage long sales cycles with automated touchpoints.
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
              <h2 className="mb-6">Ready to automate your sales process?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Schedule a consultation to see how sales automation can accelerate your pipeline and improve conversion rates.
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

export default SalesUseCasePage;