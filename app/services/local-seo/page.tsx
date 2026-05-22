import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Local SEO Agency Australia | Google Maps & Map Pack Rankings',
  description: 'Dominate local search with OneClick Solutions. We get Australian businesses ranking in Google Map Packs, AI Overviews & local results — with no ad spend required.',
  keywords: ['local SEO Australia'],
  alternates: { canonical: 'https://oneclicksoultions.com.au/services/local-seo/' },
};

const localSeoSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://oneclicksoultions.com.au/services/local-seo/#service',
  name: 'Local SEO',
  description:
    'We help Australian local businesses rank in Google Map Packs, AI Overviews, and local organic results through citations, on-page optimisation, Google Business Profile management, and review strategies.',
  url: 'https://oneclicksoultions.com.au/services/local-seo/',
  provider: { '@id': 'https://oneclicksoultions.com.au/#organization' },
  areaServed: { '@type': 'Country', name: 'Australia' },
  serviceType: 'Local SEO',
  category: 'Digital Marketing',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://oneclicksoultions.com.au/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://oneclicksoultions.com.au/services/' },
      { '@type': 'ListItem', position: 3, name: 'Local SEO', item: 'https://oneclicksoultions.com.au/services/local-seo/' },
    ],
  },
};

export default function LocalSEOPage() {
  return (
    <>
      <JsonLd data={localSeoSchema} />
      <ServicePageLayout
        title="Local SEO"
        subtitle="Rank in Maps. Get Found Locally. Win More Customers."
        description="We help Australian local businesses get discovered by customers in their area — ranking in Google Map Packs, AI Overviews, and local organic results without spending a dollar on ads. Our four-system approach to local SEO runs automatically once set up, so your business keeps getting found 24/7."
        color="#34A853"
        image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
        canonical="https://oneclicksoultions.com.au/services/local-seo/"
        features={[
          'Local citations audit and directory submissions',
          'Google Business Profile setup and optimisation',
          'NAP consistency across all directories',
          'On-page local SEO (titles, schema, content)',
          'Google Map Pack ranking strategy',
          'Automated Google Business Profile content feed',
          'Review generation and smart review responses',
          'AI Overview optimisation for local searches',
          'Monthly local ranking and visibility reports',
        ]}
        benefits={[
          { title: 'Get Found in Map Packs', desc: 'Google Map Pack results appear above organic listings. Ranking here puts your business directly in front of customers with high purchase intent in your local area.' },
          { title: 'Zero Ad Spend Required', desc: 'Local SEO delivers qualified leads from organic search — no ongoing ad budget needed. Once your rankings are established, traffic keeps coming for free.' },
          { title: 'Recommended by AI Overviews', desc: 'Google and ChatGPT are increasingly recommending local businesses in AI-generated answers. We optimise your presence to appear in these high-visibility placements.' },
          { title: 'Build Local Trust & Authority', desc: 'Consistent citations, verified business listings, and positive reviews signal to Google that your business is legitimate, local, and trustworthy.' },
          { title: 'Automated Systems That Scale', desc: 'We build automated workflows that push content to your Google Business Profile and manage review responses — so your local SEO keeps working without manual effort.' },
          { title: 'Outrank Local Competitors', desc: 'Most local businesses do not have a proper local SEO strategy. We analyse your competitors and find the gaps that give you the fastest path to ranking above them.' },
        ]}
        faqs={[
          { q: 'What is local SEO and how is it different from regular SEO?', a: 'Local SEO focuses specifically on ranking your business for searches in a specific geographic area — like "plumber Melbourne" or "cafe near me". It involves optimising your Google Business Profile, building local citations, and earning reviews, in addition to standard on-page SEO. Regular SEO targets broader national or global audiences.' },
          { q: 'How long does it take to rank in the Google Map Pack?', a: 'Most businesses see meaningful improvements in local rankings within 2-4 months. Factors that affect speed include your current Google Business Profile status, the competitiveness of your local market, and how many citations and reviews you already have.' },
          { q: 'What are local citations and why do they matter?', a: 'Citations are mentions of your business name, address, and phone number (NAP) on other websites — like True Local, White Pages, Yelp, and industry-specific directories. Consistent citations across authoritative directories signal to Google that your business is real and trustworthy, which directly improves your local rankings.' },
          { q: 'Do I need a Google Business Profile for local SEO?', a: 'Yes — your Google Business Profile is the single most important factor for local SEO. It is what appears in Map Pack results and powers your visibility on Google Maps. We set it up, optimise every section, and build automated systems to keep it active with regular posts, photos, and review responses.' },
        ]}
      />
    </>
  );
}
