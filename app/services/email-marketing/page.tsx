import ServicePageLayout from '@/components/ServicePageLayout';

export default function EmailMarketingPage() {
  return (
    <ServicePageLayout
      title="Email Marketing"
      subtitle="Nurture Leads. Retain Customers. Drive Revenue."
      description="Email marketing delivers the highest ROI of any digital channel — $42 for every $1 spent. We design automated email campaigns that nurture leads, retain customers, and drive repeat purchases for Australian businesses."
      color="#EA4335"
      image="https://images.pexels.com/photos/193005/pexels-photo-193005.jpeg?auto=compress&cs=tinysrgb&w=800"
      canonical="https://oneclicksoultions.com.au/services/email-marketing/"
      features={[
        'Email strategy and campaign planning',
        'Automated welcome and onboarding sequences',
        'Lead nurturing drip campaigns',
        'Promotional and sales email campaigns',
        'Newsletter design and content',
        'Audience segmentation and personalisation',
        'A/B testing of subject lines and content',
        'Email template design (responsive)',
        'Deliverability monitoring and list hygiene',
      ]}
      benefits={[
        { title: 'Highest ROI Channel', desc: 'Email marketing consistently delivers $42 for every $1 spent — higher than any other digital marketing channel including social media and paid search.' },
        { title: 'Own Your Audience', desc: 'Unlike social media followers, your email list is an asset you own. Algorithm changes cannot reduce your reach or increase your costs.' },
        { title: 'Personalised Communication', desc: 'Segment your audience and deliver personalised messages based on behaviour, purchase history, and engagement level.' },
        { title: 'Automated Revenue', desc: 'Set up automated sequences that generate revenue while you sleep — welcome series, abandoned cart, post-purchase upsells, and re-engagement flows.' },
        { title: 'Customer Retention', desc: 'Regular, valuable email communication keeps your brand top-of-mind and reduces customer churn significantly.' },
        { title: 'Measurable Results', desc: 'Track opens, clicks, conversions, and revenue for every campaign. Know exactly what works and continuously improve performance.' },
      ]}
      faqs={[
        { q: 'What email platforms do you work with?', a: 'We work with all major platforms including Mailchimp, Klaviyo, ActiveCampaign, HubSpot, and others. We recommend the best fit based on your needs and budget.' },
        { q: 'How do you grow an email list?', a: 'We implement lead magnets, opt-in forms, pop-ups, and landing pages designed to convert website visitors into subscribers. Quality over quantity is our focus.' },
        { q: 'How often should we send emails?', a: 'It depends on your audience and goals. We typically recommend 1-2 newsletters per week plus automated sequences. We test frequency to find the optimal cadence.' },
        { q: 'What is email automation?', a: 'Automated emails are triggered by specific actions — a new subscriber gets a welcome series, an abandoned cart triggers a recovery email, a purchase triggers an upsell. They run 24/7 without manual effort.' },
      ]}
    />
  );
}
