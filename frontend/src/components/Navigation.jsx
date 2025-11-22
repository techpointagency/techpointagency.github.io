import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="hidden md:flex items-center justify-between px-6 py-3 mx-6 my-6 bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-full shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#8FEC78] to-[#81DD67] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">TP</span>
          </div>
          <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Tech Point</span>
        </div>
        
        <div className="flex items-center gap-2">
          <button onClick={() => scrollToSection('home')} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200">Home</button>
          <button onClick={() => scrollToSection('services')} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200">Portfolio</button>
          <button onClick={() => scrollToSection('about')} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200">About</button>
          <button onClick={() => scrollToSection('contact')} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200">Contact</button>
        </div>

        <button onClick={() => scrollToSection('contact')} className="btn-primary">Get Started</button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-b border-gray-200/50 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#8FEC78] to-[#81DD67] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">TP</span>
            </div>
            <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Tech Point</span>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isOpen && (
          <div className="px-4 py-3 bg-white border-t border-gray-200/50">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200">Home</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200">Portfolio</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200">About</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200">Contact</button>
            <button onClick={() => scrollToSection('contact')} className="btn-primary mt-4">Get Started</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;