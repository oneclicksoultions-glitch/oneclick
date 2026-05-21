import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency Australia | OneClick Solutions',
  description: 'OneClick Solutions is Australia\'s results-driven digital marketing agency. SEO, Google Ads, Social Media, Web Design & more. Get a free strategy call today.',
  keywords: ['digital marketing agency Australia'],
  alternates: { canonical: 'https://oneclicksoultions.com.au/' },
};
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://oneclicksoultions.com.au/#website',
  url: 'https://oneclicksoultions.com.au/',
  name: 'OneClick Solutions',
  description: "Australia's leading digital marketing agency based in Melbourne.",
  publisher: { '@id': 'https://oneclicksoultions.com.au/#organization' },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://oneclicksoultions.com.au/?s={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
};

const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://oneclicksoultions.com.au/#webpage',
  url: 'https://oneclicksoultions.com.au/',
  name: 'Digital Marketing Agency Australia | OneClick Solutions',
  description:
    "OneClick Solutions is Australia's results-driven digital marketing agency. SEO, Google Ads, Social Media, Web Design & more. Get a free strategy call today.",
  isPartOf: { '@id': 'https://oneclicksoultions.com.au/#website' },
  about: { '@id': 'https://oneclicksoultions.com.au/#organization' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://oneclicksoultions.com.au/' }],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={homePageSchema} />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
