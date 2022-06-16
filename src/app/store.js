import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import productsReducer from '../features/products/productsSlice';
import shoppingCartReducer from '../features/shopping-cart/shoppingCartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    categories: categoriesReducer,
    products: productsReducer,
    shoppingCart: shoppingCartReducer,
  },
});
