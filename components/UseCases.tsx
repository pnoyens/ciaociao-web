const useCases = [
  {
    title: "For startup founders",
    subtitle: "Build your brand from day one.",
    description: "You're launching something new and need to establish credibility fast. CiaoCiao helps you identify early adopters, thought leaders, and potential evangelists. Build meaningful relationships before you even think about selling.",
  },
  {
    title: "For marketing teams",
    subtitle: "Turn awareness into advocacy.",
    description: "You've built brand awareness—now convert it into genuine engagement. CiaoCiao identifies people already discussing your industry and guides you to join conversations that matter. It's relationship marketing with intelligence.",
  },
  {
    title: "For sales leaders",
    subtitle: "Warm up every outreach.",
    description: "Cold calling is dead. Your team needs warm leads, not cold prospects. CiaoCiao finds people showing genuine interest and tells you exactly when to make your move. Higher conversion rates, better pipeline quality.",
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
                <div className={`grid lg:grid-cols-2 min-h-[700px] ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Content */}
                  <div className={`flex flex-col justify-center p-10 lg:p-16 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <h3 className="font-serif text-2xl lg:text-3xl font-normal text-cc-dark mb-2">
                      {useCase.title}
                    </h3>
                    <p className="font-serif text-lg lg:text-xl font-normal italic text-cc-grey mb-6">
                      {useCase.subtitle}
                    </p>
                    <p className="text-base font-light leading-relaxed text-cc-dark max-w-[420px]">
                      {useCase.description}
                    </p>
                  </div>

                  {/* Visual placeholder */}
                  <div className={`flex items-center justify-center p-10 lg:p-12 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    {/* Placeholder: Use case illustration */}
                    <div className="w-full h-full max-w-[550px] max-h-[550px] bg-[#e8e4e0] rounded-[20px] flex items-center justify-center">
                      <span className="text-lg font-light text-cc-grey">Image placeholder</span>
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
