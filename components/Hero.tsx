'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Clients Served', icon: Users },
  { value: '98%', label: 'Retention Rate', icon: Award },
  { value: '3x', label: 'Avg. ROI', icon: TrendingUp },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #4285F4 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #34A853 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #FBBC04 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-500 text-blue-700">Australia&apos;s Trusted Digital Partner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-700 leading-tight text-gray-900 mb-6">
              Grow Your Business{' '}
              <span className="relative inline-block">
                <span style={{ color: '#4285F4' }}>Online</span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
                  style={{ backgroundColor: '#FBBC04' }}
                />
              </span>{' '}
              with OneClick Solutions
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              We deliver complete digital marketing services — SEO, Google Ads, Social Media, Web Design & more — designed to drive real results for Australian businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-500 text-white rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 group"
                style={{ backgroundColor: '#4285F4' }}
              >
                Get Free Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-500 text-gray-700 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div
                    className="text-3xl font-700 mb-1"
                    style={{ color: '#4285F4' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 font-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Digital marketing team at OneClick Solutions working on strategy"
                width={800}
                height={384}
                className="w-full h-80 lg:h-96 object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-700 shrink-0"
                    style={{ backgroundColor: '#34A853' }}
                  >
                    +
                  </div>
                  <div>
                    <div className="text-sm font-700 text-gray-900">Monthly Traffic Increased</div>
                    <div className="text-xs text-gray-500">Average client result: +247% organic growth</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3"
            >
              <div className="text-xs text-gray-500 mb-1">Google Partner</div>
              <div className="flex gap-1">
                {['#4285F4', '#EA4335', '#FBBC04', '#34A853'].map((color, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
