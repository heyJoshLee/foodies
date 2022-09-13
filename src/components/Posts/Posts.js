import React from 'react';
import Post from './Post';
import ProfilePlaceHolder from '../../assets/images/profile-placeholder.png';
const PostList = () => {

  const posts = [
    {
      user: {
        username: "josh1",
        image: ProfilePlaceHolder,
        _id: 1
      },
      content: "this is a cool post",
      time: new Date()
    }, {
      user: {
        username: "josh2",
        image: ProfilePlaceHolder,
        _id: 2
      },
      content: "Wow this is great",
      time: new Date()
    }, {
      user: {
        username: "josh3",
        image: ProfilePlaceHolder,
        _id: 3
      },
      content: "Another cool post",
      time: new Date()
    }
  ]

  return (
    <div className='post-list container'>
      {posts.map((post) => <Post post={post} />)}
    </div>
  );
}

export default PostList;