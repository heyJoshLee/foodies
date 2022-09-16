import { createSlice, current } from '@reduxjs/toolkit';

const REDUCER_NAME = 'message';

export const messageSlice = createSlice({
  name: REDUCER_NAME,

  initialState: null,

  reducers: {

    createMessage: (state, action) => {

      const { content, user } = action.payload;
      const newMessage = {
        content,
        user,
        _id: '1'
      }
      return newMessage;
    }
  }
});

export const { createMessage } = messageSlice.actions;

export default messageSlice.reducer;