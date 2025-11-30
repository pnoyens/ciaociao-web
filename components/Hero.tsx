import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";

export default function Hero() {
  return (
    <section className="pt-[120px] pb-[60px] md:pt-[155px] md:pb-[120px] min-h-screen bg-background dot-pattern relative">
      {/* Gradient overlay to fade dot pattern - vertical on mobile, horizontal on desktop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,transparent_0%,transparent_40%,var(--background)_60%)] md:bg-[linear-gradient(to_left,transparent_0%,transparent_50%,var(--background)_65%)] pointer-events-none" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] max-w-[1380px] mx-auto px-5 md:px-10 items-center relative">
        <div className="max-w-[560px] md:max-w-none text-left mx-auto md:mx-0">
          <Text as="h1" className="text-[clamp(32px,5vw,68px)] leading-tight mb-8 md:mb-[26px]">
            Stop chasing. Start building your pack.
          </Text>
          <p className="body-text mb-10 md:mb-10 max-w-[480px]">
            CiaoCiao helps you discover the right conversations on LinkedIn
            before you reach out. Our AI guides you to your future customers,
            turning cold outreach into warm relationships. Build your pack, not
            just your pipeline.
          </p>
          <div className="flex flex-wrap gap-3 justify-start">
            <Button asChild size="lg">
              <Link href="#get-started">
                Start for FREE
                <ArrowUpRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#pricing">View pricing</Link>
            </Button>
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
