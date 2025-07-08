import React from 'react';
import HeroSection from './components/HeroSection';
import OurStory from './components/OurStory';
import OurMission from './components/OurMission';
import OurValues from './components/OurValues';
import WhyChooseUs from './components/WhyChooseUs';
import TeamSection from './components/TeamSection';
import Testimonials from './components/Testimonials';
import JoinCommunity from './components/JoinCommunity';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <OurStory />
      <OurMission />
      <OurValues />
      <WhyChooseUs />
      <TeamSection />
      <Testimonials />
      <JoinCommunity />
    </div>
  );
}

export default App;