import React from 'react';
import SuggestedRecipes from '../Recipes/SuggestedRecipes';
import PopularTags from '../Tags/PopularTags';

const ExploreBar = () => {
  return (
    <div>
      <div>Search bar</div>
      <SuggestedRecipes />
      <PopularTags />
    </div>
  )
}

export default ExploreBar;