import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="pt-[120px] pb-[100px] min-h-screen bg-white">
      <div className="max-w-[800px] mx-auto px-10">
        <Link href="/" className="inline-flex items-center gap-2 text-cc-grey hover:text-cc-dark transition-colors mb-10">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to home
        </Link>

        <h1 className="font-serif text-4xl lg:text-5xl font-normal text-cc-dark mb-8">Terms of Service</h1>
        <p className="text-cc-grey mb-10">Last updated: January 2025</p>

        <div className="space-y-8 body-text">
          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using CiaoCiao.social, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">2. Description of Service</h2>
            <p>
              CiaoCiao.social is a LinkedIn engagement and relationship intelligence platform that helps users discover relevant conversations and build meaningful professional relationships.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">3. User Accounts</h2>
            <p className="mb-4">When you create an account, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly update any changes to your information</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">4. Acceptable Use</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Use the service for spam or harassment</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the service</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of CiaoCiao.social are owned by Raamwerk Apps VOF and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">6. Payment Terms</h2>
            <p>
              Paid subscriptions are billed in advance on a monthly or annual basis. All fees are non-refundable unless otherwise specified. We reserve the right to change our pricing with 30 days notice.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">7. Limitation of Liability</h2>
            <p>
              CiaoCiao.social and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">8. Termination</h2>
            <p>
              We may terminate or suspend your account at any time for violations of these terms. Upon termination, your right to use the service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at legal@ciaociao.social.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
