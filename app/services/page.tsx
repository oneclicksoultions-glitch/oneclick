import type { Metadata } from 'next';
import Link from 'next/link';
import { Search, MousePointerClick, Share2, Globe, FileText, Mail, ChartBar as BarChart2, Smartphone, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Digital Marketing Services Australia | SEO, Ads, Social & More',
  description: 'Full-suite digital marketing services for Australian businesses — SEO, Google Ads, Social Media, Web Design, Email Marketing, Content, Analytics & App Marketing.',
  keywords: ['digital marketing services Australia'],
  alternates: { canonical: 'https://oneclicksoultions.com.au/services/' },
};

const services = [
  {
    icon: Search,
    title: 'Search Engine Optimisation',
    desc: 'Dominate Google rankings with data-driven SEO strategies tailored for Australian markets.',
    href: '/services/seo/',
    color: '#4285F4',
    bg: '#EBF3FE',
  },
  {
    icon: MousePointerClick,
    title: 'Google Ads (PPC)',
    desc: 'Maximise ad spend with precision-targeted campaigns that generate qualified leads fast.',
    href: '/services/google-ads/',
    color: '#EA4335',
    bg: '#FDECEA',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    desc: 'Build brand awareness and engage audiences across Facebook, Instagram, LinkedIn & TikTok.',
    href: '/services/social-media/',
    color: '#34A853',
    bg: '#E8F5EC',
  },
  {
    icon: Globe,
    title: 'Web Design & Development',
    desc: 'High-converting, mobile-first websites built with modern technology and SEO-ready.',
    href: '/services/web-design/',
    color: '#FBBC04',
    bg: '#FEF8E1',
  },
  {
    icon: FileText,
    title: 'Content Marketing',
    desc: 'Strategic content that educates, engages and converts across all channels.',
    href: '/services/content-marketing/',
    color: '#4285F4',
    bg: '#EBF3FE',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    desc: 'Automated email campaigns that nurture leads and retain customers effectively.',
    href: '/services/email-marketing/',
    color: '#EA4335',
    bg: '#FDECEA',
  },
  {
    icon: BarChart2,
    title: 'Analytics & Reporting',
    desc: 'Transparent, real-time reporting on every campaign with clear ROI tracking.',
    href: '/services/analytics/',
    color: '#34A853',
    bg: '#E8F5EC',
  },
  {
    icon: Smartphone,
    title: 'App Marketing',
    desc: 'Drive downloads and in-app engagement with targeted mobile campaigns.',
    href: '/services/app-marketing/',
    color: '#FBBC04',
    bg: '#FEF8E1',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-700 text-gray-900 mb-4">
                Our Digital Marketing{' '}
                <span style={{ color: '#4285F4' }}>Services</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Everything you need to establish, grow, and dominate your digital presence — all under one roof.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: service.bg }}
                    >
                      <Icon className="h-6 w-6" style={{ color: service.color }} />
                    </div>
                    <h2 className="text-base font-700 text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.desc}</p>
                    <div
                      className="flex items-center gap-1 text-sm font-500"
                      style={{ color: service.color }}
                    >
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-4">
                Why Australian Businesses Choose <span style={{ color: '#4285F4' }}>OneClick Solutions</span>
              </h2>
              <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
                We are a full-service digital marketing agency based in Melbourne, Australia. Our team of specialists covers every aspect of online marketing — from search engine optimisation and paid advertising to social media management, web design, and data analytics. Whether you are a small business looking to establish your online presence or a large enterprise aiming to dominate your market, we build strategies around your specific goals and budget.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-700 mb-2" style={{ color: '#4285F4' }}>500+</div>
                <div className="text-base font-700 text-gray-900 mb-1">Australian Clients</div>
                <p className="text-sm text-gray-500">Businesses across retail, legal, health, construction and more trust us to grow their revenue online.</p>
              </div>
              <div>
                <div className="text-4xl font-700 mb-2" style={{ color: '#EA4335' }}>10+</div>
                <div className="text-base font-700 text-gray-900 mb-1">Years of Experience</div>
                <p className="text-sm text-gray-500">A decade of hands-on experience across every major digital marketing channel and industry vertical.</p>
              </div>
              <div>
                <div className="text-4xl font-700 mb-2" style={{ color: '#34A853' }}>3x</div>
                <div className="text-base font-700 text-gray-900 mb-1">Average Client ROI</div>
                <p className="text-sm text-gray-500">Our campaigns consistently deliver measurable returns — tracked, reported, and continuously optimised.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-12 text-center">
              How We <span style={{ color: '#4285F4' }}>Work</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery & Audit', desc: 'We start with a deep dive into your business, competitors, and current digital performance to identify the biggest opportunities.' },
                { step: '02', title: 'Strategy & Planning', desc: 'We build a tailored, multi-channel strategy with clear goals, timelines, and budget allocations aligned to your business objectives.' },
                { step: '03', title: 'Execution & Launch', desc: 'Our specialists execute every element — campaigns, content, technical fixes, and creative — with precision and speed.' },
                { step: '04', title: 'Optimise & Report', desc: 'We track every metric, report transparently, and continuously optimise to improve performance and maximise your return on investment.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="text-5xl font-700 mb-3" style={{ color: '#4285F4', opacity: 0.15 }}>{item.step}</div>
                  <h3 className="text-base font-700 text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-4">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Book a free 30-minute strategy consultation with our team. No obligation, no sales pitch — just honest advice on what will move the needle for your business.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-500 text-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
              style={{ backgroundColor: '#4285F4' }}
            >
              Get Free Strategy Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
