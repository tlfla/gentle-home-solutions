
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Desktop Left Column / Mobile Stacked Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 animate-fade-in">
            {/* 1. Headline text */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="font-playfair text-shadow-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2C3E50] leading-tight text-center md:text-left">
                Sell Your Inherited Property in 
                <span className="text-brand-purple block mt-1 sm:mt-2">Tampa Bay & West Florida</span>
              </h1>
              {/* 2. Subtext */}
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#2C3E50] opacity-80 leading-relaxed drop-shadow-sm text-center md:text-left">
                No repairs, no cleaning, no hassle. We understand the challenges of inherited property and make selling simple and stress-free.
              </h2>
            </div>

            {/* 3. Hero Image - Mobile Only */}
            <div className="relative animate-scale-in lg:hidden">
              <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-white/50 max-w-[80%] mx-auto">
                <img 
                  src="/lovable-uploads/07fce53f-5958-4d0f-9385-f596c136cbf5.png" 
                  alt="Inherited property consultation - Tampa Bay family selling inherited house with professional guidance"
                  className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg"
                  loading="eager"
                />
              </div>
              {/* Soft glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-2xl sm:rounded-3xl blur-2xl transform scale-110"></div>
            </div>

            {/* 4. CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-brand-purple hover:bg-brand-blue hover:text-[#2C3E50] text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                Get Your Free Offer
              </Button>
              <Button 
                onClick={scrollToProcess}
                variant="outline"
                size="lg"
                className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-base sm:text-lg font-semibold transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl"
              >
                Learn More
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
              </Button>
            </div>

            {/* 5. Feature badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-8 text-[#2C3E50]">
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 shadow-md">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-brand-purple rounded-full mr-2 sm:mr-3"></div>
                <span className="text-sm sm:text-base lg:text-lg font-medium">No Hidden Fees</span>
              </div>
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 shadow-md">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-brand-purple rounded-full mr-2 sm:mr-3"></div>
                <span className="text-sm sm:text-base lg:text-lg font-medium">Sell As-Is</span>
              </div>
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 shadow-md">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-brand-purple rounded-full mr-2 sm:mr-3"></div>
                <span className="text-sm sm:text-base lg:text-lg font-medium">Fast Closing</span>
              </div>
            </div>
          </div>

          {/* Desktop Right Column - Image (Hidden on Mobile) */}
          <div className="relative animate-scale-in lg:pl-8 hidden lg:block">
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

      {/* Scroll Indicator - Hidden on Mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#2C3E50]/70 rounded-full flex justify-center bg-white/50 backdrop-blur-sm shadow-lg">
          <div className="w-1 h-2 sm:h-3 bg-[#2C3E50]/70 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
