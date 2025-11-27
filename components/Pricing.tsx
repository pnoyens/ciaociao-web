import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/ month",
    description: "Perfect for solo founders and small teams getting started.",
    features: ["1 Brand", "300 Discussions/month", "50 Prospects Tracked", "5 Reverse Lookups/month"],
    cta: "Start Free Trial",
    href: "#get-started",
    featured: false
  },
  {
    name: "Professional",
    price: "$149",
    period: "/ month",
    description: "For growing businesses serious about relationship-driven growth.",
    features: ["3 Brands", "1,500 Discussions/month", "250 Prospects Tracked", "25 Reverse Lookups/month"],
    cta: "Start Free Trial",
    href: "#get-started",
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Pricing",
    description: "For organizations that need unlimited scale and dedicated support.",
    features: ["Unlimited Everything", "Dedicated Account Manager", "Custom Onboarding & Training"],
    cta: "Contact Sales",
    href: "#contact",
    featured: false
  }
];

export default function Pricing() {
  return (
    <section className="bg-cc-6 border-t border-black py-[100px]" id="pricing">
      <div className="max-w-[1380px] mx-auto px-10">
        <div className="text-center mb-[80px]">
          <h2 className="section-title">Transparent pricing for every stage.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[500px] lg:max-w-none mx-auto items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col p-10 relative ${
                plan.featured
                  ? "bg-cc-cream card-shadow-cream lg:order-none order-first"
                  : "bg-white card-shadow"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge bg-cc-dark text-white whitespace-nowrap">
                  Most Popular
                </span>
              )}
              <div className="mb-[26px]">
                <h3 className="font-serif text-[28px] font-semibold text-cc-dark mb-3">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-serif text-[54px] font-normal text-cc-dark leading-none">{plan.price}</span>
                  <span className="text-lg font-light text-cc-grey">{plan.period}</span>
                </div>
                <p className="body-text">{plan.description}</p>
              </div>
              <ul className="mb-10 grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="body-text py-3 border-b border-black/10 last:border-b-0 flex items-center gap-2.5 check-icon">
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`btn w-full justify-center mt-auto ${plan.featured ? "btn-dark" : "btn-outline"}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
