
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold mb-6">Get in Touch</h1>
          <p className="text-[#2c1810]/60 max-w-xl mx-auto">
            Questions about our roasts? Interested in wholesale? Or just want to talk beans? Our coffee experts are here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#d4af37]/10 text-[#d4af37] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Support</h4>
                  <p className="text-sm text-gray-500 mb-2">Typically responds within 2 hours.</p>
                  <a href="mailto:hello@globalcoffeehouse.com" className="text-[#d4af37] font-bold">hello@globalcoffeehouse.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-green-500/10 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">WhatsApp Chat</h4>
                  <p className="text-sm text-gray-500 mb-2">Direct line for quick orders.</p>
                  <a href="#" className="text-green-600 font-bold">+1 (555) COFFEE-NOW</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-500/10 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Flagship Store</h4>
                  <p className="text-sm text-gray-500">123 Espresso Way, Coffee City</p>
                  <p className="text-sm text-gray-500">Mon-Fri: 7am - 8pm</p>
                </div>
              </div>
            </div>

            {/* Mock Map */}
            <div className="h-64 rounded-2xl bg-gray-200 overflow-hidden relative border border-[#d4af37]/20">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50" alt="Map view" />
               <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#2c1810] text-[#d4af37] px-4 py-2 rounded-full font-bold shadow-xl animate-pulse">FIND US HERE</div>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 rounded-3xl luxury-shadow border border-[#d4af37]/10">
            {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fadeIn">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-2">Message Received!</h3>
                    <p className="text-gray-500">We'll get back to you faster than a double espresso shot.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                            <input required type="text" className="w-full bg-[#faf7f2] border border-[#d4af37]/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#d4af37]" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                            <input required type="email" className="w-full bg-[#faf7f2] border border-[#d4af37]/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#d4af37]" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                        <select className="w-full bg-[#faf7f2] border border-[#d4af37]/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#d4af37]">
                            <option>Order Inquiry</option>
                            <option>Wholesale Partnerships</option>
                            <option>Brewing Advice</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Message</label>
                        <textarea required rows={6} className="w-full bg-[#faf7f2] border border-[#d4af37]/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#d4af37] resize-none"></textarea>
                    </div>
                    <button className="w-full py-5 bg-[#2c1810] text-[#faf7f2] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-[#d4af37] hover:text-[#2c1810] transition-all">
                        Send Message
                    </button>
                </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
