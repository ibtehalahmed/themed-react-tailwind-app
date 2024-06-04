// src/components/NewsletterSignup.tsx
import React from 'react';

const NewsletterSignup: React.FC = () => (
  <div className="bg-secondary text-white py-10">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6">Stay updated with our latest news and offers</p>
      <form className="flex justify-center">
        <input
          type="email"
          className="p-2 rounded-l-md text-black"
          placeholder="Enter your email"
        />
        <button type="submit" className="bg-primary p-2 rounded-r-md">
          Subscribe
        </button>
      </form>
    </div>
  </div>
);

export default NewsletterSignup;
