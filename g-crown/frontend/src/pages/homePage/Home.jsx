import React from "react";

import gCrown from "../../assets/g-crown Image.jpeg";

export default function HomeMain() {
  return (
    <main className="bg-[#0f2d2a]">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${gCrown})` }}
      >
        {/* Dark + blur overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        {/* Edge masking vignette (IMPORTANT) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

        {/* Glass content box */}
        <div className="relative z-10 text-center max-w-2xl px-4 sm:px-6 md:px-8">
          <h1
            className="font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 sm:mb-5 font-bold"
            style={{ color: "#CBA135" }}
          >
            Luxury Designed to <br className="hidden sm:block" /> Celebrate Your Glow
          </h1>
          <p className="text-gray-200 mb-4 sm:mb-6 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg px-2">
            "Step into a world of refined detail and handcrafted brilliance{" "}
            <br className="hidden sm:block" />
            from G-Crown Jewellers"
          </p>
          <button
            className="
            w-full sm:w-auto
            min-w-[200px] sm:min-w-[280px]
            h-12 sm:h-14 md:h-16
            rounded-sm
            px-6 sm:px-7 py-2.5 font-bold text-sm sm:text-base text-[#08221B]
            bg-gradient-to-r
            from-[#B49148]
            via-[#F8E48F]
            to-[#BB9344]
            hover:scale-[1.03]
            transition-all duration-300
            mt-3
          "
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-8 sm:py-10 md:py-12 bg-[#f8f5f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-center mb-4 sm:mb-5 font-bold text-[#08221B]">
            Explore Our Collection
          </h2>
          <div className="mx-auto w-[120px] sm:w-[174px] h-[3px] sm:h-[4px] bg-[#d4af37] mb-4 sm:mb-6" />
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {["Necklaces", "Earrings", "Rings", "Bracelets"].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl sm:rounded-2xl shadow hover:shadow-lg transition p-3 sm:p-4 text-center"
              >
                <div className="h-24 sm:h-28 md:h-32 bg-gray-200 rounded-lg sm:rounded-xl mb-3 sm:mb-4" />
                <h3 className="font-medium text-sm sm:text-base">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Designs */}
      <section className="py-8 sm:py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-center mb-6 sm:mb-8 md:mb-10 text-[#CBA135]">
            Featured Designs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-[#133c38] rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:scale-105 transition"
              >
                <div className="h-40 sm:h-44 md:h-48 bg-black/30 rounded-lg sm:rounded-xl mb-3 sm:mb-4" />
                <h3 className="font-medium text-sm sm:text-base mb-1 sm:mb-2 text-white">Elegant Gold Set</h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">₹ 48,999</p>
                <button className="mt-2 sm:mt-3 text-xs sm:text-sm border border-[#d4af37] px-3 sm:px-4 py-1 rounded-full hover:bg-[#d4af37] hover:text-black transition w-full sm:w-auto">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-10 sm:py-12 md:py-16 bg-[#f8f5f0] text-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-3 sm:mb-4 text-[#08221B]">
              Designed for Every Occasion
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              From weddings to festive celebrations, find jewellery that defines
              your elegance.
            </p>
            <button className="bg-[#0f2d2a] text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-[#133c38] transition text-sm sm:text-base">
              Shop Now
            </button>
          </div>
          <div className="order-1 md:order-2 h-48 sm:h-56 md:h-64 bg-gray-300 rounded-xl sm:rounded-2xl" />
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-8 sm:py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-center mb-6 sm:mb-8 md:mb-10 text-[#CBA135]">
            New Arrivals
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-[#133c38] rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:scale-105 transition">
                <div className="h-32 sm:h-36 md:h-40 bg-black/30 rounded-lg sm:rounded-xl mb-2 sm:mb-3" />
                <h3 className="text-xs sm:text-sm text-white mb-1">Modern Bridal Set</h3>
                <p className="text-xs text-gray-300">₹ 62,499</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
