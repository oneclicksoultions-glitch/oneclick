import Link from 'next/link';
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

const services = [
  { label: 'Search Engine Optimisation', href: '/services/seo/' },
  { label: 'Google Ads (PPC)', href: '/services/google-ads/' },
  { label: 'Social Media Marketing', href: '/services/social-media/' },
  { label: 'Web Design', href: '/services/web-design/' },
  { label: 'Content Marketing', href: '/services/content-marketing/' },
  { label: 'Email Marketing', href: '/services/email-marketing/' },
  { label: 'Analytics & Reporting', href: '/services/analytics/' },
  { label: 'App Marketing', href: '/services/app-marketing/' },
  { label: 'Local SEO', href: '/services/local-seo/' },
];

const company = [
  { label: 'About Us', href: '/about/' },
  { label: 'Our Team', href: '/team/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Careers', href: '/careers/' },
  { label: 'Contact', href: '/contact/' },
];

const socials = [
  { Icon: Linkedin, href: 'https://linkedin.com/', color: '#0077B5' },
  { Icon: Facebook, href: 'https://facebook.com/', color: '#1877F2' },
  { Icon: Instagram, href: 'https://instagram.com/', color: '#E4405F' },
  { Icon: Twitter, href: 'https://twitter.com/', color: '#1DA1F2' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-800">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4">
              <span className="text-2xl font-700 text-white">One</span>
              <span className="text-2xl font-700" style={{ color: '#4285F4' }}>C</span>
              <span className="text-2xl font-700" style={{ color: '#EA4335' }}>l</span>
              <span className="text-2xl font-700" style={{ color: '#FBBC04' }}>i</span>
              <span className="text-2xl font-700" style={{ color: '#34A853' }}>c</span>
              <span className="text-2xl font-700" style={{ color: '#4285F4' }}>k</span>
              <span className="text-2xl font-700 text-white ml-1">Solutions</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Australia&apos;s trusted digital marketing agency. We help businesses grow online with SEO, Google Ads, Social Media, and more.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, color }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Icon className="h-4 w-4" style={{ color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-700 text-white mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-700 text-white mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-700 text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Level 5, 123 Collins Street<br />Melbourne, VIC 3000<br />Australia
                </span>
              </li>
              <li>
                <a
                  href="tel:+61390000000"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                  +61 3 9000 0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@oneclicksoultions.com.au"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                  hello@oneclicksoultions.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} OneClick Solutions Pty Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
