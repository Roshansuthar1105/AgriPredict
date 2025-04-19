import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="font-pacifico text-2xl text-green-600">
          <Link to="/">🌱 AgriPredict</Link>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link 
              to="/" 
              className="font-medium hover:text-green-600 relative after:absolute after:w-0 after:h-0.5 after:bg-green-600 after:bottom-0 after:left-0 hover:after:w-full after:transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="font-medium hover:text-green-600 relative after:absolute after:w-0 after:h-0.5 after:bg-green-600 after:bottom-0 after:left-0 hover:after:w-full after:transition-all"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/predict" 
              className="font-medium hover:text-green-600 relative after:absolute after:w-0 after:h-0.5 after:bg-green-600 after:bottom-0 after:left-0 hover:after:w-full after:transition-all"
            >
              Predict
            </Link>
          </li>
          <li>
            <Link 
              to="/resources" 
              className="font-medium hover:text-green-600 relative after:absolute after:w-0 after:h-0.5 after:bg-green-600 after:bottom-0 after:left-0 hover:after:w-full after:transition-all"
            >
              Resources
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              className="font-medium hover:text-green-600 relative after:absolute after:w-0 after:h-0.5 after:bg-green-600 after:bottom-0 after:left-0 hover:after:w-full after:transition-all"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="font-medium hover:text-green-600 relative after:absolute after:w-0 after:h-0.5 after:bg-green-600 after:bottom-0 after:left-0 hover:after:w-full after:transition-all"
            >
              Contact
            </Link>
          </li>
        </ul>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
