import React from "react";
import { ArrowRight } from "lucide-react";

const Occasion = () => {
  const occasions = [
    {
      id: 1,
      title: "Weddings",
      description: "Elegant bridal sets and wedding jewelry",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop",
      count: "120+ Designs",
    },
    {
      id: 2,
      title: "Festivals",
      description: "Traditional and contemporary festive collections",
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&auto=format&fit=crop",
      count: "85+ Designs",
    },
    {
      id: 3,
      title: "Anniversaries",
      description: "Celebrate milestones with timeless pieces",
      image: "https://images.unsplash.com/photo-1506630448388-4e6c5f5a1e3b?w=800&auto=format&fit=crop",
      count: "60+ Designs",
    },
    {
      id: 4,
      title: "Engagements",
      description: "Stunning rings and sets for your special moment",
      image: "https://images.unsplash.com/photo-1611591437281-8bfd43f0d0a6?w=800&auto=format&fit=crop",
      count: "95+ Designs",
    },
    {
      id: 5,
      title: "Birthdays",
      description: "Perfect gifts to celebrate another year",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop",
      count: "70+ Designs",
    },
    {
      id: 6,
      title: "Corporate Events",
      description: "Sophisticated pieces for professional occasions",
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&auto=format&fit=crop",
      count: "45+ Designs",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9EA]">
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] bg-gradient-to-br from-[#0F231C] to-[#1C3A2C] flex items-center justify-center">
        <div className="text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Cormorant_Garamond'] text-[#CBA135] mb-4">
            Jewelry for Every Occasion
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#EFDFB7] max-w-2xl mx-auto">
            Find the perfect piece for every moment that matters
          </p>
        </div>
      </section>

      {/* Occasions Grid */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {occasions.map((occasion) => (
              <div
                key={occasion.id}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#1C3A2C] hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden">
                  <img
                    src={occasion.image}
                    alt={occasion.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A2C]/95 via-[#1C3A2C]/60 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-[#CBA135] px-3 py-1 rounded-full">
                    <span className="text-xs sm:text-sm font-semibold text-[#0F231C]">
                      {occasion.count}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-['Cormorant_Garamond'] text-white mb-2 sm:mb-3">
                    {occasion.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#EFDFB7] mb-4 sm:mb-6">
                    {occasion.description}
                  </p>
                  <button className="flex items-center gap-2 text-xs sm:text-sm font-semibold font-['Montserrat'] text-[#CBA135] uppercase tracking-wider hover:text-white transition-colors group-hover:translate-x-2 transition-transform duration-300">
                    Explore
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#0F231C] to-[#1C3A2C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Cormorant_Garamond'] text-[#CBA135] mb-4 sm:mb-6">
            Special Occasion Coming Up?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#EFDFB7] mb-6 sm:mb-8">
            Let our experts help you find the perfect piece or create a custom design for your special day
          </p>
          <button className="bg-[#CBA135] text-[#0F231C] px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-[#D4AF37] transition-colors">
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Occasion;
