"use client";

import Image from "next/image";
import { Text } from "@/components/retroui/Text";

const analyzeItems = [
  {
    title: "Brand mentions",
    description: "Are they discussing your company or industry? We track every reference.",
  },
  {
    title: "Discussion participation",
    description: "How actively are they engaging in relevant conversations?",
  },
  {
    title: "Sentiment signals",
    description: "Is their tone positive, critical, or neutral toward topics you care about?",
  },
  {
    title: "Interaction history",
    description: "Have you crossed paths before? We remember every digital touchpoint.",
  },
];

const scaleItems = [
  {
    range: "Cold (-50 to 0)",
    description: "Negative sentiment or no awareness. Best to observe from a distance.",
    color: "bg-blue-400",
  },
  {
    range: "Cool (0 to 30)",
    description: "Awareness exists, but engagement is minimal. Time to build familiarity.",
    color: "bg-sky-300",
  },
  {
    range: "Warm (30 to 70)",
    description: "Active interest and positive sentiment. Ideal for meaningful engagement.",
    color: "bg-orange-300",
  },
  {
    range: "Hot (70+)",
    description: "Strong affinity and receptiveness. Your green light for direct outreach.",
    color: "bg-orange-500",
  },
];

export default function SocialTemp() {
  return (
    <section className="border-t-2 border-border" id="socialtemp">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left: Gauge Visual + Scale Box with dot pattern */}
        <div className="bg-background dot-pattern py-12 px-6 md:py-[100px] md:px-[60px] lg:px-[80px] flex flex-col items-center justify-center order-2 md:order-1">
          {/* Gauge visual */}
          <div className="w-full max-w-[400px] aspect-[5/4] relative mb-8">
            <Image
              src="/img/gauge.png"
              alt="SocialTemp gauge"
              fill
              className="object-contain"
            />
          </div>

          {/* The SocialTemp Scale */}
          <div className="max-w-[400px] text-left">
            <Text as="h3" className="text-xl mb-5">The SocialTemp scale:</Text>
            <div className="space-y-3">
              {scaleItems.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className={`w-3 h-3 ${item.color} mt-1.5 shrink-0 border-2 border-border`}></div>
                  <div>
                    <span className="font-medium text-sm text-foreground">{item.range}:</span>{" "}
                    <span className="font-normal text-sm text-foreground">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="bg-background py-12 px-6 md:py-[100px] md:px-[60px] lg:px-[80px] flex flex-col items-center md:items-start justify-center order-1 md:order-2">
          <Text as="h2" className="section-title mb-4 md:mb-6 max-w-[480px]">Know when the moment is right.</Text>
          <p className="body-text mb-8 md:mb-10 max-w-[480px]">
            In modern business, timing is everything. The SocialTemp Score is our proprietary AI metric
            that measures how receptive a prospect is to your brand. Stop guessing and start knowing.
          </p>

          {/* What We Analyze */}
          <div className="max-w-[480px] text-left">
            <Text as="h3" className="text-2xl mb-6">What we analyze:</Text>
            <div className="space-y-4">
              {analyzeItems.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-2 h-2 bg-foreground mt-2.5 shrink-0"></div>
                  <div>
                    <span className="font-medium text-foreground">{item.title}:</span>{" "}
                    <span className="font-normal text-foreground">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
