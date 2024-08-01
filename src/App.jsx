// App.js
import React, { useReducer } from 'react';
import ProductList from './ProductListCart/ProductListCart';
import Cart from './Cart/Cart';
import MyContext from './MyContext';
import './App.css';

const Products = [
  { id: 1, name: 'Product-1', price: 100 },
  { id: 2, name: 'Product-2', price: 200 },
  { id: 3, name: 'Product-3', price: 300 },
];

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProductIndex = state.cart.findIndex(item => item.id === action.product.id);
      if (existingProductIndex >= 0) {
        const newCart = [...state.cart];
        newCart[existingProductIndex].quantity += 1;
        return { ...state, cart: newCart };
      } else {
        return { ...state, cart: [...state.cart, { ...action.product, quantity: 1 }] };
      }
    case 'REMOVE_FROM_CART':
      const updatedCart = state.cart
        .map(item => {
          if (item.id === action.product.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter(item => item.quantity > 0);
      return { ...state, cart: updatedCart };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <ProductList products={Products} />
        <Cart />
      </div>
    </MyContext.Provider>
  );
}

export default App;
