-- One-time backfill of the leads that existed as Sanity `lead` documents before
-- the pipeline moved to Supabase. Sanity had 4 documents, but one was a draft
-- duplicate of a published doc with identical content (drafts.WMYow9Ig064KslncDXT9qy
-- mirroring WMYow9Ig064KslncDXT9qy) — only the 3 unique leads are inserted here.
-- The Sanity `lead` type and its 4 documents are left in place, untouched.
insert into public.leads (created_at, name, email, phone, company, message, magnet_type, source_page, stage, notes)
values
  ('2026-06-21T20:58:13.263Z', 'Yash Makwana', 'info@precisefect.com', null, 'Precisefect Solutions Pvt Ltd', 'I want an Education Management Solution', 'contact', '/contact', 'new', 'Backfilled from Sanity lead _id 5iQFMABqfrS844i0RHHHj0'),
  ('2026-06-29T04:19:01.269Z', 'Uday', 'mrmakwana9399@gmail.com', '+917600358905', 'nope', 'I would like to know more about education management software', 'contact', '/contact', 'new', 'Backfilled from Sanity lead _id WMYow9Ig064KslncDXT9qy'),
  ('2026-06-21T21:09:50.631Z', 'Test', 'test@gmail.com', null, 'test company', 'test message', 'contact', '/contact', 'new', 'Backfilled from Sanity lead _id gIfmxPrHo74Mx0o0YPh4J5')
on conflict do nothing;
