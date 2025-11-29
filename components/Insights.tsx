import Link from "next/link";
import { SearchCheck, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";

export default function Insights() {
  return (
    <section className="border-t-2 border-border">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-cc-4 py-12 px-6 md:py-[100px] md:px-[60px] lg:px-[80px] md:border-r-2 border-b-2 md:border-b-0 border-border flex flex-col items-center justify-center text-center min-h-[300px] md:min-h-[400px]">
          <div className="mb-6 md:mb-10 text-foreground">
            <SearchCheck size={48} strokeWidth={1.5} />
          </div>
          <Text as="h2" className="text-[clamp(28px,3vw,54px)] leading-tight max-w-[500px]">
            Cut through the chaos
          </Text>
        </div>
        <div className="bg-background py-12 px-6 md:py-[100px] md:px-[60px] lg:px-[80px] flex flex-col justify-center">
          <p className="body-text mb-8 md:mb-10 max-w-[480px]">
            LinkedIn is full of conversations, but most of them don&apos;t matter to
            your business. CiaoCiao is your intelligent filter, surfacing only
            the discussions where your voice belongs.
          </p>
          <Button asChild size="lg" className="w-fit">
            <Link href="#audit">
              Try it FREE
              <ArrowUpRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
