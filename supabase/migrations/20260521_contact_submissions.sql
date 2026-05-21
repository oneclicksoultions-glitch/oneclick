create table if not exists contact_submissions (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  first_name  text not null,
  last_name   text not null,
  email       text not null,
  phone       text,
  service     text,
  budget      text,
  message     text,
  status      text not null default 'new'
);

-- Index for quick admin queries
create index if not exists idx_contact_submissions_created_at
  on contact_submissions (created_at desc);

-- Row Level Security (only service role can read/write)
alter table contact_submissions enable row level security;

-- No public access — only service_role (used in API route) can insert/select
create policy "service_role_all" on contact_submissions
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
