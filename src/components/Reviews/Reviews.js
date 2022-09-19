import React from 'react';
import Review from './Review';

const Reviews = (props) => {
  const { reviews } = props;



  return (
    <div className='mt-5'>
      <h2>Reviews</h2>
      {reviews.map((review, index) => <Review key={`review-${index}`} review={review} />)}

    </div>
  )
}

export default Reviews;