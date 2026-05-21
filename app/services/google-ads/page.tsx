import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Google Ads Management Australia | PPC Agency | OneClick Solutions',
  description: 'Get qualified leads fast with expert Google Ads management. OneClick Solutions runs high-ROI PPC campaigns for Australian businesses across Search, Display & Shopping.',
  keywords: ['Google Ads management Australia'],
  alternates: { canonical: 'https://oneclicksoultions.com.au/services/google-ads/' },
};

export default function GoogleAdsPage() {
  return (
    <ServicePageLayout
      title="Google Ads (PPC)"
      subtitle="Instant Visibility. Qualified Leads. Measurable ROI."
      description="Our Google Ads management service is designed for Australian businesses that want immediate, measurable results. We build, manage and optimise campaigns that turn ad spend into revenue — not just clicks."
      color="#EA4335"
      image="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
      canonical="https://oneclicksoultions.com.au/services/google-ads/"
      features={[
        'Campaign strategy and account structure',
        'Keyword research and negative keyword lists',
        'Ad copywriting and A/B testing',
        'Landing page optimisation guidance',
        'Bid management and budget allocation',
        'Conversion tracking and attribution setup',
        'Remarketing and display network campaigns',
        'Shopping campaign management',
        'Weekly optimisation and performance reviews',
      ]}
      benefits={[
        { title: 'Immediate Results', desc: 'Unlike SEO, Google Ads puts you at the top of search results from day one. Start generating leads and sales within hours of campaign launch.' },
        { title: 'Precise Targeting', desc: 'Target by location, device, time of day, audience demographics, and even specific search terms to reach the right people at the right time.' },
        { title: 'Full Budget Control', desc: 'Set daily and monthly budgets that work for your business. Scale up when campaigns perform, pause when needed — you are always in control.' },
        { title: 'Measurable ROI', desc: 'Every dollar is tracked. Know exactly which keywords, ads, and campaigns drive revenue so you can invest with confidence.' },
        { title: 'Competitive Advantage', desc: 'Appear above organic results and capture traffic that would otherwise go to competitors. Essential for high-competition industries.' },
        { title: 'Remarketing Power', desc: 'Re-engage visitors who did not convert the first time. Remarketing ads have significantly higher conversion rates and lower costs.' },
      ]}
      faqs={[
        { q: 'How much should I spend on Google Ads?', a: 'Budgets vary by industry and goals. We recommend starting with a test budget and scaling based on performance. We will help you determine the right investment during your free consultation.' },
        { q: 'Do you charge a management fee on top of ad spend?', a: 'Yes, our management fee covers strategy, setup, optimisation, and reporting. It is separate from your Google Ads spend which goes directly to Google.' },
        { q: 'How quickly will I see results?', a: 'Google Ads can generate leads from day one. However, campaigns typically need 2-4 weeks of optimisation to reach peak performance and cost efficiency.' },
        { q: 'What industries do you manage Google Ads for?', a: 'We manage campaigns across all industries including healthcare, legal, real estate, e-commerce, trades, professional services, and more.' },
      ]}
    />
  );
}
