import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  image: string;
  canonical: string;
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  color,
  features,
  benefits,
  faqs,
  image,
  canonical,
}: ServicePageProps) {
  return (
    <>
      <link rel="canonical" href={canonical} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-1 text-sm font-500 mb-4 hover:underline"
                  style={{ color }}
                >
                  &larr; All Services
                </Link>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-700 text-gray-900 mb-4 leading-tight">
                  {title}
                </h1>
                <p className="text-lg text-gray-500 mb-3" style={{ color }}>
                  {subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">{description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-500 text-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
                    style={{ backgroundColor: color }}
                  >
                    Get Free Quote
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-500 text-gray-700 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-all duration-200"
                  >
                    Book a Call
                  </Link>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={image}
                  alt={`${title} by OneClick Solutions`}
                  width={800}
                  height={384}
                  className="w-full h-72 lg:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-10 text-center">
              What&apos;s <span style={{ color }}>Included</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" style={{ color }} />
                  <span className="text-sm text-gray-700">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-10 text-center">
              Why It <span style={{ color }}>Matters</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-base font-700 text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-10 text-center">
              Frequently Asked <span style={{ color }}>Questions</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="text-base font-700 text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-4">
              Ready to Get Started with {title}?
            </h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Contact us today for a free consultation and see how we can help your business grow.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-500 text-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
              style={{ backgroundColor: color }}
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