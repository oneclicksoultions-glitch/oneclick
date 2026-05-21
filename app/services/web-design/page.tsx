import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Web Design Australia | Conversion-Optimised Websites | OneClick Solutions',
  description: 'Beautiful, fast, mobile-first websites built to convert. OneClick Solutions designs and develops SEO-ready websites for Australian businesses that generate real leads.',
  keywords: ['web design Australia'],
  alternates: { canonical: 'https://oneclicksoultions.com.au/services/web-design/' },
};

const webDesignSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://oneclicksoultions.com.au/services/web-design/#service',
  name: 'Web Design & Development',
  description: 'Fast, conversion-optimised websites built for both performance and search visibility. Specialising in Next.js, WordPress, and Shopify for Australian businesses.',
  url: 'https://oneclicksoultions.com.au/services/web-design/',
  provider: { '@id': 'https://oneclicksoultions.com.au/#organization' },
  areaServed: { '@type': 'Country', name: 'Australia' },
  serviceType: 'Web Design & Development',
  category: 'Digital Marketing',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://oneclicksoultions.com.au/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://oneclicksoultions.com.au/services/' },
      { '@type': 'ListItem', position: 3, name: 'Web Design', item: 'https://oneclicksoultions.com.au/services/web-design/' },
    ],
  },
};

export default function WebDesignPage() {
  return (
    <>
      <JsonLd data={webDesignSchema} />
      <ServicePageLayout
        title="Web Design & Development"
        subtitle="Beautiful Websites. Built to Convert."
        description="Your website is your digital storefront. We design and develop high-performance, mobile-first websites that look stunning, load fast, and are built to convert visitors into customers. Every site is SEO-ready from day one."
        color="#FBBC04"
        image="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
        canonical="https://oneclicksoultions.com.au/services/web-design/"
        features={[
          'Custom website design and development',
          'Mobile-first responsive design',
          'UI/UX design and user journey mapping',
          'SEO-optimised site architecture',
          'Core Web Vitals and speed optimisation',
          'CMS integration (WordPress, Shopify, custom)',
          'E-commerce functionality and payment integration',
          'Contact forms and lead capture systems',
          'SSL, security hardening, and hosting setup',
        ]}
        benefits={[
          { title: 'First Impressions Matter', desc: 'Users form an opinion about your website in 0.05 seconds. Professional design builds instant credibility and trust with potential customers.' },
          { title: 'Mobile-First Experience', desc: 'Over 60% of web traffic is mobile. Our designs are built mobile-first, ensuring a flawless experience on every device.' },
          { title: 'Built for Conversions', desc: 'Every element is strategically placed to guide visitors toward your goals — whether that is a phone call, form submission, or purchase.' },
          { title: 'Speed and Performance', desc: 'We optimise for Core Web Vitals to ensure fast load times. Speed impacts SEO rankings, user experience, and conversion rates.' },
          { title: 'SEO-Ready Foundation', desc: 'Clean code, proper heading structure, schema markup, and optimised metadata give your site the best possible start in search rankings.' },
          { title: 'Easy to Manage', desc: 'We build on user-friendly CMS platforms so you can update content, add pages, and manage your site without technical knowledge.' },
        ]}
        faqs={[
          { q: 'How long does a website build take?', a: 'A standard business website takes 4-8 weeks from brief to launch. E-commerce or complex custom builds may take 8-12 weeks depending on scope.' },
          { q: 'Do you redesign existing websites?', a: 'Yes. We audit your current site, identify issues, and either redesign it completely or improve specific areas based on your goals and budget.' },
          { q: 'Will my website rank on Google?', a: 'Every site we build is SEO-ready with proper structure, speed, and metadata. For competitive rankings, we recommend pairing web design with our SEO service.' },
          { q: 'What CMS platforms do you work with?', a: 'We primarily build on WordPress, Shopify, and custom Next.js solutions. We will recommend the best platform based on your requirements.' },
        ]}
      />
    </>
  );
}
