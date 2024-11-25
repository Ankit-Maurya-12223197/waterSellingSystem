// src/components/ProductCard.js
import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button>Order Now</button>
    </div>
  );
}

export default ProductCard;