
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
<section
  className="relative w-full h-screen bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1627141234469-24711efb373c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZXJuJTIwcmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D')",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
    <h2 className="text-2xl md:text-3xl font-semibold mb-2">
     Majestic Painting & Decoration
    </h2>
    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
  Adding color, life, and elegance.
      <br />
      to every space
    </h1>

    {/* Services */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 text-sm">
      {[
        "Interior House Painting Services",
        "Commercial Painting Services",
        "Residential Painting Services",
        "Paint Touch Up Service",
      ].map((text, i) => (
        <div
          key={i}
          className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-orange-500"
        >
          <span className="text-orange-500 text-lg">⬤</span>
          {text}
        </div>
      ))}
    </div>

    {/* Buttons */}
    <div className="flex gap-4">
      <a
        href="#services"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow"
      >
        Our Service
      </a>
      <a
        href="#contact"
        className="border border-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded shadow"
      >
        Contact Us
      </a>
    </div>
  </div>

  {/* Bottom wave */}

</section>





  );
};

export default Hero;
