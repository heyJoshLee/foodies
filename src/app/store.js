import { configureStore } from '@reduxjs/toolkit';
import messageThreadsReducer from '../reducers/messageThreadsSlice'
import messageThreadReducer from '../reducers/messageThreadSlice'
import messageReducer from '../reducers/messageSlice'
import recipesSlice from '../reducers/recipesSlice';
import recipeSlice from '../reducers/recipeSlice';
import tagsSlice from '../reducers/tagsSlice';
import reviewSlice from '../reducers/reviewSlice';


export default configureStore({
  reducer: {
    messageThreads: messageThreadsReducer,
    messageThread: messageThreadReducer,
    messageReducer: messageReducer,
    recipes: recipesSlice,
    tags: tagsSlice,
    recipe: recipeSlice,
    review: reviewSlice
  }
});