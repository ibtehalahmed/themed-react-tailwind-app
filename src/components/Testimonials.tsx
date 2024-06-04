// src/components/Testimonials.tsx
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    feedback: 'Amazing products and fantastic customer service!',
    photo: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'John Smith',
    feedback: 'I love the quality and variety. Highly recommended!',
    photo: 'https://via.placeholder.com/150'
  }
];

const Testimonials: React.FC = () => (
  <div className="bg-gray-100 py-10">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl mb-6">What Our Customers Say</h2>
      <div className="flex justify-center space-x-4">
        {testimonials.map(({ id, name, feedback, photo }) => (
          <div key={id} className="bg-white p-4 rounded-md shadow-md">
            <img src={photo} alt={name} className="rounded-full w-16 h-16 mx-auto mb-4" />
            <p className="text-xl font-bold">{name}</p>
            <p className="text-gray-600">{feedback}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Testimonials;
