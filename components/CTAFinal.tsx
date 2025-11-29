import Link from "next/link";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";

export default function CTAFinal() {
  return (
    <section className="bg-cc-1 border-t-2 border-border py-12 md:py-[120px]" id="get-started">
      <div className="max-w-[780px] mx-auto px-5 md:px-10 text-center">
        <Text as="h2" className="section-title mb-5 md:mb-[26px]">
          Ready to transform your LinkedIn strategy?
        </Text>
        <p className="body-text mb-8 md:mb-10 max-w-[600px] mx-auto">
          Stop chasing cold leads. Start building warm relationships. Your
          future customers are already having conversations on LinkedIn—we&apos;ll
          help you find them and join at the perfect moment.
        </p>
        <Button asChild size="lg" variant="secondary" className="mb-3">
          <Link href="#trial">Start your 14-day free trial</Link>
        </Button>
        <p className="text-sm font-normal text-muted-foreground">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  );
}
