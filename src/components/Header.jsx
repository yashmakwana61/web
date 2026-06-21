'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from '@/components/Link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Phone, ChevronDown, ArrowRight, Briefcase, Settings, Database, Sparkles, Bot, BarChart3, GraduationCap, Hotel as Hospital, Factory } from 'lucide-react';

const DROPDOWN_DATA = {
  services: [
    { label: 'ERP Consulting', to: '/services/erp-consulting', icon: Briefcase },
    { label: 'Odoo Consulting', to: '/services/odoo-consulting', icon: Settings },
    { label: 'ERPNext Consulting', to: '/services/erpnext-consulting', icon: Database },
    { label: 'AI & Workflow Automation', to: '/services/ai-automation', icon: Sparkles },
    { label: 'RPA Services', to: '/services/rpa-services', icon: Bot },
    { label: 'Business Intelligence', to: '/services/business-intelligence', icon: BarChart3 },
    { label: 'View All Services', to: '/services', icon: ArrowRight, isAllLink: true },
  ],
  industries: [
    { label: 'Education', to: '/industries/education', icon: GraduationCap },
    { label: 'Healthcare', to: '/industries/healthcare', icon: Hospital },
    { label: 'Manufacturing', to: '/industries/manufacturing', icon: Factory },
    { label: 'View All Industries', to: '/industries', icon: ArrowRight, isAllLink: true },
  ]
};

// Reusable Desktop Nav Item with Dropdown
const DesktopDropdownItem = ({ label, items, activePath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  const isActive = items.some(item => activePath === item.to) || activePath.startsWith(`/${label.toLowerCase()}`);

  return (
    <div 
      className="relative flex items-center h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors hover:text-primary py-2 ${isActive ? 'text-primary' : 'text-[#1F2937]'}`}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          } else if (e.key === 'Escape') {
            setIsOpen(false);
          }
        }}
      >
        {label}
        <ChevronDown className={`dropdown-arrow ${isOpen ? 'open' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="dropdown-container p-2"
          >
            <ul className="flex flex-col space-y-1">
              {items.map((item, idx) => {
                const Icon = item.icon;
                const isItemActive = activePath === item.to;
                
                return (
                  <li key={idx}>
                    <Link
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`dropdown-item ${isItemActive ? 'active' : ''} ${item.isAllLink ? 'mt-2 pt-3 border-t border-gray-100 justify-center text-primary font-medium hover:bg-primary/5 hover:translate-x-0 group' : ''}`}
                    >
                      {!item.isAllLink && <Icon className="dropdown-icon" />}
                      <span>{item.label}</span>
                      {item.isAllLink && <Icon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function Header({ navData }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenusOpen, setMobileMenusOpen] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileMenusOpen({});
  }, [pathname]);

  const toggleMobileSubmenu = (menu) => {
    setMobileMenusOpen(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  const isActive = (path) => pathname === path;

  // Fallback to static navigation if navData isn't available
  const menuItems = navData?.menuItems || [
    { _type: 'navLink', label: 'Home', to: '/' },
    { _type: 'navDropdown', label: 'Services', items: DROPDOWN_DATA.services },
    { _type: 'navDropdown', label: 'Industries', items: DROPDOWN_DATA.industries },
    { _type: 'navLink', label: 'About', to: '/about' },
    { _type: 'navLink', label: 'Blog', to: '/blog' },
    { _type: 'navLink', label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 ${scrolled ? 'py-3 shadow-sm' : 'py-4 lg:py-5'}`}>
        <div className="section-container flex items-center justify-between h-10">
          
          {/* 1. Logo on Left */}
          <Link to="/" className="flex items-center group z-50 transition-transform duration-300 hover:scale-[1.02]" aria-label="Home">
            <img 
              src="https://horizons-cdn.hostinger.com/7dfd4d00-6239-4560-84bc-709b00097253/fc079947626e17a936eea7ad236954ee.png" 
              alt="PreciseFect Logo" 
              className="w-[120px] md:w-[140px] lg:w-[160px] h-auto object-contain"
            />
          </Link>

          {/* 2 & 3. Desktop Navigation & CTAs */}
          <nav className="hidden lg:flex items-center h-full">
            <div className="flex items-center gap-8 h-full mr-8">
              {menuItems.map((item, idx) => {
                if (item._type === 'navLink') {
                  return (
                    <Link key={idx} to={item.to} className={`text-[15px] font-medium transition-colors hover:text-primary ${isActive(item.to) ? 'text-primary' : 'text-[#1F2937]'}`}>
                      {item.label}
                    </Link>
                  );
                } else if (item._type === 'navDropdown') {
                  // Map string icons back to Lucide components if coming from Sanity
                  const itemsWithIcons = item.items.map(subItem => ({
                    ...subItem,
                    // If subItem.icon is string, fallback to default generic icon (e.g., Settings) if actual icon mapping is needed, but we pass what we have
                    icon: typeof subItem.icon === 'string' ? Settings : (subItem.icon || ArrowRight),
                  }));
                  return (
                    <DesktopDropdownItem key={idx} label={item.label} items={itemsWithIcons} activePath={pathname} />
                  );
                }
                return null;
              })}
            </div>

            <div className="flex items-center gap-5 pl-8 border-l border-gray-200">
              {/* Optional Contact Info */}
              <div className="flex flex-col gap-1 text-xs font-medium text-gray-500">
                <a href="mailto:info@precisefect.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Mail className="w-3.5 h-3.5" /> info@precisefect.com
                </a>
                <a href="tel:+919213487967" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Phone className="w-3.5 h-3.5" /> +91 92134 87967
                </a>
              </div>
              
              {/* CTAs */}
              <div className="flex items-center gap-3">
                <Button asChild className="bg-primary text-white hover:bg-primary/90 shadow-sm font-semibold h-[44px]">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="lg:hidden relative z-50 p-2 text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 left-0 bottom-0 w-full max-w-[320px] sm:max-w-[400px] z-50 bg-white border-r border-gray-100 flex flex-col shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="p-5 border-b border-gray-100 flex items-center justify-between min-h-[72px]">
                <img 
                  src="https://horizons-cdn.hostinger.com/7dfd4d00-6239-4560-84bc-709b00097253/fc079947626e17a936eea7ad236954ee.png" 
                  alt="PreciseFect Logo" 
                  className="w-[120px] h-auto"
                />
                <button 
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-900 bg-gray-50 rounded-lg"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 p-5 overflow-y-auto space-y-2">
                {menuItems.map((item, idx) => {
                  if (item._type === 'navLink') {
                    return (
                      <Link key={idx} to={item.to} className={`block py-3 text-lg font-bold ${isActive(item.to) ? 'text-primary' : 'text-gray-900'}`}>
                        {item.label}
                      </Link>
                    );
                  } else if (item._type === 'navDropdown') {
                    const menuKey = `menu_${idx}`;
                    return (
                      <div key={idx} className="border-b border-gray-50 pb-2">
                        <button 
                          onClick={() => toggleMobileSubmenu(menuKey)}
                          className="flex items-center justify-between w-full py-3 text-lg font-bold text-gray-900"
                          aria-expanded={mobileMenusOpen[menuKey]}
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${mobileMenusOpen[menuKey] ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {mobileMenusOpen[menuKey] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <ul className="pl-[20px] space-y-1 pb-3 pt-1">
                                {item.items.map((subItem, subIdx) => (
                                  <li key={subIdx}>
                                    <Link 
                                      to={subItem.to}
                                      className={`flex items-center py-2.5 text-[15px] ${isActive(subItem.to) ? 'text-primary font-medium' : 'text-gray-600'} hover:text-primary transition-colors`}
                                    >
                                      {subItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                  return null;
                })}
              </nav>

              <div className="p-5 border-t border-gray-100 bg-gray-50/50 mt-auto">
                <div className="space-y-4 mb-6">
                  <a href="mailto:info@precisefect.com" className="flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-primary">
                    <Mail className="w-5 h-5 text-primary" /> info@precisefect.com
                  </a>
                  <a href="tel:+919213487967" className="flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-primary">
                    <Phone className="w-5 h-5 text-primary" /> +91 92134 87967
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <Button asChild className="w-full justify-center">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;