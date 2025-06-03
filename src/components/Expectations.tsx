
import { CheckCircle, Clock, Calendar, Home, Shield } from "lucide-react";

export const Expectations = () => {
  const expectations = [
    {
      icon: CheckCircle,
      title: "Free consultation with no obligations"
    },
    {
      icon: Clock,
      title: "Fair market offer within 24 hours"
    },
    {
      icon: Calendar,
      title: "Close in as little as 7 days"
    },
    {
      icon: Home,
      title: "No repairs or cleaning required"
    },
    {
      icon: Shield,
      title: "All closing costs covered by us"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[rgb(247,220,208)] to-brand-purple/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6">
            What You Can Expect When Selling Your Inherited Property
          </h2>
          <h3 className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our streamlined process makes selling your inherited property in Tampa Bay simple and stress-free.
          </h3>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-2 border-brand-purple/20 hover:border-brand-purple/30 transition-all duration-300">
          <div className="space-y-8">
            {expectations.map((expectation, index) => (
              <div key={index} className="flex items-center space-x-6 group">
                <div className="bg-gradient-to-br from-brand-purple to-brand-blue w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <expectation.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-[#2C3E50] group-hover:text-brand-purple transition-colors duration-300">
                    {expectation.title}
                  </h4>
                </div>
                <div className="w-3 h-3 bg-brand-purple rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
