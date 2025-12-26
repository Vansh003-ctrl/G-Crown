import React, { useState, useMemo, useCallback } from "react";
import { ChevronDown, X, SlidersHorizontal } from "lucide-react";
import { FilterSidebar } from "../../components/filterSection";
import earingImg from "../../assets/collectionPage/ear-ring.png";


import shippingIcon from "../../assets/NewArrivalAssets/logos/la_shipping-fast.png";
import paymentIcon from "../../assets/NewArrivalAssets/logos/fluent_payment-32-regular.png";
import supportIcon from "../../assets/NewArrivalAssets/logos/streamline-plump_customer-support-7.png";

const Collections = () => {
  // 1. Mock Data
  const allProducts = useMemo(() => [
    { id: 1, name: "Eternal Sparkle Diamond Ring", category: "Rings", material: "Gold", color: "White", price: 245000, oldPrice: 270000, reviews: 248, bestseller: true, image: earingImg },
    { id: 2, name: "Classic Gold Bracelet", category: "Bracelets", material: "Gold", color: "Orange", price: 85000, oldPrice: 95000, reviews: 120, bestseller: false, image: earingImg },
    { id: 3, name: "Platinum Rose Studs", category: "Earrings", material: "Platinum", color: "Blue", price: 150000, oldPrice: 180000, reviews: 85, bestseller: true, image: earingImg },
    { id: 4, name: "Pearl Drop Earrings", category: "Earrings", material: "Pearl", color: "White", price: 45000, oldPrice: 50000, reviews: 310, bestseller: true, image: earingImg },
    { id: 5, name: "Rose Gold Band", category: "Rings", material: "Rose Gold", color: "Orange", price: 65000, oldPrice: 75000, reviews: 150, bestseller: false, image: earingImg },
    { id: 6, name: "Emerald Diamond Ring", category: "Rings", material: "Diamond Jewelry", color: "Green", price: 320000, oldPrice: 345000, reviews: 90, bestseller: true, image: earingImg },
    { id: 7, name: "Grey Pearl Necklace", category: "Necklaces", material: "Pearl", color: "Grey", price: 125000, oldPrice: 140000, reviews: 45, bestseller: false, image: earingImg },
    { id: 8, name: "Royal Gold Kangan", category: "Bangles", material: "Gold", color: "Orange", price: 185000, oldPrice: 200000, reviews: 65, bestseller: true, image: earingImg },
    { id: 9, name: "Silver Dew Pendant", category: "Pendants", material: "Silver", color: "White", price: 12000, oldPrice: 15000, reviews: 110, bestseller: false, image: earingImg },
    { id: 10, name: "Midnight Sapphire Ring", category: "Rings", material: "White Gold", color: "Blue", price: 175000, oldPrice: 195000, reviews: 62, bestseller: true, image: earingImg },
    { id: 11, name: "Ruby Floral Studs", category: "Earrings", material: "Gold", color: "Red", price: 85000, oldPrice: 95000, reviews: 45, bestseller: false, image: earingImg },
    { id: 12, name: "Diamond Tennis Bracelet", category: "Bracelets", material: "Platinum", color: "White", price: 450000, oldPrice: 500000, reviews: 15, bestseller: true, image: earingImg },
    { id: 13, name: "Solitaire Diamond Pendant", category: "Pendants", material: "Rose Gold", color: "White", price: 120000, oldPrice: 135000, reviews: 88, bestseller: true, image: earingImg },
    { id: 14, name: "Golden Leaf Bangle", category: "Bangles", material: "Gold", color: "Orange", price: 95000, oldPrice: 110000, reviews: 34, bestseller: false, image: earingImg },
    { id: 15, name: "Silver Moonlight Choker", category: "Necklaces", material: "Silver", color: "Grey", price: 25000, oldPrice: 30000, reviews: 120, bestseller: false, image: earingImg },
    { id: 16, name: "Classic Hoop Earrings", category: "Earrings", material: "Gold", color: "Orange", price: 35000, oldPrice: 40000, reviews: 210, bestseller: true, image: earingImg },
    { id: 17, name: "Vintage Emerald Brooch", category: "Accessories", material: "Silver", color: "Green", price: 55000, oldPrice: 65000, reviews: 12, bestseller: false, image: earingImg },
    { id: 18, name: "Infinity Love Ring", category: "Rings", material: "Rose Gold", color: "Orange", price: 42000, oldPrice: 48000, reviews: 310, bestseller: true, image: earingImg },
    { id: 19, name: "Traditional Temple Necklace", category: "Necklaces", material: "Gold", color: "Orange", price: 580000, oldPrice: 620000, reviews: 25, bestseller: true, image: earingImg },
    { id: 20, name: "Blue Topaz Drop Earrings", category: "Earrings", material: "White Gold", color: "Blue", price: 72000, oldPrice: 80000, reviews: 54, bestseller: false, image: earingImg },
  ], []);

  const MIN_LIMIT = 2500;
  const MAX_LIMIT = 600000;

  // 2. States
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([MIN_LIMIT, MAX_LIMIT]);
  const [sortBy, setSortBy] = useState("default");

  // 3. Handlers
  const toggleCategory = useCallback((cat) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(i => i !== cat) : [...prev, cat]);
  }, []);

  const toggleMaterial = useCallback((mat) => {
    setSelectedMaterials(prev => prev.includes(mat) ? prev.filter(i => i !== mat) : [...prev, mat]);
  }, []);

  const toggleColor = useCallback((col) => {
    setSelectedColors(prev => prev.includes(col) ? prev.filter(i => i !== col) : [...prev, col]);
  }, []);

  const handleMinPriceChange = (e) => {
    const val = Math.min(Number(e.target.value), priceRange[1] - 1000);
    setPriceRange([val, priceRange[1]]);
  };

  const handleMaxPriceChange = (e) => {
    const val = Math.max(Number(e.target.value), priceRange[0] + 1000);
    setPriceRange([priceRange[0], val]);
  };

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedColors([]);
    setPriceRange([MIN_LIMIT, MAX_LIMIT]);
    setSortBy("default");
  };

  // 4. Filtering Logic
  const filteredProducts = useMemo(() => {
    let result = allProducts.filter(product => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const materialMatch = selectedMaterials.length === 0 || selectedMaterials.includes(product.material);
      const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && materialMatch && colorMatch && priceMatch;
    });

    if (sortBy === "lowToHigh") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "highToLow") result.sort((a, b) => b.price - a.price);

    return result;
  }, [allProducts, selectedCategories, selectedMaterials, selectedColors, priceRange, sortBy]);

  return (
    <div className="bg-[#FFF9E9] min-h-screen font-sans text-[#2D2D2D]">
      {/* Header */}
      <header className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-10 pb-4 border-b border-gray-200">
        <h1 className="text-2xl sm:text-3xl font-serif text-[#B39055] tracking-wide uppercase flex items-center gap-3">
          Collections 
          <span className="text-[#1C3A2C] text-2xl hidden sm:inline">|</span>
          <span className="text-gray-500 text-sm font-sans lowercase"> {filteredProducts.length} Designs found</span>
        </h1>
      </header>

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-8">
        {/* Controls Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full lg:w-auto">
            <div className="flex items-center justify-between w-full sm:w-auto gap-4">
               <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold font-cormorant text-[#1C3A2C]">Filter Options</h2>
               <button 
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-[#1C3A2C] text-white rounded-md font-montserrat text-[13px] active:scale-95 transition-all"
               >
                 <SlidersHorizontal size={14} /> Filters
               </button>
            </div>
            <p className="hidden sm:block text-[16px] text-[#1C3A2C]">
              Showing 1-{filteredProducts.length} of {allProducts.length} results
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-[14px] lg:text-[18px] font-cormorant text-[#1C3A2C] whitespace-nowrap">Sort by:</span>
            <div className="relative flex-1 sm:flex-initial">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)} 
                className="w-full sm:w-[200px] lg:w-[240px] h-[40px] lg:h-[48px] bg-[#E9E1C6] border border-[#1C3A2C] rounded px-3 text-sm outline-none cursor-pointer appearance-none"
              >
                <option value="default">Default Sorting</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active Filters Row */}
        <div className="flex flex-wrap items-center gap-3 mb-8 p-3 bg-white/30 rounded-lg">
          <span className="text-[15px] font-[600] uppercase text-[#1C3A2C]">Active Filter</span>
          {[...selectedCategories, ...selectedMaterials, ...selectedColors].map(filter => (
            <span key={filter} className="bg-[#002D25] text-white px-3 py-1 text-[10px] flex items-center gap-2 uppercase">
              {filter} 
              <button onClick={() => {
                if(selectedCategories.includes(filter)) toggleCategory(filter);
                else if(selectedMaterials.includes(filter)) toggleMaterial(filter);
                else toggleColor(filter);
              }}>✕</button>
            </span>
          ))}
          {(selectedCategories.length > 0 || selectedColors.length > 0 || selectedMaterials.length > 0) && (
            <button onClick={clearAll} className="text-xs underline text-gray-400 ml-2">Clear ALL</button>
          )}
        </div>

        {/* Layout with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          <FilterSidebar
            isOpen={isMobileFilterOpen}
            onClose={() => setIsMobileFilterOpen(false)}
            categories={['Bracelets', 'Rings', 'Earrings', 'Necklaces']}
            selectedCategories={selectedCategories}
            onToggleCategory={toggleCategory}
            materials={['Gold', 'Platinum', 'Rose Gold', 'Diamond Jewelry', 'Pearl']}
            selectedMaterials={selectedMaterials}
            onToggleMaterial={toggleMaterial}
            colors={['Grey', 'Green', 'Orange', 'Blue', 'White']}
            selectedColors={selectedColors}
            onToggleColor={toggleColor}
            priceRange={priceRange}
            onPriceChange={{ onMinChange: handleMinPriceChange, onMaxChange: handleMaxPriceChange }}
            minPrice={MIN_LIMIT}
            maxPrice={MAX_LIMIT}
            priceStep={1000}
          />

          {/* Product Grid */}
          <section className="flex-1 min-w-0">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white/30 rounded-2xl border-2 border-dashed border-[#CBA135]/30">
                <p className="text-gray-500 italic font-serif text-lg">No designs match your current filters.</p>
                <button onClick={clearAll} className="mt-4 text-[#B39055] font-bold underline">Show All Designs</button>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Features Bar */}
      <section className="bg-[#FFF9E9] px-4 sm:px-6 lg:px-12 xl:px-16 py-10 lg:py-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <FeatureCard icon={shippingIcon} title="Free Shipping" description="Free Shipping for Order above ₹ 2,000" />
          <FeatureCard icon={paymentIcon} title="Flexible Payment" description="Multiple Secure payment Options" />
          <FeatureCard icon={supportIcon} title="24x7 Support" description="We Support online all days" />
        </div>
      </section>
    </div>
  );
};



const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#FFF9E9] relative rounded-md group">
      {product.bestseller && (
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#CBA135] text-[#FFFFFF] text-[8px] sm:text-[10px] px-2 py-0.5 font-normal z-10 tracking-widest">
          BESTSELLER
        </div>
      )}
      <button className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-300 z-10 bg-white p-2 rounded-full shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 h-3 fill-[#08221B] hover:fill-red-500 transition-colors">
          <path d="M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z" />
        </svg>
      </button>

      <div className="h-48 sm:h-64 bg-gray-100 mb-4 overflow-hidden rounded-md">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      <div className="px-1 sm:px-4 pb-4">
        <div className="text-[#CBA135] text-xs sm:text-md mb-0.5">
          ★★★★★ <span className="text-[#08221B] text-[10px] sm:text-[13px]">({product.reviews})</span>
        </div>
        <h3 className="font-serif text-[12px] sm:text-sm mb-0.5 text-[#08221B] line-clamp-1">{product.name}</h3>
        <p className="text-[9px] sm:text-[10px] text-[#37654B] mb-1">{product.material} | {product.color}</p>
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-4">
          <div>
            <h2 className="font-bold text-[#08221B] text-sm sm:text-xl">₹{product.price.toLocaleString()}</h2>
            <h2 className="text-[10px] sm:text-xs text-[#37654B] line-through">₹{product.oldPrice.toLocaleString()}</h2>
          </div>
          <div className="w-fit px-2 py-0.5 text-[8px] sm:text-[10px] bg-[#EF4444] text-white font-bold rounded">SAVE 10%</div>
        </div>
        
        <button className="w-full bg-[#08221B] text-[#FFFFFF] py-2 text-[10px] sm:text-xs uppercase tracking-widest hover:bg-black transition-colors active:scale-95">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-center gap-4 sm:gap-5 bg-white rounded-xl px-4 py-4 sm:px-6 sm:py-5 shadow-sm hover:shadow-md transition-all">
    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#1C3A2C] shrink-0">
      <img src={icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" loading="lazy" />
    </div>
    <div className="flex flex-col">
      <h4 className="text-[16px] sm:text-[18px] font-serif text-[#1C3A2C] leading-tight">{title}</h4>
      <p className="text-[12px] sm:text-[14px] font-sans text-[#1C3A2C]/80 leading-snug">{description}</p>
    </div>
  </div>
);

export default Collections;