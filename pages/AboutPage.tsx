
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Story Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img 
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1920&auto=format&fit=crop" 
            alt="Coffee Farmer" 
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2c1810]/70 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-5xl font-serif font-bold text-[#faf7f2] mb-6">Our Brewing Heritage</h1>
          <p className="text-xl text-[#faf7f2]/80 leading-relaxed font-light">
            We are passionate coffee explorers who travel the world to bring you the most iconic beans, sourced ethically from the best farms on Earth.
          </p>
        </div>
      </section>

      {/* Story Sections */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold">From Crop to Cup</h2>
            <p className="text-[#2c1810]/70 leading-relaxed">
              Global Coffee House was born from a simple obsession: finding the perfect bean. What started as a small roastery in 2024 has grown into a global bridge between remote coffee farmers and urban coffee lovers.
            </p>
            <p className="text-[#2c1810]/70 leading-relaxed">
              We don't just sell coffee; we tell the story of the land. Every harvest cycle, we visit our partner estates in Yemen, Ethiopia, and Brazil to witness the processing first-hand. We believe that when a farmer is paid fairly and the environment is respected, the coffee tastes better.
            </p>
            <div className="flex gap-10 pt-6">
                <div className="text-center">
                    <span className="block text-3xl font-serif font-bold text-[#d4af37]">15+</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Origins</span>
                </div>
                <div className="text-center">
                    <span className="block text-3xl font-serif font-bold text-[#d4af37]">200k</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Happy Brews</span>
                </div>
                <div className="text-center">
                    <span className="block text-3xl font-serif font-bold text-[#d4af37]">100%</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Ethical</span>
                </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=400&auto=format&fit=crop" className="rounded-2xl h-64 w-full object-cover mt-8" alt="Coffee farming" />
            <img src="https://images.unsplash.com/photo-1459755486867-b55449bb39ff?q=80&w=400&auto=format&fit=crop" className="rounded-2xl h-64 w-full object-cover" alt="Coffee roasting" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-bold text-center mb-16">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-[#faf7f2] border border-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto text-[#d4af37]">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 21l-8.228-9.904A17.963 17.963 0 0112 4.414a17.963 17.963 0 018.228 6.682L12 21z"/></svg>
                    </div>
                    <h4 className="text-xl font-bold font-serif">Deep Sustainability</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Protecting the biodiversity of the regions where our beans are grown.</p>
                </div>
                <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-[#faf7f2] border border-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto text-[#d4af37]">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    </div>
                    <h4 className="text-xl font-bold font-serif">Quality Obsession</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Only the top 1% of coffee crops make it into a Global House bag.</p>
                </div>
                <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-[#faf7f2] border border-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto text-[#d4af37]">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                    </div>
                    <h4 className="text-xl font-bold font-serif">Community Focused</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Supporting farming families through education and healthcare grants.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
