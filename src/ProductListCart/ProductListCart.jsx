// ProductListCart.js
import React, { useContext } from 'react';
import MyContext from '../MyContext';
import './ProductList.css';

function ProductList({ products }) {
  const { state, dispatch } = useContext(MyContext);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', product });
  };

  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} className="product-item">
          <span className="product-info">{product.name} - ${product.price}</span>
          <div className="product-actions">
            <button onClick={() => removeFromCart(product)}>-</button>
            <span className="quantity">
              {state.cart.find(item => item.id === product.id)?.quantity || 0}
            </span>
            <button onClick={() => addToCart(product)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
