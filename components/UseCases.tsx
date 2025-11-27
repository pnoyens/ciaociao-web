import { Star } from "lucide-react";
import Image from "next/image";

const useCases = [
  {
    title: "For startup founders",
    subtitle: "Build your brand from day one.",
    description: "You're launching something new and need to establish credibility fast. CiaoCiao helps you identify early adopters, thought leaders, and potential evangelists. Build meaningful relationships before you even think about selling.",
    image: "/img/startup-founder-dog.png",
  },
  {
    title: "For marketing teams",
    subtitle: "Turn awareness into advocacy.",
    description: "You've built brand awareness—now convert it into genuine engagement. CiaoCiao identifies people already discussing your industry and guides you to join conversations that matter. It's relationship marketing with intelligence.",
    image: "/img/marketing-expert-dog.png",
  },
  {
    title: "For sales leaders",
    subtitle: "Warm up every outreach.",
    description: "Cold calling is dead. Your team needs warm leads, not cold prospects. CiaoCiao finds people showing genuine interest and tells you exactly when to make your move. Higher conversion rates, better pipeline quality.",
    image: "/img/sales-leader-dog.png",
  }
];

export default function UseCases() {
  return (
    <section className="bg-cc-6 border-t border-black py-12 md:py-[100px]" id="use-cases">
      <div className="max-w-[1380px] mx-auto px-5 md:px-10">
        <div className="text-center mb-10 md:mb-[80px]">
          <span className="badge bg-cc-2 text-cc-dark mb-5 md:mb-[26px]">
            <Star size={14} fill="currentColor" />
            USE CASES
          </span>
          <h2 className="section-title">Built for modern GTM teams</h2>
        </div>

        <div className="flex flex-col gap-6 md:gap-12">
          {useCases.map((useCase, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="border border-black bg-white"
              >
                <div className={`grid lg:grid-cols-2 lg:min-h-[700px] ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Content */}
                  <div className={`flex flex-col justify-center p-6 md:p-10 lg:p-16 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-normal text-cc-dark mb-1 md:mb-2">
                      {useCase.title}
                    </h3>
                    <p className="font-serif text-base md:text-lg lg:text-xl font-normal italic text-cc-grey mb-4 md:mb-6">
                      {useCase.subtitle}
                    </p>
                    <p className="text-sm md:text-base font-light leading-relaxed text-cc-dark max-w-[420px]">
                      {useCase.description}
                    </p>
                  </div>

                  {/* Visual */}
                  <div className={`dot-pattern flex items-center justify-center p-4 md:p-12 lg:p-16 h-[280px] md:h-auto ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    {useCase.image ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={useCase.image}
                          alt={useCase.title}
                          fill
                          className="object-contain rounded-[12px] md:rounded-[20px]"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-[#e8e4e0] rounded-[12px] md:rounded-[20px] flex items-center justify-center">
                        <span className="text-base md:text-lg font-light text-cc-grey">Image placeholder</span>
                      </div>
                    )}
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
