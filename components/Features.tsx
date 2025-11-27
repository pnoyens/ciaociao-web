const features = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M24 14V24L30 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 10L14 8M32 10L34 8M24 6V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    sidebarColor: "bg-cc-peach",
    title: "Brand Intelligence Core",
    subtitle: "Understand Your DNA.",
    description: "Provide your website URL, and our AI extracts your core values, keywords, and ideal customer profile. We build the foundation for a winning social strategy tailored to your brand.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M31 31L38 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 18H18M12 24H16M12 30H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    sidebarColor: "bg-cc-gold",
    title: "Social Listening Engine",
    subtitle: "24/7 Conversation Monitoring.",
    description: "Our engine continuously scans LinkedIn, identifying discussions that matter to your business. We filter thousands of posts to surface only the opportunities worth your attention.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8C15.16 8 8 15.16 8 24C8 32.84 15.16 40 24 40C32.84 40 40 32.84 40 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24 24L36 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="3" fill="currentColor"/>
      </svg>
    ),
    sidebarColor: "bg-cc-3",
    title: "SocialTemp™ Score",
    subtitle: "Relationship Intelligence.",
    description: "Know exactly how receptive a prospect is to your brand. Our AI-powered scoring gives you the confidence to engage at the optimal moment, maximizing your success rate.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="14" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M18 22H30M18 28H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="38" cy="14" r="4" fill="currentColor"/>
      </svg>
    ),
    sidebarColor: "bg-cc-4",
    title: "Engagement & Action Module",
    subtitle: "Seamless Integration.",
    description: "Get AI-powered suggestions for comments and posts. Engage directly from our platform and track engagement metrics as your relationships deepen over time.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M26 26L34 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M30 14L34 10M34 14L30 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    sidebarColor: "bg-cc-2",
    title: "Reverse Lookup",
    subtitle: "Target Specific Prospects.",
    description: "Have someone in mind? Add them manually, and we'll use advanced search to find their social activity and calculate their initial SocialTemp™ Score, helping you plan your approach.",
  }
];

export default function Features() {
  return (
    <section className="bg-white border-t border-black py-[100px]" id="features">
      <div className="max-w-[1380px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[80px]">
        <div className="relative">
          <div className="lg:sticky lg:top-[115px] text-center lg:text-left">
            <span className="badge bg-cc-2 text-cc-dark mb-[26px]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M4 7L6 9L10 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              FEATURES
            </span>
            <h2 className="section-title max-w-[400px] mx-auto lg:mx-0">Intelligent tools for modern GTM</h2>
          </div>
        </div>

        <div className="flex flex-col gap-[60px]">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start gap-6 bg-cc-card card-shadow">
              <div className={`flex items-center justify-center p-2.5 w-[100px] h-[100px] shrink-0 ${feature.sidebarColor}`}>
                <div className="w-full h-full flex items-center justify-center text-cc-dark bg-white">
                  {feature.icon}
                </div>
              </div>
              <div className="flex-1 py-5 pr-[30px] flex flex-col gap-3">
                <h3 className="font-serif text-[28px] font-semibold text-cc-dark leading-tight">{feature.title}</h3>
                <p className="text-base font-light leading-relaxed text-cc-dark">{feature.description}</p>
                <span className="pill self-start">{feature.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
