import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import oip2 from '../components/logo/OIP2.jpg'
import oip from '../components/logo/OIP.jpg'

const Products = () => {
  return (
    <div className="products-container">
      <h2 className='ki'>ALBERTO WATCHES</h2>
      <div className="product-categories">
        <div className="category-item">
          <Link to="/mens-watches" className="category-link">
            <h3 className="men" >Men's Watches</h3>
            <img
          className="d-block w-100"  
          src={oip2}
          alt="First slide"
        />
          </Link>
        </div>
        <div className="category-item">
          <Link to="/womens-watches" className="category-link">
            <h3 className="men" >Women's Watches</h3>
            <img class ="id"
          className="d-block w-100"  
          src={oip}
          alt="First slide"
        />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
