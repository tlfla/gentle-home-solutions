
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
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

  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">SellMyHouseNow.com</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full"></div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Helping families navigate inherited property sales with compassion, transparency, and decades of local expertise in Tampa Bay & West Florida.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-brand-purple rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center hover:bg-brand-purple transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-brand-coral rounded-full flex items-center justify-center hover:bg-brand-cream hover:text-[#2C3E50] transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-brand-purple">Contact Information</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-1">Phone</h5>
                <a href="tel:+1-813-555-0199" className="text-gray-300 hover:text-brand-purple transition-colors">
                  (813) 555-0199
                </a>
              </div>
              <div>
                <h5 className="font-semibold mb-1">Email</h5>
                <a href="mailto:info@sellmyhousenow.com" className="text-gray-300 hover:text-brand-purple transition-colors">
                  info@sellmyhousenow.com
                </a>
              </div>
              <div>
                <h5 className="font-semibold mb-1">Service Area</h5>
                <p className="text-gray-300">Tampa Bay & West Florida</p>
                <p className="text-sm text-gray-400">Available 7 days a week</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-brand-blue">Quick Links</h4>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('process')} 
                className="block text-gray-300 hover:text-brand-purple transition-colors text-left"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('benefits')} 
                className="block text-gray-300 hover:text-brand-purple transition-colors text-left"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="block text-gray-300 hover:text-brand-purple transition-colors text-left"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block text-gray-300 hover:text-brand-purple transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-brand-coral">Service Areas</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {serviceAreas.map((area, index) => (
                <span key={index} className="text-gray-300 hover:text-brand-purple transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Hillsborough, Pinellas, Pasco, Hernando Counties
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 mb-2">
                © 2024 SellMyHouseNow.com. All rights reserved.
              </p>
              <p className="text-sm text-gray-400">
                Licensed real estate professionals serving Tampa Bay & West Florida.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400 mb-1">
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
