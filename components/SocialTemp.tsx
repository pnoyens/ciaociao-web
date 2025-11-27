"use client";

const analyzeItems = [
  {
    title: "Brand Mentions",
    description: "Are they discussing your company or industry? We track every reference.",
  },
  {
    title: "Discussion Participation",
    description: "How actively are they engaging in relevant conversations?",
  },
  {
    title: "Sentiment Signals",
    description: "Is their tone positive, critical, or neutral toward topics you care about?",
  },
  {
    title: "Interaction History",
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
    <section className="bg-white border-t border-black py-[100px]" id="socialtemp">
      <div className="max-w-[1380px] mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Gauge Visual Placeholder */}
          <div className="flex items-center justify-center">
            {/* Placeholder: Animated gauge transitioning from cool blue to warm orange */}
            <div className="w-full h-full max-w-[500px] max-h-[450px] aspect-[5/4] bg-[#e8e4e0] rounded-[20px] flex items-center justify-center">
              <span className="text-lg font-light text-cc-grey">Image placeholder</span>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="section-title mb-6">Know When the Moment Is Right.</h2>
            <p className="body-text mb-10">
              In modern business, timing is everything. The SocialTemp™ Score is our proprietary AI metric
              that measures how receptive a prospect is to your brand. Stop guessing and start knowing.
            </p>

            {/* What We Analyze */}
            <div className="mb-10">
              <h3 className="font-serif text-2xl font-normal text-cc-dark mb-6">What We Analyze:</h3>
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

            {/* The SocialTemp Scale */}
            <div>
              <h3 className="font-serif text-2xl font-normal text-cc-dark mb-6">The SocialTemp™ Scale:</h3>
              <div className="space-y-4">
                {scaleItems.map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className={`w-4 h-4 rounded-full ${item.color} mt-1 shrink-0 border border-black/20`}></div>
                    <div>
                      <span className="font-medium text-cc-dark">{item.range}:</span>{" "}
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
