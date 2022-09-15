import { createSlice, current } from '@reduxjs/toolkit';
import ProfileImagePlaceHolder from '../assets/images/profile-placeholder.png';

const REDUCER_NAME = 'messageThreads';

const test_messageThread1 = {
  _id: 1,
  users: [{
    username: 'josh',
    image: ProfileImagePlaceHolder
  },
  {
    username: 'other',
    image: ProfileImagePlaceHolder
  }],
  messages: [
    {
      from: 'other',
      date: new Date().toString(),
      content: 'cool message',
      _id: 1
    }, {
      from: 'josh',
      date: new Date().toString(),
      content: 'cool message',
      _id: 2
    },
    {
      from: 'other',
      date: new Date().toString(),
      content: 'cool message',
      _id: 3
    }, {
      from: 'other',
      date: new Date().toString(),
      content: 'cool message',
      _id: 4
    }
  ]
}

const test_messageThread2 = {
  _id: 2,
  users: [{
    username: 'other',
    image: ProfileImagePlaceHolder
  },
  {
    username: 'josh',
    image: ProfileImagePlaceHolder
  }],
  messages: [
    {
      from: 'other2',
      date: new Date().toString(),
      content: 'cool message',
      _id: 1
    }, {
      from: 'josh',
      date: new Date().toString(),
      content: 'cool message',
      _id: 2
    },
    {
      from: 'other2',
      date: new Date().toString(),
      content: 'cool message',
      _id: 3
    }, {
      from: 'other2',
      date: new Date().toString(),
      content: 'cool message',
      _id: 4
    }
  ]
}

const test_messageThread3 = {
  _id: 3,
  users: [{
    username: 'josh',
    image: ProfileImagePlaceHolder
  },
  {
    username: 'other',
    image: ProfileImagePlaceHolder
  }],
  messages: [
    {
      to: 'josh',
      from: 'other3',
      date: new Date().toString(),
      content: 'cool message',
      _id: 1
    }, {
      to: 'other3',
      from: 'josh',
      date: new Date().toString(),
      content: 'cool message',
      _id: 2
    },
    {
      to: 'josh',
      from: 'other3',
      date: new Date().toString(),
      content: 'cool message',
      _id: 3
    }, {
      to: 'josh',
      from: 'other3',
      date: new Date().toString(),
      content: 'cool message',
      _id: 4
    }
  ]
}

const test_messageThreads = [test_messageThread1, test_messageThread2, test_messageThread3];

export const messageThreadsSlice = createSlice({
  name: REDUCER_NAME,

  initialState: [],

  reducers: {

    getMessageThreads: (state, action) => {
      return test_messageThreads;
    }
  }
});

export const { getMessageThreads } = messageThreadsSlice.actions;

export default messageThreadsSlice.reducer;
