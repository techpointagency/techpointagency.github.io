import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/sonner';

const Home = () => {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Home;