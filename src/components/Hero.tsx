
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-white via-brand-purple/25 to-brand-blue/30">
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating circle */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-purple/25 to-brand-blue/20 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Medium floating shapes */}
        <div className="absolute bottom-32 left-16 w-64 h-64 bg-gradient-to-tr from-brand-blue/30 to-brand-blue-light/25 rounded-full blur-2xl animate-bounce" style={{animationDuration: '6s'}}></div>
        
        {/* Small accent shapes */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-brand-purple/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-brand-blue/25 rounded-full blur-2xl animate-bounce" style={{animationDuration: '8s', animationDelay: '1s'}}></div>
        
        {/* Subtle geometric patterns */}
        <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-brand-purple/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-2 border-brand-blue/25 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] leading-tight drop-shadow-sm">
                Sell Your Inherited Property in 
                <span className="text-brand-purple block mt-2 drop-shadow-sm">Tampa Bay & West Florida</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-[#2C3E50] opacity-80 leading-relaxed drop-shadow-sm">
                No repairs, no cleaning, no hassle. We understand the challenges of inherited property and make selling simple and stress-free.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-brand-purple hover:bg-brand-blue hover:text-[#2C3E50] text-white px-10 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <Phone className="w-5 h-5 mr-3" />
                Get Your Free Offer
              </Button>
              <Button 
                onClick={scrollToProcess}
                variant="outline"
                size="lg"
                className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-10 py-6 text-lg font-semibold transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl"
              >
                Learn More
                <ArrowDown className="w-5 h-5 ml-3" />
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-[#2C3E50]">
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                <div className="w-3 h-3 bg-brand-purple rounded-full mr-3"></div>
                <span className="text-lg font-medium">No Hidden Fees</span>
              </div>
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                <div className="w-3 h-3 bg-brand-purple rounded-full mr-3"></div>
                <span className="text-lg font-medium">Sell As-Is</span>
              </div>
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                <div className="w-3 h-3 bg-brand-purple rounded-full mr-3"></div>
                <span className="text-lg font-medium">Fast Closing</span>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative animate-scale-in lg:pl-8">
            <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
              <img 
                src="/lovable-uploads/07fce53f-5958-4d0f-9385-f596c136cbf5.png" 
                alt="Inherited property consultation - Tampa Bay family selling inherited house with professional guidance"
                className="w-full h-auto rounded-2xl shadow-lg"
                loading="eager"
              />
            </div>
            {/* Soft glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-3xl blur-2xl transform scale-110"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#2C3E50]/70 rounded-full flex justify-center bg-white/50 backdrop-blur-sm shadow-lg">
          <div className="w-1 h-3 bg-[#2C3E50]/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
