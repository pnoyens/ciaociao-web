"use client";

import { useState, useRef, useEffect } from "react";

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
        className="flex items-center justify-between gap-[26px] w-full py-[26px] font-serif text-2xl font-medium text-cc-dark cursor-pointer bg-transparent border-none text-left hover:text-cc-grey transition-colors"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        {question}
        <span className={`faq-icon flex items-center justify-center shrink-0 w-6 h-6 ${isOpen ? "faq-icon-open" : ""}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="10" y1="4" x2="10" y2="16"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
              className={`transition-all duration-200 ${isOpen ? "opacity-0 scale-y-0" : "opacity-100 scale-y-100"}`}
            />
            <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div className="faq-content" style={{ height: isOpen ? height : 0 }}>
        <div ref={contentRef} className="pb-[26px] body-text max-w-[800px]">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white border-t border-black py-[100px]" id="faq">
      <div className="max-w-[1040px] mx-auto px-10">
        <div className="text-center mb-[80px]">
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
