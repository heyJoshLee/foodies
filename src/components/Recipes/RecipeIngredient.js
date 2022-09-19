import React from 'react';

const RecipeIngredient = (props) => {

  const { name, quantity, measurement } = props.ingredient;

  return (
    <li className='recipe-ingredient list-group-item'>
      <input className="form-check-input me-1" type="checkbox" value={name} id={`checkbox-ingredient-${name}`} />
      <label className="form-check-label" htmlFor={`checkbox-ingredient-${name}`}>
        {` ${quantity} ${measurement} ${name}`}
      </label>
    </li>
  )
}

export default RecipeIngredient;