import { EditorialLink, EditorialPage, EditorialSection } from '@/components/EditorialPage';

const description = 'How PreciseFect handles the information you share when you send a website inquiry, and where to direct privacy questions.';

export const metadata = {
  title: 'Privacy Notice',
  description,
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <EditorialPage eyebrow="Website information" title="Privacy notice" description={description}>
      <EditorialSection title="Information you provide">
        <p>The contact form asks for your name, email address, phone number, company, industry, and message. If you contact us by email or WhatsApp, we receive the contact details and message you send through that channel.</p>
        <p>Please keep initial inquiries focused on your business needs. Leave out passwords, payment card details, patient records, and student records.</p>
      </EditorialSection>
      <EditorialSection title="How inquiries are handled">
        <p>We use inquiry details to review your request, reply, and discuss the services you asked about. The website can use Sanity to record form submissions and Resend to notify the PreciseFect team by email. WhatsApp conversations take place through WhatsApp and are subject to that service’s privacy terms.</p>
      </EditorialSection>
      <EditorialSection title="Privacy questions and requests">
        <p>To ask about an inquiry you submitted, correct your details, or request access or deletion, email <a className="underline" href="mailto:info@precisefect.com">info@precisefect.com</a>. Include enough context for us to identify the inquiry.</p>
        <p><EditorialLink href="/terms">Read the website terms</EditorialLink>.</p>
      </EditorialSection>
    </EditorialPage>
  );
}
