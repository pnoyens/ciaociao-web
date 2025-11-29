import { CircleCheck, Brain, Radar, Gauge, MessageSquareDot, UserSearch, Check } from "lucide-react";
import { Badge } from "@/components/retroui/Badge";
import { Text } from "@/components/retroui/Text";
import { Card } from "@/components/retroui/Card";

const features = [
  {
    icon: <Brain size={48} strokeWidth={1.5} />,
    sidebarColor: "bg-cc-peach",
    title: "Brand intelligence core",
    subtitle: "Understand your DNA",
    description: "Provide your website URL, and our AI extracts your core values, keywords, and ideal customer profile. We build the foundation for a winning social strategy tailored to your brand.",
  },
  {
    icon: <Radar size={48} strokeWidth={1.5} />,
    sidebarColor: "bg-cc-gold",
    title: "Social listening engine",
    subtitle: "24/7 conversation monitoring",
    description: "Our engine continuously scans LinkedIn, identifying discussions that matter to your business. We filter thousands of posts to surface only the opportunities worth your attention.",
  },
  {
    icon: <Gauge size={48} strokeWidth={1.5} />,
    sidebarColor: "bg-cc-3",
    title: "SocialTemp Score",
    subtitle: "Relationship intelligence",
    description: "Know exactly how receptive a prospect is to your brand. Our AI-powered scoring gives you the confidence to engage at the optimal moment, maximizing your success rate.",
  },
  {
    icon: <MessageSquareDot size={48} strokeWidth={1.5} />,
    sidebarColor: "bg-cc-4",
    title: "Engagement & action module",
    subtitle: "Seamless integration",
    description: "Get AI-powered suggestions for comments and posts. Engage directly from our platform and track engagement metrics as your relationships deepen over time.",
  },
  {
    icon: <UserSearch size={48} strokeWidth={1.5} />,
    sidebarColor: "bg-cc-2",
    title: "Reverse lookup",
    subtitle: "Target specific prospects",
    description: "Have someone in mind? Add them manually, and we'll use advanced search to find their social activity and calculate their initial SocialTemp Score, helping you plan your approach.",
  }
];

export default function Features() {
  return (
    <section className="bg-background border-t-2 border-border py-12 md:py-[100px]" id="features">
      <div className="max-w-[1380px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 md:gap-[80px]">
        <div className="relative">
          <div className="lg:sticky lg:top-[115px] text-center lg:text-left">
            <Badge variant="surface" className="mb-5 md:mb-[26px] border-2 border-border">
              <CircleCheck size={14} />
              FEATURES
            </Badge>
            <Text as="h2" className="section-title max-w-[400px] mx-auto lg:mx-0">Intelligent tools for modern GTM</Text>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:gap-[60px]">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col sm:flex-row items-start w-full">
              <div className={`flex items-center justify-center p-2 w-[80px] h-[80px] md:p-2.5 md:w-[100px] md:h-[100px] shrink-0 ${feature.sidebarColor}`}>
                <div className="w-full h-full flex items-center justify-center text-foreground bg-background border-2 border-border">
                  {feature.icon}
                </div>
              </div>
              <div className="flex-1 py-6 px-5 sm:py-8 sm:pr-6 sm:pl-10 md:py-10 md:pr-[30px] md:pl-20 flex flex-col gap-2 md:gap-3">
                <Text as="h3" className="text-xl md:text-[28px] leading-tight">{feature.title}</Text>
                <p className="text-sm md:text-base font-normal leading-relaxed text-foreground">{feature.description}</p>
                <span className="pill self-start text-xs md:text-sm">
                  <span className="check-icon-circle">
                    <Check size={12} strokeWidth={1.5} />
                  </span>
                  {feature.subtitle}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
