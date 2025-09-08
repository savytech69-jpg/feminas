'use client';

import { CheckIcon } from '@heroicons/react/24/solid';

export default function ServicesSection() {
  // Services data with pricing
  const services = [
    {
      category: 'Bridal Services',
      icon: '👰',
      description: 'Complete bridal makeover packages for your special day',
      image: '/images/service-bridal.svg',
      services: [
        { name: 'Bridal Makeup', price: '$150', duration: '2 hours' },
        { name: 'Bridal Hair Styling', price: '$100', duration: '1.5 hours' },
        { name: 'Complete Bridal Package', price: '$220', duration: '3 hours' },
        { name: 'Trial Session', price: '$80', duration: '1 hour' },
      ],
      popular: true,
    },
    {
      category: 'Hair Services',
      icon: '💇‍♀️',
      description: 'Professional hair styling and treatments',
      image: '/images/service-hair.svg',
      services: [
        { name: 'Hair Cut & Style', price: '$45', duration: '1 hour' },
        { name: 'Hair Color', price: '$80', duration: '2 hours' },
        { name: 'Hair Treatment', price: '$60', duration: '1.5 hours' },
        { name: 'Special Occasion Style', price: '$55', duration: '1 hour' },
      ],
    },
    {
      category: 'Makeup Services',
      icon: '💄',
      description: 'Expert makeup for all occasions',
      image: '/images/service-makeup.svg',
      services: [
        { name: 'Party Makeup', price: '$60', duration: '1 hour' },
        { name: 'Natural Makeup', price: '$40', duration: '45 mins' },
        { name: 'Photoshoot Makeup', price: '$70', duration: '1 hour' },
        { name: 'Special Event Makeup', price: '$65', duration: '1 hour' },
      ],
    },
    {
      category: 'Family Packages',
      icon: '👨‍👩‍👧‍👦',
      description: 'Special packages for the whole family',
      image: '/images/service-family.svg',
      services: [
        { name: 'Mother-Daughter Package', price: '$120', duration: '2 hours' },
        { name: 'Family Photo Prep', price: '$180', duration: '3 hours' },
        { name: 'Kids Makeup (6-12)', price: '$25', duration: '30 mins' },
        { name: 'Teen Makeover', price: '$50', duration: '1 hour' },
      ],
    },
    {
      category: 'Facial Treatments',
      icon: '✨',
      description: 'Rejuvenating facial treatments and skincare',
      services: [
        { name: 'Classic Facial', price: '$75', duration: '1 hour' },
        { name: 'Anti-Aging Facial', price: '$95', duration: '1.5 hours' },
        { name: 'Deep Cleansing Facial', price: '$65', duration: '1 hour' },
        { name: 'Hydrating Facial', price: '$70', duration: '1 hour' },
      ],
    },
    {
      category: 'Special Add-Ons',
      icon: '💎',
      description: 'Enhance your experience with premium add-ons',
      services: [
        { name: 'False Eyelashes', price: '$15', duration: '15 mins' },
        { name: 'Eyebrow Shaping', price: '$20', duration: '30 mins' },
        { name: 'Makeup Touch-up Kit', price: '$25', duration: '10 mins' },
        { name: 'Hair Accessories', price: '$30', duration: '15 mins' },
      ],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span> & Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of beauty services designed to enhance your natural beauty. 
            Transparent pricing with no hidden fees.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((category, index) => (
            <div
              key={category.category}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border ${
                category.popular ? 'border-pink-200 ring-2 ring-pink-100' : 'border-gray-100'
              }`}
            >
              {/* Popular Badge */}
              {category.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6 lg:p-8">
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                    {category.category}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Services List */}
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={service.name}
                      className="flex justify-between items-start py-3 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex-1 pr-4">
                        <div className="flex items-start space-x-3">
                          <CheckIcon className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-gray-800 text-sm lg:text-base block">
                              {service.name}
                            </span>
                            <p className="text-xs lg:text-sm text-gray-500 mt-1">
                              {service.duration}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="font-bold text-pink-600 text-lg lg:text-xl">
                          {service.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Book Now Button */}
                <div className="mt-6">
                  <a
                    href="#contact"
                    className={`w-full block text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                      category.popular
                        ? 'bg-gradient-to-r from-pink-600 to-rose-600 hover:from-purple-700 hover:to-purple-900 text-white btn-hover'
                        : 'border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white'
                    }`}
                  >
                    Book {category.category}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Special Offers & Packages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-bold mb-2">First Time Client</h4>
                <p className="text-sm mb-2">20% off any service</p>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Limited Time</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-bold mb-2">Group Booking</h4>
                <p className="text-sm mb-2">15% off for 3+ people</p>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Always Available</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-bold mb-2">Monthly Package</h4>
                <p className="text-sm mb-2">3 services for $150</p>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Best Value</span>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Contact for Custom Packages
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
