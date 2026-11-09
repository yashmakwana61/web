import RpaServicesPage from '@/pages/RpaServicesPage';

export const metadata = {
  title: 'Robotic Process Automation (RPA) Services',
  description: 'Design, deploy, and monitor RPA bots for repeatable tasks such as data entry, document processing, and transfers between systems.',
  alternates: { canonical: '/services/rpa-services' },
};

export default function Page() {
  return <RpaServicesPage />;
}
