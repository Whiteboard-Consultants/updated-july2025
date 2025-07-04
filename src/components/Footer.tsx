import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/Version 4 Rectangle white.webp"
                alt="Whiteboard Consultant Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming careers through strategic facilitation, innovative trainings, and collaborative problem-solving methodologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/uow-india-gift-city" className="text-gray-300 hover:text-white transition-colors duration-200">UOW India</Link></li>
              <li><Link to="/college-admissions" className="text-gray-300 hover:text-white transition-colors duration-200">Admissions</Link></li>
              <li><Link to="/test-prep" className="text-gray-300 hover:text-white transition-colors duration-200">Test Prep</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@whiteboardconsultant.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+91 85830 35656</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Serving clients Pan-India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Whiteboard Consultant. All rights reserved. | 
            <Link to="/privacy" className="hover:text-white transition-colors duration-200 ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-white transition-colors duration-200 ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;