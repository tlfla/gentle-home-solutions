
import { Phone, Search, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Process = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      icon: Phone,
      title: "Reach Out",
      description: "Call us or fill out our form. We'll discuss your inherited property situation with compassion and understanding.",
      color: "bg-[#5865F2]"
    },
    {
      icon: Search,
      title: "Property Review", 
      description: "We'll review your property details and provide a fair, transparent offer based on current market conditions.",
      color: "bg-[#7B68EE]"
    },
    {
      icon: Handshake,
      title: "Finalize Sale",
      description: "Choose your closing date. We handle all paperwork and can close in as little as 7 days - completely hassle-free.",
      color: "bg-[#F4B5A0]"
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-br from-[#5865F2]/3 to-[#E8DCC0]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6">
            Simple 3-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've simplified selling your inherited property into three easy steps. 
            No complicated paperwork, no repairs needed, no stress.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-5 w-10 h-1 bg-gradient-to-r from-[#5865F2] to-[#7B68EE] transform -translate-y-1/2 z-10 rounded-full"></div>
              )}
              
              <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                <div className="text-center">
                  <div className={`${step.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="bg-[#5865F2] text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-6 shadow-md">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-[#5865F2] hover:bg-[#7B68EE] text-white px-10 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Start Your Simple Sale Today
          </Button>
        </div>
      </div>
    </section>
  );
};
