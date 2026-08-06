'use client';

import React from 'react';
import Link from '@/components/Link';
import { Linkedin, Twitter, Facebook, Mail, Phone, MessageCircle } from 'lucide-react';

function Footer({ navData }) {
  // Extract services from navData or use fallback
  const servicesDropdown = navData?.menuItems?.find(m => m.label === 'Services' && m._type === 'navDropdown');
  const fallbackServices = [
    { label: 'ERP Consulting', to: '/services/erp-consulting' },
    { label: 'Odoo Implementation', to: '/services/odoo-consulting' },
    { label: 'ERPNext Solutions', to: '/services/erpnext-consulting' },
    { label: 'AI Automation', to: '/services/ai-automation' },
    { label: 'RPA Services', to: '/services/rpa-services' },
    { label: 'Business Intelligence', to: '/services/business-intelligence' }
  ];
  const servicesLinks = servicesDropdown ? servicesDropdown.items.slice(0, 6) : fallbackServices;

  // Extract company links from navData (navLinks) or use fallback
  const companyLinksRaw = navData?.menuItems?.filter(m => m._type === 'navLink') || [];
  const fallbackCompany = [
    { label: 'About Us', to: '/about' },
    { label: 'Industries', to: '/industries' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Insights & Blog', to: '/blog' },
    { label: 'Contact Us', to: '/contact' }
  ];
  const companyLinks = companyLinksRaw.length > 0 ? companyLinksRaw : fallbackCompany;

  return (
    <footer className="bg-slate-50 border-t border-gray-200 text-gray-600 mt-auto">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col items-start text-left">
            <Link to="/" className="mb-4 inline-block">
              <img 
                src="/logo.png" 
                alt="PreciseFect" 
                className="w-[120px] h-auto"
              />
            </Link>
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">Precision Meets Perfection</p>
            <p className="text-sm leading-relaxed mb-6">
              Expert ERP consulting and intelligent automation solutions tailored for modern enterprises. We transform your digital landscape for operational excellence.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-colors"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-lg">Services</h3>
            <ul className="space-y-3 text-sm">
              {servicesLinks.map((link, idx) => (
                <li key={idx}><Link to={link.to} className="hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link, idx) => (
                <li key={idx}><Link to={link.to} className="hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-lg">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="mailto:info@precisefect.com" className="flex items-start gap-3 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>info@precisefect.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+919213487967" className="flex items-start gap-3 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>+91 92134 87967</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/+919213487967" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-[#25D366] transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} PreciseFect. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;