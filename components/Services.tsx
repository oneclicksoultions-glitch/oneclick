import Link from 'next/link';
import {
  Search,
  MousePointerClick,
  Share2,
  Globe,
  FileText,
  Mail,
  BarChart2,
  Smartphone,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Search Engine Optimisation',
    desc: 'Dominate Google rankings with data-driven SEO strategies tailored for Australian markets. Technical, on-page & off-page optimisation.',
    href: '/services/seo/',
    color: '#4285F4',
    bg: '#EBF3FE',
  },
  {
    icon: MousePointerClick,
    title: 'Google Ads (PPC)',
    desc: 'Maximise your ad spend with precision-targeted Google Ads campaigns that generate qualified leads and sales fast.',
    href: '/services/google-ads/',
    color: '#EA4335',
    bg: '#FDECEA',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    desc: 'Build brand awareness and engage your audience across Facebook, Instagram, LinkedIn & TikTok with compelling content.',
    href: '/services/social-media/',
    color: '#34A853',
    bg: '#E8F5EC',
  },
  {
    icon: Globe,
    title: 'Web Design & Development',
    desc: 'High-converting, mobile-first websites built with modern technology. Speed-optimised and SEO-ready from day one.',
    href: '/services/web-design/',
    color: '#FBBC04',
    bg: '#FEF8E1',
  },
  {
    icon: FileText,
    title: 'Content Marketing',
    desc: 'Strategic content that educates, engages and converts — from blog posts and landing pages to videos and infographics.',
    href: '/services/content-marketing/',
    color: '#4285F4',
    bg: '#EBF3FE',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    desc: 'Automated email campaigns that nurture leads and retain customers. Personalised, segmented, and results-focused.',
    href: '/services/email-marketing/',
    color: '#EA4335',
    bg: '#FDECEA',
  },
  {
    icon: BarChart2,
    title: 'Analytics & Reporting',
    desc: 'Transparent, real-time reporting on every campaign. Know exactly where your marketing budget is going and what ROI you are getting.',
    href: '/services/analytics/',
    color: '#34A853',
    bg: '#E8F5EC',
  },
  {
    icon: Smartphone,
    title: 'App Marketing',
    desc: 'Drive downloads, installs and in-app engagement for your mobile app with targeted digital campaigns across all channels.',
    href: '/services/app-marketing/',
    color: '#FBBC04',
    bg: '#FEF8E1',
  },
];

export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="text-sm font-500 text-gray-600">What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-700 text-gray-900 mb-4">
            Complete Digital Marketing{' '}
            <span style={{ color: '#4285F4' }}>Services</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Everything you need to establish, grow, and dominate your digital presence — all under one roof.
          </p>
        </div>

        {/* Grid */}
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
                <h3 className="text-base font-700 text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {service.desc}
                </p>
                <div
                  className="flex items-center gap-1 text-sm font-500 transition-colors"
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
  );
}
