import React from 'react';
import RecipeDirection from './RecipeDirection';

const RecipeDirections = (props) => {
  const { directions } = props;

  return (
    <div>
      <h2>Directions</h2>

      <ol className='list-group'>
        {directions.map((direction, index) => <RecipeDirection key={`direction-${index}`} direction={direction} index={index} />)}
      </ol>
    </div>
  )
}

export default RecipeDirections;