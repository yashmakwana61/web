'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, Mail, Phone, Building, MessageSquare, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status.state === 'error') setStatus({ state: 'idle', message: '' });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus({ state: 'error', message: 'Please fill all required fields correctly.' });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ state: 'error', message: 'Please enter a valid email address.' });
      return false;
    }
    const phoneRegex = /^\+?[0-9\s-]{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setStatus({ state: 'error', message: 'Please enter a valid phone number (e.g. +91 9876543210).' });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setStatus({ state: 'loading', message: '' });
    
    // Simulate API call and LocalStorage save
    setTimeout(() => {
      const submissions = JSON.parse(localStorage.getItem('preciseFectContact') || '[]');
      submissions.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('preciseFectContact', JSON.stringify(submissions));
      
      setStatus({ state: 'success', message: 'Thank you! We will contact you soon.' });
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      
      setTimeout(() => {
        setStatus({ state: 'idle', message: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-20 md:py-24 bg-white border-t border-gray-100">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let's Discuss Your Digital Transformation
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you need to overhaul your ERP, deploy intelligent RPA bots, or harness the power of AI, our experts are ready to outline a tailored roadmap for your success.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email Us</p>
                  <a href="mailto:info@precisefect.com" className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors">info@precisefect.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Call Us</p>
                  <a href="tel:+919213487967" className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors">+91 92134 87967</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 relative overflow-hidden">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <AnimatePresence mode="wait">
              {status.state === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-64 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                  <p className="text-xl font-bold text-gray-900">{status.message}</p>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  {status.state === 'error' && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-start gap-3 text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p>{status.message}</p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative">
                      <label htmlFor="name" className="sr-only">Full Name</label>
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input 
                        type="text" id="name" name="name" placeholder="Full Name *" 
                        value={formData.name} onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors text-gray-900 placeholder:text-gray-400"
                        disabled={status.state === 'loading'}
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="email" className="sr-only">Email Address</label>
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input 
                        type="email" id="email" name="email" placeholder="Email Address *" 
                        value={formData.email} onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors text-gray-900 placeholder:text-gray-400"
                        disabled={status.state === 'loading'}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative">
                      <label htmlFor="phone" className="sr-only">Phone Number</label>
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input 
                        type="tel" id="phone" name="phone" placeholder="Phone Number *" 
                        value={formData.phone} onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors text-gray-900 placeholder:text-gray-400"
                        disabled={status.state === 'loading'}
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="company" className="sr-only">Company Name</label>
                      <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input 
                        type="text" id="company" name="company" placeholder="Company Name" 
                        value={formData.company} onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors text-gray-900 placeholder:text-gray-400"
                        disabled={status.state === 'loading'}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="sr-only">Your Message</label>
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea 
                      id="message" name="message" placeholder="How can we help you? *" 
                      value={formData.message} onChange={handleChange} rows={4}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors resize-none text-gray-900 placeholder:text-gray-400"
                      disabled={status.state === 'loading'}
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-touch text-base" disabled={status.state === 'loading'}>
                    {status.state === 'loading' ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending Message...</>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}