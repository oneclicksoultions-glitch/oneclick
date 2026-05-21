-- ============================================================
-- ADMIN TABLES FOR ONECLICKSOLUTIONS CMS
-- Run this in Supabase SQL Editor
-- ============================================================

-- Admin users (separate from Supabase auth — simple password login)
create table if not exists admin_users (
  id         uuid primary key default gen_random_uuid(),
  email      text unique not null,
  password_hash text not null,
  created_at timestamptz not null default now()
);

-- Insert default admin (password: Admin@OneClick2024)
-- bcrypt hash of "Admin@OneClick2024"
insert into admin_users (email, password_hash)
values ('oneclicksoultions@gmail.com', '$2b$10$eppQOePE1q0XnW78qrh1dOrTTlKe1cGPLbIyJ6dZ0Rsyiy5NiHoDK')
on conflict (email) do nothing;

-- ---- SITE SETTINGS (contact info, business hours, social links) ----
create table if not exists site_settings (
  key   text primary key,
  value text not null
);

insert into site_settings (key, value) values
  ('phone',         '+61 3 9000 0000'),
  ('email',         'hello@oneclicksoultions.com.au'),
  ('address_line1', 'Level 5, 123 Collins Street'),
  ('address_line2', 'Melbourne, VIC 3000, Australia'),
  ('hours_weekday', 'Monday - Friday: 9:00 AM - 6:00 PM'),
  ('hours_weekend', 'Saturday - Sunday: Closed'),
  ('social_linkedin','https://linkedin.com'),
  ('social_facebook','https://facebook.com'),
  ('social_instagram','https://instagram.com'),
  ('social_twitter', 'https://twitter.com')
on conflict (key) do nothing;

-- ---- HERO SECTION ----
create table if not exists hero (
  id          int primary key default 1,
  tagline     text not null default 'Australia''s Trusted Digital Partner',
  headline1   text not null default 'Grow Your Business',
  headline2   text not null default 'Online with',
  headline3   text not null default 'Proven Digital Marketing',
  description text not null default 'We help Australian businesses attract more customers, increase revenue, and dominate their market online.',
  cta_primary text not null default 'Get Free Strategy Call',
  cta_secondary text not null default 'Explore Services',
  stat1_value text not null default '500+',
  stat1_label text not null default 'Happy Clients',
  stat2_value text not null default '10+',
  stat2_label text not null default 'Years Experience',
  stat3_value text not null default '247%',
  stat3_label text not null default 'Avg Traffic Increase'
);
insert into hero (id) values (1) on conflict (id) do nothing;

-- ---- COMPANY STATS ----
create table if not exists company_stats (
  id         serial primary key,
  value      text not null,
  label      text not null,
  sort_order int not null default 0
);
insert into company_stats (value, label, sort_order) values
  ('500+',  'Clients Across Australia',   1),
  ('$50M+', 'Ad Spend Managed',           2),
  ('247%',  'Average Traffic Increase',   3),
  ('98%',   'Client Retention Rate',      4),
  ('10+',   'Years of Experience',        5),
  ('15+',   'Industries Served',          6)
on conflict do nothing;

-- ---- TESTIMONIALS ----
create table if not exists testimonials (
  id         serial primary key,
  name       text not null,
  role       text not null,
  location   text not null,
  text       text not null,
  rating     int not null default 5,
  initials   text not null,
  color      text not null default '#4285F4',
  active     boolean not null default true,
  sort_order int not null default 0
);
insert into testimonials (name, role, location, text, initials, color, sort_order) values
  ('Sarah Mitchell',  'CEO, Mitchell Home Solutions',    'Melbourne, VIC', 'OneClick Solutions transformed our online presence completely. Within 6 months we had tripled our organic traffic and our phone was ringing off the hook with qualified leads.', 'SM', '#4285F4', 1),
  ('James Kowalski',  'Director, ProFit Gym Network',    'Sydney, NSW',    'The Google Ads campaign they built for us cut our cost-per-lead by 45% while doubling the volume. Best marketing investment we have ever made.', 'JK', '#EA4335', 2),
  ('Priya Sharma',    'Founder, Bloom Skincare',         'Brisbane, QLD',  'Our e-commerce revenue grew 180% year-on-year after working with OneClick. Their SEO and content strategy is second to none.', 'PS', '#34A853', 3),
  ('Tom Nguyen',      'Marketing Manager, Apex Law Group','Perth, WA',     'We went from page 3 to page 1 for our most competitive keywords in under 4 months. The team is responsive, transparent and genuinely cares about results.', 'TN', '#FBBC04', 4),
  ('Emma Davidson',   'Owner, Davidson Real Estate',     'Adelaide, SA',   'The social media strategy they developed for us has completely changed how we attract vendors and buyers. Our brand is now the go-to in our area.', 'ED', '#4285F4', 5),
  ('Michael Torres',  'Operations Director, Torres Constructions','Gold Coast, QLD','OneClick helped us dominate local search in our market. The ROI has been outstanding and the reporting is crystal clear every month.', 'MT', '#EA4335', 6)
on conflict do nothing;

-- ---- TEAM MEMBERS ----
create table if not exists team_members (
  id         serial primary key,
  name       text not null,
  role       text not null,
  bio        text not null,
  initials   text not null,
  color      text not null default '#4285F4',
  active     boolean not null default true,
  sort_order int not null default 0
);
insert into team_members (name, role, bio, initials, color, sort_order) values
  ('David Chen',       'Founder & CEO',               'David founded OneClick Solutions with a vision to make enterprise-level digital marketing accessible to Australian businesses of all sizes. With 15+ years experience he has built a team obsessed with measurable results.', 'DC', '#4285F4', 1),
  ('Rachel Morrison',  'Head of SEO',                  'Rachel leads our organic search strategy with 10+ years of SEO expertise. She has helped hundreds of Australian businesses achieve and maintain top Google rankings.', 'RM', '#EA4335', 2),
  ('Aiden Patel',      'PPC Director',                 'Aiden manages millions in ad spend annually across Google and Meta platforms. His data-driven approach consistently delivers above-average ROI for clients across all industries.', 'AP', '#34A853', 3),
  ('Sophie Williams',  'Creative Director',            'Sophie leads our creative team bringing brand stories to life through compelling design and video content. Her work has won multiple industry awards.', 'SW', '#FBBC04', 4),
  ('Marcus Lee',       'Web Development Lead',         'Marcus oversees all web development projects ensuring every site is fast, secure and built to convert. He specialises in performance optimisation and CRO.', 'ML', '#4285F4', 5),
  ('Emily Zhang',      'Content Strategist',           'Emily crafts content strategies that rank and convert. She has produced hundreds of high-performing articles, landing pages and email campaigns for clients across 15+ industries.', 'EZ', '#EA4335', 6),
  ('James Nguyen',     'Analytics Manager',            'James turns data into decisions. He builds custom analytics dashboards that give clients full visibility into what is working and what to improve.', 'JN', '#34A853', 7),
  ('Claire Thompson',  'Client Success Manager',       'Claire ensures every client gets an outstanding experience. She manages onboarding, communication and strategy reviews to make sure clients always feel informed and valued.', 'CT', '#FBBC04', 8)
on conflict do nothing;

-- ---- BLOG POSTS ----
create table if not exists blog_posts (
  id         serial primary key,
  title      text not null,
  excerpt    text not null,
  category   text not null,
  author     text not null,
  read_time  text not null,
  color      text not null default '#4285F4',
  image_url  text,
  slug       text unique not null,
  published  boolean not null default true,
  created_at timestamptz not null default now()
);
insert into blog_posts (title, excerpt, category, author, read_time, color, slug) values
  ('How to Improve Your Google Rankings in 2025',                       'Practical SEO tactics that are working right now — from technical fixes to content strategy changes that move the needle.',              'SEO',            'Rachel Morrison', '8 min read', '#4285F4', 'how-to-improve-google-rankings-2025'),
  ('Google Ads vs SEO: Which Should You Invest In First?',              'A clear breakdown of when to start with paid search and when organic traffic should be your priority — with real numbers.',              'Google Ads',     'Aiden Patel',     '6 min read', '#EA4335', 'google-ads-vs-seo'),
  ('Social Media Marketing Trends Australian Brands Need to Watch',     'The platforms, formats and strategies gaining traction with Australian audiences right now.',                                          'Social Media',   'Sophie Williams', '5 min read', '#34A853', 'social-media-trends-australia'),
  ('Why Your Website Is Not Converting (And How to Fix It)',            'Common conversion killers we see on Australian business websites and the straightforward fixes that make a real difference.',           'Web Design',     'Marcus Lee',      '7 min read', '#FBBC04', 'website-not-converting')
on conflict do nothing;

-- ---- PORTFOLIO / CASE STUDIES ----
create table if not exists portfolio_items (
  id           serial primary key,
  title        text not null,
  industry     text not null,
  services     text[] not null default '{}',
  result       text not null,
  description  text not null,
  color        text not null default '#4285F4',
  image_url    text,
  active       boolean not null default true,
  sort_order   int not null default 0
);
insert into portfolio_items (title, industry, services, result, description, color, sort_order) values
  ('Mitchell Home Solutions',  'Home Services',  ARRAY['SEO','Google Ads'],          '3x organic traffic, 2x leads',         'A local plumbing and home services company that went from invisible online to dominating local search.',                        '#4285F4', 1),
  ('ProFit Gym Network',       'Fitness',        ARRAY['Google Ads','Social Media'],  '45% reduction in cost per lead',       'A multi-location gym chain that needed to fill memberships efficiently across 8 locations in Sydney.',                     '#EA4335', 2),
  ('Bloom Skincare',           'E-Commerce',     ARRAY['SEO','Content Marketing'],    '180% YoY revenue growth',              'An Australian skincare brand that used content and SEO to build a loyal customer base and grow sustainably.',              '#34A853', 3),
  ('Apex Law Group',           'Legal',          ARRAY['SEO','Google Ads'],           'Page 1 rankings for key terms',        'A mid-size law firm that needed to compete with large national firms in search without a massive ad budget.',              '#FBBC04', 4),
  ('Davidson Real Estate',     'Real Estate',    ARRAY['Social Media','Content'],     '2x vendor appraisal requests',         'A boutique real estate agency that used social media to build community trust and drive listing enquiries.',               '#4285F4', 5),
  ('Torres Constructions',     'Construction',   ARRAY['SEO','Google Ads'],           'Local market dominance achieved',      'A construction company that used local SEO and targeted ads to become the go-to builder in their region.',                '#EA4335', 6)
on conflict do nothing;

-- ---- CAREERS / JOB LISTINGS ----
create table if not exists job_listings (
  id          serial primary key,
  title       text not null,
  type        text not null default 'Full-time',
  location    text not null default 'Melbourne / Hybrid',
  description text not null,
  active      boolean not null default true,
  created_at  timestamptz not null default now()
);
insert into job_listings (title, type, location, description) values
  ('Senior SEO Specialist',    'Full-time', 'Melbourne / Hybrid',  'Lead SEO strategy for a portfolio of Australian clients. You bring 4+ years hands-on SEO experience and a track record of moving keywords to page 1.'),
  ('Google Ads Manager',       'Full-time', 'Melbourne / Remote',  'Own paid search campaigns across Google and Bing. You are comfortable managing $100k+ monthly ad spend and optimising for ROAS.'),
  ('Social Media Strategist',  'Full-time', 'Melbourne / Hybrid',  'Develop and execute social strategies for clients across multiple industries. Strong understanding of Meta, LinkedIn and TikTok audiences required.'),
  ('Content Writer',           'Full-time / Part-time', 'Remote', 'Create high-quality, SEO-optimised content for Australian businesses. You write clearly, meet deadlines and understand how content drives organic growth.')
on conflict do nothing;

-- ---- ROW LEVEL SECURITY (all tables — service_role only) ----
alter table admin_users        enable row level security;
alter table site_settings      enable row level security;
alter table hero               enable row level security;
alter table company_stats      enable row level security;
alter table testimonials       enable row level security;
alter table team_members       enable row level security;
alter table blog_posts         enable row level security;
alter table portfolio_items    enable row level security;
alter table job_listings       enable row level security;

do $$ declare t text;
begin
  foreach t in array array['admin_users','site_settings','hero','company_stats','testimonials','team_members','blog_posts','portfolio_items','job_listings']
  loop
    execute format('
      create policy "service_role_all" on %I
        for all using (auth.role() = ''service_role'')
        with check (auth.role() = ''service_role'');
    ', t);
  end loop;
end $$;
