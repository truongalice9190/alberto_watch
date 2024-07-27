import React from 'react';
import { Link } from 'react-router-dom';
import womensWatchesData from '../data/womensWatches.json';
import './WatchesList.css';

const WomensWatches = () => {
  return (
    <div className="products-container">
      <h2 className='women'>Women's Watches</h2>
      {womensWatchesData.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/womens-watches/${product.id}`}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WomensWatches;
