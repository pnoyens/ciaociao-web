import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-[155px] pb-[120px] min-h-screen bg-white dot-pattern">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] max-w-[1380px] mx-auto px-10 items-center">
        <div className="max-w-[560px] lg:max-w-none text-center lg:text-left mx-auto lg:mx-0">
          <h1 className="font-serif text-[clamp(40px,5vw,68px)] font-normal leading-tight text-cc-dark mb-[26px]">
            Stop chasing. Start building your pack.
          </h1>
          <p className="body-text mb-10 max-w-[480px] mx-auto lg:mx-0">
            CiaoCiao helps you discover the right conversations on LinkedIn
            before you reach out. Our AI guides you to your future customers,
            turning cold outreach into warm relationships. Build your pack, not
            just your pipeline.
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <Link href="#get-started" className="btn btn-dark">
              Start for FREE
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="#pricing" className="btn btn-outline">
              View Pricing
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="8" cy="8" r="2" fill="currentColor" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
          <div className="w-full h-full max-w-[500px] max-h-[500px] bg-[#e8e4e0] rounded-[20px] flex items-center justify-center">
            <span className="text-lg font-light text-cc-grey">Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
