import { MetadataRoute } from 'next';
import { supabaseAdmin } from '@/lib/supabase';

const BASE = 'https://oneclicksoultions.com.au';

const staticRoutes: MetadataRoute.Sitemap = [
  { url: `${BASE}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
  { url: `${BASE}/about/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/services/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/services/seo/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/services/google-ads/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/services/social-media/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/services/web-design/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/services/content-marketing/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/services/email-marketing/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/services/analytics/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/services/app-marketing/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/portfolio/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/blog/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  { url: `${BASE}/team/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE}/careers/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
  { url: `${BASE}/contact/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/privacy-policy/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  { url: `${BASE}/terms-of-service/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const { data: posts } = await supabaseAdmin
      .from('blog_posts')
      .select('slug, created_at, updated_at')
      .eq('published', true)
      .not('slug', 'is', null);

    const blogRoutes: MetadataRoute.Sitemap = (posts ?? []).map((post) => ({
      url: `${BASE}/blog/${post.slug}/`,
      lastModified: new Date(post.updated_at || post.created_at),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    return [...staticRoutes, ...blogRoutes];
  } catch {
    return staticRoutes;
  }
}
