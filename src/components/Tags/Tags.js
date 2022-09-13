import React from 'react';
import TagPreview from './TagPreview';
import RecipeImagePlaceholder from '../../assets/images/recipe-image-placeholder.jpg'
const Tags = () => {

  const tags = [
    { name: 'Chinese', image: RecipeImagePlaceholder },
    { name: 'beef', image: RecipeImagePlaceholder },
    { name: 'soup', image: RecipeImagePlaceholder },
    { name: 'sweet', image: RecipeImagePlaceholder }
  ]

  return (
    <div>
      <div className="">
        {tags.map((tag) => <TagPreview tag={tag} />)}
      </div>
    </div>
  )
}

export default Tags;