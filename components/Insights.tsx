import Link from "next/link";

export default function Insights() {
  return (
    <section className="border-t border-black">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-cc-2 py-[100px] px-[80px] lg:border-r border-b lg:border-b-0 border-black flex flex-col items-center justify-center text-center">
          <div className="mb-10 text-cc-dark">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" />
              <line x1="29" y1="29" x2="40" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <rect x="17" y="15" width="6" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 8L14 12M28 8L26 12M8 16L12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <h2 className="font-serif text-[clamp(28px,3vw,54px)] font-normal leading-tight text-cc-dark max-w-[500px]">
            Cut through the chaos
          </h2>
        </div>
        <div className="bg-white py-[100px] px-[80px] flex flex-col justify-center">
          <p className="body-text mb-10 max-w-[480px]">
            LinkedIn is full of conversations, but most of them don&apos;t matter to
            your business. CiaoCiao is your intelligent filter, surfacing only
            the discussions where your voice belongs.
          </p>
          <Link href="#audit" className="btn btn-dark w-fit">
            Try it FREE
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
