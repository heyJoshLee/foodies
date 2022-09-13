import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../Recipes/StarRating';
const Review = (props) => {
  const { username, image, _id } = props.review.user;
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
                <Link to={`/users/${_id}`}>
                  <p className='card-text'><small className='text-muted'>View author's profile</small></p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review;