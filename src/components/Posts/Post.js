import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
  console.log(props)
  console.log(props.post)
  const { username, image, _id } = props.post.user;
  const { content, time } = props.post;

  const styles = {
    post: {
    },
    card: {
      position: 'relative',
      height: '100%'
    },
    image: {
      height: 'auto',
      width: '100px',
      objectFit: 'contain'
    }
  }



  return (
    <div className='post m-5' style={styles.post}>
      <div className='card mb-3 p-3' style={styles.card}>
        <div className='row g-0'>
          <div className='col-md-4'>
            <Link to={`/users/${_id}`}>
              <img src={image} style={styles.image} className='img-fluid rounded-start' />
            </Link>
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{username}</h5>
              <p className='card-text'>{content}</p>
              <p className='card-text'><small className='text-muted'>{time.toString()}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;