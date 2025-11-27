import Link from "next/link";

export default function CookiePolicy() {
  return (
    <main className="pt-[120px] pb-[100px] min-h-screen bg-white">
      <div className="max-w-[800px] mx-auto px-10">
        <Link href="/" className="inline-flex items-center gap-2 text-cc-grey hover:text-cc-dark transition-colors mb-10">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to home
        </Link>

        <h1 className="font-serif text-4xl lg:text-5xl font-normal text-cc-dark mb-8">Cookie Policy</h1>
        <p className="text-cc-grey mb-10">Last updated: January 2025</p>

        <div className="space-y-8 body-text">
          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">2. How We Use Cookies</h2>
            <p className="mb-4">We use cookies for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing cookies:</strong> Track your activity to deliver relevant advertisements</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">3. Types of Cookies We Use</h2>

            <h3 className="font-medium text-cc-dark mt-6 mb-3">Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you, such as logging in or filling out forms.
            </p>

            <h3 className="font-medium text-cc-dark mt-6 mb-3">Analytics Cookies</h3>
            <p className="mb-4">
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular.
            </p>

            <h3 className="font-medium text-cc-dark mt-6 mb-3">Functional Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">4. Managing Cookies</h2>
            <p className="mb-4">
              You can control and manage cookies in various ways. Most browsers allow you to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="mt-4">
              Please note that blocking all cookies may impact your experience on our website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">5. Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third-party services that appear on our pages. We do not control these cookies and recommend reviewing the privacy policies of these third parties.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">6. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal text-cc-dark mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at privacy@ciaociao.social.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
