import Link from 'next/link';
import { useState } from 'react';
import { User, Mail, Phone, MessageSquare, CalendarDays, MapPin, Clock } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const services = [
  "Estate Planning (Will & Trust)",
  "Life Insurance",
  "IRA / 401K Rollover",
  "Annuities",
  "Retirement Planning",
  "Lifetime Income Planning",
  "Kids Education Solutions",
  "Mortgage Protection",
  "Investment Planning",
  "Healthcare Planning",
  "Medicare & Medicaid",
  "Final Expenses",
  "Business Opportunity"
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    services: [] as string[],
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => {
      if (prev.services.includes(service)) {
        return {
          ...prev,
          services: prev.services.filter(s => s !== service)
        };
      } else {
        return {
          ...prev,
          services: [...prev.services, service]
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.services.length) {
      toast.error('Please fill all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      toast.success('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        services: [],
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#1F2937',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
          },
        }}
      />
      
      <div className="responsive-container py-12">
        <div className="responsive-container  overflow-hidden ">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you soon</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Choose Services *</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {services.map((service) => (
                  <div key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`service-${service}`}
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor={`service-${service}`} className="ml-2 text-sm text-gray-700">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:w-auto px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Submit Message'}
            </button>
          </form>
        </div>
      </div>

      <div className="responsive-container pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className=" flex justify-center items-center">
            <h3 className="text-[24px] font-bold text-primary">Ready for Better Investments & Wealth Building Strategies?</h3>
            
          </div>

          <div className="">
            <div className="space-y-6">
              <div className="flex items-start border-b border-black">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0 mb-4" />
                <div className="ml-4 md:flex justify-between items-center w-full">
                  <h4 className="font-medium text-gray-900 mb-3 md:mb-0">Working Days</h4>
                  <p className="text-gray-600">All Days: 8AM - 10PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start border-b border-black">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0 mb-4" />
                <div className="ml-4 md:flex justify-between items-center w-full ">
                  <h4 className="font-medium text-gray-900 mb-3 md:mb-0">Address</h4>
                  <p className="text-gray-600">2801 Ellis Way, Warrington, PA 18976</p>
                </div>
              </div>
              
              <div className="flex items-start border-b border-black">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0 mb-4" />
                <div className="ml-4 md:flex justify-between items-center w-full">
                  <h4 className="font-medium text-gray-900 mb-3 md:mb-0">Dial</h4>
                  <p className="text-gray-600">(267)-644-9955</p>
                </div>
              </div>
              
              <div className="flex items-start border-b border-black">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0 mb-4" />
                <div className="ml-4 md:flex justify-between items-center w-full">
                  <h4 className="font-medium text-gray-900 mb-3 md:mb-0">E-mail</h4>
                  <p className="text-gray-600">contact@wealthguard.biz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-96">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.965030727045!2d-75.1343779241379!3d40.068363871474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8b7b6b1a5%3A0x9e8a7b7b6b1a5b7b6!2s2801%20Ellis%20Way%2C%20Warrington%2C%20PA%2018976!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          className="rounded-none"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;