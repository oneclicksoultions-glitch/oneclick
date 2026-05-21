import { Star } from 'lucide-react';
import { supabaseAdmin } from '@/lib/supabase';

async function getTestimonials() {
  const { data } = await supabaseAdmin
    .from('testimonials')
    .select('*')
    .eq('active', true)
    .order('sort_order');
  return data ?? [];
}

export default async function Testimonials() {
  const testimonials = await getTestimonials();
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="text-sm font-500 text-gray-600">Client Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-700 text-gray-900 mb-4">
            What Our Clients{' '}
            <span style={{ color: '#4285F4' }}>Say</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Real results, real feedback from Australian businesses we have helped grow online.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">{t.text}</p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-700 shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-700 text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                  <div className="text-xs" style={{ color: t.color }}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
