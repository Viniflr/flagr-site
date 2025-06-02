import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import AboutUs from '../components/sections/AboutUs';
import Team from '../components/sections/Team';
import Benefits from '../components/sections/Benefits';
import HowItWorks from '../components/sections/HowItWorks';
import Pricing from '../components/sections/Pricing';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

const Index: React.FC = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch pt-[31px]">
      <Navbar />
      <Hero />
      <AboutUs />
      <Team />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
