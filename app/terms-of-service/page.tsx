import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  alternates: { canonical: 'https://oneclicksoultions.com.au/terms-of-service/' },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-700 text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-600 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-700 text-gray-900 mb-3">1. Agreement to Terms</h2>
              <p>By accessing and using the services provided by OneClick Solutions Pty Ltd (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-lg font-700 text-gray-900 mb-3">2. Services</h2>
              <p>OneClick Solutions provides digital marketing services including but not limited to search engine optimisation (SEO), Google Ads management, social media marketing, web design and development, content marketing, email marketing, analytics and reporting, and app marketing. The specific services to be provided will be outlined in a separate service agreement or proposal.</p>
            </section>

            <section>
              <h2 className="text-lg font-700 text-gray-900 mb-3">3. Client Responsibilities</h2>
              <p className="mb-2">As a client, you agree to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide accurate and complete information required for service delivery</li>
                <li>Respond to requests for approval or information in a timely manner</li>
                <li>Ensure that all content and materials provided to us do not infringe on third-party rights</li>
                <li>Make payments in accordance with the agreed payment terms</li>
                <li>Grant necessary access to platforms, accounts, and tools required for service delivery</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-700 text-gray-900 mb-3">4. Payment Terms</h2>
              <p>Payment terms are as specified in your service agreement. Invoices are due within 14 days of issue unless otherwise agreed. Late payments may incur a late fee of 2% per month on the outstanding balance. We reserve the right to suspend services for accounts that are more than 30 days overdue.</p>
            </section>

            <section>
              <h2 className="text-lg font-700 text-gray-900 mb-3">5. Intellectual Property</h2>
              <p>Upon full payment, you will own all deliverables created specifically for you as part of our services. We retain the right to use anonymised, aggregated data and general methodologies developed during the engagement. We may also showcase the work in our portfolio unless you request otherwise in writing.</p>
            </section>

            <section>
              <h2 className="text-lg font-700 text-gray-900 mb-3">6. Confidentiality</h2>
              <p>Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement. This obligation survives the termination of the agreement for a period of two years.</p>
            </section>

            <section>
              <h2 className="text-lg font-700 text-gray-900 mb-3">7. Limitation of Liability</h2>
              <p>While we strive to deliver excellent results, digital marketing outcomes depend on many factors outside our control including market conditions, competitor actions, and search engine algorithm changes. Our total liability for any claim arising from our services shall not exceed the total fees paid by you in the 12 months preceding the claim.</p>
            </section>

            <section>
              <h2 className="text-lg font-700 text-gray-900 mb-3">8. Termination</h2>
              <p>Either party may terminate the service agreement with 30 days written notice. Upon termination, you are responsible for payment of all services rendered up to the termination date. We will provide a handover of all relevant account access and assets within 14 days of termination.</p>
            </section>

            <section>
              <h2 className="text-lg font-700 text-gray-900 mb-3">9. Governing Law</h2>
              <p>These Terms of Service are governed by the laws of Victoria, Australia. Any disputes arising from these terms shall be resolved in the courts of Victoria, Australia.</p>
            </section>

            <section>
              <h2 className="text-lg font-700 text-gray-900 mb-3">10. Contact</h2>
              <p>
                OneClick Solutions Pty Ltd<br />
                Level 5, 123 Collins Street, Melbourne VIC 3000<br />
                Email: hello@oneclicksoultions.com.au<br />
                Phone: +61 3 9000 0000
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
