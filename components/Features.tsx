const features = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5"/>
        <path d="M24 10V24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 24H38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    sidebarColor: "bg-cc-peach",
    title: "Conversion-focused redesigns",
    description: "Visualise the impact of conversion-focused design with before-and-after mockups of 10 key sections of your site. Get expert recommendations on how to optimize each element for higher engagement.",
    items: ["Redesign of 10x key sections", "Before-and-After Mockups", "Access to developer-friendly design files"]
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15 24L21 30L33 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    sidebarColor: "bg-cc-gold",
    title: "Actionable checklist",
    description: "Get a comprehensive list of practical steps you can take right now to start improving your website's conversion rates. Prioritized recommendations to help you focus on the most impactful changes.",
    items: ["Up to 40+ actionable fixes", "Top 5 priority fixes list", "Insights for CRO, AOV and UX improvements"]
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="24" cy="24" r="3" fill="currentColor"/>
      </svg>
    ),
    sidebarColor: "bg-cc-2",
    title: "In-depth website analysis",
    description: "A deep dive into your customer journey, pinpointing the strengths and weaknesses of your home, collection, product, and cart pages. Uncover hidden obstacles and untapped opportunities.",
    items: ["Navigation and menu audit", "User flow optimization", "Conversion funnel review"]
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
              WHAT&apos;S INCLUDED
            </span>
            <h2 className="section-title max-w-[400px] mx-auto lg:mx-0">A personalized action plan for growth</h2>
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
              <div className="flex-1 py-5 pr-[30px] flex flex-col gap-4">
                <h3 className="font-serif text-[28px] font-semibold text-cc-dark leading-tight">{feature.title}</h3>
                <p className="text-base font-light leading-normal text-cc-dark">{feature.description}</p>
                <ul className="flex flex-col gap-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="pill check-icon">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
