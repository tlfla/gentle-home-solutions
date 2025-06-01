
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Tampa, FL",
      text: "After my father passed, dealing with his house felt overwhelming. SellMyHouseNow.com made everything so simple. They were compassionate, fair, and handled all the paperwork. I got my check in 10 days without any stress.",
      rating: 5
    },
    {
      name: "David Chen",
      location: "Seattle, WA (Property in Clearwater)",
      text: "I inherited my grandmother's house in Clearwater but live in Seattle. I thought selling would be impossible, but they handled everything remotely. Professional, transparent, and exactly what they promised. Highly recommend!",
      rating: 5
    },
    {
      name: "Jennifer Williams",
      location: "New Port Richey, FL",
      text: "Three siblings inheriting one house - we thought it would be a nightmare. The team helped us navigate everything smoothly, and we all felt the offer was very fair. They really understand family dynamics and inherited property challenges.",
      rating: 5
    },
    {
      name: "Robert Thompson",
      location: "St. Petersburg, FL",
      text: "My mother's house needed major repairs after sitting vacant for two years. I couldn't afford to fix it up. They bought it as-is for a fair price and closed in a week. Exactly what I needed during a difficult time.",
      rating: 5
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-[#E8DCC0]/20 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            What Families Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real families who trusted us with their inherited property sales. 
            We're proud to help during difficult times with compassion and professionalism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <blockquote className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5865F2] to-[#7B68EE] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[#2C3E50]">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <StarRating rating={5} />
            </div>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">4.9/5 Average Rating</h3>
            <p className="text-gray-600">
              Based on 200+ inherited property sales in Tampa Bay & West Florida over the past 5 years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
