import { configureStore } from '@reduxjs/toolkit';
import messageThreadsReducer from '../reducers/messageThreadsSlice'
import messageThreadReducer from '../reducers/messageThreadSlice'
export default configureStore({
  reducer: {
    messageThreads: messageThreadsReducer,
    messageThread: messageThreadReducer
  }
});