
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How does the probate process affect selling my inherited property?",
      answer: "We understand probate can be complex. In most cases, we can work with properties still in probate or help you understand what steps need completion before sale. Our team has experience with probate courts in Tampa Bay and can guide you through the process or recommend qualified probate attorneys if needed."
    },
    {
      question: "What if multiple family members inherited the property together?",
      answer: "This is very common with inherited properties. We can work with all heirs and help facilitate the sale process. All inheritors will need to agree to the sale and sign the necessary documents. We've successfully helped many families navigate these situations with clear communication and fair distribution of proceeds."
    },
    {
      question: "Can I sell if I live out of state and inherited a Florida property?",
      answer: "Absolutely! Many of our clients live across the country. We handle everything remotely through secure digital processes, overnight shipping for documents, and can coordinate the entire closing without you needing to travel. We make it simple to sell your inherited Florida property from anywhere."
    },
    {
      question: "Are there any costs or fees I need to pay upfront?",
      answer: "No. There are zero upfront costs or fees when you work with us. We cover all closing costs, and you don't pay any commissions or hidden fees. The offer we present is the amount you receive at closing, minus any existing liens or taxes owed on the property."
    },
    {
      question: "How quickly can we close on the sale?",
      answer: "We can typically close in 7-14 days once all paperwork is complete. If you need more time to sort through personal belongings or handle probate matters, we're flexible with timing. We work on your schedule and can close as quickly or slowly as you need."
    },
    {
      question: "What condition does the inherited property need to be in?",
      answer: "Any condition! We buy properties as-is, whether they need major repairs, have been vacant for years, or are filled with personal belongings. You don't need to clean, repair, or renovate anything. We handle all of that after purchase."
    },
    {
      question: "How do you determine the offer price for inherited properties?",
      answer: "We use current market data, recent comparable sales, and factor in the property's condition to provide a fair offer. We'll explain our valuation process transparently and provide a detailed breakdown of how we arrived at our offer. Our goal is to offer fair market value for a quick, hassle-free sale."
    },
    {
      question: "What makes you different from real estate agents or other buyers?",
      answer: "Unlike traditional sales, there are no commissions, no repairs needed, no showings, and no waiting for buyer financing to fall through. We specialize specifically in inherited properties and understand the unique emotional and logistical challenges families face. Plus, we're local to Tampa Bay with decades of experience in this market."
    }
  ];

  const getItemStyling = (index: number) => {
    const isEven = index % 2 === 0;
    if (isEven) {
      return {
        background: "bg-brand-purple/12",
        border: "border-l-4 border-brand-purple",
        hoverText: "hover:text-brand-purple"
      };
    } else {
      return {
        background: "bg-brand-blue/15",
        border: "border-l-4 border-brand-blue",
        hoverText: "hover:text-brand-blue"
      };
    }
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-brand-cream/30 to-brand-blue/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-playfair text-shadow-light text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We understand you have questions about selling inherited property. 
            Here are answers to the most common concerns we hear from families.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => {
            const styling = getItemStyling(index);
            return (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`rounded-2xl px-8 ${styling.border} border-r border-t border-b border-gray-200 hover:shadow-lg transition-all duration-200 ${styling.background}`}
              >
                <AccordionTrigger className={`text-left text-[#2C3E50] font-bold ${styling.hoverText} transition-colors py-8 text-lg`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-8 leading-relaxed text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-brand-purple/20">
            <p className="text-gray-600 mb-4 text-lg">Have a question not answered here?</p>
            <a 
              href="tel:+1-813-555-0199" 
              className="inline-flex items-center text-brand-purple hover:text-brand-blue font-bold transition-colors text-lg"
            >
              Call us at (813) 555-0199 and we'll answer any questions you have.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
