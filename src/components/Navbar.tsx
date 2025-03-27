
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-medical-blue-600 to-medical-green-500 bg-clip-text text-transparent">
                TIET Medi-Care
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-gray-800 hover:text-medical-blue-500 transition-colors font-medium">
              Home
            </a>
            <a href="#features" className="text-gray-800 hover:text-medical-blue-500 transition-colors font-medium">
              Features
            </a>
            <a href="#appointments" className="text-gray-800 hover:text-medical-blue-500 transition-colors font-medium">
              Appointments
            </a>
            <a href="#emergency" className="text-gray-800 hover:text-medical-blue-500 transition-colors font-medium">
              Emergency
            </a>
            <a href="#mental-health" className="text-gray-800 hover:text-medical-blue-500 transition-colors font-medium">
              Mental Health
            </a>
            <a href="#contact" className="text-gray-800 hover:text-medical-blue-500 transition-colors font-medium">
              Contact
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-medical-blue-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-4 space-y-1 sm:px-6">
          <a href="#" className="block py-3 px-4 font-medium hover:bg-medical-blue-50 hover:text-medical-blue-500 transition-colors">
            Home
          </a>
          <a href="#features" className="block py-3 px-4 font-medium hover:bg-medical-blue-50 hover:text-medical-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Features
          </a>
          <a href="#appointments" className="block py-3 px-4 font-medium hover:bg-medical-blue-50 hover:text-medical-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Appointments
          </a>
          <a href="#emergency" className="block py-3 px-4 font-medium hover:bg-medical-blue-50 hover:text-medical-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Emergency
          </a>
          <a href="#mental-health" className="block py-3 px-4 font-medium hover:bg-medical-blue-50 hover:text-medical-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Mental Health
          </a>
          <a href="#contact" className="block py-3 px-4 font-medium hover:bg-medical-blue-50 hover:text-medical-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
