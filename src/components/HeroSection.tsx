// src/components/HeroSection.tsx
import React from 'react';
import hero from '../assets/images/hero.jpg'

const HeroSection: React.FC = () => {
  return (<div
      className="relative bg-cover bg-center h-144 flex items-center justify-center"
      style={{ backgroundImage: `url(${hero})` }}>
      <div className="absolute inset-0  opacity-50"></div>
      <div className="relative z-10 text-center primary-text">
        <h1 className=" mb-4 animate-slideInUp">Welcome to our React Tailwind Dynamic Theme</h1>
        <p className="text-xl mb-8 animate-slideInUp delay-1000">Discover amazing components and create your own customized components</p>
        {/* <button className="bg-secondary text-white py-2 px-4 rounded-md animate-fadeIn delay-2000">Get Started</button> */}
        <button className="px-6 py-3 bg-black text-white font-bold rounded-lg relative overflow-hidden transform transition-transform duration-300 hover:translate-y-1 hover:shadow-md">
      <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-50 blur-lg"></span>
      <span className="relative">Get Started</span>
    </button>
      </div>
    </div>
)};

export default HeroSection;
