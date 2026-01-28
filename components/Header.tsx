
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">NB</div>
            <span className="text-2xl font-bold tracking-tight text-pink-700 serif">Nailos Bhargavi</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollTo('about')} className="text-gray-600 hover:text-pink-600 font-medium transition-colors">About</button>
            <button onClick={() => scrollTo('gallery')} className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Gallery</button>
            <button onClick={() => scrollTo('courses')} className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Courses</button>
            <button onClick={() => scrollTo('contact')} className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Contact</button>
            <button onClick={() => scrollTo('booking')} className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-all shadow-md hover:shadow-lg">Book Slot</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-pink-600 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-pink-50 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <button onClick={() => scrollTo('about')} className="block px-3 py-2 text-gray-600 text-lg w-full text-center">About</button>
            <button onClick={() => scrollTo('gallery')} className="block px-3 py-2 text-gray-600 text-lg w-full text-center">Gallery</button>
            <button onClick={() => scrollTo('courses')} className="block px-3 py-2 text-gray-600 text-lg w-full text-center">Courses</button>
            <button onClick={() => scrollTo('contact')} className="block px-3 py-2 text-gray-600 text-lg w-full text-center">Contact</button>
            <button onClick={() => scrollTo('booking')} className="block px-3 py-2 bg-pink-600 text-white rounded-lg w-full text-center mt-2">Book Now</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
