-- UniCore pipeline: raw inputs/results for ROI, TCO, fee-audit and migration
-- calculators, linked back to the lead created alongside the submission.
create table if not exists public.calculator_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  lead_id uuid references public.leads (id) on delete set null,
  tool text not null check (tool in ('roi', 'tco', 'fee-audit', 'migration')),
  inputs jsonb not null default '{}'::jsonb,
  result jsonb not null default '{}'::jsonb
);

create index if not exists calculator_submissions_lead_id_idx on public.calculator_submissions (lead_id);
create index if not exists calculator_submissions_tool_idx on public.calculator_submissions (tool);

alter table public.calculator_submissions enable row level security;
-- Intentionally no policies: anon and authenticated roles get zero access.
-- Only the `lead` Edge Function (service role) writes here.
