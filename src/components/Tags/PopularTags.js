import React from 'react';
import PopularTag from './PopularTag';

const PopularTags = () => {

  const tags = [
    {
      name: 'beef',
      popularity: 100,
      _id: 1
    },
    {
      name: 'chicken',
      popularity: 23,
      _id: 1
    },
    {
      name: 'Mexican',
      popularity: 3213,
      _id: 1
    },
    {
      name: 'soups',
      popularity: 3213,
      _id: 1
    },
    {
      name: 'Asian',
      popularity: 23,
      _id: 1
    },
  ]

  return (
    <div>Popular tags
      {tags.map((tag) => <PopularTag key={`tag-${tag.name}`} tag={tag} />)}
    </div>
  )
}

export default PopularTags;