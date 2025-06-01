
import { Heart, DollarSign, Home, Clock } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Experience with Inherited Properties",
      description: "We understand the emotional and legal complexities of inherited property. Our team guides you through every step with empathy and expertise.",
      color: "bg-gradient-to-br from-[#5865F2] to-[#7B68EE]"
    },
    {
      icon: DollarSign,
      title: "Transparent, Fair Offers",
      description: "No lowball offers or hidden fees. We provide honest, market-based valuations and explain exactly how we determine our offer price.",
      color: "bg-gradient-to-br from-[#7B68EE] to-[#F4B5A0]"
    },
    {
      icon: Home,
      title: "Sell As-Is From Anywhere",
      description: "Don't worry about repairs, cleaning, or staging. We buy properties in any condition, and you don't need to be local to complete the sale.",
      color: "bg-gradient-to-br from-[#F4B5A0] to-[#E8DCC0]"
    },
    {
      icon: Clock,
      title: "Decades of Proven Results",
      description: "With over 20 years of experience in Tampa Bay and West Florida, we've helped hundreds of families successfully sell inherited properties.",
      color: "bg-gradient-to-br from-[#E8DCC0] to-[#5865F2]"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-[#E8DCC0]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            Why Choose SellMyHouseNow.com?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in helping families navigate the complexities of selling inherited property 
            with compassion, transparency, and decades of local expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100 h-full">
                <div className="flex items-start space-x-4">
                  <div className={`${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#2C3E50] mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Serving Tampa Bay & West Florida</h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Our local expertise covers Hillsborough, Pinellas, Pasco, Hernando, and surrounding counties. 
              We know the local market conditions and can provide accurate valuations for your inherited property.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {['Tampa', 'St. Petersburg', 'Clearwater', 'New Port Richey', 'Spring Hill', 'Brooksville', 'Plant City', 'Safety Harbor'].map((city) => (
                <span key={city} className="bg-[#5865F2] text-white px-4 py-2 rounded-full font-medium">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
