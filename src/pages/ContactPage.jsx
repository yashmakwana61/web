'use client';

import React from 'react';

import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { AnimatedContactForm } from '@/components/AnimatedContactForm.jsx';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

function ContactPage() {
  return (
    <>
      

      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-black/[0.02]" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] mb-6">Get in touch</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ready to transform your operations? Schedule a free consultation to discuss your ERP and automation needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 md:py-24 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8 bg-gray-50 p-8 rounded-2xl border border-gray-100"
              >
                <div>
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Contact Information</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Our team is ready to help you find the right ERP and automation solutions for your organization.
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-primary/20">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1F2937] mb-1">Email</p>
                      <a href="mailto:info@precisefect.com" className="text-gray-600 hover:text-primary transition-colors">
                        info@precisefect.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-primary/20">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1F2937] mb-1">Phone</p>
                      <a href="tel:+919213487967" className="text-gray-600 hover:text-primary transition-colors">
                        +91 92134 87967
                      </a>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-[#25D366]/20">
                      <MessageCircle className="h-6 w-6 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1F2937] mb-1">WhatsApp</p>
                      <a href="https://wa.me/+919213487967" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#25D366] transition-colors">
                        Chat with us instantly
                      </a>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-gray-300">
                      <Clock className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1F2937] mb-1">Business Hours</p>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-2"
              >
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-full">
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-6">Send us a message</h3>
                  <AnimatedContactForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;