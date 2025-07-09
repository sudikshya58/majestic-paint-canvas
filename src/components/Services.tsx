
import React from 'react';
import { Home, Building, Paintbrush, Palette, Sparkles, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Interior Painting',
      description: 'Transform your indoor spaces with professional interior painting services. We handle everything from prep work to final touches.',
      features: ['Wall preparation', 'Primer application', 'Quality paint finishes', 'Clean-up service']
    },
    {
      icon: Building,
      title: 'Exterior Painting',
      description: 'Protect and beautify your property with our exterior painting expertise. Weather-resistant solutions that last.',
      features: ['Pressure washing', 'Surface repairs', 'Weather protection', 'Curb appeal boost']
    },
    {
      icon: Building,
      title: 'Commercial Painting',
      description: 'Professional painting services for offices, retail spaces, and commercial properties. Minimal disruption guaranteed.',
      features: ['Flexible scheduling', 'Quick turnaround', 'Professional appearance', 'Minimal downtime']
    },
    {
      icon: Sparkles,
      title: 'Wallpaper & Texture',
      description: 'Expert wallpaper installation and removal, plus custom texture applications for unique wall finishes.',
      features: ['Wallpaper installation', 'Removal services', 'Texture application', 'Pattern matching']
    },
    {
      icon: Paintbrush,
      title: 'Decorative Finishes',
      description: 'Specialty finishes including faux painting, murals, and artistic treatments to make your space unique.',
      features: ['Faux painting', 'Mural creation', 'Specialty techniques', 'Custom designs']
    },
    {
      icon: Palette,
      title: 'Color Consultation',
      description: 'Professional color advice to help you choose the perfect palette for your space and style preferences.',
      features: ['Color matching', 'Design advice', 'Sample testing', 'Trend insights']
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential touch-ups to complete commercial transformations, 
            we offer comprehensive painting and decoration services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-blue-gradient rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-sky-blue rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-blue-gradient hover:opacity-90 transition-all duration-300 text-lg px-8 py-4"
          >
            Get Your Free Estimate Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
