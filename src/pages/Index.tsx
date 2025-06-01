
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Process />
      <Benefits />
      <FAQ />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
