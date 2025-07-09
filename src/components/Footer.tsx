
import React from 'react';
import logo from '../../src/image/logo.png'; // make sure path is correct
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-44 h-20 rounded-lg flex items-center justify-center">
              <img
                src={logo}
                alt="Company Logo"
                className="w-full h-auto object-contain drop-shadow-md"
              />
            </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Majestic Painting</h3>
                <p className="text-gray-400">& Decoration</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Adding Color to Your World with Precision and Style. Professional residential 
              and commercial painting services with over 10 years of experience.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@majesticpainting.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Metro Area & Suburbs</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Our Services', href: '#services' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-sky-blue transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Interior Painting</li>
              <li>Exterior Painting</li>
              <li>Commercial Painting</li>
              <li>Wallpaper & Texture</li>
              <li>Decorative Finishes</li>
              <li>Color Consultation</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-gray-400">Follow us:</span>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Instagram, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-gradient transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right text-gray-400">
              <p>&copy; {currentYear} Majestic Painting and Decoration. All rights reserved.</p>
              <p className="text-sm mt-1">
                Licensed & Insured • Professional Painting Services
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
