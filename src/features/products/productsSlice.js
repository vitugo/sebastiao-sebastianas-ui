import { createSlice } from '@reduxjs/toolkit';

import { CATEGORIES } from '../categories/categoriesSlice';

const initialState = {
  products: 
    {
      [CATEGORIES.cerveja]: [
        {
          id: "fino",
          title: "Fino",
          price: 150
        },
      ],
      [CATEGORIES.baldes]: [
        {
          id: "balde-vodka",
          title: "Vodka",
          price: 450
        },
        {
          id: "balde-whisky",
          title: "Whisky",
          price: 500
        },
        {
          id: "balde-safari",
          title: "Safari",
          price: 500
        },
        {
          id: "balde-beirao",
          title: "Beirao",
          price: 500
        },
        {
          id: "balde-gin",
          title: "Gin",
          price: 500
        }
      ],
      [CATEGORIES.shots]: [
        {
          id: "shot-casa",
          title: "Shot da Casa",
          price: 50
        },
        {
          id: "shot-ana",
          title: "Shot da Ana",
          price: 50
        },
        {
          id: "shot-absinto",
          title: "Shot de Absinto",
          price: 150
        },
      ],
      [CATEGORIES.bebidas]: [],
      [CATEGORIES.comida]: [
        {
          id: "cachorro",
          title: "Cachorro",
          price: 300
        },
        {
          id: "bifana",
          title: "Bifana",
          price: 250
        },   
      ]
    },
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {}
});

export const {} = productsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getProductsByCategory = (state, category) =>  {
  return state.products.products[category];
};

export default productsSlice.reducer;
