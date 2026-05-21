import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Social Media Marketing Australia | Management Agency | OneClick Solutions',
  description: 'Grow your brand on Facebook, Instagram, LinkedIn & TikTok with OneClick Solutions. Expert social media strategy, content creation & paid social for Australian businesses.',
  keywords: ['social media marketing Australia'],
  alternates: { canonical: 'https://oneclicksoultions.com.au/services/social-media/' },
};

const socialMediaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://oneclicksoultions.com.au/services/social-media/#service',
  name: 'Social Media Marketing',
  description: 'Organic and paid social strategies across Meta, LinkedIn, TikTok, and Instagram for Australian brands. Community building, content creation, and paid amplification.',
  url: 'https://oneclicksoultions.com.au/services/social-media/',
  provider: { '@id': 'https://oneclicksoultions.com.au/#organization' },
  areaServed: { '@type': 'Country', name: 'Australia' },
  serviceType: 'Social Media Marketing',
  category: 'Digital Marketing',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://oneclicksoultions.com.au/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://oneclicksoultions.com.au/services/' },
      { '@type': 'ListItem', position: 3, name: 'Social Media Marketing', item: 'https://oneclicksoultions.com.au/services/social-media/' },
    ],
  },
};

export default function SocialMediaPage() {
  return (
    <>
      <JsonLd data={socialMediaSchema} />
      <ServicePageLayout
        title="Social Media Marketing"
        subtitle="Build Your Brand. Engage Your Audience. Drive Results."
        description="We create and execute social media strategies that go beyond posting. From content creation to community management to paid social campaigns, we help Australian brands connect with their audience and turn followers into customers."
        color="#34A853"
        image="https://images.pexels.com/photos/6078123/pexels-photo-6078123.jpeg?auto=compress&cs=tinysrgb&w=800"
        canonical="https://oneclicksoultions.com.au/services/social-media/"
        features={[
          'Social media strategy and planning',
          'Content calendar creation and management',
          'Professional graphic design and video content',
          'Copywriting for each platform',
          'Community management and engagement',
          'Paid social advertising (Meta, LinkedIn, TikTok)',
          'Influencer outreach and partnerships',
          'Social listening and brand monitoring',
          'Monthly analytics and performance reports',
        ]}
        benefits={[
          { title: 'Brand Awareness at Scale', desc: 'Social media puts your brand in front of thousands of potential customers daily. Consistent, quality content builds recognition and trust over time.' },
          { title: 'Direct Customer Engagement', desc: 'Social platforms enable two-way conversations with your audience. Respond to questions, address concerns, and build genuine relationships.' },
          { title: 'Cost-Effective Reach', desc: 'Organic social media offers free reach, while paid social ads deliver some of the lowest CPMs in digital advertising.' },
          { title: 'Targeted Advertising', desc: 'Paid social allows hyper-targeting by interests, behaviours, lookalike audiences, and demographics to reach your ideal customers.' },
          { title: 'Social Proof and Trust', desc: 'Active, engaging social profiles serve as social proof. Customers research brands on social before making purchase decisions.' },
          { title: 'Website Traffic and Conversions', desc: 'Strategic social content drives qualified traffic to your website, landing pages, and e-commerce store.' },
        ]}
        faqs={[
          { q: 'Which social media platforms should my business be on?', a: 'It depends on your audience. B2B companies perform well on LinkedIn, consumer brands thrive on Instagram and TikTok, and Facebook works for most demographics. We will recommend the right mix during strategy development.' },
          { q: 'How often should we post on social media?', a: 'Quality over quantity. We typically recommend 3-5 posts per week per platform, but the right frequency depends on your industry, audience, and content capacity.' },
          { q: 'Do you create the content or do we need to provide it?', a: 'We handle everything — strategy, copywriting, design, and video. You provide brand guidelines and approve content before it goes live.' },
          { q: 'Can social media actually generate leads and sales?', a: 'Absolutely. With the right strategy combining organic content and paid campaigns, social media drives measurable leads, sales, and revenue for businesses of all sizes.' },
        ]}
      />
    </>
  );
}
