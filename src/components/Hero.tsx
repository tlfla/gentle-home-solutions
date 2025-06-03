
import { Button } from "@/components/ui/button";
import { Phone, ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProcess = () => {
    const element = document.getElementById('process');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] leading-tight">
                Sell Your Inherited Property in 
                <span className="text-[#5865F2] block mt-2">Tampa Bay & West Florida</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#2C3E50] opacity-80 leading-relaxed">
                No repairs, no cleaning, no hassle. We understand the challenges of inherited property and make selling simple and stress-free.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-[#5865F2] hover:bg-[#7B68EE] text-white px-10 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5 mr-3" />
                Get Your Free Offer
              </Button>
              <Button 
                onClick={scrollToProcess}
                variant="outline"
                size="lg"
                className="border-2 border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2] hover:text-white px-10 py-6 text-lg font-semibold transition-all duration-300"
              >
                Learn More
                <ArrowDown className="w-5 h-5 ml-3" />
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-[#2C3E50]">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#5865F2] rounded-full mr-3"></div>
                <span className="text-lg font-medium">No Hidden Fees</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#5865F2] rounded-full mr-3"></div>
                <span className="text-lg font-medium">Sell As-Is</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#5865F2] rounded-full mr-3"></div>
                <span className="text-lg font-medium">Fast Closing</span>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative animate-scale-in lg:pl-8">
            <div className="relative z-10 bg-gray-50 rounded-3xl p-8 shadow-xl">
              <img 
                src="/lovable-uploads/07fce53f-5958-4d0f-9385-f596c136cbf5.png" 
                alt="Person contemplating inherited house - representing the emotional journey of inheriting property"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#2C3E50] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#2C3E50] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
