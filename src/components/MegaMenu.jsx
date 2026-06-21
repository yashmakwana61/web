'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from '@/components/Link';
import { ChevronDown, ArrowRight, LayoutDashboard, Settings, Cpu, Bot, LineChart, Building2, HeartPulse, Factory, BookOpen, FileText, Phone, Users } from 'lucide-react';

export function DropdownItem({ icon: Icon, title, description, to }) {
  return (
    <Link to={to} className="group flex items-start gap-4 p-3 rounded-lg hover:bg-muted transition-colors">
      <div className="p-2 bg-primary/10 rounded-md text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}

export function MegaMenu({ label, items, cols = 2, footerLink, footerText }) {
  const [isOpen, setIsOpen] = React.useState(false);
  let timeout;

  const handleMouseEnter = () => { clearTimeout(timeout); setIsOpen(true); };
  const handleMouseLeave = () => { timeout = setTimeout(() => setIsOpen(false), 150); };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="flex items-center gap-1 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors group h-16">
        {label}
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-card/95 backdrop-blur-xl border shadow-2xl rounded-2xl overflow-hidden z-50 glass-panel"
          >
            <div className={`grid grid-cols-${cols} gap-2 p-4`}>
              {items.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <DropdownItem {...item} />
                </motion.div>
              ))}
            </div>
            {footerLink && (
              <div className="bg-muted/50 p-4 border-t flex justify-end">
                <Link to={footerLink} className="text-sm font-semibold text-primary flex items-center hover:underline group">
                  {footerText} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const NAV_DATA = {
  services: [
    { icon: LayoutDashboard, title: "ERP Consulting", description: "Strategic ERP selection and deployment.", to: "/services/erp-consulting" },
    { icon: Settings, title: "Odoo Consulting", description: "Custom Odoo implementation for your industry.", to: "/services/odoo" },
    { icon: Cpu, title: "ERPNext Consulting", description: "Flexible, open-source ERPNext solutions.", to: "/services/erpnext" },
    { icon: Bot, title: "AI & Automation", description: "Intelligent workflows that save hours daily.", to: "/services/ai-automation" },
    { icon: LineChart, title: "Business Intelligence", description: "Power BI dashboards and deep analytics.", to: "/services/business-intelligence" },
    { icon: FileText, title: "RPA Services", description: "Robotic process automation for tasks.", to: "/services/rpa" },
  ],
  industries: [
    { icon: BookOpen, title: "Education", description: "Student lifecycle and campus management.", to: "/industries/education" },
    { icon: HeartPulse, title: "Healthcare", description: "Patient workflows and clinical efficiency.", to: "/industries/healthcare" },
    { icon: Factory, title: "Manufacturing", description: "Production, inventory, and supply chain.", to: "/industries/manufacturing" },
  ],
  company: [
    { icon: Building2, title: "About Us", description: "Our mission, vision, and core values.", to: "/about" },
    { icon: FileText, title: "Blog", description: "Latest insights on automation and ERP.", to: "/blog" },
    { icon: Users, title: "Case Studies", description: "Success stories from our clients.", to: "/case-studies" },
    { icon: Phone, title: "Contact", description: "Get in touch with our team today.", to: "/contact" },
  ]
};