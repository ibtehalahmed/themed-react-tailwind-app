// src/pages/HomePage.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

const HomePage: React.FC = () => (
  <div>
    <Navbar />
    <main className="container mx-auto p-4">
      <h1 className="text-4xl mb-4">Welcome to our Home Page</h1>
      <Button label="Learn More" onClick={() => console.log('Button clicked!')} />
    </main>
    <Footer />
  </div>
);

export default HomePage;
