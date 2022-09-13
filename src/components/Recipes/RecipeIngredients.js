import React from 'react';
import RecipeIngredient from './RecipeIngredient';
const RecipeIngredients = (props) => {

  const { ingredients } = props.recipe;

  return (
    <div>
      <h2>Ingredients</h2>
      <ul className='list-group'>
        {ingredients.map((ingredient) => <RecipeIngredient key={`ingredient-item-${ingredient.name}`} ingredient={ingredient} />)}
      </ul>


    </div>
  )
}
export default RecipeIngredients;