
import React, { useState } from 'react';
import { CoffeeProduct } from '../types';

interface ProductPageProps {
  product: CoffeeProduct;
  onAddToCart: (product: CoffeeProduct) => void;
  onGoBack: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ product, onAddToCart, onGoBack }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto px-4 py-16">
      <button 
        onClick={onGoBack}
        className="flex items-center space-x-2 text-[#2c1810]/60 hover:text-[#2c1810] transition-colors mb-8 group"
      >
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="uppercase tracking-widest text-xs font-bold">Back to Shop</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Images */}
        <div className="space-y-4">
          <div className="rounded-3xl overflow-hidden luxury-shadow border border-[#d4af37]/10 aspect-[4/5]">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden border border-[#d4af37]/10 cursor-pointer hover:border-[#d4af37] transition-all">
                <img src={`https://picsum.photos/400/400?random=${product.id}${i}`} className="w-full h-full object-cover" alt="Coffee Detail" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="space-y-10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
                <span className="bg-[#d4af37] text-[#2c1810] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {product.category}
                </span>
                <span className="text-gray-400 text-xs">•</span>
                <span className="text-[#2c1810]/60 text-xs uppercase tracking-widest font-bold">{product.origin}</span>
            </div>
            <h1 className="text-5xl font-serif font-bold mb-4">{product.name}</h1>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-serif font-bold text-[#d4af37]">${product.price.toFixed(2)}</span>
              <div className="flex items-center border-l border-gray-200 pl-4">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-[#d4af37]' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
                <span className="text-xs text-gray-400 ml-2">({product.reviewsCount} reviews)</span>
              </div>
            </div>
          </div>

          <p className="text-[#2c1810]/80 leading-relaxed text-lg italic">
            "{product.longDescription}"
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-8 border-y border-[#d4af37]/10 py-10">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-400">Flavor Profile</h4>
              <div className="flex flex-wrap gap-2">
                {product.flavorNotes.map((note) => (
                  <span key={note} className="px-4 py-2 bg-[#2c1810]/5 rounded-lg text-xs font-semibold text-[#2c1810] border border-[#2c1810]/10">
                    {note}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-400">Roast Intensity</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-[#2c1810]/40">
                  <span>Light</span>
                  <span>Dark</span>
                </div>
                <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#d4af37]" 
                    style={{ width: `${(product.roastLevel / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Brewing Suggestions</h4>
            <div className="flex space-x-6">
                {product.brewingRecs.map(rec => (
                    <div key={rec} className="flex flex-col items-center space-y-2">
                        <div className="w-12 h-12 bg-white rounded-full border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#2c1810]/60">{rec}</span>
                    </div>
                ))}
            </div>
          </div>

          {/* Add to Cart Area */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center border border-[#d4af37]/30 rounded-full px-6 py-4 space-x-8 bg-white">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-[#d4af37] font-bold hover:scale-125 transition-transform"
              >-</button>
              <span className="font-bold w-4 text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="text-[#d4af37] font-bold hover:scale-125 transition-transform"
              >+</button>
            </div>
            <button 
              onClick={() => onAddToCart(product)}
              className="flex-1 py-5 bg-[#2c1810] text-[#faf7f2] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#d4af37] hover:text-[#2c1810] transition-all gold-glow"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Origin Map Section Mock */}
      <section className="mt-32">
        <h2 className="text-4xl font-serif font-bold text-center mb-16">The Origin: {product.origin}</h2>
        <div className="h-[400px] bg-[#2c1810]/5 rounded-3xl overflow-hidden relative flex items-center justify-center border border-[#d4af37]/10">
           <img 
            src={`https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop`} 
            alt="Origin Landscape" 
            className="absolute inset-0 w-full h-full object-cover opacity-30" 
           />
           <div className="relative z-10 text-center max-w-lg p-8">
                <div className="w-16 h-16 bg-[#d4af37] text-[#2c1810] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">Mountain Region, {product.origin}</h3>
                <p className="text-[#2c1810]/70 text-sm leading-relaxed">
                    Grown at 1,800 meters above sea level in rich volcanic soil. The cool nights and high altitude slow the ripening process, allowing more sugars to develop in the bean.
                </p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
