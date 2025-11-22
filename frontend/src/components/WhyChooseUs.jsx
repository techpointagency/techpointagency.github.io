import React from 'react';
import { CheckCircle, Smartphone, Zap, DollarSign, Headphones, Users } from 'lucide-react';
import { whyChooseUs } from '../data/mock';

const iconMap = {
  CheckCircle: CheckCircle,
  Smartphone: Smartphone,
  Zap: Zap,
  DollarSign: DollarSign,
  HeadphonesIcon: Headphones,
  Users: Users
};

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24" style={{ background: 'var(--bg-section)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Why Choose Tech Point?</h2>
          <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
            Your success is our priority. Here's what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={item.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'var(--accent-wash)' }}>
                  <IconComponent size={24} style={{ color: 'var(--accent-text)' }} />
                </div>
                <h3 className="heading-3 mb-2">{item.title}</h3>
                <p className="body-small">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;