import React from 'react';
import Post from './Post';
import posts from '../../TEST_DATA_DELETE_ME/posts';
const Posts = () => {

  return (
    <div className='post-list container'>
      {posts.map((post) => <Post key={`post-${post._id}`} post={post} />)}
    </div>
  );
}

export default Posts;