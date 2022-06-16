import React from 'react';
import './App.css';
import Categories from './features/categories/Categories';
import Products from './features/products/Products';
import ShoppingCart from './features/shopping-cart/ShoppingCart';
import HttpClient from './gateways/http.client';

function App() {
  HttpClient.initialize();

  return (
    <div className="grid grid-cols-11 gap4 h-screen w-screen">
      <div className="col-span-2 w-full h-full overflow-auto">
        <Categories />
      </div>
      <div className="col-span-6 w-full h-full bg-gray-300 overflow-auto">
        <Products />
      </div>
      <div className="col-span-3 w-full h-full overflow-auto">
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;
