import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  navigation: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "SocialTemp™", href: "#socialtemp" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-cc-dark text-white py-[100px] pb-10">
      <div className="max-w-[1380px] mx-auto px-10">
        <div className="flex flex-col lg:flex-row justify-between gap-[80px] pb-[80px] border-b border-white/20">
          <div className="max-w-[300px] lg:max-w-none">
            <Link href="/" className="flex items-center gap-2.5 text-2xl font-semibold text-white mb-3">
              <svg className="text-white" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="12" r="3" fill="currentColor" />
                <circle cx="22" cy="12" r="3" fill="currentColor" />
                <path d="M8 20C8 20 12 26 16 26C20 26 24 20 24 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span>CiaoCiao</span>
            </Link>
            <p className="font-serif text-xl font-normal italic text-white/70">Stop chasing. Start building your pack.</p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-10 lg:gap-[80px]">
            <div className="min-w-[140px]">
              <h4 className="text-sm font-medium text-white mb-3 uppercase tracking-wide">Navigation</h4>
              <ul className="space-y-1">
                {footerLinks.navigation.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-lg font-light text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-[140px]">
              <h4 className="text-sm font-medium text-white mb-3 uppercase tracking-wide">Legal</h4>
              <ul className="space-y-1">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-lg font-light text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-[140px]">
              <h4 className="text-sm font-medium text-white mb-3 uppercase tracking-wide">Social</h4>
              <ul className="space-y-1">
                {footerLinks.social.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-lg font-light text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm font-light text-white/50">
            © 2025 Raamwerk Apps VOF. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm font-light text-white/50">
            <span>CiaoCiao is a product of</span>
            <Image
              src="/img/raamwerk-logo-white.webp"
              alt="Raamwerk"
              width={100}
              height={24}
              className="opacity-50 hover:opacity-70 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
