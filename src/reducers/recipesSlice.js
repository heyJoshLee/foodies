import { createSlice, current } from '@reduxjs/toolkit';
import test_recipes from '../TEST_DATA_DELETE_ME/test_recipes';
const REDUCER_NAME = 'recipes';

export const recipesSlice = createSlice({
  name: REDUCER_NAME,

  initialState: [],

  reducers: {

    getRecipes: (state, action) => {
      state = test_recipes;
      return state;
    },
    getRecipesWithTags: (state, action) => {
      // api call with filter
      state = test_recipes;
      return test_recipes;
    }
  }
});

export const { getRecipes, getRecipesWithTags } = recipesSlice.actions;

export default recipesSlice.reducer;
