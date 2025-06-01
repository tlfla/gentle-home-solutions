
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E8DCC0] via-[#F4B5A0] to-[#7B68EE] overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#5865F2] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-[#7B68EE] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] leading-tight">
                Sell Your Inherited Property in 
                <span className="text-[#5865F2] block">Tampa Bay & West Florida</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#2C3E50] opacity-80 max-w-2xl">
                No repairs, no cleaning, no hassle. We understand the challenges of inherited property and make selling simple and stress-free.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-[#5865F2] hover:bg-[#7B68EE] text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Your Free Offer
              </Button>
              <Button 
                onClick={scrollToProcess}
                variant="outline"
                size="lg"
                className="border-2 border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Learn More
                <ArrowDown className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 text-[#2C3E50]">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#5865F2] rounded-full mr-2"></div>
                <span className="text-sm font-medium">No Hidden Fees</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#5865F2] rounded-full mr-2"></div>
                <span className="text-sm font-medium">Sell As-Is</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#5865F2] rounded-full mr-2"></div>
                <span className="text-sm font-medium">Fast Closing</span>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/07fce53f-5958-4d0f-9385-f596c136cbf5.png" 
                alt="Person contemplating inherited house - representing the emotional journey of inheriting property"
                className="w-full h-auto max-w-lg mx-auto lg:max-w-full rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements around image */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#5865F2] rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#F4B5A0] rounded-full opacity-60 animate-pulse delay-300"></div>
            <div className="absolute top-1/2 -right-6 w-4 h-4 bg-white rounded-full opacity-80 animate-pulse delay-700"></div>
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
