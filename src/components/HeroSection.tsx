// src/components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => (
  <div className="bg-primary text-white py-10">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl mb-4">Welcome to our React Tailwind Dynamic Theme</h1>
      <p className="text-xl mb-8">Discover amazing components and create your own customized components</p>
      <button className="bg-secondary text-white py-2 px-4 rounded-md">Get Started</button>
    </div>
  </div>
);

export default HeroSection;
