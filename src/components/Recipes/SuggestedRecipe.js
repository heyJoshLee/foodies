import React from 'react';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';
const SuggestedRecipe = (props) => {
  const { name, image, rating, _id } = props.recipe;

  const styles = {
    suggestedRecipe: {
      height: 'auto'
    },
    image: {
      width: '100%'
    }
  }


  return (
    <li className='suggested-recipe row' style={styles.suggestedRecipe}>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 pt-4">
            <Link to={`/recipes/${_id}`}>
              <img src={image} className="img-fluid rounded-start mx-auto" />
            </Link>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <Link to={`/recipes/${_id}`}>
                <h5 className="card-title">{name}</h5>
              </Link>
              <StarRating rating={rating} />
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SuggestedRecipe;