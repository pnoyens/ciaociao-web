import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  navigation: [
    { label: "Use cases", href: "#use-cases" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Features", href: "#features" },
    { label: "SocialTemp™", href: "#socialtemp" },
    { label: "Pricing", href: "#pricing" },
  ],
  legal: [
    { label: "Privacy policy", href: "/privacy" },
    { label: "Terms of service", href: "/terms" },
    { label: "Cookie policy", href: "/cookies" },
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
            <Link href="/" className="flex items-center gap-3 text-2xl text-white mb-3">
              <Image
                src="/img/logo/chow-chow-logo-white.png"
                alt="CiaoCiao"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="font-serif font-semibold">CiaoCiao</span>
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
          <p className="text-sm font-light text-white/70">
            © 2025 CiaoCiao. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm font-light text-white/70">
            <span>Proudly crafted by</span>
            <a href="https://www.raamwerk.co" target="_blank" rel="noopener noreferrer">
              <Image
                src="/img/raamwerk-logo-white.webp"
                alt="Raamwerk"
                width={100}
                height={24}
                className="brightness-100 hover:brightness-125 transition-all"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
