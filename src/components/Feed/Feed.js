import React from 'react';
import PostForm from '../Posts/PostForm';
import Posts from '../Posts/Posts';
import Loading from '../General/Loading/Loading';
const Feed = () => {

  return (
    <div className='feed container pt-5'>
      <PostForm />
      <Posts />
    </div>
  );
}

export default Feed;