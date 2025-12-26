import React from "react";
import { Award, Heart, Sparkles, Users } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Award,
      title: "Craftsmanship",
      description: "Every piece is handcrafted by master artisans with decades of experience",
    },
    {
      icon: Heart,
      title: "Quality",
      description: "We use only the finest materials and gemstones in our creations",
    },
    {
      icon: Sparkles,
      title: "Elegance",
      description: "Timeless designs that celebrate your unique style and personality",
    },
    {
      icon: Users,
      title: "Heritage",
      description: "A legacy of excellence passed down through generations",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9EA]">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] bg-gradient-to-br from-[#0F231C] to-[#1C3A2C] flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Cormorant_Garamond'] text-[#CBA135] mb-4 sm:mb-6">
            About G-Crown
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#EFDFB7] leading-relaxed">
            Crafting timeless elegance since 2024. We bring together traditional artistry and contemporary design to create jewelry that tells your unique story.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Cormorant_Garamond'] text-[#1C3A2C] mb-4 sm:mb-6">
                Our Story
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#1C3A2C] mb-4 leading-relaxed">
                G-Crown Jewellers by Graphura was born from a vision to create jewelry that transcends trends and becomes a cherished part of your legacy. Every piece we create is a testament to our commitment to excellence, combining traditional craftsmanship with modern sensibilities.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-[#1C3A2C] leading-relaxed">
                We believe that jewelry is more than an accessory—it's a reflection of who you are, a celebration of your milestones, and a treasure to be passed down through generations.
              </p>
            </div>
            <div className="h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-br from-[#1C3A2C] to-[#0F231C] rounded-xl sm:rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop"
                alt="Our Story"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F8F5F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Cormorant_Garamond'] text-center text-[#1C3A2C] mb-8 sm:mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-[#1C3A2C] rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#CBA135]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-['Cormorant_Garamond'] text-[#1C3A2C] mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-[#1C3A2C] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Cormorant_Garamond'] text-[#1C3A2C] mb-6 sm:mb-8">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#1C3A2C] leading-relaxed mb-6 sm:mb-8">
            To create jewelry that celebrates your individuality, honors your milestones, and becomes a cherished part of your story. We are committed to excellence in every detail, from the selection of materials to the final polish.
          </p>
          <div className="h-[200px] sm:h-[300px] md:h-[400px] bg-gradient-to-br from-[#1C3A2C] to-[#0F231C] rounded-xl sm:rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&auto=format&fit=crop"
              alt="Our Mission"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
