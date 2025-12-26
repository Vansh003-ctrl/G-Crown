import React from "react";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

const Store = () => {
  const stores = [
    {
      id: 1,
      name: "G-Crown Flagship Store",
      address: "123 Luxury Avenue, Mumbai, Maharashtra 400001",
      phone: "+91 22 1234 5678",
      email: "mumbai@gcrown.com",
      hours: "Mon-Sat: 10:00 AM - 8:00 PM, Sun: 11:00 AM - 7:00 PM",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "G-Crown Delhi",
      address: "456 Premium Plaza, New Delhi, Delhi 110001",
      phone: "+91 11 2345 6789",
      email: "delhi@gcrown.com",
      hours: "Mon-Sat: 10:00 AM - 8:00 PM, Sun: 11:00 AM - 7:00 PM",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "G-Crown Bangalore",
      address: "789 Elegance Street, Bangalore, Karnataka 560001",
      phone: "+91 80 3456 7890",
      email: "bangalore@gcrown.com",
      hours: "Mon-Sat: 10:00 AM - 8:00 PM, Sun: 11:00 AM - 7:00 PM",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9EA]">
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] bg-gradient-to-br from-[#0F231C] to-[#1C3A2C] flex items-center justify-center">
        <div className="text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Cormorant_Garamond'] text-[#CBA135] mb-4">
            Visit Our Stores
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#EFDFB7] max-w-2xl mx-auto">
            Experience our collections in person at our exclusive showrooms
          </p>
        </div>
      </section>

      {/* Stores Grid */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {stores.map((store) => (
              <div
                key={store.id}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                {/* Store Image */}
                <div className="relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A2C]/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-2xl sm:text-3xl font-bold font-['Cormorant_Garamond'] text-white">
                    {store.name}
                  </h3>
                </div>

                {/* Store Details */}
                <div className="p-6 sm:p-8">
                  <div className="space-y-4 sm:space-y-5">
                    {/* Address */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#CBA135] shrink-0 mt-1" />
                      <p className="text-sm sm:text-base text-[#1C3A2C] leading-relaxed">
                        {store.address}
                      </p>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#CBA135] shrink-0" />
                      <a
                        href={`tel:${store.phone}`}
                        className="text-sm sm:text-base text-[#1C3A2C] hover:text-[#CBA135] transition-colors"
                      >
                        {store.phone}
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#CBA135] shrink-0" />
                      <a
                        href={`mailto:${store.email}`}
                        className="text-sm sm:text-base text-[#1C3A2C] hover:text-[#CBA135] transition-colors break-all"
                      >
                        {store.email}
                      </a>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#CBA135] shrink-0 mt-1" />
                      <p className="text-sm sm:text-base text-[#1C3A2C] leading-relaxed">
                        {store.hours}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-[#1C3A2C] text-white px-4 sm:px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#0F231C] transition-colors">
                      <Navigation size={18} />
                      Get Directions
                    </button>
                    <button className="flex-1 bg-[#CBA135] text-[#0F231C] px-4 sm:px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#D4AF37] transition-colors">
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Cormorant_Garamond'] text-center text-[#1C3A2C] mb-8 sm:mb-12">
            Find Us on Map
          </h2>
          <div className="h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-br from-[#1C3A2C] to-[#0F231C] rounded-xl sm:rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.755837055!2d72.8776559!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9a6b8b8b8b8%3A0x8b8b8b8b8b8b8b8b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
