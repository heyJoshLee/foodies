import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReview } from '../../reducers/reviewSlice';
import YourReview from './YourReview';

const NewReviewForm = (props) => {
  const { setYourReview, yourReview } = props;
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    user: currentUser,
    content: '',
    rating: '5'
  });

  const [isEditing, setIsEditing] = useState(false);

  const styles = {
    imageContainer: {
      height: '5rem'
    },
    image: {
      width: '50%',
      height: '100%'
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReview(formData));
    setYourReview(formData);
  }

  const handleOnChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [key]: value
    }
    )
  }

  if (yourReview) { return <YourReview review={yourReview} /> }

  return (
    <div className='row container'>
      <div className='col-1 pt-5' style={styles.imageContainer}>
        <img src={currentUser.image} style={styles.image} />
      </div>
      <div className="mb-3 col-11">
        <form onSubmit={handleSubmit} className='row'>
          <legend>Write your own review</legend>
          <div className='col-2'>
            <select required name='rating' class="form-select" aria-label="select" onChange={handleOnChange}>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </div>
          <div className='col-10' >
            <label htmlFor="new-review-form" className="form-label d-none">Your review...</label>
            <textarea
              className="form-control"
              placeholder='What do you think....'
              name='content'
              id="new-review-form"
              rows="3"
              value={formData.content}
              onChange={handleOnChange}
              required
              maxLength={1000}></textarea>
          </div>

          <button type='submit' className='mt-4 btn btn-primary'>Post Review</button>
        </form>
      </div>
    </div>

  )
}

export default NewReviewForm;