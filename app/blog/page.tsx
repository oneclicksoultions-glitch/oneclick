import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabaseAdmin } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Digital Marketing Blog Australia | Tips, Strategies & Insights',
  description: 'Expert digital marketing tips, SEO strategies, Google Ads advice, and social media insights for Australian businesses. Updated regularly by the OneClick Solutions team.',
  keywords: ['digital marketing blog Australia'],
  alternates: { canonical: 'https://oneclicksoultions.com.au/blog/' },
};

export default async function BlogPage() {
  const { data } = await supabaseAdmin
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });
  const posts = data ?? [];
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
                <Link key={post.slug || post.title} href={post.slug ? `/blog/${post.slug}/` : '/blog/'}>
                <article className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={post.image_url || 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600'}
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
                        {post.read_time}
                      </div>
                    </div>
                  </div>
                </article>
                </Link>
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
