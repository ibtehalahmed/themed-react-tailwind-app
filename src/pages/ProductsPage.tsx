// src/pages/ProductsPage.tsx
import React, { useEffect, useState } from 'react';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <h2 className="text-2xl">{product.name}</h2>
            <p>{product.description}</p>
            <p className="font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
