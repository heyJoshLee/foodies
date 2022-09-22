import React from 'react'
import { Link } from 'react-router-dom';
import StarRating from '../Recipes/StarRating';
import test_users from '../../TEST_DATA_DELETE_ME/test_users';

const YourReview = (props) => {
  const currentUser = test_users[0];

  const { username, image, _id } = currentUser;
  const { rating, content } = props.review;

  const styles = {
    review: {
      height: '20rem'
    },
    image: {
      height: '200px'
    }
  }

  return (
    <div className='review' style={styles.review}>
      <div className='post m-5' >
        <div className='card mb-3 p-3'>
          <div className='row g-0'>
            <div className='col-md-4'>
              <Link to={`/users/${_id}`}>
                <img src={image} className='img-fluid rounded-start mx-auto d-block' style={styles.image} />
              </Link>
              <Link to={`/users/${_id}`}>
                <p className='text-center'>{username}</p>
              </Link>
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <StarRating rating={rating} />
                <p className='card-text'>{content}</p>
                <button className='btn btn-primary'>Edit Review</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default YourReview;