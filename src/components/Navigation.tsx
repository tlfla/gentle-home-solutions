
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[rgb(250,230,220)]/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-[#2C3E50]">SellMyHouseNow.com</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('process')} className="text-[#2C3E50] hover:text-[#5865F2] transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-[#2C3E50] hover:text-[#5865F2] transition-colors">
                Why Choose Us
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-[#2C3E50] hover:text-[#5865F2] transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[#2C3E50] hover:text-[#5865F2] transition-colors">
                Contact
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1-813-555-0199" className="flex items-center text-[#5865F2] hover:text-[#7B68EE] transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              (813) 555-0199
            </a>
            <Button onClick={() => scrollToSection('contact')} className="bg-[#5865F2] hover:bg-[#7B68EE]">
              Get Your Offer
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#2C3E50]">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[rgb(250,230,220)] border-t">
              <button onClick={() => scrollToSection('process')} className="block px-3 py-2 text-[#2C3E50] hover:text-[#5865F2]">
                How It Works
              </button>
              <button onClick={() => scrollToSection('benefits')} className="block px-3 py-2 text-[#2C3E50] hover:text-[#5865F2]">
                Why Choose Us
              </button>
              <button onClick={() => scrollToSection('faq')} className="block px-3 py-2 text-[#2C3E50] hover:text-[#5865F2]">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-[#2C3E50] hover:text-[#5865F2]">
                Contact
              </button>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <a href="tel:+1-813-555-0199" className="flex items-center px-3 py-2 text-[#5865F2]">
                  <Phone className="w-4 h-4 mr-2" />
                  (813) 555-0199
                </a>
                <Button onClick={() => scrollToSection('contact')} className="mx-3 mt-2 bg-[#5865F2] hover:bg-[#7B68EE] w-full">
                  Get Your Offer
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
