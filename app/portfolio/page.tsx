import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Digital Marketing Case Studies Australia | OneClick Solutions Portfolio',
  description: 'Real results for real Australian businesses. See how OneClick Solutions has driven 3x traffic, 180% revenue growth, and page-1 rankings across industries.',
  keywords: ['digital marketing case studies Australia'],
  alternates: { canonical: 'https://oneclicksoultions.com.au/portfolio/' },
};

const projects = [
  {
    title: 'Mitchell Home Solutions',
    industry: 'Home Services',
    services: ['SEO', 'Google Ads', 'Web Design'],
    result: '3x organic traffic, 2x leads in 6 months',
    color: '#4285F4',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'ProFit Gym Network',
    industry: 'Fitness',
    services: ['Google Ads', 'Social Media'],
    result: '45% reduction in cost per lead',
    color: '#EA4335',
    image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Bloom Skincare',
    industry: 'E-Commerce / Beauty',
    services: ['Social Media', 'Email Marketing', 'SEO'],
    result: '180% year-on-year revenue growth',
    color: '#34A853',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Apex Law Group',
    industry: 'Legal',
    services: ['SEO', 'Content Marketing'],
    result: 'Page 1 rankings for all practice areas',
    color: '#FBBC04',
    image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Davidson Real Estate',
    industry: 'Real Estate',
    services: ['Web Design', 'SEO', 'Social Media'],
    result: 'Dominated local search in 4 months',
    color: '#4285F4',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Torres Constructions',
    industry: 'Construction',
    services: ['SEO', 'Google Ads'],
    result: 'From invisible to local market leader',
    color: '#EA4335',
    image: 'https://images.pexels.com/photos/1763716/pexels-photo-1763716.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-700 text-gray-900 mb-4">
                Our <span style={{ color: '#4285F4' }}>Portfolio</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Real results for real Australian businesses. See how we have helped clients across industries grow their online presence and revenue.
              </p>
              <p className="text-gray-500 max-w-3xl mx-auto mt-4 leading-relaxed">
                Every case study below represents a real partnership where we set clear goals, built a tailored digital marketing strategy, and delivered measurable outcomes. From tripling organic traffic for a home services company to achieving 180% year-on-year revenue growth for an e-commerce brand, our work speaks for itself. We operate across SEO, Google Ads, social media, web design, content marketing, and email marketing — often combining multiple channels for compounding results.
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-8 text-center">
              Client <span style={{ color: '#4285F4' }}>Case Studies</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <div key={p.title} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={`${p.title} case study`}
                      width={600}
                      height={192}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className="text-xs font-500 text-white px-3 py-1 rounded-full"
                        style={{ backgroundColor: p.color }}
                      >
                        {p.industry}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-700 text-gray-900 mb-2">{p.title}</h3>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.services.map((s) => (
                        <span key={s} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm font-500 mb-4" style={{ color: p.color }}>
                      {p.result}
                    </p>
                    <Link
                      href="/contact/"
                      className="inline-flex items-center gap-1 text-sm font-500 transition-colors hover:underline"
                      style={{ color: p.color }}
                    >
                      Get Similar Results
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-6 text-center">
              Industries We <span style={{ color: '#4285F4' }}>Serve</span>
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
              Our team has delivered proven digital marketing results across a wide range of Australian industries. We understand the unique competitive landscape, buyer behaviour, and regulatory considerations that affect your sector — so our strategies are built to work in your specific market, not just in theory.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Home Services', 'Fitness & Wellness', 'E-Commerce', 'Legal', 'Real Estate', 'Construction', 'Healthcare', 'Finance', 'Education', 'Hospitality', 'Retail', 'Professional Services'].map((industry) => (
                <span
                  key={industry}
                  className="px-4 py-2 rounded-full text-sm font-500 bg-white border border-gray-200 text-gray-700"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-4">
              Want Results Like These?
            </h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Every business is different. Let us create a custom strategy for your goals.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-500 text-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
              style={{ backgroundColor: '#4285F4' }}
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
