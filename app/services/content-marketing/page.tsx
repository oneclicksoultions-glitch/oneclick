import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Content Marketing Agency Australia | SEO Content Services | OneClick Solutions',
  description: 'Build authority and generate leads with strategic content marketing. OneClick Solutions creates SEO blog posts, landing pages, ebooks & more for Australian businesses.',
  keywords: ['content marketing agency Australia'],
  alternates: { canonical: 'https://oneclicksoultions.com.au/services/content-marketing/' },
};

const contentMarketingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://oneclicksoultions.com.au/services/content-marketing/#service',
  name: 'Content Marketing',
  description: 'SEO-driven content strategies including long-form articles, landing pages, and email campaigns that rank and convert for Australian businesses.',
  url: 'https://oneclicksoultions.com.au/services/content-marketing/',
  provider: { '@id': 'https://oneclicksoultions.com.au/#organization' },
  areaServed: { '@type': 'Country', name: 'Australia' },
  serviceType: 'Content Marketing',
  category: 'Digital Marketing',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://oneclicksoultions.com.au/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://oneclicksoultions.com.au/services/' },
      { '@type': 'ListItem', position: 3, name: 'Content Marketing', item: 'https://oneclicksoultions.com.au/services/content-marketing/' },
    ],
  },
};

export default function ContentMarketingPage() {
  return (
    <>
      <JsonLd data={contentMarketingSchema} />
      <ServicePageLayout
        title="Content Marketing"
        subtitle="Content That Educates. Content That Converts."
        description="Content is the fuel that powers every digital channel. We create strategic, high-quality content that attracts your ideal audience, builds authority, and drives measurable business results — from blog posts to landing pages to video scripts."
        color="#4285F4"
        image="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800"
        canonical="https://oneclicksoultions.com.au/services/content-marketing/"
        features={[
          'Content strategy and editorial planning',
          'Blog post and article writing',
          'Landing page and sales page copywriting',
          'E-books, whitepapers, and lead magnets',
          'Infographic design and distribution',
          'Video script writing and storyboarding',
          'Email newsletter content',
          'Content repurposing across channels',
          'Content performance analytics',
        ]}
        benefits={[
          { title: 'Build Industry Authority', desc: 'Consistently publishing expert content positions your brand as a thought leader, building trust with potential customers before they even contact you.' },
          { title: 'SEO and Organic Growth', desc: 'Quality content is the foundation of SEO. Each piece of content is an opportunity to rank for new keywords and attract organic traffic.' },
          { title: 'Nurture and Convert Leads', desc: 'Content guides prospects through the buying journey — from awareness to consideration to decision — building trust at every stage.' },
          { title: 'Social Media Fuel', desc: 'Great content gives your social media presence substance. Share blog posts, infographics, and videos to keep your audience engaged.' },
          { title: 'Long-Term Asset Value', desc: 'Unlike ads that stop when you stop paying, content keeps generating traffic and leads for months and years after publication.' },
          { title: 'Customer Retention', desc: 'Educational content helps existing customers get more value from your products and services, reducing churn and increasing lifetime value.' },
        ]}
        faqs={[
          { q: 'What types of content do you create?', a: 'We create blog posts, landing pages, e-books, whitepapers, infographics, video scripts, email sequences, social media content, and more — all tailored to your brand and audience.' },
          { q: 'How do you ensure content quality?', a: 'Our content team includes experienced writers, editors, and designers. Every piece goes through research, writing, editing, and client review before publication.' },
          { q: 'How often should we publish new content?', a: 'Consistency matters more than volume. We typically recommend 2-4 blog posts per month plus supporting social content, but the right cadence depends on your goals.' },
          { q: 'Can you write for our specific industry?', a: 'Yes. We research every industry thoroughly and work with subject matter experts to ensure accuracy and relevance in all content we produce.' },
        ]}
      />
    </>
  );
}
