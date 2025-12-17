import {
  Search,
  Heart,
  ShoppingCart,
  MapPin,
  User,
  Menu,
} from "lucide-react";
import Logo from "../assets/logo.svg";
export default function Navbar() {
  return (
    <header className="w-full bg-[#0F231C] text-(--color-primary) relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row */}
        <div className="h-24 flex items-center justify-between">
          {/* Search */}
          <div className="hidden lg:flex items-center bg-[#FBF6EA] rounded-full px-5 py-2 w-[420px]">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="ml-3 bg-transparent outline-none text-sm text-gray-700 w-full"
            />
          </div>

          {/* Mobile Menu */}
          <button className="lg:hidden text-white">
            <Menu size={28} />
          </button>

          {/* Center Logo */}
<div className="absolute left-1/2 bottom-2 -translate-x-1/2">
  <img
    src={Logo}
    alt="Graphura Logo"
    className="h-27 w-auto mb-0"
  />
</div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {[
              <Heart />,
              <ShoppingCart />,
              <MapPin />,
              <User />,
            ].map((Icon, i) => (
              <button
                key={i}
                className="hidden lg:flex h-10 w-10 items-center justify-center rounded-full bg-[#FBF6EA] text-[#0F231C]"
              >
                {Icon}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Nav Links */}
        <nav className="hidden lg:flex justify-between pb-4 text-base tracking-wide">
          <div className="flex gap-30">
            <NavLink label="Home" />
            <NavLink label="About Us" />
            <NavLink label="Collections" />
          </div>

          <div className="flex gap-30">
            <NavLink label="Occasions" />
            <NavLink label="New Arrivals" />
            <NavLink label="Store" />
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ label }) {
  return (
    <a
      href="#"
      className="font-(--font-heading) text-[#CBA135] hover:text-white transition"
    >
      {label}
    </a>
  );
}