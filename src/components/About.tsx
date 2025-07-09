import React from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Peace of mind with full licensing and insurance.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to quality.',
    },
    {
      icon: Award,
      title: 'Quality Work',
      description: 'Exceptional craftsmanship with premium materials.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Respecting your schedule, delivering on time.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Image */}
          <div className="rounded-xl overflow-hidden shadow-lg animate-on-scroll h-full">
            <img
              src="https://plus.unsplash.com/premium_photo-1683141426994-c7a753b5100a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFpbnQlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Painter at Work"
              className="w-full h-full object-cover"
              style={{ minHeight: '400px' }}
            />
          </div>

          {/* Right Side - Title & Features vertically spaced */}
          <div className="flex flex-col justify-center h-full animate-on-scroll max-w-xl mx-auto">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-10">
              About <span className="text-sky-600">Majestic Painting</span>
            </h2>

            <div className="flex flex-col justify-between h-full space-y-8">
              {features.map(({ icon: Icon, title, description }, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-5 p-5 bg-sky-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-sky-600 p-3 rounded-lg flex items-center justify-center text-white">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    <p className="text-gray-700 text-sm">{description}</p>
                  </div>
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
