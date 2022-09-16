import { createSlice, current } from '@reduxjs/toolkit';
import test_messageThreads from '../TEST_DATA_DELETE_ME/test_messageThreads';

const REDUCER_NAME = 'messageThread';

export const messageThreadSlice = createSlice({
  name: REDUCER_NAME,

  initialState: null,

  reducers: {

    getMessageThread: (state, action) => {
      return state = test_messageThreads[action.payload - 1]
    }
  }
});

export const { getMessageThread } = messageThreadSlice.actions;

export default messageThreadSlice.reducer;

