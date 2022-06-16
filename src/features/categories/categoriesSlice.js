import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = {
  cerveja: "cerveja", 
  baldes: "baldes", 
  bebidas: "bebidas", 
  shots: "shots", 
  comida: "comida",
  copos: "copos",  
}

const initialState = {
  categories: [
    {
      id: CATEGORIES.cerveja,
      title: "Cerveja"
    },
    {
      id: CATEGORIES.copos,
      title: "Copos"
    },
    {
      id: CATEGORIES.baldes,
      title: "Baldes"
    },
    {
      id: CATEGORIES.shots,
      title: "Shots"
    },
    {
      id: CATEGORIES.bebidas,
      title: "Bebidas"
    },
    {
      id: CATEGORIES.comida,
      title: "Comida"
    },
  ],
  selectedCategory: {
    id:  "None"
  }, 
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selectCategory: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.selectedCategory = action.payload;
    },
  }
});

export const { selectCategory } = categoriesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getCategories = (state) => state.categories.categories;
export const getSelectedCategory = (state) => state.categories.selectedCategory;

export default categoriesSlice.reducer;
