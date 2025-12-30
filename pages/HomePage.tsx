
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { CoffeeProduct } from '../types';

interface HomePageProps {
  onNavigateToShop: () => void;
  onSelectProduct: (product: CoffeeProduct) => void;
  onAddToCart: (product: CoffeeProduct) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigateToShop, onSelectProduct, onAddToCart }) => {
  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1920&auto=format&fit=crop" 
            alt="Hero Background"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-[#2c1810]/60 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl animate-fadeIn">
          <span className="text-[#d4af37] text-sm uppercase tracking-[0.3em] font-bold mb-6 block">ESTABLISHED 2024</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#faf7f2] mb-6 leading-tight">
            Discover the World's Finest Coffee Beans
          </h1>
          <p className="text-xl md:text-2xl text-[#faf7f2]/90 mb-10 font-light leading-relaxed">
            Premium hand-selected coffee from Brazil, Colombia, Ethiopia, Yemen, Vietnam, and more.
          </p>
          <button 
            onClick={onNavigateToShop}
            className="px-12 py-5 bg-[#d4af37] text-[#2c1810] text-lg font-bold uppercase tracking-widest rounded-full hover:bg-[#faf7f2] hover:scale-105 transition-all duration-500 shadow-2xl"
          >
            Shop Now
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-[#d4af37] animate-bounce"></div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Our Signature Selection</h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-[#2c1810]/70 max-w-2xl mx-auto">
            From the high-altitude peaks of Ethiopia to the volcanic soils of Brazil, experience a symphony of flavors curated by our master roasters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelect={onSelectProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={onNavigateToShop}
            className="group inline-flex items-center space-x-2 text-[#2c1810] font-bold uppercase tracking-widest hover:text-[#d4af37] transition-all"
          >
            <span>View All Collections</span>
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-[#2c1810] py-24 text-[#faf7f2]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 border-2 border-[#d4af37]/30 rounded-2xl group-hover:border-[#d4af37]/60 transition-all duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1497933321188-64e4c8ef3717?q=80&w=800&auto=format&fit=crop" 
                alt="Coffee Roasting"
                className="rounded-xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold">Why Global House is Special</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#d4af37] text-[#2c1810] rounded-full flex items-center justify-center font-bold">01</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Artisan Roasting</h4>
                    <p className="text-[#faf7f2]/70 leading-relaxed">We roast in small batches to ensure precision, control, and the perfect development of each bean's unique flavor profile.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#d4af37] text-[#2c1810] rounded-full flex items-center justify-center font-bold">02</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Direct Trade Origins</h4>
                    <p className="text-[#faf7f2]/70 leading-relaxed">By working directly with farmers in over 15 countries, we ensure ethical practices and the highest quality crop selections.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#d4af37] text-[#2c1810] rounded-full flex items-center justify-center font-bold">03</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Vacuum Sealed Freshness</h4>
                    <p className="text-[#faf7f2]/70 leading-relaxed">Our specialized packaging locks in the volatile aromatics, delivering a bag of beans that smells like it was roasted just minutes ago.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-16">Stories from Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Elena Rossi", role: "Coffee Connoisseur", quote: "The Ethiopian Yirgacheffe changed my perception of coffee. It's like drinking a garden of jasmine. Pure magic." },
            { name: "Marcus Thorne", role: "Barista Champion", quote: "The Italian Espresso blend has the most stable crema I've worked with. Global Coffee House is my go-to for quality." },
            { name: "Sarah Jenkins", role: "Morning Enthusiast", quote: "Fast shipping, luxury packaging, and the smell when you open the bag... it's a daily ritual for me now." }
          ].map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl luxury-shadow border border-[#d4af37]/10 flex flex-col justify-between">
              <div>
                <svg className="w-10 h-10 text-[#d4af37]/20 mb-6" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8v8H6v4h4v4H2v-8h4V8h4zm16 0v8h-4v4h4v4h-8v-8h4V8h4z"/></svg>
                <p className="text-[#2c1810]/80 italic mb-8 leading-relaxed">"{t.quote}"</p>
              </div>
              <div>
                <h5 className="font-bold text-[#2c1810]">{t.name}</h5>
                <p className="text-xs text-[#d4af37] uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
