import { configureStore } from '@reduxjs/toolkit';
import messageThreadsReducer from '../reducers/messageThreadsSlice'
import messageThreadReducer from '../reducers/messageThreadSlice'
import messageReducer from '../reducers/messageSlice'

export default configureStore({
  reducer: {
    messageThreads: messageThreadsReducer,
    messageThread: messageThreadReducer,
    messageReducer: messageReducer
  }
});