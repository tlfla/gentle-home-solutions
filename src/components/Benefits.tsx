
import { Heart, DollarSign, Home, Clock } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Experience with Inherited Properties",
      description: "We understand the emotional and legal complexities of inherited property. Our team guides you through every step with empathy and expertise.",
      iconBg: "bg-[#5865F2]",
      borderColor: "border-[#5865F2]/20",
      hoverBorder: "hover:border-[#5865F2]/40"
    },
    {
      icon: DollarSign,
      title: "Transparent, Fair Offers",
      description: "No lowball offers or hidden fees. We provide honest, market-based valuations and explain exactly how we determine our offer price.",
      iconBg: "bg-[#F4B5A0]",
      borderColor: "border-[#F4B5A0]/30",
      hoverBorder: "hover:border-[#F4B5A0]/50"
    },
    {
      icon: Home,
      title: "Sell As-Is From Anywhere",
      description: "Don't worry about repairs, cleaning, or staging. We buy properties in any condition, and you don't need to be local to complete the sale.",
      iconBg: "bg-[#E8DCC0]",
      borderColor: "border-[#E8DCC0]/40",
      hoverBorder: "hover:border-[#E8DCC0]/60"
    },
    {
      icon: Clock,
      title: "Decades of Proven Results",
      description: "With over 20 years of experience in Tampa Bay and West Florida, we've helped hundreds of families successfully sell inherited properties.",
      iconBg: "bg-[#5865F2]",
      borderColor: "border-[#5865F2]/20",
      hoverBorder: "hover:border-[#5865F2]/40"
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-br from-[#E8DCC0]/10 to-[#F4B5A0]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6">
            Why Choose SellMyHouseNow.com?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in helping families navigate the complexities of selling inherited property 
            with compassion, transparency, and decades of local expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className={`bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02] border-2 ${benefit.borderColor} ${benefit.hoverBorder} h-full`}>
                <div className="flex items-start space-x-6">
                  <div className={`${benefit.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#2C3E50] mb-4 leading-tight">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{benefit.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-3xl p-10 shadow-xl border-2 border-[#5865F2]/10 hover:border-[#5865F2]/20 transition-colors duration-300">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#2C3E50] mb-6">Serving Tampa Bay & West Florida</h3>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Our local expertise covers Hillsborough, Pinellas, Pasco, Hernando, and surrounding counties. 
              We know the local market conditions and can provide accurate valuations for your inherited property.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {['Tampa', 'St. Petersburg', 'Clearwater', 'New Port Richey', 'Spring Hill', 'Brooksville', 'Plant City', 'Safety Harbor'].map((city, idx) => (
                <span 
                  key={city} 
                  className={`px-5 py-3 rounded-full font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 ${
                    idx % 3 === 0 ? 'bg-[#5865F2] hover:bg-[#7B68EE]' :
                    idx % 3 === 1 ? 'bg-[#F4B5A0] hover:bg-[#F0A085]' :
                    'bg-[#E8DCC0] hover:bg-[#E0D4B8] text-[#2C3E50]'
                  }`}
                >
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
