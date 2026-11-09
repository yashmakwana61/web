export const implementationExamples = {
  'riverside-academy': {
    title: 'School Admissions Automation',
    industry: 'Education',
    industryPath: '/industries/education',
    description: 'See how a school can use an admissions ERP to collect applications, verify documents, manage approvals, and hand off accepted students to enrollment.',
    scenario: 'A school receives applications by email and tracks them in spreadsheets. Families contact the office to check their status, while staff spend time matching documents to applications and reconciling seat availability.',
    steps: [
      ['Set up a single application record', 'Capture the program, intake, and contact details in an online form. Assign each submission an application ID and use it to attach documents and record communications.'],
      ['Route exceptions for review', 'Validate required fields and flag missing documents for follow-up. Give admissions staff a queue for ambiguous records and record who made each decision.'],
      ['Connect decisions to enrollment', 'Record offers and acceptance in the same workflow. When a family accepts, transfer the approved record into the student information system and update the seat count.'],
    ],
    measures: 'Compare median submission-to-decision time, incomplete applications, and manual follow-ups per application before and after a pilot for one intake.',
  },
  'coastal-university': {
    title: 'University Fee Collection and Reconciliation',
    industry: 'Education',
    industryPath: '/industries/education',
    description: 'Explore an ERP workflow for university fees, installment plans, payment gateway integration, and finance reconciliation.',
    scenario: 'A university bills tuition, hostel charges, and other fees on different schedules. Finance staff match gateway settlements to invoices while student services handle questions about installments, waivers, and outstanding balances.',
    steps: [
      ['Model fee schedules in the ERP', 'Define charges by program and term. Record scholarships, waivers, and installment due dates against the student account so staff can explain a balance from one place.'],
      ['Match gateway payments to invoices', 'Use a unique invoice reference for each payment and guard against duplicate gateway events. Issue a receipt after confirmation and send partial payments and refunds to an exception queue.'],
      ['Reconcile settlements and close the term', 'Match bank settlements to gateway transactions and ERP postings. Give finance reviewers a view of fees, chargebacks, and unmatched receipts before they sign off.'],
    ],
    measures: 'Track the share of payments matched automatically, the age of unmatched receipts, and staff time spent reconciling settlements during a billing cycle.',
  },
  'meridian-health': {
    title: 'Patient Intake Workflow Automation',
    industry: 'Healthcare',
    industryPath: '/industries/healthcare',
    description: 'Explore a healthcare workflow that connects appointment scheduling, patient intake, staff review, and billing handoffs.',
    scenario: 'A healthcare provider collects patient details when an appointment is booked and repeats parts of intake at check-in. Staff must reconcile inconsistent records and make sure clinicians and billing teams receive the right information.',
    steps: [
      ['Tie intake to the appointment', 'Send a pre-visit intake request with a clear appointment reference. Collect the fields needed for registration and route incomplete or conflicting responses to staff.'],
      ['Keep identity checks with staff', 'Use role-based access and an audit trail. Ask trained staff to review possible duplicate records before merging them, and use synthetic data to test the workflow.'],
      ['Connect check-in to downstream teams', 'Pass verified registration details to the appropriate clinical or billing system. Surface failed handoffs in a work queue so staff can resolve them before the visit or claim advances.'],
    ],
    measures: 'Compare median check-in time, duplicate registrations, and the number of records returned for correction. Validate access and audit requirements with the provider before rollout.',
  },
  'apex-manufacturing': {
    title: 'Production Planning and Inventory ERP',
    industry: 'Manufacturing',
    industryPath: '/industries/manufacturing',
    description: 'See how a manufacturer can connect materials planning, work orders, inventory movements, and quality checks in an ERP system.',
    scenario: 'A manufacturer plans production in spreadsheets while the warehouse tracks stock separately. Material shortages appear after jobs are scheduled, and planners have limited visibility into work in progress and quality holds.',
    steps: [
      ['Clean up planning data', 'Confirm bills of materials, units of measure, supplier lead times, and reorder rules for a pilot product family. Use that baseline to calculate component needs against open orders and usable stock.'],
      ['Track execution against work orders', 'Record material issues, output, and scrap at each operation. Connect inspection results to lot records so quality holds are visible before stock is released.'],
      ['Manage exceptions on the production floor', 'Show shortages, late operations, and quality holds in a shared queue. Assign owners and use daily reviews to decide when to expedite, replan, or investigate a discrepancy.'],
    ],
    measures: 'Compare on-time work-order completion, inventory accuracy, and material shortage frequency for the pilot product family before expanding to more lines.',
  },
};
