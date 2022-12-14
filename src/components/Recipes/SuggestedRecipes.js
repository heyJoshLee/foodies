import React from 'react';
import RecipeImagePlaceholder from '../../assets/images/recipe-image-placeholder.jpg';
import SuggestedRecipe from './SuggestedRecipe';
const SuggestedRecipes = () => {
  const recipes = [
    {
      name: 'burger',
      rating: 3,
      image: RecipeImagePlaceholder,
      _id: 1
    }, {
      name: 'burger',
      rating: 3,
      image: RecipeImagePlaceholder,
      _id: 2
    }, {
      name: 'burger',
      rating: 3,
      image: RecipeImagePlaceholder,
      _id: 3
    }, {
      name: 'burger',
      rating: 3,
      image: RecipeImagePlaceholder,
      _id: 4
    }, {
      name: 'burger',
      rating: 3,
      image: RecipeImagePlaceholder,
      _id: 5
    },

  ]


  return (
    <div className='suggested-recipes'>
      <ul className='list-group'>
        {recipes.map((recipe) => <SuggestedRecipe key={`suggested-recipe-${recipe._id}`} recipe={recipe} />)}
      </ul>
    </div>
  )
}

export default SuggestedRecipes;