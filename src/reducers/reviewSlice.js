import { createSlice, current } from '@reduxjs/toolkit';
const REDUCER_NAME = 'review';

export const reviewSlice = createSlice({
  name: REDUCER_NAME,

  initialState: null,

  reducers: {

    createReview: (state, action) => {
      console.log(`creating review with the following data`)
      console.log(action.payload);
      const newReview = {
        user: {
          _id: '1',
          username: 'josh'
        },
        rating: 5,
        content: 'this is a great recipe'
      }
      state = newReview;
      return state;
    },
  }
});

export const { createReview } = reviewSlice.actions;

export default reviewSlice.reducer;
