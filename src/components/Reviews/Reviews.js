import React, { useState } from 'react';
import Review from './Review';
import YourReview from './YourReview';
const Reviews = (props) => {
  const { reviews, recipeState: recipe } = props;

  const [yourReview, setYourReview] = useState(null);


  return (
    <div className='mt-5'>
      <YourReview recipe={recipe} setYourReview={setYourReview} yourReview={yourReview} />
      <h2>Reviews</h2>
      {reviews.map((review, index) => <Review key={`review-${index}`} review={review} />)}
    </div>
  )
}

export default Reviews;