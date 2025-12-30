
import React, { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, cartCount, onOpenCart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Shop', id: 'shop' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#2c1810]/95 backdrop-blur-md text-[#faf7f2] py-4 border-b border-[#d4af37]/20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 border-2 border-[#d4af37] flex items-center justify-center rounded-full group-hover:bg-[#d4af37] transition-all duration-300">
            <span className="text-[#d4af37] font-bold group-hover:text-[#2c1810]">GH</span>
          </div>
          <span className="text-xl font-serif font-bold tracking-wider uppercase">Global House</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-sm uppercase tracking-widest transition-colors hover:text-[#d4af37] ${
                currentPage === link.id ? 'text-[#d4af37] font-semibold' : 'text-[#faf7f2]/80'
              }`}
            >
              {link.name}
            </button>
          ))}
          
          <button 
            onClick={onOpenCart}
            className="relative p-2 hover:bg-[#faf7f2]/10 rounded-full transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#d4af37] text-[#2c1810] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={onOpenCart} className="relative p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#d4af37] text-[#2c1810] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#faf7f2]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2c1810] border-t border-[#d4af37]/10 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-lg uppercase tracking-widest text-[#faf7f2]/90 hover:text-[#d4af37]"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
