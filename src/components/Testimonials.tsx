
import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Downtown District',
      rating: 5,
      text: 'Majestic Painting transformed our entire home. The attention to detail and professionalism was outstanding. They completed the job on time and the results exceeded our expectations.',
      project: 'Full Interior Painting'
    },
    {
      name: 'Michael Chen',
      location: 'Riverside Community',
      rating: 5,
      text: 'Excellent work on our office building exterior. The team was professional, clean, and efficient. Our building looks brand new and has received so many compliments.',
      project: 'Commercial Exterior'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Maple Heights',
      rating: 5,
      text: 'The decorative finish in our dining room is absolutely beautiful. The team listened to our vision and brought it to life perfectly. Highly recommend their specialty services.',
      project: 'Decorative Finishes'
    },
    {
      name: 'David Thompson',
      location: 'Oak Park',
      rating: 5,
      text: 'Professional service from start to finish. Free estimate was detailed and fair. The painters were courteous and left everything spotless. Will definitely use them again.',
      project: 'Kitchen & Living Room'
    },
    {
      name: 'Lisa Wang',
      location: 'Sunset Hills',
      rating: 5,
      text: 'Amazing color consultation service! They helped us choose the perfect colors for our home. The painting quality is exceptional and has made such a difference to our space.',
      project: 'Color Consultation & Painting'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our painting services.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12 animate-on-scroll">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-sky-blue/20" />
            
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Customer Info */}
              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].location}
                </p>
                <p className="text-sm text-sky-blue font-medium mt-1">
                  {testimonials[currentTestimonial].project}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-gray-600" />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-sky-blue w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text.slice(0, 100)}..."
              </p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
