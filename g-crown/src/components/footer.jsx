import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import FooterBg from "../assets/footerAssests/background.png"; // replace with your image path

export default function Footer() {
  return (
    <footer
      className="w-full bg-cover bg-center text-[#CBA135]"
      style={{
    backgroundImage: `
      linear-gradient(212.33deg, rgba(28, 58, 44, 0.2) 19.6%, rgba(28, 58, 44, 0.396202) 43.5%, rgba(28, 58, 44, 0.61363) 56.62%, #1C3A2C 79.92%),
      linear-gradient(137.54deg, rgba(28, 58, 44, 0.146) 33.64%, rgba(28, 58, 44, 0.173938) 46.33%, rgba(28, 58, 44, 0.369618) 53.61%, rgba(28, 58, 44, 0.73) 62.4%),
      url(${FooterBg})
    `,
  }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-[#CBA135]">
              G-CROWN JEWELLERS BY GRAPHURA
            </h2>
            <p className="text-sm text-[#EFDFB7] mb-6">
              Crafting timeless elegance since 2024. We bring together
              traditional artistry and contemporary design to create jewelry
              that tells your unique story.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-full bg-[#0F231C] hover:bg-[#CBA135] transition"
              >
                <FaFacebookF size={16} className="text-[#FAF7F2]" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-[#0F231C] hover:bg-[#CBA135] transition"
              >
                <FaInstagram size={16} className="text-[#FAF7F2]" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-[#0F231C] hover:bg-[#CBA135] transition"
              >
                <FaTwitter size={16} className="text-[#FAF7F2]" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#CBA135]">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#EFDFB7] hover:text-white transition">New Arrivals</a></li>
              <li><a href="#" className="text-[#EFDFB7] hover:text-white transition">Rings</a></li>
              <li><a href="#" className="text-[#EFDFB7] hover:text-white transition">Necklaces</a></li>
              <li><a href="#" className="text-[#EFDFB7] hover:text-white transition">Earrings</a></li>
              <li><a href="#" className="text-[#EFDFB7] hover:text-white transition">Bracelets</a></li>
              <li><a href="#" className="text-[#EFDFB7] hover:text-white transition">Collections</a></li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#CBA135]">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#EFDFB7] hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-[#EFDFB7] hover:text-white transition">Our Story</a></li>
              <li><a href="#" className="text-[#EFDFB7] hover:text-white transition">News Letter</a></li>
            </ul>
          </div>

          {/* Customer Care Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#CBA135]">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#EFDFB7] hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="text-[#EFDFB7] hover:text-white transition">Track Order</a></li>
              <li><a href="#" className="text-[#EFDFB7] hover:text-white transition">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className=" mt-12 border-t border-[#CBA135]/30 pt-6 text-center text-sm text-[#FAF7F2]">
          © 2025 Graphura India Private Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}