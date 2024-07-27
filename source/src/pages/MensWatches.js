import React from 'react';
import { Link } from 'react-router-dom';
import mensWatchesData from '../data/mensWatches.json';
import './WatchesList.css';

const MensWatches = () => {
  return (
    <div className="products-container">
      <h2 className="women">Men's Watches</h2>
      {mensWatchesData.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/mens-watches/${product.id}`}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MensWatches;
