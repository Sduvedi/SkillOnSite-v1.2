# SkillOnSite IT â€” Next.js + Tailwind + Supabase + Resend

## Environment Variables (Vercel â†’ Project â†’ Settings â†’ Environment Variables)
NEXT_PUBLIC_BOOKING_LINK=https://cal.com/skillonsite/consult-30
SUPABASE_URL=***
SUPABASE_SERVICE_ROLE_KEY=***
RESEND_API_KEY=***
RESEND_FROM=SkillOnSite IT <no-reply@skillonsite.com>
RESEND_TO=you@skillonsite.com

## Supabase SQL (run in SQL Editor)
create table if not exists public.leads (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  message text,
  source text,
  created_at timestamptz default now()
);
alter table public.leads enable row level security;
create policy "allow server inserts" on public.leads
  for insert to authenticated, anon
  using (true) with check (true);
-- Note: API uses SERVICE_ROLE_KEY and bypasses RLS. Policy is future-proof.

## Local Dev
npm install
npm run dev
open http://localhost:3000
