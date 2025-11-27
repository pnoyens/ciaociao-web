import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="pt-[120px] pb-[100px] min-h-screen bg-white">
      <div className="max-w-[800px] mx-auto px-10">
        <Link href="/" className="inline-flex items-center gap-2 text-cc-grey hover:text-cc-dark transition-colors mb-10">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to home
        </Link>

        <h1 className="font-serif text-4xl lg:text-5xl font-normal text-cc-dark mb-8">Privacy Policy</h1>
        <p className="text-cc-grey mb-10">Last updated: January 2025</p>

        <div className="space-y-8 body-text">
          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">1. Introduction</h2>
            <p>
              CiaoCiao.social (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Account information (name, email address, password)</li>
              <li>LinkedIn profile data (when you connect your account)</li>
              <li>Usage data and analytics</li>
              <li>Communications with us</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze usage patterns and trends</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">4. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">6. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@ciaociao.social.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
