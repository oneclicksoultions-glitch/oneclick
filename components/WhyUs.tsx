import Image from 'next/image';
import { CircleCheck as CheckCircle, Zap, Shield, Headphones as HeadphonesIcon } from 'lucide-react';

const reasons = [
  {
    icon: CheckCircle,
    title: 'Results-Driven Approach',
    desc: 'Every strategy is built around measurable outcomes. We track KPIs that matter to your bottom line, not vanity metrics.',
    color: '#34A853',
  },
  {
    icon: Zap,
    title: 'Fast Implementation',
    desc: 'No bureaucracy. We move quickly to implement campaigns, optimise performance, and keep you ahead of the competition.',
    color: '#FBBC04',
  },
  {
    icon: Shield,
    title: 'Transparent Reporting',
    desc: 'You get real-time access to dashboards showing exactly how your campaigns are performing — no hidden fees, no surprises.',
    color: '#4285F4',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    desc: 'Your dedicated account manager is always available. We are a true extension of your team, not just another vendor.',
    color: '#EA4335',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="OneClick Solutions team collaborating on digital marketing strategy"
                width={800}
                height={480}
                className="w-full h-[480px] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 max-w-[220px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-2">
                  {['#4285F4', '#EA4335', '#34A853'].map((c, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-700"
                      style={{ backgroundColor: c }}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-gray-500">Expert Team</span>
              </div>
              <div className="text-sm font-700 text-gray-900">10+ Years Average</div>
              <div className="text-xs text-gray-500">Industry Experience</div>
            </div>
          </div>

          {/* Right content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-500 text-blue-700">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-700 text-gray-900 mb-4 leading-tight">
              We Do Not Just Run Campaigns,{' '}
              <span style={{ color: '#4285F4' }}>We Deliver Growth</span>
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              OneClick Solutions is a performance-first digital marketing agency. We combine deep market expertise with cutting-edge tools to help Australian businesses scale online.
            </p>

            <div className="space-y-6">
              {reasons.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.title} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: r.color + '1A' }}
                    >
                      <Icon className="h-5 w-5" style={{ color: r.color }} />
                    </div>
                    <div>
                      <h3 className="text-base font-700 text-gray-900 mb-1">{r.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
