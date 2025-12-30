
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { CoffeeProduct, CartItem } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<CoffeeProduct | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Handle Hash Routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      // If it's a product detail hash, it would look like product-1
      if (hash.startsWith('product-')) {
        // Find product logic here if we wanted deep linking
      } else {
        setCurrentPage(hash);
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: string) => {
    window.location.hash = page;
    setCurrentPage(page);
    setSelectedProduct(null);
  };

  const handleSelectProduct = (product: CoffeeProduct) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    window.scrollTo(0, 0);
  };

  const addToCart = (product: CoffeeProduct) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const renderPage = () => {
    if (selectedProduct && currentPage === 'product-detail') {
      return (
        <ProductPage 
          product={selectedProduct} 
          onAddToCart={addToCart} 
          onGoBack={() => navigate('shop')} 
        />
      );
    }

    switch (currentPage) {
      case 'home': return <HomePage onNavigateToShop={() => navigate('shop')} onSelectProduct={handleSelectProduct} onAddToCart={addToCart} />;
      case 'shop': return <ShopPage onSelectProduct={handleSelectProduct} onAddToCart={addToCart} />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage onNavigateToShop={() => navigate('shop')} onSelectProduct={handleSelectProduct} onAddToCart={addToCart} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-[#2c1810]">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={navigate} 
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />

      {/* Shopping Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] overflow-hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="absolute top-0 right-0 h-full w-full max-w-md bg-[#faf7f2] shadow-2xl flex flex-col animate-slideIn">
            <div className="p-6 border-b border-[#d4af37]/20 flex justify-between items-center bg-[#2c1810] text-[#faf7f2]">
              <h2 className="text-xl font-serif font-bold uppercase tracking-widest">Shopping Bag</h2>
              <button onClick={() => setIsCartOpen(false)} className="hover:text-[#d4af37] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-[#2c1810]/40">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                  <p className="font-bold uppercase tracking-widest text-sm">Your bag is empty</p>
                  <button onClick={() => { setIsCartOpen(false); navigate('shop'); }} className="text-[#d4af37] underline font-bold uppercase tracking-widest text-xs">Browse Shop</button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex space-x-4 pb-6 border-b border-[#d4af37]/10">
                    <img src={item.image} className="w-20 h-20 object-cover rounded-xl" alt={item.name} />
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h4 className="font-bold text-[#2c1810]">{item.name}</h4>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{item.origin}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3 border rounded-lg px-2 py-1 text-xs">
                          <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-[#d4af37]">-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-[#d4af37]">+</button>
                        </div>
                        <span className="font-serif font-bold text-[#d4af37]">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-[#d4af37]/20 bg-white">
                <div className="flex justify-between mb-4">
                  <span className="text-[#2c1810]/60 uppercase tracking-widest text-sm font-bold">Subtotal</span>
                  <span className="text-xl font-serif font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full py-5 bg-[#2c1810] text-[#faf7f2] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-[#d4af37] hover:text-[#2c1810] transition-all gold-glow">
                  Checkout
                </button>
                <p className="text-[10px] text-center text-gray-400 mt-4 italic uppercase tracking-widest">Free Shipping on all specialty orders</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Custom styles for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
