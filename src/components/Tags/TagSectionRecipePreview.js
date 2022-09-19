import React from 'react';
import { Link } from 'react-router-dom';

const TagSectionRecipePreview = (props) => {
  const { name, image, _id } = props.recipe;

  const styles = {
    image: {
      maxWidth: '100%',
      maxHeight: '50%'
    },
    tagSectionRecipePreview: {
      height: '15rem'
    }
  }

  return (
    <div className="card col-4" style={styles.tagSectionRecipePreview}>
      <img src={image} className="card-img-top" style={styles.image} />
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">{name}</p>
        <Link to={`/recipes/${_id}`} className="btn btn-primary">View Recipe</Link>
      </div>
    </div>
  )
}

export default TagSectionRecipePreview;


