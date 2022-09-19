import { configureStore } from '@reduxjs/toolkit';
import messageThreadsReducer from '../reducers/messageThreadsSlice'
import messageThreadReducer from '../reducers/messageThreadSlice'
import messageReducer from '../reducers/messageSlice'
import recipesSlice from '../reducers/recipesSlice';
import tagsSlice from '../reducers/tagsSlice';

export default configureStore({
  reducer: {
    messageThreads: messageThreadsReducer,
    messageThread: messageThreadReducer,
    messageReducer: messageReducer,
    recipes: recipesSlice,
    tags: tagsSlice
  }
});