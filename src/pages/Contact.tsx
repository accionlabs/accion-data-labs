import React from 'react';
import PageHeader from '../components/PageHeader';
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@accionlabs.com',
      link: 'mailto:contact@accionlabs.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: Globe,
      title: 'Website',
      value: 'www.accionlabs.com',
      link: 'https://www.accionlabs.com'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Market Street, Suite 500',
      state: 'CA 94105',
      country: 'USA'
    },
    {
      city: 'New York',
      address: '456 Fifth Avenue, Floor 20',
      state: 'NY 10018',
      country: 'USA'
    },
    {
      city: 'London',
      address: '789 Canary Wharf',
      state: 'E14 5AB',
      country: 'United Kingdom'
    },
    {
      city: 'Bangalore',
      address: '321 MG Road, Koramangala',
      state: 'Karnataka 560001',
      country: 'India'
    }
  ];

  const serviceAreas = [
    'Data Strategy & Consulting',
    'Data Governance',
    'Cloud Data Platform Migration',
    'Data Analytics & BI',
    'AI & Machine Learning',
    'Master Data Management',
    'Data Quality Management',
    'Real-time Data Streaming',
    'Data Lake & Lakehouse',
    'Self-Service Analytics'
  ];

  return (
    <div>
      <PageHeader
        subtitle="Get in Touch"
        title="Contact Us"
        description="Let's discuss how our data capabilities can help transform your organization"
      />

      {/* Contact Information */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Get in Touch */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Ready to transform your data capabilities? Our team is here to help you navigate your data journey.
              </p>

              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-4">Let's Start a Conversation</h3>
                <p className="text-blue-100 mb-6">
                  Email us directly and our team will get back to you within 24 hours to discuss how we can help with your data initiatives.
                </p>
                <a
                  href="mailto:contact@accionlabs.com?subject=Data%20Services%20Inquiry"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us Now
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">We Can Help With</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {serviceAreas.map((service, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 mb-1">{info.title}</div>
                      <div className="text-blue-600">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/accionlabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com/accionlabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Global presence to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{office.city}</h3>
                <p className="text-gray-600 text-sm">
                  {office.address}<br />
                  {office.state}<br />
                  {office.country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
