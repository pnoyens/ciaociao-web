export default function HowItWorks() {
  const steps = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3"/>
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
          <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7"/>
          <circle cx="16" cy="16" r="2" fill="currentColor"/>
          <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      color: "bg-cc-3",
      title: "Intelligent discovery",
      description: "Our AI-powered engine continuously monitors LinkedIn, identifying discussions, posts, and comments that align with your brand. We filter out the noise and deliver a curated feed of high-value opportunities where you can make an impact."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M16 24V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 12L20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 22C10 22 12 20 16 20C20 20 22 22 22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      color: "bg-cc-2",
      title: "Context analysis",
      description: "Not every conversation is worth joining. Our proprietary SocialTemp™ Score analyzes context, sentiment, and participant engagement to tell you how receptive a discussion is. We help you understand the dynamics before you engage."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="10" r="3" fill="currentColor"/>
          <circle cx="8" cy="22" r="3" fill="currentColor"/>
          <circle cx="24" cy="22" r="3" fill="currentColor"/>
          <line x1="16" y1="13" x2="10" y2="19" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="16" y1="13" x2="22" y2="19" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="11" y1="22" x2="21" y2="22" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      color: "bg-cc-4",
      title: "Strategic engagement",
      description: "With our insights, you can confidently join conversations at the perfect moment. Share valuable perspectives, contribute meaningfully, and build authentic relationships. We handle the discovery—you handle the human connection."
    }
  ];

  return (
    <section className="bg-cc-6 border-t border-black" id="how-it-works">
      <div className="max-w-[1380px] mx-auto py-[100px] px-10 pb-[120px]">
        <div className="text-center mb-[80px]">
          <span className="badge bg-cc-dark text-white mb-[26px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="currentColor"/>
            </svg>
            HOW IT WORKS
          </span>
          <h2 className="section-title">3 steps to building your pack</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index}>
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-[26px] text-cc-dark ${step.color}`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-cc-dark mb-3">{step.title}</h3>
              <p className="body-text">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
