import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-[120px] pb-[60px] md:pt-[155px] md:pb-[120px] min-h-screen bg-white dot-pattern">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[60px] max-w-[1380px] mx-auto px-5 md:px-10 items-center">
        <div className="max-w-[560px] lg:max-w-none text-left mx-auto lg:mx-0">
          <h1 className="font-serif text-[clamp(32px,5vw,68px)] font-normal leading-tight text-cc-dark mb-8 md:mb-[26px]">
            Stop chasing. Start building your pack.
          </h1>
          <p className="body-text mb-10 md:mb-10 max-w-[480px]">
            CiaoCiao helps you discover the right conversations on LinkedIn
            before you reach out. Our AI guides you to your future customers,
            turning cold outreach into warm relationships. Build your pack, not
            just your pipeline.
          </p>
          <div className="flex flex-wrap gap-3 justify-start">
            <Link href="#get-started" className="btn btn-dark">
              Start for FREE
              <ArrowUpRight size={16} />
            </Link>
            <Link href="#pricing" className="btn btn-outline">
              View pricing
            </Link>
          </div>
        </div>

        <div className="relative h-[280px] md:h-[400px] lg:h-[600px] flex items-center justify-center">
          <Image
            src="/img/group-of-happy-dogs.png"
            alt="Group of happy dogs"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
