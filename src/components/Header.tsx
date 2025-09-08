'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation menu items
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            {/* Feminas Logo - Updated to pink theme */}
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg lg:text-xl">F</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold gradient-text">
                Feminas Family
              </span>
              <span className="text-xs lg:text-sm text-gray-600 -mt-1">
                Makeover Studio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+1234567890" 
              className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Call Us</span>
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-purple-700 hover:to-purple-900 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 btn-hover"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-pink-600 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2 border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t pt-3 mt-3">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <PhoneIcon className="w-4 h-4" />
                  <span className="font-medium">Call Us</span>
                </a>
                <a
                  href="#contact"
                  className="block mx-3 mt-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white px-4 py-2 rounded-full font-medium text-center transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
