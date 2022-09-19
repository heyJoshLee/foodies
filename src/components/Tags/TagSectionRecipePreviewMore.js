import React from 'react';
import { Link } from 'react-router-dom';
const TagSectionRecipePreviewMore = (props) => {
  const { name, id } = props.tag;

  const styles = {
    image: {
      maxWidth: '100%',
      maxHeight: '50%'
    },
    tagSectionRecipePreview: {
      height: '15rem'
    }
  }

  return (
    <div className="card col-4 p-5" style={styles.tagSectionRecipePreview}>
      <div>
        <Link to={`/tags/${name}`} className="btn btn-primary">View More</Link>

      </div>
    </div>
  )
}

export default TagSectionRecipePreviewMore;