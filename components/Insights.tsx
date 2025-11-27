import Link from "next/link";
import { SearchCheck, ArrowUpRight } from "lucide-react";

export default function Insights() {
  return (
    <section className="border-t border-black">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-cc-4 py-12 px-6 md:py-[100px] md:px-[80px] lg:border-r border-b lg:border-b-0 border-black flex flex-col items-center justify-center text-center">
          <div className="mb-6 md:mb-10 text-cc-dark">
            <SearchCheck size={48} strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-[clamp(28px,3vw,54px)] font-normal leading-tight text-cc-dark max-w-[500px]">
            Cut through the chaos
          </h2>
        </div>
        <div className="bg-white py-12 px-6 md:py-[100px] md:px-[80px] flex flex-col justify-center">
          <p className="body-text mb-8 md:mb-10 max-w-[480px]">
            LinkedIn is full of conversations, but most of them don&apos;t matter to
            your business. CiaoCiao is your intelligent filter, surfacing only
            the discussions where your voice belongs.
          </p>
          <Link href="#audit" className="btn btn-dark w-fit">
            Try it FREE
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
