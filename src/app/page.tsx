import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Audience } from "@/components/Audience";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Features } from "@/components/Features";
import { Demo } from "@/components/Demo";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <Audience />
        <ProblemSolution />
        <Features />
        <Demo />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
