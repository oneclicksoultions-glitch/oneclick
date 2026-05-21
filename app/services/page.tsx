import Link from 'next/link';
import { Search, MousePointerClick, Share2, Globe, FileText, Mail, ChartBar as BarChart2, Smartphone, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
      <head>
        <link rel="canonical" href="https://oneclicksoultions.com.au/services/" />
      </head>
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </main>
      <Footer />
    </>
  );
}
