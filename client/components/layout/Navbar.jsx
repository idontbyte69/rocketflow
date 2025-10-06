'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
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
    { 
      name: 'Industries', 
      href: '#industries',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Photography', href: '/photography' },
        { name: 'Education', href: '/education' },
        { name: 'Hotel & Resort', href: '/hotel-and-resort' },
        { name: 'Restaurants', href: '/restaurants' },
        { name: 'Study Abroad', href: '/study-abroad' },
        { name: 'Event', href: '/event' },
        { name: 'Corporate Office', href: '/corporate-office' },
        { name: 'Travel Booking', href: '/travel-booking' },
        { name: 'Event Management', href: '/event-management' },
        { name: 'Salon & Parlor', href: '/salon-and-parlor' },
        { name: 'E-commerce', href: '/e-commerce' },
        { name: 'Organic Products', href: '/organic-products' },
        { name: 'Gadget Shops', href: '/gadget-shops' }
      ]
    },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="RocketFlow Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => {
                        if (item.name === 'Services') setIsServicesDropdownOpen(true);
                        if (item.name === 'Industries') setIsIndustriesDropdownOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (item.name === 'Services') setIsServicesDropdownOpen(false);
                        if (item.name === 'Industries') setIsIndustriesDropdownOpen(false);
                      }}
                    >
                      <a
                        href={item.href}
                        className="text-gray-600 hover:text-coral-500 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                      >
                        {item.name}
                        <svg 
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            (item.name === 'Services' && isServicesDropdownOpen) || 
                            (item.name === 'Industries' && isIndustriesDropdownOpen) 
                              ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>
                      
                      {/* Dropdown Menu */}
                      {((item.name === 'Services' && isServicesDropdownOpen) || 
                        (item.name === 'Industries' && isIndustriesDropdownOpen)) && (
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
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/signin">
              <button 
                className={`group relative px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ease-out transform hover:scale-105
                  ${pathname === '/signin'
                    ? 'text-white bg-coral-500 shadow-lg ring-2 ring-coral-400 ring-opacity-50'
                    : 'text-coral-600 bg-transparent border-2 border-coral-500 hover:bg-coral-500 hover:text-white hover:shadow-md'}`}
              >
                <span className="relative z-10">Sign In</span>
              </button>
            </Link>
            <Link href="/signup">
              <button 
                className={`group relative px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ease-out transform hover:scale-105
                  ${pathname === '/signup'
                    ? 'text-white bg-coral-500 shadow-lg ring-2 ring-coral-400 ring-opacity-50 scale-105'
                    : 'text-white bg-coral-500  hover:from-coral-600 hover:to-red-500 shadow-lg hover:shadow-xl'}`}
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <svg className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Link>
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
                      onClick={() => {
                        if (item.name === 'Services') setIsServicesDropdownOpen(!isServicesDropdownOpen);
                        if (item.name === 'Industries') setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen);
                      }}
                    >
                      {item.name}
                      <svg 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          (item.name === 'Services' && isServicesDropdownOpen) || 
                          (item.name === 'Industries' && isIndustriesDropdownOpen) 
                            ? 'rotate-180' : ''
                        }`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {((item.name === 'Services' && isServicesDropdownOpen) || 
                      (item.name === 'Industries' && isIndustriesDropdownOpen)) && (
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
            <div className="pt-4 pb-2 space-y-3">
              <Link href="/signin" className="block">
                <button 
                  className={`w-full px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 ease-out transform hover:scale-[1.02]
                    ${pathname === '/signin'
                      ? 'text-white bg-coral-500 shadow-lg ring-2 ring-coral-400 ring-opacity-50'
                      : 'text-coral-600 bg-white border-2 border-coral-500 hover:bg-coral-500 hover:text-white hover:shadow-md'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center justify-center">
                    Sign In
                  </span>
                </button>
              </Link>
              <Link href="/signup" className="block">
                <button 
                  className={`w-full px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 ease-out transform hover:scale-[1.02]
                    ${pathname === '/signup'
                      ? 'text-white bg-gradient-to-r from-coral-600 to-red-500 shadow-xl ring-2 ring-coral-400 ring-opacity-50'
                      : 'text-white bg-gradient-to-r from-coral-500 to-red-400 hover:from-coral-600 hover:to-red-500 shadow-lg hover:shadow-xl'}`}
                  onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="flex items-center justify-center">
                        Sign Up
                        <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;