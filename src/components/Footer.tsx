
import { Phone, Mail, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const Footer = () => {
  const [showAllAreas, setShowAllAreas] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceAreas = [
    'Tampa', 'St. Petersburg', 'Clearwater', 'New Port Richey',
    'Spring Hill', 'Brooksville', 'Plant City', 'Safety Harbor',
    'Dunedin', 'Tarpon Springs', 'Holiday', 'Wesley Chapel'
  ];

  const visibleAreas = showAllAreas ? serviceAreas : serviceAreas.slice(0, 6);

  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3">SellMyHouseNow.com</h3>
              <div className="w-12 h-1 bg-brand-purple rounded-full"></div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 text-base">
              Helping families navigate inherited property sales with compassion, transparency, and decades of local expertise in Tampa Bay & West Florida.
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                <Phone className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                <Mail className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                <MapPin className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Contact Information</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-semibold mb-2 text-lg">Phone</h5>
                <a href="tel:+1-813-555-0199" className="text-gray-300 hover:text-brand-purple transition-colors text-base">
                  (813) 555-0199
                </a>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-lg">Email</h5>
                <a href="mailto:info@sellmyhousenow.com" className="text-gray-300 hover:text-brand-purple transition-colors text-base">
                  info@sellmyhousenow.com
                </a>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-lg">Service Area</h5>
                <p className="text-gray-300 text-base">Tampa Bay & West Florida</p>
                <p className="text-sm text-gray-400 mt-1">Available 7 days a week</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Quick Links</h4>
            <div className="space-y-4">
              <button 
                onClick={() => scrollToSection('process')} 
                className="block text-gray-300 hover:text-brand-purple transition-colors text-left text-base"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('benefits')} 
                className="block text-gray-300 hover:text-brand-purple transition-colors text-left text-base"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="block text-gray-300 hover:text-brand-purple transition-colors text-left text-base"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block text-gray-300 hover:text-brand-purple transition-colors text-left text-base"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Service Areas</h4>
            <div className="grid grid-cols-2 gap-3">
              {visibleAreas.map((area, index) => (
                <span key={index} className="px-3 py-2 rounded-lg bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors text-sm text-center">
                  {area}
                </span>
              ))}
            </div>
            <button 
              onClick={() => setShowAllAreas(!showAllAreas)}
              className="mt-6 flex items-center space-x-2 text-brand-purple hover:text-gray-300 transition-colors text-sm font-medium"
            >
              <span>{showAllAreas ? 'Show Less' : 'View All Areas'}</span>
              {showAllAreas ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            <p className="text-xs text-gray-400 mt-6">
              Hillsborough, Pinellas, Pasco, Hernando Counties
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-10 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 mb-3 text-base">
                © 2024 SellMyHouseNow.com. All rights reserved.
              </p>
              <p className="text-sm text-gray-400">
                Licensed real estate professionals serving Tampa Bay & West Florida.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400 mb-2">
                Specializing in inherited property sales
              </p>
              <p className="text-sm text-gray-400">
                Probate assistance & family property transitions
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
