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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {products.map((product) => (
          <div key={product.id} className="max-w-xs overflow-hidden rounded-lg shadow-lg">
            <img className="object-cover w-full h-48" src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Flower and sky" />
            <div className="px-6 py-4">
              <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">{product.name}</h4>
              <p className="leading-normal text-gray-700">{product.description}</p>
              <p className="font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
