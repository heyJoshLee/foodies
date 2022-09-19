import { createSlice, current } from '@reduxjs/toolkit';
import test_recipes from '../TEST_DATA_DELETE_ME/test_recipes';
const REDUCER_NAME = 'recipes';

export const recipeSlice = createSlice({
  name: REDUCER_NAME,

  initialState: null,

  reducers: {

    getRecipe: (state, action) => {
      const recipe = test_recipes[action.payload - 1];
      state = recipe;
      return recipe;
    },
  }
});

export const { getRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
