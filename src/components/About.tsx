
import React from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your peace of mind'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience'
    },
    {
      icon: Award,
      title: 'Quality Work',
      description: 'Premium materials and exceptional craftsmanship'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We respect your schedule and deliver on time'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="gradient-text">Majestic Painting</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Majestic Painting and Decoration is known for precision, professionalism, 
              and a splash of creativity. With over 10 years of experience in the industry, 
              we've transformed hundreds of homes and businesses across the region.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to excellence and attention to detail sets us apart. We use 
              only premium materials and proven techniques to ensure your project not only 
              looks beautiful but stands the test of time.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-blue mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-blue mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-blue mb-2">100%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-blue mb-2">24/7</div>
                <div className="text-gray-600">Customer Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="animate-on-scroll">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-light-grey rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-blue-gradient rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
