"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/retroui/Badge";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";

const testimonials = [
  {
    quote: "We used to spend hours manually searching for relevant conversations. CiaoCiao brings them straight to us, and the SocialTemp Score tells us exactly when to engage. Our conversion rates have doubled.",
    name: "Sarah Martinez",
    role: "Marketing Manager, TechFlow",
    image: "/img/testimonials/sarah-martinez.jpg",
  },
  {
    quote: "I was tired of aggressive automation tools that felt spammy. CiaoCiao is different—it's about building real connections with real people. Our LinkedIn engagement has never been higher, and lead quality has improved dramatically.",
    name: "Daniel Peterson",
    role: "Founder, GrowthLab",
    image: "/img/testimonials/daniel-peterson.jpg",
  },
  {
    quote: "CiaoCiao pays for itself in the first week. The time we save on social listening alone is worth the investment, but the quality of relationships we're building is what really matters. This is the future of B2B sales.",
    name: "Emily Rodriguez",
    role: "VP of Sales, CloudScale",
    image: "/img/testimonials/emily-rodriguez.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const numOriginal = testimonials.length;

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Clone first and last items for infinite scroll
  const extendedTestimonials = [
    testimonials[numOriginal - 1],
    ...testimonials,
    testimonials[0],
  ];

  // Responsive card width: 85vw on mobile, 53vw on desktop
  const cardWidth = isMobile ? 85 : 53; // vw
  const gap = isMobile ? 16 : 40; // px
  const sideOffset = (100 - cardWidth) / 2;

  const getTransform = useCallback((index: number) => {
    // Center the card: move left by (index * cardWidth) + (index * gap), then offset to center
    return `translateX(calc(-${index * cardWidth}vw - ${index * gap}px + ${sideOffset}vw))`;
  }, [cardWidth, gap, sideOffset]);

  const goToSlide = useCallback((index: number, animate = true) => {
    setIsTransitioning(animate);
    setCurrentIndex(index);
  }, []);

  const handlePrev = () => {
    if (isTransitioning) return; // Prevent rapid clicks
    goToSlide(currentIndex - 1, true);
  };

  const handleNext = () => {
    if (isTransitioning) return; // Prevent rapid clicks
    goToSlide(currentIndex + 1, true);
  };

  // Handle transition end and infinite scroll wrap-around
  useEffect(() => {
    if (!isTransitioning) return;

    const timeout = setTimeout(() => {
      if (currentIndex === 0) {
        // At clone before first, jump to real last
        setIsTransitioning(false);
        setCurrentIndex(numOriginal);
      } else if (currentIndex === numOriginal + 1) {
        // At clone after last, jump to real first
        setIsTransitioning(false);
        setCurrentIndex(1);
      } else {
        // Normal transition complete
        setIsTransitioning(false);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [currentIndex, numOriginal, isTransitioning]);

  // Calculate real index for dots (0, 1, 2)
  const realIndex = ((currentIndex - 1) % numOriginal + numOriginal) % numOriginal;

  return (
    <section className="bg-cc-6 border-t-2 border-border py-12 md:py-[100px] overflow-hidden" id="testimonials">
      <div className="max-w-[1380px] mx-auto px-5 md:px-10">
        <div className="text-center mb-10 md:mb-[80px]">
          <Badge variant="solid" className="mb-5 md:mb-[26px]">
            <Star size={14} fill="currentColor" />
            TRUSTED BY MODERN GTM TEAMS
          </Badge>
          <Text as="h2" className="section-title">Helping teams like yours build real relationships</Text>
        </div>
      </div>

      {/* Carousel viewport - full width, independent of container padding */}
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            gap: `${gap}px`,
            transform: getTransform(currentIndex),
            transition: isTransitioning ? "transform 0.4s ease-out" : "none",
          }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col p-6 md:p-10 border-2 border-border shrink-0 transition-colors duration-300 ${
                index === currentIndex ? "bg-cc-highlight shadow-lg" : "bg-background shadow-md"
              }`}
              style={{ width: `${cardWidth}vw` }}
            >
              <p className="font-head text-base md:text-xl font-normal leading-relaxed text-foreground mb-6 md:mb-10 grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 relative overflow-hidden border-2 border-border">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-base md:text-lg font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-xs md:text-sm font-normal text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1380px] mx-auto px-5 md:px-10">
        <div className="flex items-center justify-center gap-4 md:gap-[26px] mt-8 md:mt-10">
          <Button
            onClick={handlePrev}
            variant="outline"
            size="icon"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </Button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index + 1, true)}
                className={`w-2.5 h-2.5 border-2 border-border p-0 cursor-pointer transition-colors ${
                  index === realIndex ? "bg-foreground" : "bg-transparent"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <Button
            onClick={handleNext}
            variant="outline"
            size="icon"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </Button>
        </div>
      </div>
    </section>
  );
}
