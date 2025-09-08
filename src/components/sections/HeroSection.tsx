'use client';

import { ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';
import { SparklesIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-24 overflow-hidden">
      {/* Background with enhanced overlay for better text visibility */}
      <div className="absolute inset-0 z-0">
        {/* Hero background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-professional-bg.svg)',
          }}
        ></div>
        {/* Enhanced multi-layer overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/95 via-rose-50/90 to-purple-50/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-gray-800/10 to-transparent"></div>
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-pink-200 opacity-30">
          <SparklesIcon className="w-12 h-12" />
        </div>
        <div className="absolute bottom-32 right-16 text-rose-200 opacity-30">
          <HeartIcon className="w-16 h-16" />
        </div>
        <div className="absolute top-1/3 right-20 text-indigo-200 opacity-20">
          <StarIcon className="w-8 h-8" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Main Heading with enhanced visibility */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
            <span className="block gradient-text drop-shadow-md">Transform Your</span>
            <span className="block text-gray-800 drop-shadow-md">Natural Beauty</span>
          </h1>

          {/* Subheading with better contrast */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-sm bg-white/30 backdrop-blur-sm rounded-2xl px-6 py-4">
            Professional makeup, hair styling, and beauty treatments for the whole family. 
            Experience the art of transformation at <span className="font-semibold text-pink-700">Feminas Family Makeover Studio</span>.
          </p>

          {/* Trust Indicators with enhanced visibility */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 bg-white/40 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-500 drop-shadow-sm" />
                ))}
              </div>
              <span className="text-gray-800 font-semibold drop-shadow-sm">500+ Happy Clients</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-400"></div>
            <div className="flex items-center space-x-2">
              <SparklesIcon className="w-5 h-5 text-pink-600 drop-shadow-sm" />
              <span className="text-gray-800 font-semibold drop-shadow-sm">Expert Stylists</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-400"></div>
            <div className="flex items-center space-x-2">
              <HeartIcon className="w-5 h-5 text-rose-600 drop-shadow-sm" />
              <span className="text-gray-800 font-semibold drop-shadow-sm">Family Friendly</span>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 btn-hover flex items-center space-x-2 shadow-lg"
            >
              <span>Book Your Appointment</span>
              <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#gallery"
              className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 btn-hover"
            >
              View Our Work
            </a>
          </div>

          {/* Featured Services Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'Bridal Makeup', icon: '💄' },
              { name: 'Hair Styling', icon: '💇‍♀️' },
              { name: 'Family Photos', icon: '👨‍👩‍👧‍👦' },
              { name: 'Special Events', icon: '✨' },
            ].map((service, index) => (
              <div
                key={service.name}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-pink-100"
              >
                <div className="text-3xl mb-2">{service.icon}</div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pink-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
