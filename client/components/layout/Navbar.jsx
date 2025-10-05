'use client'

import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { 
      name: 'Services', 
      href: '#services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Digital Transformation', href: '#digital-transformation' },
        { name: 'Cloud Solutions', href: '#cloud-solutions' },
        { name: 'Data Analytics', href: '#data-analytics' },
        { name: 'AI & Machine Learning', href: '#ai-ml' },
        { name: 'Cybersecurity', href: '#cybersecurity' },
        { name: 'Software Development', href: '#software-development' }
      ]
    },
    { name: 'Industries', href: '#industries' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="RocketFlow Logo" className="h-8 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <a
                        href={item.href}
                        className="text-gray-600 hover:text-coral-500 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                      >
                        {item.name}
                        <svg 
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>
                      
                      {/* Dropdown Menu */}
                      {isServicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                          <div className="py-2">
                            {item.dropdownItems.map((dropdownItem) => (
                              <a
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-coral-500 hover:bg-gray-50 transition-colors duration-200"
                              >
                                {dropdownItem.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-coral-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-coral-500 px-4 py-2 text-sm font-medium transition-colors duration-200">
              Sign In
            </button>
            <button className="bg-coral-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-coral-600 transition-all duration-200 hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-coral-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-coral-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="w-full text-left text-gray-600 hover:text-coral-500 px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center justify-between"
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    >
                      {item.name}
                      <svg 
                        className={`h-4 w-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isServicesDropdownOpen && (
                      <div className="pl-6 space-y-1">
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block text-gray-500 hover:text-coral-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-coral-500 block px-3 py-2 text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2 space-y-2">
              <button className="w-full text-left text-gray-600 hover:text-coral-500 px-3 py-2 text-base font-medium transition-colors duration-200">
                Sign In
              </button>
              <button className="w-full bg-coral-500 text-white px-3 py-2 rounded-full text-base font-medium hover:bg-coral-600 transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;