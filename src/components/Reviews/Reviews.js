import React from 'react';
import Review from './Review';

const Reviews = (props) => {
  const { reviews } = props;



  return (
    <div>Reviews
      {reviews.map((review, index) => <Review key={`review-${index}`} review={review} />)}

    </div>
  )
}

export default Reviews;