import React from 'react';
import ReceipeImagePlaceholder from '../../assets/images/recipe-image-placeholder.jpg';
import ReceipePreivew from './RecipePreview';
const ReceipePreivews = () => {

  const recipes = [
    {
      name: 'something good',
      image: ReceipeImagePlaceholder,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      _id: 1
    }, {
      name: 'something good',
      image: ReceipeImagePlaceholder,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      _id: 1
    }, {
      name: 'something good',
      image: ReceipeImagePlaceholder,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      _id: 1
    },
  ]

  return (
    <div className='receipe-previews-list'>
      {recipes.map((recipe) => <ReceipePreivew recipe={recipe} />)}
    </div>
  )
}

export default ReceipePreivews;