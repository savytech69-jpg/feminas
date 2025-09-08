'use client';

import { StarIcon } from '@heroicons/react/24/solid';
import { SparklesIcon, HeartIcon, ScissorsIcon } from '@heroicons/react/24/outline';

export default function TeamSection() {
  // Team members data - Replace with actual team information
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Lead Makeup Artist & Founder',
      specialties: ['Bridal Makeup', 'Special Effects', 'Photography Makeup'],
      experience: '8+ years',
      description: 'Sarah founded Feminas with a passion for enhancing natural beauty. Specializing in bridal and special occasion makeup.',
      image: '/images/team-sarah.svg',
      achievements: [
        'Certified Professional Makeup Artist',
        '500+ Brides Served',
        'Featured in Local Wedding Magazine',
      ],
      socialMedia: {
        instagram: '#',
        portfolio: '#',
      }
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      role: 'Senior Hair Stylist',
      specialties: ['Wedding Hair', 'Hair Color', 'Hair Treatments'],
      experience: '6+ years',
      description: 'Maria brings creativity and precision to every hairstyle, from classic updos to modern cuts and vibrant colors.',
      image: '/images/team-maria.svg',
      achievements: [
        'Advanced Hair Coloring Certification',
        'Bridal Hair Specialist',
        '300+ Satisfied Clients',
      ],
      socialMedia: {
        instagram: '#',
        portfolio: '#',
      }
    },
    {
      id: 3,
      name: 'Jennifer Kim',
      role: 'Makeup Artist & Esthetician',
      specialties: ['Natural Makeup', 'Skincare', 'Teen Makeovers'],
      experience: '4+ years',
      description: 'Jennifer focuses on enhancing natural beauty and provides expert skincare advice alongside beautiful makeup applications.',
      image: '/images/team-jennifer.svg',
      achievements: [
        'Licensed Esthetician',
        'Natural Beauty Specialist',
        'Youth Makeup Expert',
      ],
      socialMedia: {
        instagram: '#',
        portfolio: '#',
      }
    },
    {
      id: 4,
      name: 'Amanda White',
      role: 'Hair Stylist & Color Specialist',
      specialties: ['Hair Cutting', 'Balayage', 'Hair Extensions'],
      experience: '5+ years',
      description: 'Amanda excels in creating stunning hair transformations with expert cutting techniques and beautiful color work.',
      image: '/images/team-amanda.svg',
      achievements: [
        'Master Hair Colorist',
        'Extension Specialist',
        'Modern Cutting Techniques',
      ],
      socialMedia: {
        instagram: '#',
        portfolio: '#',
      }
    },
  ];

  // Team statistics
  const stats = [
    { number: '1000+', label: 'Happy Clients', icon: HeartIcon },
    { number: '15+', label: 'Years Combined Experience', icon: StarIcon },
    { number: '500+', label: 'Bridal Makeovers', icon: SparklesIcon },
    { number: '24/7', label: 'Support Available', icon: ScissorsIcon },
  ];

  return (
    <section id="team" className="py-20 lg:py-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our talented team of beauty professionals is dedicated to bringing out your natural beauty. 
            Each stylist brings unique skills and years of experience to ensure you look and feel amazing.
          </p>
        </div>

        {/* Team Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 text-pink-600">
                <stat.icon className="w-full h-full" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Member Photo */}
              <div className="relative overflow-hidden">
                <div className="aspect-[3/4] bg-gradient-to-br from-pink-200 to-rose-300 flex items-center justify-center">
                  {/* Placeholder for team member photo */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-pink-600">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium text-sm">Professional Photo</p>
                  </div>
                </div>
                
                {/* Overlay with social links - appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-3 justify-center">
                      <a
                        href={member.socialMedia.instagram}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        aria-label="Instagram"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a
                        href={member.socialMedia.portfolio}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        aria-label="Portfolio"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Member Information */}
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-pink-600 font-semibold text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Experience */}
                <div className="mb-4">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <StarIcon className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700">
                      {member.experience} Experience
                    </span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2 text-center">
                    Specialties
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2 text-center">
                    Achievements
                  </h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">
              Book with Your Favorite Stylist
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Have a preferred team member? Let us know when booking your appointment, 
              and we'll make sure you get the perfect stylist for your needs.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-pink-600 to-rose-600 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 btn-hover"
            >
              Schedule Your Appointment
            </a>
          </div>
        </div>

        {/* Note about photos */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            * Replace placeholder content with actual team member photos, bios, and social media links from your staff.
          </p>
        </div>
      </div>
    </section>
  );
}
