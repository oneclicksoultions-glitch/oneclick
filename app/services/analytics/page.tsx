import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Marketing Analytics & Reporting Australia | GA4 Setup | OneClick Solutions',
  description: 'Make smarter marketing decisions with expert analytics & reporting. OneClick Solutions sets up GA4, conversion tracking, custom dashboards & monthly ROI reports for Australian businesses.',
  keywords: ['marketing analytics Australia'],
  alternates: { canonical: 'https://oneclicksoultions.com.au/services/analytics/' },
};

export default function AnalyticsPage() {
  return (
    <ServicePageLayout
      title="Analytics & Reporting"
      subtitle="Data-Driven Decisions. Transparent Results."
      description="Stop guessing and start measuring. We set up comprehensive analytics and reporting systems that give you full visibility into your digital marketing performance. Know exactly where your budget goes and what ROI you get."
      color="#34A853"
      image="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
      canonical="https://oneclicksoultions.com.au/services/analytics/"
      features={[
        'Google Analytics 4 setup and configuration',
        'Conversion tracking across all channels',
        'Custom dashboard creation',
        'Attribution modelling and reporting',
        'Monthly and quarterly performance reports',
        'Competitor benchmarking analysis',
        'A/B test design and analysis',
        'Heatmap and user behaviour analysis',
        'ROI and ROAS calculation per channel',
      ]}
      benefits={[
        { title: 'Full Visibility', desc: 'See exactly how every channel, campaign, and keyword contributes to your business goals. No more guessing where your marketing budget is going.' },
        { title: 'Data-Driven Optimisation', desc: 'Make decisions based on real data, not assumptions. Identify what works, double down on winners, and cut what does not perform.' },
        { title: 'Accountability', desc: 'Transparent reporting means you always know the value we are delivering. Every dollar is tracked and attributed to results.' },
        { title: 'Faster Decision Making', desc: 'Real-time dashboards and regular reports give you the insights you need to make quick, confident business decisions.' },
        { title: 'Identify Opportunities', desc: 'Deep data analysis reveals untapped opportunities — new keywords, audiences, channels, and content topics that can drive growth.' },
        { title: 'Prove Marketing ROI', desc: 'Demonstrate the value of marketing to stakeholders with clear, data-backed reports showing revenue impact and cost efficiency.' },
      ]}
      faqs={[
        { q: 'What tools do you use for analytics?', a: 'We primarily use Google Analytics 4, Google Tag Manager, Google Data Studio (Looker Studio), and various platform-specific analytics tools depending on your stack.' },
        { q: 'How often will I receive reports?', a: 'Standard reporting is monthly with quarterly deep-dive reviews. We also provide real-time dashboards you can access anytime.' },
        { q: 'Can you track offline conversions?', a: 'Yes. We can set up offline conversion tracking for phone calls, in-store visits, and other offline actions using Google\'s offline conversion import tools.' },
        { q: 'What is attribution modelling?', a: 'Attribution modelling determines which marketing touchpoints get credit for a conversion. We help you understand the full customer journey, not just the last click.' },
      ]}
    />
  );
}
