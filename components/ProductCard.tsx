
import React from 'react';
import { CoffeeProduct } from '../types';

interface ProductCardProps {
  product: CoffeeProduct;
  onSelect: (product: CoffeeProduct) => void;
  onAddToCart: (product: CoffeeProduct) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden luxury-shadow transition-all duration-500 hover:-translate-y-2 border border-[#d4af37]/5">
      <div 
        className="relative h-64 overflow-hidden cursor-pointer"
        onClick={() => onSelect(product)}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
        <div className="absolute top-4 left-4">
          <span className="bg-[#d4af37] text-[#2c1810] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 
              className="text-lg font-serif font-bold text-[#2c1810] hover:text-[#d4af37] cursor-pointer transition-colors"
              onClick={() => onSelect(product)}
            >
              {product.name}
            </h3>
            <p className="text-xs text-[#2c1810]/60 italic">{product.origin}</p>
          </div>
          <span className="text-[#d4af37] font-bold font-serif">${product.price.toFixed(2)}</span>
        </div>

        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-[#d4af37]' : 'text-gray-300'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-[10px] text-gray-400 ml-2">({product.reviewsCount})</span>
        </div>

        <p className="text-sm text-[#2c1810]/70 mb-6 line-clamp-2 min-h-[2.5rem]">
          {product.description}
        </p>

        <button 
          onClick={() => onAddToCart(product)}
          className="w-full py-3 bg-[#2c1810] text-[#faf7f2] text-sm font-bold uppercase tracking-widest rounded-xl hover:bg-[#d4af37] hover:text-[#2c1810] transition-all duration-300 gold-glow"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
