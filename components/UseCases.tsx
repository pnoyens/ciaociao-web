const useCases = [
  {
    title: "For startup founders",
    subtitle: "Build your brand from day one.",
    description: "You're launching something new and need to establish credibility fast. CiaoCiao helps you identify early adopters, thought leaders, and potential evangelists. Build meaningful relationships before you even think about selling.",
    stat: "+3x",
    statLabel: "Network Growth",
    color: "bg-cc-2",
  },
  {
    title: "For marketing teams",
    subtitle: "Turn awareness into advocacy.",
    description: "You've built brand awareness—now convert it into genuine engagement. CiaoCiao identifies people already discussing your industry and guides you to join conversations that matter. It's relationship marketing with intelligence.",
    stat: "+47%",
    statLabel: "Engagement Rate",
    color: "bg-cc-4",
  },
  {
    title: "For sales leaders",
    subtitle: "Warm up every outreach.",
    description: "Cold calling is dead. Your team needs warm leads, not cold prospects. CiaoCiao finds people showing genuine interest and tells you exactly when to make your move. Higher conversion rates, better pipeline quality.",
    stat: "+62%",
    statLabel: "Conversion Uplift",
    color: "bg-cc-3",
  }
];

export default function UseCases() {
  return (
    <section className="bg-cc-6 border-t border-black py-[100px]" id="use-cases">
      <div className="max-w-[1380px] mx-auto px-10">
        <div className="text-center mb-[80px]">
          <span className="badge bg-cc-2 text-cc-dark mb-[26px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1L8.5 4.5L12 5L9.5 7.5L10 11L7 9.5L4 11L4.5 7.5L2 5L5.5 4.5L7 1Z" fill="currentColor"/>
            </svg>
            USE CASES
          </span>
          <h2 className="section-title">Built for modern GTM teams</h2>
        </div>

        <div className="flex flex-col gap-12">
          {useCases.map((useCase, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="border border-black bg-white"
              >
                <div className={`grid lg:grid-cols-2 min-h-[500px] ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Content */}
                  <div className={`flex flex-col justify-center p-12 lg:p-20 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <h3 className="font-serif text-4xl lg:text-5xl font-normal text-cc-dark mb-3">
                      {useCase.title}
                    </h3>
                    <p className="font-serif text-2xl lg:text-3xl font-normal italic text-cc-grey mb-8">
                      {useCase.subtitle}
                    </p>
                    <p className="text-xl font-light leading-relaxed text-cc-dark max-w-[520px]">
                      {useCase.description}
                    </p>
                  </div>

                  {/* Visual placeholder with grid pattern */}
                  <div className={`relative overflow-hidden ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    {/* Grid pattern background */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                          linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
                        `,
                        backgroundSize: '32px 32px'
                      }}
                    />

                    {/* Placeholder content with margin */}
                    <div className="relative h-full min-h-[350px] flex items-center justify-center p-12 lg:p-16">
                      {/* Placeholder: Use case illustration */}
                      <div className={`w-full max-w-[400px] aspect-[4/3] ${useCase.color} flex items-center justify-center border border-black/10`}>
                        <span className="text-cc-dark/50 text-sm">Image placeholder</span>
                      </div>

                      {/* Stat badge */}
                      <div className="absolute bottom-10 right-10 bg-cc-5 border border-black px-5 py-4">
                        <div className="flex items-center gap-2">
                          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 12V4M8 4L4 8M8 4L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-4xl font-semibold text-cc-dark">{useCase.stat}</span>
                        </div>
                        <p className="text-sm text-cc-dark mt-1">{useCase.statLabel}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
