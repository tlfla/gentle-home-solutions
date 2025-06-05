
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export const Testimonials = () => {
  const [api, setApi] = useState<any>();
  
  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Tampa, FL",
      text: "After my father passed, dealing with his house felt overwhelming. SellMyHouseNow.com made everything so simple. They were compassionate, fair, and handled all the paperwork. I got my check in 10 days without any stress.",
      rating: 5,
      bgColor: "bg-white",
      borderColor: "border-gray-300",
      shadowDepth: "shadow-lg hover:shadow-2xl"
    },
    {
      name: "David Chen",
      location: "Seattle, WA (Property in Clearwater)",
      text: "I inherited my grandmother's house in Clearwater but live in Seattle. I thought selling would be impossible, but they handled everything remotely. Professional, transparent, and exactly what they promised. Highly recommend!",
      rating: 5,
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      shadowDepth: "shadow-xl hover:shadow-2xl"
    },
    {
      name: "Jennifer Williams",
      location: "New Port Richey, FL",
      text: "Three siblings inheriting one house - we thought it would be a nightmare. The team helped us navigate everything smoothly, and we all felt the offer was very fair. They really understand family dynamics and inherited property challenges.",
      rating: 5,
      bgColor: "bg-white",
      borderColor: "border-gray-300",
      shadowDepth: "shadow-lg hover:shadow-2xl"
    },
    {
      name: "Robert Thompson",
      location: "St. Petersburg, FL",
      text: "My mother's house needed major repairs after sitting vacant for two years. I couldn't afford to fix it up. They bought it as-is for a fair price and closed in a week. Exactly what I needed during a difficult time.",
      rating: 5,
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      shadowDepth: "shadow-xl hover:shadow-2xl"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  // Auto-advance carousel
  useEffect(() => {
    if (!api) return;

    const timer = setInterval(() => {
      api.scrollNext();
    }, 6000); // 6 seconds

    return () => clearInterval(timer);
  }, [api]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-shadow-light text-3xl md:text-4xl font-bold text-[#222] mb-6">
            What Families Say About Us
          </h2>
          <p className="text-xl text-[#333] max-w-3xl mx-auto leading-relaxed">
            Real stories from real families who trusted us with their inherited property sales. 
            We're proud to help during difficult times with compassion and professionalism.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel 
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <div className={`${testimonial.bgColor} rounded-3xl p-10 ${testimonial.shadowDepth} transition-all duration-300 border-2 ${testimonial.borderColor} hover:scale-[1.02]`}>
                      <div className="mb-6">
                        <StarRating rating={testimonial.rating} />
                      </div>
                      <blockquote className="text-[#333] mb-8 leading-relaxed italic text-lg font-medium">
                        "{testimonial.text}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 shadow-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-[#222] text-lg">{testimonial.name}</div>
                          <div className="text-gray-500 text-base">{testimonial.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300" />
            <CarouselNext className="hidden md:flex -right-12 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300" />
          </Carousel>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-gray-200 max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <StarRating rating={5} />
            </div>
            <h3 className="text-3xl font-bold text-[#222] mb-4">4.9/5 Average Rating</h3>
            <p className="text-[#333] text-lg leading-relaxed">
              Based on 200+ inherited property sales in Tampa Bay & West Florida over the past 5 years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
