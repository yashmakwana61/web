-- UniCore pipeline: quotes table. quote_ref is the short unguessable id used in
-- the public URL (/unicore/quote?ref=). Line items and totals are always computed
-- server-side in the `quote` Edge Function — never trust client-submitted prices.
create table if not exists public.quotes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  quote_ref text not null unique,
  lead_id uuid references public.leads (id) on delete set null,

  modules jsonb not null default '[]'::jsonb,
  user_pack text,
  deployment text check (deployment in ('cloud', 'onprem')),
  currency text not null default 'USD',

  line_items jsonb not null default '[]'::jsonb,
  subtotal numeric(12, 2) not null default 0,
  discount numeric(12, 2) not null default 0,
  total numeric(12, 2) not null default 0,

  valid_until date,
  status text not null default 'sent' check (status in ('sent', 'viewed', 'accepted', 'expired')),
  pdf_url text
);

create index if not exists quotes_lead_id_idx on public.quotes (lead_id);
create index if not exists quotes_created_at_idx on public.quotes (created_at desc);
-- quote_ref already has a unique index from the unique constraint above.

alter table public.quotes enable row level security;
-- Intentionally no policies: anon and authenticated roles get zero access.
-- The public quote page reads through the `get-quote` Edge Function (service role),
-- never directly against this table.
