import { supabaseAdmin } from '@/lib/supabase';

const COLORS = ['#4285F4', '#EA4335', '#FBBC04', '#34A853', '#4285F4', '#EA4335'];

async function getStats() {
  const { data } = await supabaseAdmin.from('company_stats').select('*').order('sort_order');
  return (data ?? []).map((s: { value: string; label: string }, i: number) => ({ ...s, color: COLORS[i % COLORS.length] }));
}

export default async function Stats() {
  const stats = await getStats();
  return (
    <section className="py-16 lg:py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="group">
              <div
                className="text-3xl lg:text-4xl font-700 mb-2 transition-transform group-hover:scale-105"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-400 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
