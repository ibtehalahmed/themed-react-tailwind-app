// src/pages/ProductDetailsPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch(`/data/products/${id}.json`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-4">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-bold">{product.price}</p>
    </div>
  );
};

export default ProductDetailsPage;
