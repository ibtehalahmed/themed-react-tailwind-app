// src/components/FeaturedProducts.tsx
import React, { useEffect, useState } from 'react';
import Card from './Card';

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => setProducts(data.slice(0, 3))); // Show only the first 3 products
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl mb-6 text-center">Featured Products</h2>
      <div className="flex justify-center space-x-4">
        {products.map(product => (
          <Card key={product.id} title={product.name} description={product.description} imageUrl={product.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
