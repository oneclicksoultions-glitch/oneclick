import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'App Marketing Australia | App Store Optimisation & User Acquisition | OneClick Solutions',
  description: 'Grow your app downloads and retention with OneClick Solutions. Expert ASO, Apple Search Ads, Google UAC & in-app engagement strategies for Australian app businesses.',
  keywords: ['app marketing Australia'],
  alternates: { canonical: 'https://oneclicksoultions.com.au/services/app-marketing/' },
};

const appMarketingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://oneclicksoultions.com.au/services/app-marketing/#service',
  name: 'App Marketing',
  description: 'Mobile app growth strategies including ASO, paid user acquisition, and retention campaigns for Australian app businesses.',
  url: 'https://oneclicksoultions.com.au/services/app-marketing/',
  provider: { '@id': 'https://oneclicksoultions.com.au/#organization' },
  areaServed: { '@type': 'Country', name: 'Australia' },
  serviceType: 'App Marketing',
  category: 'Digital Marketing',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://oneclicksoultions.com.au/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://oneclicksoultions.com.au/services/' },
      { '@type': 'ListItem', position: 3, name: 'App Marketing', item: 'https://oneclicksoultions.com.au/services/app-marketing/' },
    ],
  },
};

export default function AppMarketingPage() {
  return (
    <>
      <JsonLd data={appMarketingSchema} />
      <ServicePageLayout
        title="App Marketing"
        subtitle="More Downloads. Higher Engagement. Better Retention."
        description="Launching an app is just the beginning. We create and execute app marketing strategies that drive downloads, boost in-app engagement, and improve user retention across iOS and Android platforms."
        color="#FBBC04"
        image="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=800"
        canonical="https://oneclicksoultions.com.au/services/app-marketing/"
        features={[
          'App Store Optimisation (ASO)',
          'Apple Search Ads management',
          'Google UAC (Universal App Campaigns)',
          'Social media app install campaigns',
          'In-app engagement and retention campaigns',
          'App onboarding optimisation',
          'User review and rating management',
          'App analytics and cohort analysis',
          'Pre-launch and launch strategy',
        ]}
        benefits={[
          { title: 'Increase App Downloads', desc: 'Targeted campaigns across search, social, and display networks drive qualified installs at a cost that makes sense for your business model.' },
          { title: 'App Store Visibility', desc: 'ASO ensures your app ranks for relevant keywords in the App Store and Google Play, driving organic installs at no ongoing cost.' },
          { title: 'Improve User Retention', desc: 'Most apps lose 77% of users in the first 3 days. We implement re-engagement campaigns and onboarding optimisation to keep users active.' },
          { title: 'Lower Cost Per Install', desc: 'Continuous campaign optimisation and audience targeting reduce your CPI over time while maintaining install quality.' },
          { title: 'Data-Driven Growth', desc: 'Track every install, session, and in-app action. Understand user behaviour and optimise campaigns based on real engagement data.' },
          { title: 'Cross-Channel Strategy', desc: 'We combine paid, organic, and social channels to create a holistic app marketing strategy that maximises reach and efficiency.' },
        ]}
        faqs={[
          { q: 'What is App Store Optimisation (ASO)?', a: 'ASO is the process of optimising your app listing (title, description, keywords, screenshots, reviews) to rank higher in app store search results and increase organic downloads.' },
          { q: 'How much does it cost to acquire an app user?', a: 'CPI varies significantly by category, geography, and platform. We work within your target CPI and optimise campaigns to achieve it consistently.' },
          { q: 'Can you help with our app launch?', a: 'Yes. We create comprehensive pre-launch, launch, and post-launch strategies including beta testing, press outreach, and initial user acquisition campaigns.' },
          { q: 'Do you manage both iOS and Android campaigns?', a: 'Yes. We manage campaigns across Apple Search Ads, Google UAC, and social platforms for both iOS and Android apps.' },
        ]}
      />
    </>
  );
}
