"use client";

import { Accordion } from "@/components/retroui/Accordion";
import { Text } from "@/components/retroui/Text";

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

export default function FAQ() {
  return (
    <section className="bg-background border-t-2 border-border py-12 md:py-[100px]" id="faq">
      <div className="max-w-[1040px] mx-auto px-5 md:px-10">
        <div className="text-center mb-10 md:mb-[80px]">
          <Text as="h2" className="section-title">Frequently asked questions</Text>
        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <Accordion.Item key={index} value={`item-${index}`}>
              <Accordion.Header className="text-left font-head text-lg md:text-xl font-normal">
                {faq.question}
              </Accordion.Header>
              <Accordion.Content className="body-text">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
