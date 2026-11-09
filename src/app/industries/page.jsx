import { EditorialLink, EditorialPage, EditorialSection } from '@/components/EditorialPage';

const title = 'Industry ERP and Workflow Automation Solutions';
const description = 'Explore ERP consulting and workflow automation for education, healthcare, and manufacturing, from admissions and patient intake to production and inventory planning.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/industries' },
};

export default function IndustriesPage() {
  return (
    <EditorialPage eyebrow="Industries" title={title} description={description}>
      <EditorialSection title="ERP for schools, colleges, and universities">
        <p>Connect admissions, student records, fee collection, and academic systems. An education ERP can give admissions and finance teams a shared record from application through enrollment, with a clear queue for missing documents and payment exceptions.</p>
        <EditorialLink href="/industries/education">Explore education ERP solutions</EditorialLink>
      </EditorialSection>
      <EditorialSection title="Healthcare ERP and patient workflows">
        <p>Coordinate scheduling, patient intake, billing handoffs, and operational reporting. Map where staff enter the same details twice, then use role-based review and clear exception handling to connect the systems that each team depends on.</p>
        <EditorialLink href="/industries/healthcare">Explore healthcare ERP solutions</EditorialLink>
      </EditorialSection>
      <EditorialSection title="Manufacturing ERP and production planning">
        <p>Bring materials planning, inventory, production orders, and quality checks into the same workflow. Give planners a view of component shortages and work in progress, and give warehouse teams a clear record of stock movements and lot status.</p>
        <EditorialLink href="/industries/manufacturing">Explore manufacturing ERP solutions</EditorialLink>
      </EditorialSection>
      <EditorialSection title="Plan an ERP or automation rollout">
        <p>Start with the workflow that creates the most rework. Identify who owns each step, which systems must exchange data, and how your team will measure a pilot. PreciseFect can help scope an ERP implementation, an integration, or a focused automation project.</p>
        <p><EditorialLink href="/services">Browse ERP and automation services</EditorialLink> or <EditorialLink href="/contact">discuss your project</EditorialLink>.</p>
      </EditorialSection>
    </EditorialPage>
  );
}
