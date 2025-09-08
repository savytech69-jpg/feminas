'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Gallery categories
  const categories = [
    { id: 'all', name: 'All Work', count: 20 },
    { id: 'bridal', name: 'Bridal', count: 5 },
    { id: 'hair', name: 'Hair Styling', count: 5 },
    { id: 'makeup', name: 'Makeup', count: 6 },
    { id: 'family', name: 'Family', count: 4 },
  ];

  // Portfolio items - Beautiful transformation images
  const portfolioItems = [
    {
      id: 1,
      category: 'bridal',
      title: 'Elegant Bridal Makeup',
      description: 'Complete bridal transformation with traditional styling',
      beforeImage: '/images/bridal-1.svg',
      afterImage: '/images/bridal-1.svg',
      featured: true,
    },
    {
      id: 2,
      category: 'hair',
      title: 'Wedding Hair Styling',
      description: 'Intricate braided updo with fresh flowers',
      beforeImage: '/images/hair-1.svg',
      afterImage: '/images/hair-1.svg',
    },
    {
      id: 3,
      category: 'makeup',
      title: 'Glamorous Party Look',
      description: 'Bold and stunning makeup for special events',
      beforeImage: '/images/makeup-1.svg',
      afterImage: '/images/makeup-1.svg',
    },
    {
      id: 4,
      category: 'family',
      title: 'Mother-Daughter Makeover',
      description: 'Beautiful family photo session preparation',
      beforeImage: '/images/family-1.svg',
      afterImage: '/images/family-1.svg',
    },
    {
      id: 5,
      category: 'bridal',
      title: 'Modern Bridal Style',
      description: 'Contemporary bridal look with subtle elegance',
      beforeImage: '/images/bridal-2.svg',
      afterImage: '/images/bridal-2.svg',
    },
    {
      id: 6,
      category: 'hair',
      title: 'Vintage Hair Transformation',
      description: 'Classic vintage waves for a retro photo shoot',
      beforeImage: '/images/hair-2.svg',
      afterImage: '/images/hair-2.svg',
    },
    {
      id: 7,
      category: 'makeup',
      title: 'Natural Glow Makeup',
      description: 'Enhancing natural beauty with subtle techniques',
      beforeImage: '/images/makeup-2.svg',
      afterImage: '/images/makeup-2.svg',
    },
    {
      id: 8,
      category: 'family',
      title: 'Teen Makeover Session',
      description: 'Age-appropriate styling for young clients',
      beforeImage: '/images/family-2.svg',
      afterImage: '/images/family-2.svg',
    },
    {
      id: 9,
      category: 'bridal',
      title: 'Classic Bridal Look',
      description: 'Timeless elegance for traditional ceremonies',
      beforeImage: '/images/bridal-3.svg',
      afterImage: '/images/bridal-3.svg',
    },
    {
      id: 10,
      category: 'hair',
      title: 'Hair Color Transformation',
      description: 'Bold new colors and vibrant highlights',
      beforeImage: '/images/hair-3.svg',
      afterImage: '/images/hair-3.svg',
    },
    {
      id: 11,
      category: 'bridal',
      title: 'Destination Bridal',
      description: 'Beach wedding makeup with natural glow',
      beforeImage: '/images/bridal-4.svg',
      afterImage: '/images/bridal-4.svg',
    },
    {
      id: 12,
      category: 'bridal',
      title: 'Evening Bridal',
      description: 'Dramatic elegance for evening ceremonies',
      beforeImage: '/images/bridal-5.svg',
      afterImage: '/images/bridal-5.svg',
    },
    {
      id: 13,
      category: 'hair',
      title: 'Elegant Updo',
      description: 'Sophisticated styling for special events',
      beforeImage: '/images/hair-4.svg',
      afterImage: '/images/hair-4.svg',
    },
    {
      id: 14,
      category: 'hair',
      title: 'Hair Extensions',
      description: 'Adding length and volume transformation',
      beforeImage: '/images/hair-5.svg',
      afterImage: '/images/hair-5.svg',
    },
    {
      id: 15,
      category: 'makeup',
      title: 'Evening Makeup',
      description: 'Bold and dramatic look for night events',
      beforeImage: '/images/makeup-3.svg',
      afterImage: '/images/makeup-3.svg',
    },
    {
      id: 16,
      category: 'makeup',
      title: 'Photo Makeup',
      description: 'Camera-ready professional makeup',
      beforeImage: '/images/makeup-4.svg',
      afterImage: '/images/makeup-4.svg',
    },
    {
      id: 17,
      category: 'family',
      title: 'Three Generations',
      description: 'Grandmother, mother, and daughter session',
      beforeImage: '/images/family-3.svg',
      afterImage: '/images/family-3.svg',
    },
    {
      id: 18,
      category: 'family',
      title: 'Full Family Event',
      description: 'Complete family preparation for special occasions',
      beforeImage: '/images/family-4.svg',
      afterImage: '/images/family-4.svg',
    },
    {
      id: 19,
      category: 'makeup',
      title: 'Maternity Glow',
      description: 'Beautiful makeup for expecting mothers',
      beforeImage: '/images/special-1.svg',
      afterImage: '/images/special-1.svg',
    },
    {
      id: 20,
      category: 'makeup',
      title: 'Prom Makeup',
      description: 'Glamorous look for special school events',
      beforeImage: '/images/special-2.svg',
      afterImage: '/images/special-2.svg',
    },
  ];

  // Filter portfolio items based on selected category
  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Witness the amazing transformations we've created for our clients. 
            Each before and after tells a story of confidence and beauty.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${
                item.featured ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Before/After Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                
                {/* Before Image (Default) */}
                <div className="absolute inset-0 transition-transform duration-500 group-hover:translate-x-full">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📸</div>
                      <p className="text-gray-600 font-medium">Before</p>
                      <p className="text-sm text-gray-500 mt-2 px-4">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                      BEFORE
                    </span>
                  </div>
                </div>

                {/* After Image (On Hover) */}
                <div className="absolute inset-0 transition-transform duration-500 translate-x-full group-hover:translate-x-0">
                  <div className="w-full h-full bg-gradient-to-br from-pink-200 to-rose-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">✨</div>
                      <p className="text-gray-700 font-medium">After</p>
                      <p className="text-sm text-gray-600 mt-2 px-4">
                        {item.title}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      AFTER
                    </span>
                  </div>
                </div>

                {/* Overlay with Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                    <div className="mt-3 flex items-center text-xs">
                      <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Instructions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <div className="flex items-center space-x-2 text-gray-700">
                      <ChevronLeftIcon className="w-4 h-4" />
                      <span className="text-xs font-medium">Hover to see transformation</span>
                      <ChevronRightIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-100">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">
              Ready for Your Transformation?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have experienced the magic of our makeover services. 
              Book your consultation today and let us create your perfect look.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 btn-hover"
              >
                Book Your Makeover
              </a>
              <a
                href="https://www.instagram.com/feminas_family_makeover_studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                See More on Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Note about images */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            * Portfolio images are placeholders. Replace with actual before/after photos from your Instagram and Facebook pages.
          </p>
        </div>
      </div>
    </section>
  );
}
