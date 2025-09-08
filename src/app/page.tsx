import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import GallerySection from '@/components/sections/GallerySection';
import TeamSection from '@/components/sections/TeamSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services & Pricing Section */}
      <ServicesSection />
      
      {/* Gallery/Portfolio Section */}
      <GallerySection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Testimonials/Reviews Section */}
      <TestimonialsSection />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
