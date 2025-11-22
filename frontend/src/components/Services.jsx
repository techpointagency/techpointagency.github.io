import React from 'react';
import { Globe, ShoppingCart, Share2, Code, TrendingUp, Palette } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  Globe: Globe,
  ShoppingCart: ShoppingCart,
  Share2: Share2,
  Code: Code,
  TrendingUp: TrendingUp,
  Palette: Palette
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Our Digital Solutions</h2>
          <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
            Comprehensive services to grow your business online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="product-card group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8FEC78] to-[#81DD67] flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110">
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="heading-3 mb-3">{service.title}</h3>
                <p className="body-small mb-4">{service.description}</p>
                <button className="text-sm font-medium flex items-center gap-2 transition-colors duration-200" style={{ color: 'var(--accent-text)' }}>
                  Learn More
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;