import React from 'react';
import PlaceholderImage from '../../assets/images/profile-placeholder.png';

const PostForm = () => {

  const currentUser = {
    image: PlaceholderImage
  }

  const styles = {
    image: {
      height: 'auto',
      width: '100px',
      objectFit: 'contain'
    }
  }

  const { image } = currentUser;
  return (
    <div className='post-new'>
      <div className='card mb-3 p-3'>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img src={image} style={styles.image} className='img-fluid rounded-start' />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">New post</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button type='button' className='btn btn-primary btn-lg float-end mt-3'>Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostForm;