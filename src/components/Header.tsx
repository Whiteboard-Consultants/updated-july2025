import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showAdmissionsDropdown, setShowAdmissionsDropdown] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Study Abroad', href: '/study-abroad' },
    { 
      name: 'Admissions', 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'UOW - East India Partner', href: '/uow-india-gift-city' },
        { name: 'Domestic Admissions', href: '/college-admissions' }
      ]
    },
    { name: 'Test Prep', href: '/test-prep' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: '#005CB4' }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/Version 4 Rectangle white.webp"
              alt="Whiteboard Consultant Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setShowAdmissionsDropdown(!showAdmissionsDropdown)}
                      className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-blue-100 hover:text-white transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {showAdmissionsDropdown && (
                      <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            onClick={() => setShowAdmissionsDropdown(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-white border-b-2 border-white'
                        : 'text-blue-100 hover:text-white hover:border-b-2 hover:border-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Student Login Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLoginDropdown(!showLoginDropdown)}
                className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors duration-200 px-3 py-2"
              >
                <User className="h-4 w-4" />
                <span className="text-sm font-medium">Student Login</span>
              </button>
              
              {showLoginDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link
                    to="/student-login"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setShowLoginDropdown(false)}
                  >
                    Access LMS Portal
                  </Link>
                  <Link
                    to="/student-register"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setShowLoginDropdown(false)}
                  >
                    Register for Courses
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-200 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-blue-400">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <div className="px-3 py-2 text-blue-100 font-medium">{item.name}</div>
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block pl-6 pr-3 py-2 text-blue-100 hover:text-white hover:bg-blue-700 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-white bg-blue-700'
                          : 'text-blue-100 hover:text-white hover:bg-blue-700'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Student Login */}
              <div className="border-t border-blue-400 pt-2 mt-2">
                <Link
                  to="/student-login"
                  className="block px-3 py-2 text-blue-100 hover:text-white hover:bg-blue-700 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Student Login
                </Link>
                <Link
                  to="/student-register"
                  className="block px-3 py-2 text-blue-100 hover:text-white hover:bg-blue-700 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register for Courses
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;