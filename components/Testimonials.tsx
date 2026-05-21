import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, Mitchell Home Solutions',
    location: 'Sydney, NSW',
    text: 'OneClick Solutions transformed our online presence. Within 6 months we tripled our organic traffic and our leads doubled. Their team is responsive, transparent and genuinely invested in our success.',
    rating: 5,
    initials: 'SM',
    color: '#4285F4',
  },
  {
    name: 'James Kowalski',
    role: 'Director, ProFit Gym Network',
    location: 'Melbourne, VIC',
    text: 'The Google Ads campaigns they run for us generate consistent, high-quality leads at a cost per acquisition we are very happy with. Best marketing investment we have made.',
    rating: 5,
    initials: 'JK',
    color: '#EA4335',
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, Bloom Skincare',
    location: 'Brisbane, QLD',
    text: 'Our social media engagement went through the roof. OneClick created a brand voice that resonates with our audience and our e-commerce revenue grew 180% year-on-year.',
    rating: 5,
    initials: 'PS',
    color: '#34A853',
  },
  {
    name: 'Tom Nguyen',
    role: 'Marketing Manager, Apex Law Group',
    location: 'Perth, WA',
    text: 'Professional, knowledgeable and results-focused. Our SEO rankings improved dramatically and we now rank on page one for all our key practice area keywords.',
    rating: 5,
    initials: 'TN',
    color: '#FBBC04',
  },
  {
    name: 'Emma Davidson',
    role: 'Owner, Davidson Real Estate',
    location: 'Adelaide, SA',
    text: 'From website design to ongoing SEO, OneClick handles everything. The reporting dashboard gives us full visibility and the team is always proactive with recommendations.',
    rating: 5,
    initials: 'ED',
    color: '#4285F4',
  },
  {
    name: 'Michael Torres',
    role: 'Operations Director, Torres Constructions',
    location: 'Gold Coast, QLD',
    text: 'We went from barely visible online to dominating our local market. OneClick Solutions delivered on every promise and the ROI speaks for itself.',
    rating: 5,
    initials: 'MT',
    color: '#EA4335',
  },
];

export default function Testimonials() {
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
