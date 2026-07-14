-- UniCore pipeline: leads table. All lead capture (contact form, configurator,
-- calculators, demo gate) writes here via Edge Functions using the service role key.
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  name text,
  email text,
  phone text,
  company text,

  country text,
  institution_type text check (institution_type in ('university', 'private-college', 'business-school', 'technical')),
  student_count int,

  source_page text,
  magnet_type text check (magnet_type in ('quote', 'booking', 'demo', 'roi', 'tco', 'fee-audit', 'guide', 'rfp', 'contact')),
  utm jsonb,
  message text,

  stage text not null default 'new' check (stage in ('new', 'qualified', 'meeting_booked', 'proposal_sent', 'won', 'lost')),
  score int not null default 0,
  owner text,
  next_action text,
  notes text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_idx on public.leads (email);
create index if not exists leads_stage_idx on public.leads (stage);

alter table public.leads enable row level security;
-- Intentionally no policies: anon and authenticated roles get zero access.
-- Only the service role (used exclusively by Edge Functions) can read or write.
