import React from 'react';

const RecipeDirection = (props) => {
  const { direction, index } = props;
  return (
    <li className='recipe-ingredient list-group-item'>
      <input class="form-check-input me-1" type="checkbox" value={index} id={`checkbox-ingredient-${index}`} />
      <label class="form-check-label" for={`checkbox-ingredient-${index}`}>
        {direction}
      </label>
    </li>
  )
}

export default RecipeDirection;