import ProfileImagePlaceHolder from '../assets/images/profile-placeholder.png';
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
      user: {
        username: 'other',
        image: ProfileImagePlaceHolder

      },
      date: new Date().toString(),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      _id: 1
    }, {
      user: {
        username: 'josh',
        image: ProfileImagePlaceHolder

      },
      date: new Date().toString(),
      content: 'yeah whats up',
      _id: 2
    },
    {
      user: {
        username: 'other',
        image: ProfileImagePlaceHolder

      },
      date: new Date().toString(),
      content: 'nothing much',
      _id: 3
    }, {
      user: {
        username: 'other',
        image: ProfileImagePlaceHolder
      },
      date: new Date().toString(),
      content: 'you?',
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
      user: {
        username: 'other2',
        image: ProfileImagePlaceHolder

      },
      date: new Date().toString(),
      content: 'this is message thread 2',
      _id: 1
    }, {
      user: {
        username: 'josh',
        image: ProfileImagePlaceHolder

      },
      date: new Date().toString(),
      content: 'yeah I know',
      _id: 2
    },
    {
      user: {
        username: 'other2',
        image: ProfileImagePlaceHolder

      },
      date: new Date().toString(),
      content: 'so what',
      _id: 3
    }, {
      user: {
        username: 'other2',
        image: ProfileImagePlaceHolder
      },
      date: new Date().toString(),
      content: 'this is cool',
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
      user: {
        username: 'other3',
        image: ProfileImagePlaceHolder

      },
      date: new Date().toString(),
      content: 'cool message',
      _id: 1
    }, {
      user: {
        username: 'josh',
        image: ProfileImagePlaceHolder

      },
      date: new Date().toString(),
      content: 'neat',
      _id: 2
    },
    {
      user: {
        username: 'other3',
        image: ProfileImagePlaceHolder

      },
      date: new Date().toString(),
      content: 'third message',
      _id: 3
    }, {
      user: {
        username: 'other3',
        image: ProfileImagePlaceHolder
      },
      date: new Date().toString(),
      content: 'cool',
      _id: 4
    }
  ]
}


const test_messageThreads = [test_messageThread1, test_messageThread2, test_messageThread3];

export default test_messageThreads;