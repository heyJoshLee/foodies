import { createSlice, current } from '@reduxjs/toolkit';
import test_messageThreads from '../TEST_DATA_DELETE_ME/test_messageThreads.js';
const REDUCER_NAME = 'messageThreads';

export const messageThreadsSlice = createSlice({
  name: REDUCER_NAME,

  initialState: [],

  reducers: {

    getMessageThreads: (state, action) => {
      state = test_messageThreads
      return state;
    }
  }
});

export const { getMessageThreads } = messageThreadsSlice.actions;

export default messageThreadsSlice.reducer;
