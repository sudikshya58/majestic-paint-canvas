
import React, { useState } from 'react';
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: 'Modern Living Room',
      category: 'Interior',
      description: 'Complete interior transformation with custom color palette',
      beforeImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3',
      afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3'
    },
    {
      title: 'Exterior House Refresh',
      category: 'Exterior',
      description: 'Weather-resistant paint job that enhanced curb appeal',
      beforeImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3',
      afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3'
    },
    {
      title: 'Office Space Makeover',
      category: 'Commercial',
      description: 'Professional workspace transformation',
      beforeImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3',
      afterImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3'
    },
    {
      title: 'Kitchen Cabinet Refinish',
      category: 'Interior',
      description: 'Cabinet painting that gave new life to the kitchen',
      beforeImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3',
      afterImage: 'https://images.unsplash.com/photo-1556909045-f58f22ef1b87?ixlib=rb-4.0.3'
    },
    {
      title: 'Decorative Wall Finish',
      category: 'Specialty',
      description: 'Custom textured wall with artistic flair',
      beforeImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3',
      afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3'
    },
    {
      title: 'Retail Store Paint',
      category: 'Commercial',
      description: 'Vibrant commercial space transformation',
      beforeImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3',
      afterImage: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3'
    }
  ];

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setSelectedProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the transformations we've created for our satisfied customers. 
            Each project showcases our commitment to quality and attention to detail.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16 animate-on-scroll">
          <div className="bg-light-grey rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Before/After Images */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium z-10">
                      Before
                    </div>
                    <img
                      src={projects[selectedProject].beforeImage}
                      alt="Before"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-medium z-10">
                      After
                    </div>
                    <img
                      src={projects[selectedProject].afterImage}
                      alt="After"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
                
                {/* Navigation */}
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={prevProject}
                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextProject}
                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <div className="inline-block bg-blue-gradient text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {projects[selectedProject].category}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {projects[selectedProject].title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {projects[selectedProject].description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-sky-blue rounded-full"></div>
                    <span className="text-gray-700">Premium quality materials used</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-sky-blue rounded-full"></div>
                    <span className="text-gray-700">Completed on time and within budget</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-sky-blue rounded-full"></div>
                    <span className="text-gray-700">Customer satisfaction guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                index === selectedProject ? 'ring-2 ring-sky-blue' : ''
              }`}
              onClick={() => setSelectedProject(index)}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={project.afterImage}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-blue-gradient text-white px-2 py-1 rounded text-xs font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
