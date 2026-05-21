import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabaseAdmin } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Digital Marketing Experts Melbourne | Meet Our Team | OneClick Solutions',
  description: 'Meet the digital marketing experts behind OneClick Solutions — SEO specialists, Google Ads managers, creatives, and strategists based in Melbourne, Australia.',
  keywords: ['digital marketing experts Melbourne'],
  alternates: { canonical: 'https://oneclicksoultions.com.au/team/' },
};

export default async function TeamPage() {
  const { data: teamData } = await supabaseAdmin
    .from('team_members')
    .select('*')
    .eq('active', true)
    .order('sort_order');
  const team = teamData ?? [];
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-700 text-gray-900 mb-4">
                Meet Our <span style={{ color: '#4285F4' }}>Team</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Experienced professionals who are passionate about driving real, measurable results for Australian businesses.
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-8 text-center">
              Our Digital Marketing <span style={{ color: '#4285F4' }}>Experts</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {team.map((member) => (
                <div key={member.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-700 mx-auto mb-4"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="text-base font-700 text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-500 mb-3" style={{ color: member.color }}>{member.role}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 text-center">
              <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-4">
                Want to Join the Team?
              </h2>
              <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                We are always looking for talented people who are passionate about digital marketing. Check out our open roles.
              </p>
              <Link
                href="/careers/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-500 text-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
                style={{ backgroundColor: '#4285F4' }}
              >
                View Open Roles
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
