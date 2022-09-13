import React from 'react';
import { Link } from 'react-router-dom';
const TagPreview = (props) => {

  const { name, popularity, _id } = props.tag;

  return (
    <div className='tag-preview '>
      <Link to={`/tags/${name}`}>
        {`${name} - ${popularity}`}
      </Link>
    </div>
  )
}

export default TagPreview;