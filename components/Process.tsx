const steps = [
  {
    num: '01',
    title: 'Discovery & Audit',
    desc: 'We analyse your current digital presence, competitors, and target market to identify opportunities and gaps.',
    color: '#4285F4',
  },
  {
    num: '02',
    title: 'Strategy Development',
    desc: 'Our team builds a customised, multi-channel digital marketing roadmap aligned with your business goals and budget.',
    color: '#EA4335',
  },
  {
    num: '03',
    title: 'Launch & Execute',
    desc: 'We implement campaigns, create content, and launch ads with precision, ensuring everything is optimised from day one.',
    color: '#FBBC04',
  },
  {
    num: '04',
    title: 'Optimise & Scale',
    desc: 'Continuous monitoring, A/B testing, and data analysis allow us to refine and scale what works for maximum ROI.',
    color: '#34A853',
  },
];

export default function Process() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="text-sm font-500 text-gray-600">How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-700 text-gray-900 mb-4">
            Our Proven{' '}
            <span style={{ color: '#4285F4' }}>4-Step Process</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A structured, transparent approach that ensures every campaign is built for success and long-term growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gray-200 z-0" />

          {steps.map((step) => (
            <div key={step.num} className="relative z-10">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-700 text-white mb-5"
                  style={{ backgroundColor: step.color }}
                >
                  {step.num}
                </div>
                <h3 className="text-base font-700 text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
