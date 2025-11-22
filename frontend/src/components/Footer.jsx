import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { contactInfo, socialLinks } from '../data/mock';

const iconMap = {
  Facebook: Facebook,
  Instagram: Instagram,
  Linkedin: Linkedin
};

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t" style={{ borderColor: 'var(--border-light)' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#8FEC78] to-[#81DD67] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">TP</span>
              </div>
              <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Tech Point</span>
            </div>
            <p className="body-small mb-4">{contactInfo.tagline}</p>
            <p className="body-small">Professional digital solutions for startups and businesses.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="body-small hover:text-[#81DD67] transition-colors duration-200">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="body-small hover:text-[#81DD67] transition-colors duration-200">Services</button></li>
              <li><button onClick={() => scrollToSection('portfolio')} className="body-small hover:text-[#81DD67] transition-colors duration-200">Portfolio</button></li>
              <li><button onClick={() => scrollToSection('about')} className="body-small hover:text-[#81DD67] transition-colors duration-200">About</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="body-small hover:text-[#81DD67] transition-colors duration-200">Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Services</h4>
            <ul className="space-y-2">
              <li><span className="body-small">Website Development</span></li>
              <li><span className="body-small">Ecommerce Solutions</span></li>
              <li><span className="body-small">Social Media Marketing</span></li>
              <li><span className="body-small">Software Development</span></li>
              <li><span className="body-small">SEO & Branding</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={16} style={{ color: 'var(--accent-text)' }} />
                <span className="body-small">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} style={{ color: 'var(--accent-text)' }} />
                <span className="body-small">{contactInfo.email}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <a 
                    key={social.name}
                    href={social.url} 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ background: 'var(--accent-wash)' }}
                    aria-label={social.name}
                  >
                    <IconComponent size={18} style={{ color: 'var(--accent-text)' }} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t pt-8" style={{ borderColor: 'var(--border-light)' }}>
          <p className="text-center body-small">
            © {new Date().getFullYear()} Tech Point. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;