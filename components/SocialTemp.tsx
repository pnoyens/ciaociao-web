"use client";

import Image from "next/image";

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
    <section className="bg-white border-t border-black py-12 md:py-[100px]" id="socialtemp">
      <div className="max-w-[1380px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left: Gauge Visual Placeholder + Scale Box */}
          <div className="flex flex-col gap-8">
            {/* Gauge visual */}
            <div className="w-full max-w-[500px] aspect-[5/4] relative">
              <Image
                src="/img/gauge.png"
                alt="SocialTemp gauge"
                fill
                className="object-contain"
              />
            </div>

            {/* The SocialTemp Scale */}
            <div className="max-w-[500px]">
              <h3 className="font-serif text-xl font-normal text-cc-dark mb-5">The SocialTemp™ scale:</h3>
              <div className="space-y-3">
                {scaleItems.map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className={`w-3 h-3 rounded-full ${item.color} mt-1.5 shrink-0 border border-black/20`}></div>
                    <div>
                      <span className="font-medium text-sm text-cc-dark">{item.range}:</span>{" "}
                      <span className="font-light text-sm text-cc-dark">{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="section-title mb-4 md:mb-6">Know when the moment is right.</h2>
            <p className="body-text mb-8 md:mb-10">
              In modern business, timing is everything. The SocialTemp™ Score is our proprietary AI metric
              that measures how receptive a prospect is to your brand. Stop guessing and start knowing.
            </p>

            {/* What We Analyze */}
            <div>
              <h3 className="font-serif text-2xl font-normal text-cc-dark mb-6">What we analyze:</h3>
              <div className="space-y-4">
                {analyzeItems.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-cc-dark mt-2.5 shrink-0"></div>
                    <div>
                      <span className="font-medium text-cc-dark">{item.title}:</span>{" "}
                      <span className="font-light text-cc-dark">{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
