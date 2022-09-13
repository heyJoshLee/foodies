import React from 'react';
import StarEmpty from '../../assets/images/star-empty.png';
import StarFilled from '../../assets/images/star-filled.png';
const StarRating = (props) => {
  const MAX_RATING = 5;
  const fullStarCount = Math.ceil(props.rating);
  const emptyStarCount = MAX_RATING - fullStarCount;

  const renderFullStars = () => {
    const fullStarArray = new Array(fullStarCount).fill('');
    return fullStarArray.map((s, index) => {
      return <img key={`rating-star-full${index}`} style={styles.image} className='rating-star' src={StarFilled} />
    })
  }

  const renderEmptyStars = () => {
    const emptyStarArray = new Array(emptyStarCount).fill('');
    return emptyStarArray.map((s, index) => {
      return <img key={`rating-star-empty${index}`} style={styles.image} className='rating-star' src={StarEmpty} />
    })
  }

  const styles = {
    image: {
      width: '1rem'
    }
  }



  return (
    <div className='star-rating-container'>
      {renderFullStars()}
      {renderEmptyStars()}
    </div>)
}

export default StarRating;