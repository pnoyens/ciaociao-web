import { Sparkles, Crosshair, ArrowDownCircle, Network } from "lucide-react";
import { Badge } from "@/components/retroui/Badge";
import { Text } from "@/components/retroui/Text";

const steps = [
  {
    icon: <Crosshair size={32} strokeWidth={1.5} />,
    color: "bg-cc-3",
    title: "Intelligent discovery",
    description: "Our AI-powered engine continuously monitors LinkedIn, identifying discussions, posts, and comments that align with your brand. We filter out the noise and deliver a curated feed of high-value opportunities where you can make an impact."
  },
  {
    icon: <ArrowDownCircle size={32} strokeWidth={1.5} />,
    color: "bg-cc-2",
    title: "Context analysis",
    description: "Not every conversation is worth joining. Our proprietary SocialTemp Score analyzes context, sentiment, and participant engagement to tell you how receptive a discussion is. We help you understand the dynamics before you engage."
  },
  {
    icon: <Network size={32} strokeWidth={1.5} />,
    color: "bg-cc-4",
    title: "Strategic engagement",
    description: "With our insights, you can confidently join conversations at the perfect moment. Share valuable perspectives, contribute meaningfully, and build authentic relationships. We handle the discovery—you handle the human connection."
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-background border-t-2 border-border" id="how-it-works">
      <div className="max-w-[1380px] mx-auto py-12 px-5 pb-16 md:py-[100px] md:px-10 md:pb-[120px]">
        <div className="text-center mb-10 md:mb-[80px]">
          <Badge variant="solid" className="mb-5 md:mb-[26px]">
            <Sparkles size={14} />
            HOW IT WORKS
          </Badge>
          <Text as="h2" className="section-title">3 steps to building your pack</Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {steps.map((step, index) => (
            <div key={index}>
              <div className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border-2 border-border mb-4 md:mb-[26px] text-foreground ${step.color}`}>
                {step.icon}
              </div>
              <Text as="h3" className="mb-3">{step.title}</Text>
              <p className="body-text">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
