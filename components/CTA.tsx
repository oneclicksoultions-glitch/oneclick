import Link from 'next/link';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden text-white text-center px-8 py-16 lg:py-20"
          style={{ background: 'linear-gradient(135deg, #1a56db 0%, #1e3a8a 100%)' }}
        >
          {/* Background dots */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 left-8 w-32 h-32 rounded-full border-2 border-white" />
            <div className="absolute bottom-8 right-8 w-48 h-48 rounded-full border-2 border-white" />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full border border-white" />
          </div>

          <div className="relative z-10">
            {/* Google color dots */}
            <div className="flex justify-center gap-2 mb-6">
              {['#4285F4', '#EA4335', '#FBBC04', '#34A853'].map((c, i) => (
                <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />
              ))}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-700 mb-4 leading-tight">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book your free 30-minute strategy consultation today. Our experts will review your current digital presence and show you exactly how to grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-500 text-blue-900 bg-white rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group"
              >
                Get Free Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-500 text-white border-2 border-white/40 rounded-xl hover:border-white/80 hover:bg-white/10 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-100">
              <a href="tel:+61390000000" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                <span>+61 3 9000 0000</span>
              </a>
              <span className="hidden sm:block w-px h-4 bg-blue-400" />
              <a href="mailto:hello@oneclicksoultions.com.au" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                <span>hello@oneclicksoultions.com.au</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
