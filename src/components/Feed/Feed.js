import React from 'react';
import PostForm from '../Posts/PostForm';
import Posts from '../Posts/Posts';
import Loading from '../General/Loading/Loading';
import ExploreBar from '../ExploreBar/ExploreBar'
const Feed = () => {

  return (
    <div className='row'>
      <div className='feed container col-9'>
        <PostForm />
        <Posts />
      </div>
      <div className='col-3'>
        <ExploreBar />
      </div>
    </div>

  );
}

export default Feed;