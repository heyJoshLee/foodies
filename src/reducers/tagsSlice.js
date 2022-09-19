import { createSlice, current } from '@reduxjs/toolkit';
import test_tags from '../TEST_DATA_DELETE_ME/test_tags';
const REDUCER_NAME = 'tags';

export const tagsSlice = createSlice({
  name: REDUCER_NAME,

  initialState: [],

  reducers: {

    getTags: (state, action) => {
      state = test_tags;
      return state;
    }
  }
});

export const { getTags } = tagsSlice.actions;

export default tagsSlice.reducer;
