import { Check } from "lucide-react";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";
import { Badge } from "@/components/retroui/Badge";
import { Card } from "@/components/retroui/Card";

const mailtoLink = "mailto:requests@ciaociao.social?subject=Early%20Bird%20Access%20Request%20-%2014-Day%20Free%20Trial%20%2B%2030%25%20Discount";

const plans = [
  {
    name: "Starter",
    price: "$34",
    originalPrice: "$49",
    period: "/ month",
    description: "Perfect for solo founders and small teams getting started.",
    features: ["1 brand", "300 discussions/month", "50 prospects tracked"],
    cta: "Start free trial",
    href: mailtoLink,
    featured: false,
    hasDiscount: true
  },
  // {
  //   name: "Professional",
  //   price: "$104",
  //   originalPrice: "$149",
  //   period: "/ month",
  //   description: "For growing businesses serious about relationship-driven growth.",
  //   features: ["3 brands", "1,500 discussions/month", "250 prospects tracked", "25 reverse lookups/month"],
  //   cta: "Start free trial",
  //   href: mailtoLink,
  //   featured: true,
  //   hasDiscount: true
  // },
  {
    name: "Enterprise",
    price: "Custom",
    originalPrice: null,
    period: "Pricing",
    description: "For organizations that need unlimited scale and dedicated support.",
    features: ["Unlimited everything", "Dedicated account manager", "Custom onboarding & training"],
    cta: "Contact sales",
    href: mailtoLink,
    featured: false,
    hasDiscount: false
  }
];

export default function Pricing() {
  return (
    <section className="bg-cc-6 border-t-2 border-border py-12 md:py-[100px]" id="pricing">
      <div className="max-w-[1380px] mx-auto px-5 md:px-10">
        <div className="text-center mb-10 md:mb-[80px]">
          <Text as="h2" className="section-title">Transparent pricing for every stage.</Text>
          <p className="body-text mt-4 max-w-[500px] mx-auto">
            <span className="inline-flex items-center gap-2 bg-cc-3 px-3 py-1 border-2 border-border text-sm font-medium">
              Early Bird: 30% off + 14-day free trial
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-[500px] md:max-w-[800px] mx-auto items-stretch">
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
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <Text as="h3" className="text-2xl md:text-[28px]">{plan.name}</Text>
                  {plan.hasDiscount && (
                    <span className="bg-cc-1 text-xs font-medium px-2 py-0.5 border border-border">
                      30% OFF
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-2 mb-2 md:mb-3">
                  <span className="font-head text-[40px] md:text-[54px] font-normal text-foreground leading-none">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-lg md:text-xl font-normal text-muted-foreground line-through">{plan.originalPrice}</span>
                  )}
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
                <a href={plan.href}>{plan.cta}</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
