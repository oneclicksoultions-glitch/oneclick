const stats = [
  { value: '500+', label: 'Clients Across Australia', color: '#4285F4' },
  { value: '$50M+', label: 'Ad Spend Managed', color: '#EA4335' },
  { value: '247%', label: 'Average Traffic Increase', color: '#FBBC04' },
  { value: '98%', label: 'Client Retention Rate', color: '#34A853' },
  { value: '10+', label: 'Years of Experience', color: '#4285F4' },
  { value: '15+', label: 'Industries Served', color: '#EA4335' },
];

export default function Stats() {
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
