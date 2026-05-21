'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  { label: 'SEO', href: '/services/seo/' },
  { label: 'Google Ads', href: '/services/google-ads/' },
  { label: 'Social Media Marketing', href: '/services/social-media/' },
  { label: 'Web Design', href: '/services/web-design/' },
  { label: 'Content Marketing', href: '/services/content-marketing/' },
  { label: 'Email Marketing', href: '/services/email-marketing/' },
  { label: 'Analytics & Reporting', href: '/services/analytics/' },
  { label: 'App Marketing', href: '/services/app-marketing/' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/', hasDropdown: true },
  { label: 'About', href: '/about/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white shadow-md border-b border-gray-100'
          : 'bg-white/95 backdrop-blur-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex items-center">
              <span className="text-2xl font-700 tracking-tight text-gray-900">
                One
              </span>
              <span className="text-2xl font-700 tracking-tight" style={{ color: '#4285F4' }}>C</span>
              <span className="text-2xl font-700 tracking-tight" style={{ color: '#EA4335' }}>l</span>
              <span className="text-2xl font-700 tracking-tight" style={{ color: '#FBBC04' }}>i</span>
              <span className="text-2xl font-700 tracking-tight" style={{ color: '#34A853' }}>c</span>
              <span className="text-2xl font-700 tracking-tight" style={{ color: '#4285F4' }}>k</span>
              <span className="text-2xl font-700 tracking-tight text-gray-900 ml-1">
                Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-500 text-gray-700 hover:text-blue-600 rounded-md transition-colors"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        servicesOpen && 'rotate-180'
                      )}
                    />
                  </button>
                  {servicesOpen && (
                    <div
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute top-full left-0 pt-1 w-56"
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-500 text-gray-700 hover:text-blue-600 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact/"
              className="px-5 py-2.5 text-sm font-500 text-white rounded-lg transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              style={{ backgroundColor: '#4285F4' }}
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-500 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-4 py-3 text-sm font-500 text-white text-center rounded-lg"
              style={{ backgroundColor: '#4285F4' }}
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
