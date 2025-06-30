import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='fixed w-full z-50 text-black backdrop-blur-md bg-black/15 shadow-md'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Enhanced VishnuV Logo */}
        <div className="group relative">
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-red-600 transition-all duration-500">
            <span className="text-white">VISHNU<span className="text-yellow-100">V</span></span>
          </div>
          <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
        </div>

        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto 
            backdrop-blur-md bg-white/10 md:bg-transparent text-white shadow-md md:shadow-none 
            transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
        >
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }} 
            className='block px-6 py-2 md:inline hover:text-yellow-300 transition-colors'
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }} 
            className='block px-6 py-2 md:inline hover:text-yellow-300 transition-colors'
          >
            About
          </a>
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('service');
            }} 
            className='block px-6 py-2 md:inline hover:text-yellow-300 transition-colors'
          >
            Services
          </a>
          <a 
            href="#project" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('project');
            }} 
            className='block px-6 py-2 md:inline hover:text-yellow-300 transition-colors'
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }} 
            className='block px-6 py-2 md:inline hover:text-yellow-300 transition-colors'
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;