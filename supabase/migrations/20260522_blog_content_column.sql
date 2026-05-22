-- Add content body and updated_at to blog_posts
alter table blog_posts add column if not exists content text;
alter table blog_posts add column if not exists updated_at timestamptz;
