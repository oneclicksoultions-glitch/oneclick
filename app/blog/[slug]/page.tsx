import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { supabaseAdmin } from '@/lib/supabase';

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: post } = await supabaseAdmin
    .from('blog_posts')
    .select('title, excerpt, image_url, slug')
    .eq('slug', params.slug)
    .eq('published', true)
    .single();

  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://oneclicksoultions.com.au/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image_url ? [post.image_url] : [],
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { data: post } = await supabaseAdmin
    .from('blog_posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('published', true)
    .single();

  if (!post) notFound();

  const { data: related } = await supabaseAdmin
    .from('blog_posts')
    .select('title, slug, image_url, category, color, read_time')
    .eq('published', true)
    .eq('category', post.category)
    .neq('slug', params.slug)
    .limit(3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://oneclicksoultions.com.au/blog/${post.slug}/#article`,
    headline: post.title,
    description: post.excerpt,
    image: post.image_url || 'https://oneclicksoultions.com.au/logo.png',
    url: `https://oneclicksoultions.com.au/blog/${post.slug}/`,
    datePublished: post.created_at,
    dateModified: post.updated_at || post.created_at,
    author: {
      '@type': 'Person',
      name: post.author,
      worksFor: { '@id': 'https://oneclicksoultions.com.au/#organization' },
    },
    publisher: { '@id': 'https://oneclicksoultions.com.au/#organization' },
    isPartOf: { '@id': 'https://oneclicksoultions.com.au/#website' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://oneclicksoultions.com.au/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://oneclicksoultions.com.au/blog/' },
        { '@type': 'ListItem', position: 3, name: post.title, item: `https://oneclicksoultions.com.au/blog/${post.slug}/` },
      ],
    },
  };

  const publishedDate = new Date(post.created_at).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <JsonLd data={articleSchema} />
      <Navbar />
      <main>
        <article>
          {/* Hero */}
          <section className="pt-28 pb-0 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                href="/blog/"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              <div className="mb-4">
                <span
                  className="text-xs font-500 text-white px-3 py-1 rounded-full"
                  style={{ backgroundColor: post.color || '#4285F4' }}
                >
                  {post.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-700 text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-8">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 pb-8 border-b border-gray-100">
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{publishedDate}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{post.read_time}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Featured image */}
          {post.image_url && (
            <section className="py-8 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={post.image_url}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </section>
          )}

          {/* Body content */}
          <section className="py-8 pb-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              {post.content ? (
                <div
                  className="prose prose-lg max-w-none prose-headings:font-700 prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-strong:text-gray-900 prose-li:text-gray-600"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              ) : (
                <div className="bg-gray-50 rounded-2xl p-8 text-center">
                  <p className="text-gray-500">Full article content coming soon.</p>
                </div>
              )}
            </div>
          </section>
        </article>

        {/* Related posts */}
        {related && related.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-700 text-gray-900 mb-8">Related Articles</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}/`}
                    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={r.image_url || 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600'}
                        alt={r.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-500 text-white px-3 py-1 rounded-full" style={{ backgroundColor: r.color }}>
                          {r.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-sm font-700 text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                        {r.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="h-3 w-3" />
                        {r.read_time}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Get a free 30-minute strategy consultation. No lock-in contracts, no sales pitch.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-500 text-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              style={{ backgroundColor: '#4285F4' }}
            >
              Book Free Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
