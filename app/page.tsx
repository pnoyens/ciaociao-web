import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Testimonials from "@/components/Testimonials";
import SocialTemp from "@/components/SocialTemp";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Insights />
        <UseCases />
        <HowItWorks />
        <Testimonials />
        <Features />
        <SocialTemp />
        <Pricing />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
