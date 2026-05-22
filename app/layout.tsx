import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import JsonLd from '@/components/JsonLd';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const siteUrl = 'https://oneclicksoultions.com.au';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'OneClick Solutions | Digital Marketing Agency Australia',
    template: '%s | OneClick Solutions',
  },
  description:
    'OneClick Solutions is a full-service digital marketing agency in Australia offering SEO, Google Ads, Social Media Marketing, Web Design, and more to grow your business online.',
  keywords: ['digital marketing agency Australia'],
  openGraph: {
    type: 'website',
    url: siteUrl + '/',
    title: 'OneClick Solutions | Digital Marketing Agency Australia',
    description:
      'Full-service digital marketing agency in Australia. SEO, Google Ads, Social Media, Web Design & more.',
    siteName: 'OneClick Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneClick Solutions | Digital Marketing Agency Australia',
    description:
      'Full-service digital marketing agency in Australia. SEO, Google Ads, Social Media, Web Design & more.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'lBeZkpT1HMLAXA6wr1nBIVSEgDFAju3sfHDkEnSONso',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
  '@id': 'https://oneclicksoultions.com.au/#organization',
  name: 'OneClick Solutions',
  alternateName: 'OneClick Solutions Digital Marketing',
  url: 'https://oneclicksoultions.com.au/',
  logo: {
    '@type': 'ImageObject',
    url: 'https://oneclicksoultions.com.au/logo.png',
    width: 200,
    height: 60,
  },
  image: 'https://oneclicksoultions.com.au/logo.png',
  description:
    'OneClick Solutions is a full-service digital marketing agency in Melbourne, Australia offering SEO, Google Ads, Social Media Marketing, Web Design, Content Marketing, and more.',
  telephone: '+61390000000',
  email: 'hello@oneclicksoultions.com.au',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Level 5, 123 Collins Street',
    addressLocality: 'Melbourne',
    addressRegion: 'VIC',
    postalCode: '3000',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -37.8136,
    longitude: 144.9631,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Australia',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Marketing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search Engine Optimisation (SEO)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads (PPC)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design & Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Marketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Email Marketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Analytics & Reporting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'App Marketing' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
  },
  sameAs: [
    'https://www.facebook.com/oneclicksoultions',
    'https://www.linkedin.com/company/oneclicksoultions',
    'https://www.instagram.com/oneclicksoultions',
  ],
  foundingDate: '2014',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 20 },
  knowsAbout: [
    'SEO',
    'Google Ads',
    'Social Media Marketing',
    'Web Design',
    'Content Marketing',
    'Email Marketing',
    'Digital Marketing',
    'Analytics',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PD2HVQJH');`,
          }}
        />
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-60DJ78TQ4D" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-60DJ78TQ4D');`,
          }}
        />
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wuwaf9h56y");`,
          }}
        />
        {/* Ahrefs Analytics */}
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="j7OmZyG/GitK3PnPraAhSQ" async />
      </head>
      <body className={roboto.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PD2HVQJH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <JsonLd data={organizationSchema} />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
