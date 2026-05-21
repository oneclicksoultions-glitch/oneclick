import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'SEO Agency Australia | Search Engine Optimisation Services',
  description: 'Rank higher on Google with OneClick Solutions\' expert SEO services. Technical SEO, link building, local SEO & content strategy for Australian businesses.',
  keywords: ['SEO agency Australia'],
  alternates: { canonical: 'https://oneclicksoultions.com.au/services/seo/' },
};

const seoSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://oneclicksoultions.com.au/services/seo/#service',
  name: 'Search Engine Optimisation (SEO)',
  description:
    'Technical SEO, content strategy, and link building for Australian businesses. We help brands rank on page one for competitive keywords and maintain those rankings long-term.',
  url: 'https://oneclicksoultions.com.au/services/seo/',
  provider: { '@id': 'https://oneclicksoultions.com.au/#organization' },
  areaServed: { '@type': 'Country', name: 'Australia' },
  serviceType: 'Search Engine Optimisation',
  category: 'Digital Marketing',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://oneclicksoultions.com.au/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://oneclicksoultions.com.au/services/' },
      { '@type': 'ListItem', position: 3, name: 'SEO', item: 'https://oneclicksoultions.com.au/services/seo/' },
    ],
  },
};

export default function SEOPage() {
  return (
    <>
      <JsonLd data={seoSchema} />
      <ServicePageLayout
      title="Search Engine Optimisation"
      subtitle="Rank Higher. Get Found. Grow Faster."
      description="Our SEO strategies are built for Australian businesses that want real, sustainable organic growth. We combine technical expertise, content strategy, and authority building to get you on page one — and keep you there."
      color="#4285F4"
      image="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800"
      canonical="https://oneclicksoultions.com.au/services/seo/"
      features={[
        'Comprehensive technical SEO audit and fixes',
        'Keyword research and competitive analysis',
        'On-page optimisation (titles, meta, headings, schema)',
        'Content strategy and SEO copywriting',
        'Link building and digital PR',
        'Local SEO and Google Business Profile optimisation',
        'Monthly ranking reports and analytics',
        'Core Web Vitals and speed optimisation',
        'Mobile-first indexing compliance',
      ]}
      benefits={[
        { title: 'Sustainable Traffic Growth', desc: 'Unlike paid ads, organic traffic compounds over time. Our SEO builds an asset that keeps delivering results long after the initial investment.' },
        { title: 'Higher Trust and Credibility', desc: 'Websites ranking organically are perceived as more trustworthy. Users click organic results 5.66x more than paid ads.' },
        { title: 'Better Cost Efficiency', desc: 'SEO delivers the highest long-term ROI of any digital channel. Once ranking, each click is essentially free.' },
        { title: 'Targeted, High-Intent Traffic', desc: 'SEO captures people actively searching for your services — they are already in buying mode when they find you.' },
        { title: 'Local Market Dominance', desc: 'We optimise for local search to ensure you appear in map packs and local results across your service areas.' },
        { title: 'Data-Driven Decisions', desc: 'Every strategy is backed by data. We track rankings, traffic, conversions, and revenue to continuously refine our approach.' },
      ]}
      faqs={[
        { q: 'How long does SEO take to show results?', a: 'Most clients see meaningful improvements within 3-6 months, with significant results by 6-12 months. SEO is a long-term investment that compounds over time.' },
        { q: 'Do you guarantee page one rankings?', a: 'No ethical SEO agency can guarantee specific rankings because Google\'s algorithm considers 200+ factors. What we guarantee is a data-driven strategy that consistently improves your visibility and traffic.' },
        { q: 'What is the difference between on-page and off-page SEO?', a: 'On-page SEO involves optimising your website\'s content, structure, and technical elements. Off-page SEO focuses on building authority through backlinks, citations, and brand mentions across the web.' },
        { q: 'How do you measure SEO success?', a: 'We track organic traffic, keyword rankings, conversion rates, and revenue attributed to organic search. You receive detailed monthly reports with clear KPIs.' },
      ]}
    />
    </>
  );
}
