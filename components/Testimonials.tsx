"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote: "We used to spend hours manually searching for relevant conversations. CiaoCiao brings them straight to us, and the SocialTemp™ Score tells us exactly when to engage. Our conversion rates have doubled.",
    name: "Sarah Martinez",
    role: "Marketing Manager, TechFlow",
  },
  {
    quote: "I was tired of aggressive automation tools that felt spammy. CiaoCiao is different—it's about building real connections with real people. Our LinkedIn engagement has never been higher, and lead quality has improved dramatically.",
    name: "David Chen",
    role: "Founder, GrowthLab",
  },
  {
    quote: "CiaoCiao pays for itself in the first week. The time we save on social listening alone is worth the investment, but the quality of relationships we're building is what really matters. This is the future of B2B sales.",
    name: "Emily Rodriguez",
    role: "VP of Sales, CloudScale",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const numOriginal = testimonials.length;

  const extendedTestimonials = [
    testimonials[numOriginal - 1],
    ...testimonials,
    testimonials[0],
  ];

  const scrollToCard = useCallback((index: number, smooth = true) => {
    if (!carouselRef.current) return;
    const cards = carouselRef.current.querySelectorAll("[data-card]");
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: smooth ? "smooth" : "instant",
        inline: "center",
        block: "nearest",
      });
    }
    setCurrentIndex(index);
  }, []);

  const checkBounds = useCallback(() => {
    if (currentIndex === 0) {
      setTimeout(() => scrollToCard(numOriginal, false), 350);
    } else if (currentIndex === numOriginal + 1) {
      setTimeout(() => scrollToCard(1, false), 350);
    }
  }, [currentIndex, numOriginal, scrollToCard]);

  const handlePrev = () => {
    scrollToCard(currentIndex - 1);
    setTimeout(checkBounds, 400);
  };

  const handleNext = () => {
    scrollToCard(currentIndex + 1);
    setTimeout(checkBounds, 400);
  };

  useEffect(() => {
    scrollToCard(1, false);
  }, [scrollToCard]);

  const realIndex = ((currentIndex - 1) % numOriginal + numOriginal) % numOriginal;

  return (
    <section className="bg-cc-6 border-t border-black py-[100px] overflow-hidden" id="testimonials">
      <div className="max-w-[1380px] mx-auto px-10">
        <div className="text-center mb-[80px]">
          <span className="badge bg-cc-dark text-white mb-[26px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1L8.5 4.5L12 5L9.5 7.5L10 11L7 9.5L4 11L4.5 7.5L2 5L5.5 4.5L7 1Z" fill="currentColor"/>
            </svg>
            TRUSTED BY MODERN GTM TEAMS
          </span>
          <h2 className="section-title">Helping teams like yours build real relationships</h2>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-10 overflow-x-auto scroll-snap-x-mandatory hide-scrollbar -mx-[calc(50vw-50%)] px-[calc(50vw-50%+40px)]"
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              data-card
              className={`flex flex-col p-10 border border-black w-[calc(100vw-700px)] min-w-[300px] max-w-[600px] shrink-0 snap-center ${
                index === currentIndex ? "bg-cc-highlight" : "bg-white"
              }`}
            >
              <p className="font-serif text-xl font-normal leading-relaxed text-cc-dark mb-10 grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-cc-light shrink-0"></div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-lg font-medium text-cc-dark">{testimonial.name}</p>
                  <p className="text-sm font-light text-cc-grey">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-[26px] mt-10">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-11 h-11 border border-black rounded-full bg-white text-cc-dark cursor-pointer hover:bg-cc-light transition-colors"
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index + 1)}
                className={`w-2.5 h-2.5 rounded-full border border-cc-dark p-0 cursor-pointer transition-colors ${
                  index === realIndex ? "bg-cc-dark" : "bg-transparent"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-11 h-11 border border-black rounded-full bg-white text-cc-dark cursor-pointer hover:bg-cc-light transition-colors"
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
