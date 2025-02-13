import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-sky-600">Solve Vare</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-sky-600 transition-colors">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-sky-600 transition-colors">Services</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-sky-600 transition-colors">Portfolio</Link>
            <Link to="/industries" className="text-gray-700 hover:text-sky-600 transition-colors">Industries</Link>
            <Link to="/about" className="text-gray-700 hover:text-sky-600 transition-colors">About</Link>
            <Link to="/contact" className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-sky-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-sky-600">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-sky-600">Services</Link>
            <Link to="/portfolio" className="block px-3 py-2 text-gray-700 hover:text-sky-600">Portfolio</Link>
            <Link to="/industries" className="block px-3 py-2 text-gray-700 hover:text-sky-600">Industries</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-sky-600">About</Link>
            <Link to="/contact" className="block px-3 py-2 bg-sky-600 text-white rounded-md">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;