const useCases = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 34C8 26.268 13.373 20 20 20C26.627 20 32 26.268 32 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 8L32 12L28 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 12H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: "bg-cc-2",
    title: "For startup founders",
    subtitle: "Build your brand from day one.",
    description: "You're launching something new and need to establish credibility fast. CiaoCiao helps you identify early adopters, thought leaders, and potential evangelists. Build meaningful relationships before you even think about selling."
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 12V20L26 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="32" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    color: "bg-cc-4",
    title: "For marketing teams",
    subtitle: "Turn awareness into advocacy.",
    description: "You've built brand awareness—now convert it into genuine engagement. CiaoCiao identifies people already discussing your industry and guides you to join conversations that matter. It's relationship marketing with intelligence."
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 28L20 20L28 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 20L20 12L28 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="6" y="30" width="28" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    color: "bg-cc-3",
    title: "For sales leaders",
    subtitle: "Warm up every outreach.",
    description: "Cold calling is dead. Your team needs warm leads, not cold prospects. CiaoCiao finds people showing genuine interest and tells you exactly when to make your move. Higher conversion rates, better pipeline quality."
  }
];

export default function UseCases() {
  return (
    <section className="bg-white border-t border-black py-[100px]" id="use-cases">
      <div className="max-w-[1380px] mx-auto px-10">
        <div className="text-center mb-[80px]">
          <h2 className="section-title">Built for modern GTM teams</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[600px] lg:max-w-none mx-auto">
          {useCases.map((useCase, index) => (
            <div key={index} className="p-10 border border-black bg-white">
              <div className={`flex items-center justify-center w-[72px] h-[72px] mb-[26px] text-cc-dark ${useCase.color}`}>
                {useCase.icon}
              </div>
              <h3 className="font-serif text-2xl font-semibold text-cc-dark mb-1">{useCase.title}</h3>
              <p className="font-serif text-xl font-normal italic text-cc-dark mb-3">{useCase.subtitle}</p>
              <p className="body-text">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
