import ProfileImagePlaceHolder from '../assets/images/profile-placeholder.png';

const posts = [
  {
    user: {
      username: "josh1",
      image: ProfileImagePlaceHolder,
      _id: 1
    },
    content: "this is a cool post",
    time: new Date(),
    _id: '1'
  }, {
    user: {
      username: "josh2",
      image: ProfileImagePlaceHolder,
      _id: 2
    },
    content: "Wow this is great",
    time: new Date(),
    _id: '2'
  }, {
    user: {
      username: "josh3",
      image: ProfileImagePlaceHolder,
      _id: 3
    },
    content: "Another cool post",
    time: new Date(),
    _id: '3'
  }
]

export default posts;