import { EditorialLink, EditorialPage, EditorialSection } from '@/components/EditorialPage';

const description = 'Read the terms for using the PreciseFect website, including service information, implementation examples, and external links.';

export const metadata = {
  title: 'Website Terms of Use',
  description,
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <EditorialPage eyebrow="Website information" title="Website terms of use" description={description}>
      <EditorialSection title="Service information and examples">
        <p>PreciseFect provides information about ERP consulting, workflow automation, and related services. Implementation examples describe possible workflows. The scope, deliverables, fees, and responsibilities for an engagement are set out in the agreement for that project.</p>
      </EditorialSection>
      <EditorialSection title="Using the website">
        <p>Use the website and its contact channels for lawful purposes. Please submit accurate information, respect the rights of others, and avoid interfering with site operations or sending unsolicited messages through the contact form.</p>
      </EditorialSection>
      <EditorialSection title="External sites and questions">
        <p>Links to external services take you to websites operated by those providers. Their terms apply when you use those services.</p>
        <p>For questions about these terms, email <a className="underline" href="mailto:info@precisefect.com">info@precisefect.com</a>. See the <EditorialLink href="/privacy">privacy notice</EditorialLink> for information about website inquiries.</p>
      </EditorialSection>
    </EditorialPage>
  );
}
