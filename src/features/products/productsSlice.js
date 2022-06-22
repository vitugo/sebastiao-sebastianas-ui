import { createSlice } from '@reduxjs/toolkit';

import { CATEGORIES } from '../categories/categoriesSlice';
import baldes from './baldes';
import bebidas from './bebidas';
import cerveja from './cerveja';
import copos from './copos';
import comida from './comida';
import shots from './shots';

const initialState = {
  products: 
    {
      [CATEGORIES.cerveja]: cerveja,
      [CATEGORIES.baldes]: baldes,
      [CATEGORIES.shots]: shots,
      [CATEGORIES.copos]: copos,
      [CATEGORIES.bebidas]: bebidas,
      [CATEGORIES.comida]: comida,
    },
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {}
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getProductsByCategory = (state, category) =>  {
  const products = state.products.products[category];

  if (products) {
    const sortedProducts = [...products].sort((a, b) => {
      if (a.menuTitle > b.menuTitle) {
        return 1;
      }
      if (a.menuTitle < b.menuTitle) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    return sortedProducts;
  }

  return products;
};

export default productsSlice.reducer;
