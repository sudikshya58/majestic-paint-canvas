import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = 'service_4esbn5p';
    const TEMPLATE_ID = 'template_35531ds';
    const USER_ID = 'urBUacrRotIJ4hlUE';

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message
      }, USER_ID);

      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours with your free estimate.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: 'Error',
        description: 'Failed to send your request. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '(555) 123-4567',
      subtext: 'Mon-Fri 8AM-6PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@majesticpainting.com',
      subtext: 'We respond within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      content: 'Metro Area & Suburbs',
      subtext: 'Free estimates within 25 miles'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 8AM-6PM',
      subtext: 'Sat: 9AM-4PM, Sun: Closed'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your <span className="gradient-text">Free Quote</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your space? Contact us today for a free,
            no-obligation estimate. We're here to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="interior">Interior Painting</option>
                  <option value="exterior">Exterior Painting</option>
                  <option value="commercial">Commercial Painting</option>
                  <option value="wallpaper">Wallpaper & Texture</option>
                  <option value="decorative">Decorative Finishes</option>
                  <option value="consultation">Color Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-gradient hover:opacity-90 transition-all duration-300 text-lg py-6"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Get Free Quote
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

              <div className="text-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 inline mr-1" />
                Free estimates • No obligation • Response within 24 hours
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-on-scroll">
            <div className="bg-light-grey rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-700">{info.content}</p>
                      <p className="text-sm text-gray-600">{info.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Service Area Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
