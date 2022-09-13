import React from 'react';

const RecipeIngredient = (props) => {

  const { name, quantity, measurement } = props.ingredient;

  return (
    <li className='recipe-ingredient list-group-item'>
      <input class="form-check-input me-1" type="checkbox" value={name} id={`checkbox-ingredient-${name}`} />
      <label class="form-check-label" for={`checkbox-ingredient-${name}`}>
        {` ${quantity} ${measurement} ${name}`}
      </label>
    </li>
  )
}

export default RecipeIngredient;