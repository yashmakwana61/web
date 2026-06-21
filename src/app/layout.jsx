import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimationProvider } from '@/components/AnimationProvider';

export const metadata = {
  title: {
    default: 'PreciseFect | Enterprise ERP & Intelligent Automation',
    template: '%s - PreciseFect',
  },
  description: 'Next-generation ERP consulting, RPA, and AI automation tailored for Education, Healthcare, and Manufacturing.',
  metadataBase: new URL('https://precisefect.com'),
};

import { client } from '@/lib/sanity/client';
import { navigationQuery } from '@/lib/sanity/queries';

import { WhatsAppWidget } from '@/components/WhatsAppWidget';

export default async function RootLayout({ children }) {
  // Fetch global site navigation data (Header & Footer)
  const navData = await client.fetch(navigationQuery).catch(() => null);

  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <AnimationProvider>
          <Header navData={navData} />
          <main className="flex-1 pt-[72px] md:pt-[80px]">
            {children}
          </main>
          <WhatsAppWidget />
          <Footer navData={navData} />
        </AnimationProvider>
      </body>
    </html>
  );
}
