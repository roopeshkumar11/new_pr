import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

import { FaLinkedin } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Column 1 - About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">About Us</h3>
          <p className="text-sm">
            We showcase a unique collection of traditional turbans from across India — cultural heritage in vibrant style.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/hero" className="hover:underline">Products</Link></li>
            {/* <li><Link to="/contact" className="hover:underline">Contact</Link></li> */}
            <li><Link to="/about" className="hover:underline">About</Link></li>
          </ul>
        </div>

        {/* Column 3 - Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6 text-2xl mt-2">
            <a href="https://www.linkedin.com/in/roopeshkumar11/" className="hover:text-white" aria-label="Facebook"><FaLinkedinIn/></a>
            <a href="https://github.com/roopeshkumar11/" className="hover:text-white" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/roopeshkumar11/" className="hover:text-white" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Turban Heritage. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
