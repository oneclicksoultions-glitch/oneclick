import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  alternates: { canonical: 'https://oneclicksoultions.com.au/blog/' },
};

const posts = [
  {
    title: 'How to Improve Your Google Rankings in 2025: A Complete SEO Guide',
    excerpt: 'Discover the latest SEO strategies that are working right now for Australian businesses. From Core Web Vitals to E-E-A-T, here is what you need to know.',
    category: 'SEO',
    author: 'Rachel Morrison',
    readTime: '8 min',
    color: '#4285F4',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Google Ads vs SEO: Which Should You Invest In First?',
    excerpt: 'Both channels have their place, but the right choice depends on your goals, budget, and timeline. We break down when to use each and how to combine them.',
    category: 'Google Ads',
    author: 'Aiden Patel',
    readTime: '6 min',
    color: '#EA4335',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Social Media Marketing Trends Australian Brands Need to Watch',
    excerpt: 'From short-form video to AI-powered personalisation, these are the social media trends shaping how brands connect with audiences in 2025.',
    category: 'Social Media',
    author: 'Sophie Williams',
    readTime: '5 min',
    color: '#34A853',
    image: 'https://images.pexels.com/photos/6078123/pexels-photo-6078123.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Why Your Website Is Not Converting (And How to Fix It)',
    excerpt: 'Traffic without conversions is wasted budget. Learn the most common conversion killers and the proven fixes that turn visitors into customers.',
    category: 'Web Design',
    author: 'Marcus Lee',
    readTime: '7 min',
    color: '#FBBC04',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'The Ultimate Email Marketing Playbook for Australian Businesses',
    excerpt: 'Email delivers $42 for every $1 spent. Here is how to build, grow, and monetise your email list with automated campaigns that work 24/7.',
    category: 'Email Marketing',
    author: 'Emily Zhang',
    readTime: '9 min',
    color: '#EA4335',
    image: 'https://images.pexels.com/photos/193005/pexels-photo-193005.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Content Marketing for B2B: How to Generate Quality Leads',
    excerpt: 'B2B content marketing is different from B2C. Learn how to create content that educates decision-makers, builds trust, and drives qualified leads.',
    category: 'Content Marketing',
    author: 'Emily Zhang',
    readTime: '6 min',
    color: '#4285F4',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-700 text-gray-900 mb-4">
                Our <span style={{ color: '#4285F4' }}>Blog</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Expert insights, strategies, and tips to help you navigate the digital marketing landscape.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article key={post.title} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={176}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className="text-xs font-500 text-white px-3 py-1 rounded-full"
                        style={{ backgroundColor: post.color }}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-base font-700 text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-4">
              Want Expert Help With Your Marketing?
            </h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Reading is great. Doing is better. Let us implement these strategies for your business.
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
