'use client';

import { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Function to format date consistently
  const formatDate = (dateString: string) => {
    // Parse the date and format it consistently
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Testimonials data - Replace with actual reviews from Instagram/Facebook
  const testimonials = [
    {
      id: 1,
      name: 'Emily Johnson',
      service: 'Bridal Makeup Package',
      rating: 5,
      date: '2024-08-15',
      review: "Absolutely amazing experience! Sarah did my wedding makeup and I felt like a princess. The team was professional, friendly, and made me feel so comfortable. My makeup lasted all day and looked perfect in photos. Highly recommend!",
      image: '/api/placeholder/80/80', // Replace with actual client photo (with permission)
      platform: 'Instagram',
      verified: true,
      beforeAfter: true,
    },
    {
      id: 2,
      name: 'Maria Santos',
      service: 'Hair Styling & Makeup',
      rating: 5,
      date: '2024-07-20',
      review: "I've been coming to Feminas for over a year now and they never disappoint! Maria always knows exactly what I need for my hair, and the makeup artists are incredibly talented. It's my go-to place for special events.",
      image: '/api/placeholder/80/80',
      platform: 'Facebook',
      verified: true,
      beforeAfter: false,
    },
    {
      id: 3,
      name: 'Jennifer Lee',
      service: 'Mother-Daughter Package',
      rating: 5,
      date: '2024-09-01',
      review: "We booked the mother-daughter package for family photos and it was perfect! Both my daughter and I felt beautiful and confident. The team was so patient with my 12-year-old and made the whole experience fun and memorable.",
      image: '/api/placeholder/80/80',
      platform: 'Instagram',
      verified: true,
      beforeAfter: true,
    },
    {
      id: 4,
      name: 'Ashley Rodriguez',
      service: 'Party Makeup',
      rating: 5,
      date: '2024-06-10',
      review: "The makeup for my graduation party was absolutely stunning! Jennifer did such an amazing job enhancing my natural features. I received so many compliments and felt incredibly confident. Will definitely be back!",
      image: '/api/placeholder/80/80',
      platform: 'Facebook',
      verified: true,
      beforeAfter: false,
    },
    {
      id: 5,
      name: 'Rachel Thompson',
      service: 'Bridal Hair & Makeup',
      rating: 5,
      date: '2024-05-25',
      review: "My wedding day was perfect thanks to the Feminas team! They did both my hair and makeup and I couldn't have been happier. The trial session beforehand made me feel so confident in my choice. Professional and talented!",
      image: '/api/placeholder/80/80',
      platform: 'Instagram',
      verified: true,
      beforeAfter: true,
    },
    {
      id: 6,
      name: 'Lisa Chen',
      service: 'Facial Treatment',
      rating: 5,
      date: '2024-08-30',
      review: "The facial treatment was incredibly relaxing and my skin has never looked better! The staff is knowledgeable about skincare and gave me great advice for my routine. This is definitely my new favorite spa.",
      image: '/api/placeholder/80/80',
      platform: 'Facebook',
      verified: true,
      beforeAfter: false,
    },
  ];

  // Review statistics
  const stats = [
    { number: '4.9/5', label: 'Average Rating' },
    { number: '500+', label: 'Happy Clients' },
    { number: '95%', label: 'Return Rate' },
    { number: '100%', label: 'Satisfaction' },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients have to say about their 
            transformative experiences at Feminas Family Makeover Studio.
          </p>
        </div>

        {/* Review Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-md">
              <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="relative mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-pink-100">
            <div className="text-center mb-8">
              
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg lg:text-xl text-gray-700 italic mb-8 max-w-4xl mx-auto leading-relaxed">
                "{testimonials[currentTestimonial].review}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-700">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-800">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-pink-600 font-medium text-sm">
                    {testimonials[currentTestimonial].service}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-gray-500">
                      {formatDate(testimonials[currentTestimonial].date)}
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                      {testimonials[currentTestimonial].platform}
                    </span>
                    {testimonials[currentTestimonial].verified && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeftIcon className="w-5 h-5 text-pink-600" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-pink-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRightIcon className="w-5 h-5 text-pink-600" />
              </button>
            </div>
          </div>
        </div>

        {/* All Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm mb-4 line-clamp-4">
                "{testimonial.review}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-gray-700">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-pink-600 text-xs">
                    {testimonial.service}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                      {testimonial.platform}
                    </span>
                    {testimonial.verified && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        ✓
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Join Our Happy Clients
            </h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Ready to experience the transformation that our clients rave about? 
              Book your appointment today and see why we have hundreds of 5-star reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Book Your Transformation
              </a>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.instagram.com/feminas_family_makeover_studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-colors"
                >
                  Follow on Instagram
                </a>
                <a
                  href="https://www.facebook.com/feminasspa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-colors"
                >
                  Like on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Note about reviews */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            * Replace with actual client reviews and testimonials from your Instagram and Facebook pages. 
            Always get permission before using client photos.
          </p>
        </div>
      </div>
    </section>
  );
}
