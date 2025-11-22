import React, { useState } from 'react';
import { Phone, Mail, Send } from 'lucide-react';
import { contactInfo } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Show success toast
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24" style={{ background: 'var(--bg-section)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Let's Build Something Amazing Together</h2>
          <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
            Get in touch with us and let's discuss your project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="heading-3 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--accent-wash)' }}>
                  <Phone size={20} style={{ color: 'var(--accent-text)' }} />
                </div>
                <div>
                  <p className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>Phone</p>
                  <p className="body-small">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--accent-wash)' }}>
                  <Mail size={20} style={{ color: 'var(--accent-text)' }} />
                </div>
                <div>
                  <p className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>Email</p>
                  <p className="body-small">{contactInfo.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="heading-3 mb-4">Business Hours</h3>
              <p className="body-small">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="body-small">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="body-small">Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200"
                  style={{ 
                    borderColor: errors.name ? '#ef4444' : 'var(--border-light)',
                    focusRing: 'var(--accent-primary)'
                  }}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200"
                  style={{ 
                    borderColor: errors.email ? '#ef4444' : 'var(--border-light)'
                  }}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200"
                  style={{ 
                    borderColor: errors.phone ? '#ef4444' : 'var(--border-light)'
                  }}
                  placeholder="+91 1234567890"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 resize-none"
                  style={{ 
                    borderColor: errors.message ? '#ef4444' : 'var(--border-light)'
                  }}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;