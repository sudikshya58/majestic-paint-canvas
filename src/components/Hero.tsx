
import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-50 to-blue-50"></div>
        <div className="absolute inset-0 bg-blue-gradient opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium">
                Trusted by 500+ Happy Customers
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted{' '}
              <span className="gradient-text">Painting Experts</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Adding Color to Your World with Precision and Style. Professional residential 
              and commercial painting services that transform your space.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-blue-gradient hover:opacity-90 transition-all duration-300 text-lg px-8 py-4 group"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                'Licensed & Insured',
                'Free Estimates',
                '10+ Years Experience'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative animate-scale-in">
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-100 to-sky-100 rounded-2xl shadow-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl text-white">🏠</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      Professional Results
                    </h3>
                    <p className="text-gray-600">
                      Transform your space with expert painting
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-fade-in">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Quality Guaranteed</p>
                    <p className="text-sm text-gray-600">100% Satisfaction</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-fade-in">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sky-blue">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-sky-blue/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-navy-blue/10 rounded-full animate-pulse"></div>
    </section>
  );
};

export default Hero;
