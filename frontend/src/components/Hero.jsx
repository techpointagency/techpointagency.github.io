import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      <div className="max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="heading-1 mb-6">
              Interactive Websites for Your Startup or Business
            </h1>
            <p className="body-large mb-8" style={{ color: 'var(--text-secondary)' }}>
              Grow your digital presence with professional, high-performance websites & complete online solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={scrollToContact} className="btn-primary flex items-center justify-center gap-2">
                Get a Free Consultation
                <ArrowRight size={18} />
              </button>
              <button onClick={scrollToServices} className="btn-secondary">
                View Our Services
              </button>
            </div>
          </div>

          {/* Right Content - Device Mockup */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1690192609138-33b5c4f04b8f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwd2Vic2l0ZSUyMG1vY2t1cHxlbnwwfHx8fDE3NjM4MTEwOTZ8MA&ixlib=rb-4.1.0&q=85"
                alt="Responsive website mockup"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#8FEC78] to-[#81DD67] rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;