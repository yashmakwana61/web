import { promises as fs } from 'node:fs';
import path from 'node:path';

const PAGES = [
  {
    path: '',
    component: 'HomePage',
    title: 'PreciseFect | Enterprise ERP & Intelligent Automation',
    description: 'Next-generation ERP consulting, RPA, and AI automation tailored for Education, Healthcare, and Manufacturing.'
  },
  {
    path: 'about',
    component: 'AboutPage',
    title: 'About Us - PreciseFect',
    description: 'Learn more about PreciseFect, our mission, vision, and team of ERP and automation experts.'
  },
  {
    path: 'contact',
    component: 'ContactPage',
    title: 'Contact Us - PreciseFect',
    description: 'Get in touch with PreciseFect to discuss your ERP and automation needs.'
  },
  {
    path: 'services',
    component: 'ServicesPage',
    title: 'Services - PreciseFect',
    description: 'Explore our services including ERP consulting, Odoo, ERPNext, AI automation, RPA, and business intelligence.'
  },
  {
    path: 'services/erp-consulting',
    component: 'ErpConsultingPage',
    title: 'Enterprise ERP Consulting - PreciseFect',
    description: 'Strategic consulting, vendor-agnostic selection, and seamless deployment of Tier-1 ERP systems.'
  },
  {
    path: 'services/odoo-consulting',
    component: 'OdooConsultingPage',
    title: 'Odoo Implementation Services - PreciseFect',
    description: 'End-to-end Odoo implementation, customization, and integration services.'
  },
  {
    path: 'services/erpnext-consulting',
    component: 'ErpnextConsultingPage',
    title: 'ERPNext Consulting Services - PreciseFect',
    description: 'Custom ERPNext deployment, support, and optimization.'
  },
  {
    path: 'services/ai-automation',
    component: 'AiAutomationPage',
    title: 'AI & Workflow Automation - PreciseFect',
    description: 'Intelligent automation solutions using artificial intelligence and workflow design.'
  },
  {
    path: 'services/rpa-services',
    component: 'RpaServicesPage',
    title: 'RPA Services - PreciseFect',
    description: 'Robotic Process Automation services to automate repetitive tasks.'
  },
  {
    path: 'services/business-intelligence',
    component: 'BusinessIntelligencePage',
    title: 'Business Intelligence Services - PreciseFect',
    description: 'Data analytics, dashboards, and business intelligence solutions.'
  },
  {
    path: 'industries/education',
    component: 'EducationIndustryPage',
    title: 'Education ERP Solutions - PreciseFect',
    description: 'ERP systems and automation for schools, colleges, and universities.'
  },
  {
    path: 'industries/healthcare',
    component: 'HealthcareIndustryPage',
    title: 'Healthcare ERP & Automation - PreciseFect',
    description: 'Hospital ERP systems and healthcare automation solutions.'
  },
  {
    path: 'industries/manufacturing',
    component: 'ManufacturingIndustryPage',
    title: 'Manufacturing ERP Solutions - PreciseFect',
    description: 'Production planning, inventory management, and manufacturing ERP.'
  },
  {
    path: 'blog',
    component: 'BlogPage',
    title: 'Blog - PreciseFect',
    description: 'Expert insights on ERP implementation, automation strategies, and industry trends.'
  },
  {
    path: 'case-studies',
    component: 'CaseStudiesPage',
    title: 'Case Studies - PreciseFect',
    description: 'Real-world success stories from our ERP and automation clients.'
  },
  {
    path: 'use-cases/sales',
    component: 'SalesUseCasePage',
    title: 'Sales Automation Use Case - PreciseFect',
    description: 'Streamlining sales processes with ERP and automation.'
  },
  {
    path: 'use-cases/hr',
    component: 'HrUseCasePage',
    title: 'HR Automation Use Case - PreciseFect',
    description: 'Automating HR processes, recruitment, and employee management.'
  },
  {
    path: 'use-cases/finance',
    component: 'FinanceUseCasePage',
    title: 'Finance Automation Use Case - PreciseFect',
    description: 'Automating accounting, invoicing, and financial reporting.'
  }
];

async function run() {
  const appDir = path.resolve('src/app');
  console.log('Generating App Router pages under:', appDir);
  
  for (const page of PAGES) {
    const folderPath = path.join(appDir, page.path);
    await fs.mkdir(folderPath, { recursive: true });
    
    const pageFilePath = path.join(folderPath, 'page.jsx');
    const content = `import ${page.component} from '@/pages/${page.component}';

export const metadata = {
  title: '${page.title.replace(/'/g, "\\'")}',
  description: '${page.description.replace(/'/g, "\\'")}',
};

export default function Page() {
  return <${page.component} />;
}
`;
    await fs.writeFile(pageFilePath, content, 'utf8');
    console.log(`Generated page.jsx for /${page.path} at ${pageFilePath}`);
  }
  console.log('All App Router pages generated successfully.');
}

run().catch(console.error);
