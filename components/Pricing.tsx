import Link from "next/link";
import { Check } from "lucide-react";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";
import { Badge } from "@/components/retroui/Badge";
import { Card } from "@/components/retroui/Card";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/ month",
    description: "Perfect for solo founders and small teams getting started.",
    features: ["1 brand", "300 discussions/month", "50 prospects tracked", "5 reverse lookups/month"],
    cta: "Start free trial",
    href: "#get-started",
    featured: false
  },
  {
    name: "Professional",
    price: "$149",
    period: "/ month",
    description: "For growing businesses serious about relationship-driven growth.",
    features: ["3 brands", "1,500 discussions/month", "250 prospects tracked", "25 reverse lookups/month"],
    cta: "Start free trial",
    href: "#get-started",
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Pricing",
    description: "For organizations that need unlimited scale and dedicated support.",
    features: ["Unlimited everything", "Dedicated account manager", "Custom onboarding & training"],
    cta: "Contact sales",
    href: "#contact",
    featured: false
  }
];

export default function Pricing() {
  return (
    <section className="bg-cc-6 border-t-2 border-border py-12 md:py-[100px]" id="pricing">
      <div className="max-w-[1380px] mx-auto px-5 md:px-10">
        <div className="text-center mb-10 md:mb-[80px]">
          <Text as="h2" className="section-title">Transparent pricing for every stage.</Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-[500px] md:max-w-none mx-auto items-stretch">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col p-6 md:p-10 relative w-full ${
                plan.featured
                  ? "bg-cc-cream lg:order-none order-first"
                  : "bg-background"
              }`}
            >
              {plan.featured && (
                <Badge variant="solid" className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  Most popular
                </Badge>
              )}
              <div className="mb-5 md:mb-[26px]">
                <Text as="h3" className="text-2xl md:text-[28px] mb-2 md:mb-3">{plan.name}</Text>
                <div className="flex items-baseline gap-1 mb-2 md:mb-3">
                  <span className="font-head text-[40px] md:text-[54px] font-normal text-foreground leading-none">{plan.price}</span>
                  <span className="text-base md:text-lg font-normal text-muted-foreground">{plan.period}</span>
                </div>
                <p className="body-text">{plan.description}</p>
              </div>
              <ul className="mb-8 md:mb-10 grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="body-text py-3 border-b border-border/20 last:border-b-0 flex items-center gap-2.5">
                    <span className="check-icon-circle">
                      <Check size={12} strokeWidth={1.5} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild variant={plan.featured ? "default" : "outline"} size="lg" className="w-full justify-center mt-auto">
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
