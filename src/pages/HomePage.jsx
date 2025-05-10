import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </div>
  );
}

export default HomePage;
