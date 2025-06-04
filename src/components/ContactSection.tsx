
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Shield } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:raghu.ke@northeastern.edu?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-orange-400 font-mono">
          GET IN TOUCH
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-400/20 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-orange-400 mr-3" />
                <h3 className="text-2xl font-bold text-white font-mono">Let's Secure the Future</h3>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to discuss cybersecurity opportunities, collaborate on security projects, or explore how we can 
                strengthen your organization's security posture? I'm available for exciting opportunities from May - Dec 2025.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href="mailto:raghu.ke@northeastern.edu" className="text-gray-400 hover:text-orange-400 transition-colors">
                      raghu.ke@northeastern.edu
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <a href="tel:8573528912" className="text-gray-400 hover:text-orange-400 transition-colors">
                      (857) 352-8912
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-400">Boston, Massachusetts</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-orange-400/10 border border-orange-400/20 rounded-lg">
                <p className="text-orange-400 font-semibold text-sm">
                  🔒 Security Clearance: Available for discussion
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Open to roles requiring security clearances and government contracts
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-400/20 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                  placeholder="Security Role Opportunity / Project Collaboration"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                  placeholder="Tell me about the security role, project requirements, or how we can collaborate..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Secure Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
