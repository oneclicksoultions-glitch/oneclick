'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CircleCheck as CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      firstName: data.get('firstName') as string,
      lastName: data.get('lastName') as string,
      email: data.get('email') as string,
      phone: data.get('phone') as string,
      service: data.get('service') as string,
      budget: data.get('budget') as string,
      message: data.get('message') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setError(json.error || 'Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <link rel="canonical" href="https://oneclicksoultions.com.au/contact/" />
      <Navbar />
      <main>
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-700 text-gray-900 mb-4">
                Get in <span style={{ color: '#4285F4' }}>Touch</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Ready to grow your business online? Book a free 30-minute strategy consultation or send us a message and we will get back to you within 24 hours.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <h2 className="text-xl font-700 text-gray-900 mb-6">Send Us a Message</h2>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4" style={{ color: '#34A853' }} />
                    <h3 className="text-xl font-700 text-gray-900 mb-2">Message Sent Successfully</h3>
                    <p className="text-gray-500">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-sm font-500 text-gray-700 mb-1.5">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-500 text-gray-700 mb-1.5">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          placeholder="Smith"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-sm font-500 text-gray-700 mb-1.5">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          placeholder="john@company.com.au"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-500 text-gray-700 mb-1.5">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          placeholder="+61 400 000 000"
                        />
                      </div>
                    </div>
                    <div className="mb-5">
                      <label className="block text-sm font-500 text-gray-700 mb-1.5">Service Interested In</label>
                      <select
                        name="service"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-700"
                      >
                        <option value="">Select a service</option>
                        <option value="seo">Search Engine Optimisation</option>
                        <option value="google-ads">Google Ads (PPC)</option>
                        <option value="social-media">Social Media Marketing</option>
                        <option value="web-design">Web Design &amp; Development</option>
                        <option value="content-marketing">Content Marketing</option>
                        <option value="email-marketing">Email Marketing</option>
                        <option value="analytics">Analytics &amp; Reporting</option>
                        <option value="app-marketing">App Marketing</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                    <div className="mb-5">
                      <label className="block text-sm font-500 text-gray-700 mb-1.5">Monthly Marketing Budget</label>
                      <select
                        name="budget"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-700"
                      >
                        <option value="">Select a range</option>
                        <option value="under-2k">Under $2,000</option>
                        <option value="2k-5k">$2,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-plus">$25,000+</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-500 text-gray-700 mb-1.5">Tell Us About Your Goals</label>
                      <textarea
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                        placeholder="What are you looking to achieve with digital marketing?"
                      />
                    </div>
                    {error && (
                      <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                        {error}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 text-base font-500 text-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                      style={{ backgroundColor: '#4285F4' }}
                    >
                      <Send className="h-4 w-4" />
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact info */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-xl font-700 text-gray-900 mb-6">Contact Information</h2>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#EBF3FE' }}>
                      <Phone className="h-5 w-5" style={{ color: '#4285F4' }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-700 text-gray-900 mb-1">Phone</h3>
                      <a href="tel:+61390000000" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">+61 3 9000 0000</a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#FDECEA' }}>
                      <Mail className="h-5 w-5" style={{ color: '#EA4335' }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-700 text-gray-900 mb-1">Email</h3>
                      <a href="mailto:hello@oneclicksoultions.com.au" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">hello@oneclicksoultions.com.au</a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#E8F5EC' }}>
                      <MapPin className="h-5 w-5" style={{ color: '#34A853' }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-700 text-gray-900 mb-1">Office</h3>
                      <p className="text-sm text-gray-500">Level 5, 123 Collins Street<br />Melbourne, VIC 3000<br />Australia</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#FEF8E1' }}>
                      <Clock className="h-5 w-5" style={{ color: '#FBBC04' }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-700 text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-sm text-gray-500">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* What to expect */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-4 text-center">
              What Happens <span style={{ color: '#4285F4' }}>Next</span>
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              We make it easy to get started. After you submit your enquiry, here is exactly what you can expect from our team.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'We Review Your Enquiry', desc: 'Our team carefully reads every submission. We research your business, competitors, and current online presence before we respond so we can give you genuinely useful advice — not a generic pitch.', color: '#4285F4' },
                { step: '2', title: 'Free Strategy Call', desc: 'We schedule a no-obligation 30-minute call to understand your goals, challenges, and budget. You will leave with clear, actionable recommendations regardless of whether you choose to work with us.', color: '#EA4335' },
                { step: '3', title: 'Custom Proposal', desc: 'If there is a fit, we put together a tailored proposal outlining the recommended services, strategy, timeline, and investment. No lock-in contracts, no hidden fees — full transparency from day one.', color: '#34A853' },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-700 mx-auto mb-4"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-base font-700 text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-700 text-gray-900 mb-10 text-center">
              Frequently Asked <span style={{ color: '#4285F4' }}>Questions</span>
            </h2>
            <div className="space-y-4">
              {[
                { q: 'How quickly will you respond to my enquiry?', a: 'We respond to all enquiries within one business day. If you submit during business hours (Monday to Friday, 9am–6pm AEST), you will typically hear from us within a few hours.' },
                { q: 'Is the strategy consultation really free?', a: 'Yes, completely free and with no obligation. We believe in earning your trust by providing genuine value upfront. The consultation is a real working session — not a sales call.' },
                { q: 'Do you work with small businesses or only large companies?', a: 'We work with businesses of all sizes across Australia. Our services are scalable, so whether your monthly marketing budget is $1,000 or $50,000, we can build a strategy that makes sense for your situation.' },
                { q: 'Which digital marketing services do you offer?', a: 'We offer a full suite of digital marketing services including SEO, Google Ads, Social Media Marketing, Web Design, Content Marketing, Email Marketing, Analytics & Reporting, and App Marketing. Most clients use a combination of services for the best results.' },
              ].map((faq) => (
                <div key={faq.q} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-base font-700 text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
