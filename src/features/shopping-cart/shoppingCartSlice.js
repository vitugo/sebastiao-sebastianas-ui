import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
  total: 0
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    resetShoppingCart: (state) => {
      state.items = initialState.items;
      state.total = initialState.total;
    },

    addItemToCart: (state, action) => {
      const productToAdd = action.payload;
      const { items } = state;

      const product = items[productToAdd.id];

      if (!product) {
        state.items = { ...items, [productToAdd.id]: { ...productToAdd, quantity: 1 } };
        state.total += productToAdd.price;  
        return;
      }

      state.items = { ...items, [product.id]: { ...product, quantity: product.quantity + 1 } };
      state.total += product.price;
    },

    removeItemFromCart: (state, action) => {
      const productToRemove = action.payload;
      const { items } = state;

      const product = items[productToRemove.id];

      if (!product) {
        return;
      }

      if (product.quantity > 1) {
        state.items = { ...items, [product.id]: { ...product, quantity: product.quantity - 1 } };
        state.total -= product.price;
        return;
      }

      delete items[product.id]

      state.items = { ...items };
      state.total -= product.price;
    },
  }
});

export const { addItemToCart, resetShoppingCart, removeItemFromCart } = shoppingCartSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getItemsFromCart = (state) =>  {
  return state.shoppingCart.items;
};

export const getTotalCost = (state) =>  {
  return state.shoppingCart.total;
};

export default shoppingCartSlice.reducer;
