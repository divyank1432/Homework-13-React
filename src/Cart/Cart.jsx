// Cart.js
import React, { useContext } from 'react';
import MyContext from '../MyContext';
import './Cart.css';

function Cart() {
  const { state } = useContext(MyContext);

  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {state.cart.length === 0 ? (
        <p className="no-products">No Product added to the cart</p>
      ) : (
        <>
          {state.cart.map(item => (
            <div key={item.id} className="cart-item">
              <span className="cart-info">{item.name} x {item.quantity}</span>
              <span className="cart-info">${item.price * item.quantity}</span>
            </div>
          ))}
          <hr />
          <h3 className="total">Total: ${total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
