import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Target, Award, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency Melbourne | About OneClick Solutions',
  description: 'Meet the team behind OneClick Solutions — Melbourne\'s trusted digital marketing agency with 10+ years experience, 500+ clients, and a passion for measurable results.',
  keywords: ['digital marketing agency Melbourne', 'about OneClick Solutions', 'Australian digital marketing team'],
  alternates: { canonical: 'https://oneclicksoultions.com.au/about/' },
};

const values = [
  { icon: Target, title: 'Results First', desc: 'Every strategy is built around measurable outcomes. We do not chase vanity metrics — we focus on revenue, leads, and growth that impacts your bottom line.', color: '#4285F4' },
  { icon: Users, title: 'Client Partnership', desc: 'We treat every client relationship as a true partnership. Your success is our success, and we are invested in your long-term growth.', color: '#34A853' },
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards in strategy, execution, and reporting. Good enough is never good enough for our clients.', color: '#EA4335' },
  { icon: TrendingUp, title: 'Innovation', desc: 'Digital marketing evolves constantly. We stay ahead of trends, test new approaches, and adopt cutting-edge tools to keep our clients competitive.', color: '#FBBC04' },
];

const team = [
  { name: 'David Chen', role: 'Founder & CEO', initials: 'DC', color: '#4285F4' },
  { name: 'Rachel Morrison', role: 'Head of SEO', initials: 'RM', color: '#EA4335' },
  { name: 'Aiden Patel', role: 'PPC Director', initials: 'AP', color: '#34A853' },
  { name: 'Sophie Williams', role: 'Creative Director', initials: 'SW', color: '#FBBC04' },
  { name: 'Marcus Lee', role: 'Web Development Lead', initials: 'ML', color: '#4285F4' },
  { name: 'Emily Zhang', role: 'Content Strategist', initials: 'EZ', color: '#EA4335' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-700 text-gray-900 mb-4 leading-tight">
                  About <span style={{ color: '#4285F4' }}>OneClick Solutions</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We are a full-service digital marketing agency based in Australia, dedicated to helping businesses of all sizes grow their online presence and achieve measurable results.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Founded with a simple mission: make world-class digital marketing accessible to Australian businesses. We combine data-driven strategies with creative excellence to deliver campaigns that actually move the needle — not just look good on a report.
                </p>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-500 text-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
                  style={{ backgroundColor: '#4285F4' }}
                >
                  Work With Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="OneClick Solutions team office"
                  width={800}
                  height={600}
                  className="w-full h-72 lg:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: '10+', label: 'Years in Business', color: '#4285F4' },
                { value: '500+', label: 'Clients Served', color: '#EA4335' },
                { value: '30+', label: 'Team Members', color: '#34A853' },
                { value: '15+', label: 'Industries', color: '#FBBC04' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl lg:text-4xl font-700 mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-4">
                Our <span style={{ color: '#4285F4' }}>Values</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">The principles that guide everything we do.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: v.color + '1A' }}>
                      <Icon className="h-5 w-5" style={{ color: v.color }} />
                    </div>
                    <h3 className="text-base font-700 text-gray-900 mb-2">{v.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-4">
                Meet the <span style={{ color: '#4285F4' }}>Team</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">Experienced professionals who are passionate about driving results for your business.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((t) => (
                <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-100 flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-700 shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-base font-700 text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Let us show you what data-driven digital marketing can do for your business. Book a free consultation today.
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
