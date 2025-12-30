
import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { CoffeeCategory, CoffeeProduct } from '../types';
import ProductCard from '../components/ProductCard';

interface ShopPageProps {
  onSelectProduct: (product: CoffeeProduct) => void;
  onAddToCart: (product: CoffeeProduct) => void;
}

const ShopPage: React.FC<ShopPageProps> = ({ onSelectProduct, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<CoffeeCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.origin.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-6">Our Collections</h1>
        <p className="text-[#2c1810]/60 max-w-2xl mx-auto">
          Browse our curated selection of specialty coffee beans. Filter by origin or blend type to find your perfect roast.
        </p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
        <div className="flex flex-wrap justify-center gap-4">
          {['All', ...Object.values(CoffeeCategory)].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                selectedCategory === cat 
                ? 'bg-[#2c1810] text-[#faf7f2]' 
                : 'bg-white text-[#2c1810] border border-[#d4af37]/20 hover:border-[#d4af37]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <input 
            type="text" 
            placeholder="Search beans, origins..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#d4af37]/20 focus:outline-none focus:ring-1 focus:ring-[#d4af37] bg-white text-sm"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2c1810]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelect={onSelectProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 space-y-4">
          <svg className="w-16 h-16 text-[#d4af37]/20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-serif font-bold">No Beans Found</h3>
          <p className="text-gray-400">Try adjusting your filters or search term.</p>
          <button 
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="text-[#d4af37] underline font-bold uppercase tracking-widest text-xs"
          >
            Reset All
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
