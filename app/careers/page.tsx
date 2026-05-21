import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Digital Marketing Jobs Melbourne | Careers at OneClick Solutions',
  description: 'Join OneClick Solutions — we are hiring digital marketing professionals in Melbourne. Explore open roles in SEO, Google Ads, Social Media, and Content Marketing.',
  keywords: ['digital marketing jobs Melbourne'],
  alternates: { canonical: 'https://oneclicksoultions.com.au/careers/' },
};

const openRoles = [
  {
    title: 'Senior SEO Specialist',
    type: 'Full-time',
    location: 'Melbourne / Hybrid',
    department: 'SEO',
    color: '#4285F4',
    description: 'Lead technical and content SEO strategies for a portfolio of Australian clients. You will conduct audits, build link strategies, and mentor junior team members.',
  },
  {
    title: 'Google Ads Manager',
    type: 'Full-time',
    location: 'Melbourne / Remote',
    department: 'Paid Media',
    color: '#EA4335',
    description: 'Manage and optimise Google Ads campaigns across Search, Display, and Performance Max. You will own campaign strategy, budget pacing, and client reporting.',
  },
  {
    title: 'Social Media Strategist',
    type: 'Full-time',
    location: 'Melbourne / Hybrid',
    department: 'Social Media',
    color: '#34A853',
    description: 'Develop and execute organic and paid social strategies across Meta, TikTok, and LinkedIn for a diverse client base spanning retail, finance, and professional services.',
  },
  {
    title: 'Content Writer',
    type: 'Full-time / Part-time',
    location: 'Remote',
    department: 'Content',
    color: '#FBBC04',
    description: 'Create compelling, SEO-optimised long-form content, blog posts, and landing pages for Australian businesses across multiple industries.',
  },
];

const perks = [
  { title: 'Flexible Working', desc: 'Hybrid and remote options available across most roles.', color: '#4285F4' },
  { title: 'Career Growth', desc: 'Clear progression paths and a dedicated training budget.', color: '#EA4335' },
  { title: 'Great Culture', desc: 'A collaborative, high-performance team that celebrates wins.', color: '#34A853' },
  { title: 'Competitive Pay', desc: 'Above-market salaries plus performance bonuses.', color: '#FBBC04' },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-700 text-gray-900 mb-4">
                Join Our <span style={{ color: '#4285F4' }}>Team</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                We are building Australia&apos;s best digital marketing agency. If you love results-driven work and want to grow your career, we want to hear from you.
              </p>
            </div>

            {/* Perks */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {perks.map((perk) => (
                <div key={perk.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div
                    className="w-2 h-8 rounded-full mb-4"
                    style={{ backgroundColor: perk.color }}
                  />
                  <h3 className="text-base font-700 text-gray-900 mb-2">{perk.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{perk.desc}</p>
                </div>
              ))}
            </div>

            {/* Open roles */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-8 text-center">
                Open <span style={{ color: '#4285F4' }}>Positions</span>
              </h2>
              <div className="space-y-4">
                {openRoles.map((role) => (
                  <div key={role.title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className="text-xs font-500 text-white px-3 py-1 rounded-full"
                            style={{ backgroundColor: role.color }}
                          >
                            {role.department}
                          </span>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {role.type}
                          </span>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {role.location}
                          </span>
                        </div>
                        <h3 className="text-lg font-700 text-gray-900 mb-2">{role.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{role.description}</p>
                      </div>
                      <Link
                        href="/contact/"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-500 text-white rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group shrink-0"
                        style={{ backgroundColor: role.color }}
                      >
                        Apply Now
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* No role CTA */}
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 text-center">
              <Users className="h-10 w-10 mx-auto mb-4" style={{ color: '#4285F4' }} />
              <h2 className="text-xl sm:text-2xl font-700 text-gray-900 mb-3">
                Don&apos;t See the Right Role?
              </h2>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto text-sm">
                We are always on the lookout for exceptional talent. Send us your resume and tell us how you can contribute.
              </p>
              <a
                href="mailto:careers@oneclicksoultions.com.au"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-500 text-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
                style={{ backgroundColor: '#4285F4' }}
              >
                Send Your Resume
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
