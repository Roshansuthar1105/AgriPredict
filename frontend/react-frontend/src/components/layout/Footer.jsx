import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-section">
            <h3 className="text-lg font-semibold text-green-700 mb-4">AgriPredict</h3>
            <p className="text-gray-600">Empowering farmers with AI-driven agricultural insights since 2023</p>
          </div>
          
          <div className="footer-section">
            <h3 className="text-lg font-semibold text-green-700 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-green-600">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-green-600">About</Link></li>
              <li><Link to="/predict" className="text-gray-600 hover:text-green-600">Predict</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-green-600">Resources</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-green-600">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-green-600">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="text-lg font-semibold text-green-700 mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-2">Email: info@agripredict.com</p>
            <p className="text-gray-600">Phone: +91 9876543210</p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-600">&copy; 2025 AgriPredict. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
