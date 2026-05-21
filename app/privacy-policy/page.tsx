import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <head>
        <link rel="canonical" href="https://oneclicksoultions.com.au/privacy-policy/" />
      </head>
      <Navbar />
      <main className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-700 text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-600 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-700 text-gray-900 mb-3">1. Introduction</h2>
              <p>OneClick Solutions Pty Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website oneclicksoultions.com.au or engage our services.</p>
            </section>

            <section>
              <h2 className="text-lg font-700 text-gray-900 mb-3">2. Information We Collect</h2>
              <p className="mb-2">We may collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Personal identification information (name, email address, phone number, company name)</li>
                <li>Business information (industry, website URL, marketing budget)</li>
                <li>Technical data (IP address, browser type, device information, cookies)</li>
                <li>Communication data (form submissions, email correspondence, phone calls)</li>
                <li>Analytics data (website usage patterns, page views, click-through rates)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-700 text-gray-900 mb-3">3. How We Use Your Information</h2>
              <p className="mb-2">We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide, operate, and maintain our services</li>
                <li>Respond to enquiries and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Detect and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-700 text-gray-900 mb-3">4. Information Sharing</h2>
              <p>We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements. These may include hosting providers, email service providers, analytics platforms, and marketing tools.</p>
            </section>

            <section>
              <h2 className="text-lg font-700 text-gray-900 mb-3">5. Data Security</h2>
              <p>We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="text-lg font-700 text-gray-900 mb-3">6. Cookies</h2>
              <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience and collect information about how you use our site. You can control cookies through your browser settings. Disabling cookies may affect the functionality of our website.</p>
            </section>

            <section>
              <h2 className="text-lg font-700 text-gray-900 mb-3">7. Your Rights</h2>
              <p className="mb-2">Under the Australian Privacy Act 1988, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Lodge a complaint with the Office of the Australian Information Commissioner</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-700 text-gray-900 mb-3">8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-2">
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
