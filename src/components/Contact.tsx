
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Thank you for your message!",
      description: "We'll contact you within 24 hours to discuss your inherited property.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      property: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[rgb(247,220,208)] to-brand-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            Get Your Free, No-Obligation Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to sell your inherited property? Contact us today for a free consultation. 
            We're here to help make this process as simple and stress-free as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Form - Takes up 2 columns */}
          <div className="lg:col-span-2 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-brand-purple/20">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2C3E50] mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-brand-purple focus:ring-brand-purple"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2C3E50] mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-brand-purple focus:ring-brand-purple"
                    placeholder="(813) 555-0123"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50] mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-brand-purple focus:ring-brand-purple"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="property" className="block text-sm font-medium text-[#2C3E50] mb-2">
                  Property Address
                </label>
                <Input
                  type="text"
                  id="property"
                  name="property"
                  value={formData.property}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-brand-purple focus:ring-brand-purple"
                  placeholder="1234 Main St, Tampa, FL 33601"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2C3E50] mb-2">
                  Tell Us About Your Situation
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="border-gray-300 focus:border-brand-purple focus:ring-brand-purple"
                  placeholder="Tell us about your inherited property, timeline, or any specific concerns..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-brand-purple hover:bg-brand-blue hover:text-[#2C3E50] text-white py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get My Free Offer
              </Button>
            </form>
          </div>

          {/* Contact Information - Takes up 1 column */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-brand-purple/20">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-purple w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C3E50] mb-1">Call Us</h4>
                    <a href="tel:+1-813-555-0199" className="text-brand-purple hover:text-brand-blue text-lg font-medium transition-colors">
                      (813) 555-0199
                    </a>
                    <p className="text-sm text-gray-600">Available 7 days a week</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-blue w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C3E50] mb-1">Email Us</h4>
                    <a href="mailto:info@sellmyhousenow.com" className="text-brand-purple hover:text-brand-blue font-medium transition-colors">
                      info@sellmyhousenow.com
                    </a>
                    <p className="text-sm text-gray-600">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-coral w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C3E50] mb-1">Service Area</h4>
                    <p className="text-gray-600">Tampa Bay & West Florida</p>
                    <p className="text-sm text-gray-600">Hillsborough, Pinellas, Pasco, Hernando Counties</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-cream w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#2C3E50]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C3E50] mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8am - 7pm</p>
                    <p className="text-gray-600">Saturday - Sunday: 9am - 5pm</p>
                    <p className="text-sm text-gray-600">Emergency calls accepted anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
