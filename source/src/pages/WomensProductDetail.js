import React from 'react';
import { useParams, Link } from 'react-router-dom';
import womensWatchesData from '../data/womensWatches.json';
import './ProductDetail.css';

const WomensProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = womensWatchesData.find((p) => p.id === parseInt(id));

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-container">
      <h2 className='women'>{product.name}</h2>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <p>Material: {product.material}</p>
      <p>Case_size: {product.case_size}</p>
      <p>Dial_color: {product.dial_color}</p>
      <p>Movement: {product.movement}</p>
      <p>Water_resistanc: {product.water_resistanc}</p>
      <p>Features: {product.features}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <div className="back-button">
        <Link to="/womens-watches" className="back-button">Back to Women's Watches</Link>
      </div>
    </div>
  );
};

export default WomensProductDetail;
