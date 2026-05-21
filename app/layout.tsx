import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
  keywords: [
    'digital marketing Australia',
    'SEO agency Australia',
    'Google Ads management',
    'social media marketing',
    'web design Australia',
    'OneClick Solutions',
  ],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
