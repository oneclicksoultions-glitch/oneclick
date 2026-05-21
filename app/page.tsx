import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

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

export default function Home() {
  return (
    <>
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
