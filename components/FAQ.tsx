"use client";

import { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is this another aggressive sales automation tool?",
    answer: "No. CiaoCiao is fundamentally different. We focus on guidance, not automation. We help you find the right conversations and understand the context, but you control when and how to engage. The human element is what makes it work.",
  },
  {
    question: "How do you access LinkedIn data?",
    answer: "We use the official LinkedIn API with OAuth authentication. We never ask for your password, and your account security is our top priority. We also supplement with publicly available data through intelligent search.",
  },
  {
    question: "Is this only for large companies with established brands?",
    answer: "Not at all. CiaoCiao is perfect for building a brand from the ground up. Whether you're a solo founder or a Fortune 500 company, our platform helps you find your voice and your audience.",
  },
  {
    question: "Can I use this for my organization's LinkedIn page?",
    answer: "Yes! In fact, that's exactly what we're designed for. All engagement happens through your official organization page, building brand authority and trust with your audience.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div className="border-b border-black first:border-t">
      <button
        className="flex items-center justify-between gap-4 md:gap-[26px] w-full py-5 md:py-[26px] font-serif text-lg md:text-2xl font-medium text-cc-dark cursor-pointer bg-transparent border-none text-left hover:text-cc-grey transition-colors"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        {question}
        <span className="faq-icon flex items-center justify-center shrink-0 w-6 h-6">
          {isOpen ? (
            <Minus size={20} strokeWidth={1.5} />
          ) : (
            <Plus size={20} strokeWidth={1.5} />
          )}
        </span>
      </button>
      <div className="faq-content" style={{ height: isOpen ? height : 0 }}>
        <div ref={contentRef} className="pb-5 md:pb-[26px] body-text max-w-[800px]">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white border-t border-black py-12 md:py-[100px]" id="faq">
      <div className="max-w-[1040px] mx-auto px-5 md:px-10">
        <div className="text-center mb-10 md:mb-[80px]">
          <h2 className="section-title">Frequently asked questions</h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
