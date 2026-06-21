import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';

import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ErpConsultingPage from '@/pages/ErpConsultingPage';
import OdooConsultingPage from '@/pages/OdooConsultingPage';
import ErpnextConsultingPage from '@/pages/ErpnextConsultingPage';
import AiAutomationPage from '@/pages/AiAutomationPage';
import RpaServicesPage from '@/pages/RpaServicesPage';
import BusinessIntelligencePage from '@/pages/BusinessIntelligencePage';
import EducationIndustryPage from '@/pages/EducationIndustryPage';
import HealthcareIndustryPage from '@/pages/HealthcareIndustryPage';
import ManufacturingIndustryPage from '@/pages/ManufacturingIndustryPage';
import BlogPage from '@/pages/BlogPage';
import ContactPage from '@/pages/ContactPage';
import CaseStudiesPage from '@/pages/CaseStudiesPage';
import SalesUseCasePage from '@/pages/SalesUseCasePage';
import HrUseCasePage from '@/pages/HrUseCasePage';
import FinanceUseCasePage from '@/pages/FinanceUseCasePage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/erp-consulting" element={<ErpConsultingPage />} />
        <Route path="/services/odoo-consulting" element={<OdooConsultingPage />} />
        <Route path="/services/erpnext-consulting" element={<ErpnextConsultingPage />} />
        <Route path="/services/ai-automation" element={<AiAutomationPage />} />
        <Route path="/services/rpa-services" element={<RpaServicesPage />} />
        <Route path="/services/business-intelligence" element={<BusinessIntelligencePage />} />
        <Route path="/industries/education" element={<EducationIndustryPage />} />
        <Route path="/industries/healthcare" element={<HealthcareIndustryPage />} />
        <Route path="/industries/manufacturing" element={<ManufacturingIndustryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/use-cases/sales" element={<SalesUseCasePage />} />
        <Route path="/use-cases/hr" element={<HrUseCasePage />} />
        <Route path="/use-cases/finance" element={<FinanceUseCasePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
