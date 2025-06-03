
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Expectations } from "@/components/Expectations";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Process />
      <Benefits />
      <FAQ />
      <Testimonials />
      <Expectations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
