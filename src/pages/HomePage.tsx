// src/pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import { DEFAULT_THEME } from '../themes';
import { applyTheme } from '../themes/utils';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import LatestBlogs from '../components/LatestBlogs';
import Testimonials from '../components/Testimonials';
import NewsletterSignup from '../components/NewsletterSignup';


import Button from '../components/Button';

const HomePage: React.FC = () => {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
   
    <main className="mx-auto p-4">
       <HeroSection />
    {/* <FeaturedProducts />
    <LatestBlogs /> */}
    <Testimonials />
    <NewsletterSignup />
      {/* <h1 className="text-4xl mb-4">Welcome to our React Tailwind DYNAMIC Theme</h1> */}
      {/* <Button label="Learn More" onClick={() => console.log('Button clicked!')} />
      <div className="mt-4">
          {theme === 'base' ? (
            <Button label="Apply Dark Theme" onClick={() => setTheme('dark')}/>
          ) : (
            <Button label="Apply Light Theme" onClick={() => setTheme('base')}/>
          )}
        </div> */}
    </main>
   
  
  )
};

export default HomePage;
