import Link from "next/link";

export default function CTAFinal() {
  return (
    <section className="bg-cc-1 border-t border-black py-12 md:py-[120px]" id="get-started">
      <div className="max-w-[780px] mx-auto px-5 md:px-10 text-center">
        <h2 className="section-title mb-5 md:mb-[26px]">
          Ready to transform your LinkedIn strategy?
        </h2>
        <p className="body-text mb-8 md:mb-10 max-w-[600px] mx-auto">
          Stop chasing cold leads. Start building warm relationships. Your
          future customers are already having conversations on LinkedIn—we&apos;ll
          help you find them and join at the perfect moment.
        </p>
        <Link href="#trial" className="btn btn-dark mb-3">
          Start your 14-day free trial
        </Link>
        <p className="text-sm font-light text-cc-grey">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  );
}
