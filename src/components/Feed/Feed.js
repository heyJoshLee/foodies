import React from 'react';
import PostForm from '../Posts/PostForm';
import Posts from '../Posts/Posts';
const Feed = () => {

  return (
    <div className='feed container pt-5'>
      <PostForm />
      <Posts />
    </div>
  );
}

export default Feed;