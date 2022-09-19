import React, { useEffect, useState } from 'react';
import { getRecipesWithTags } from '../../api/recipes';
import { useDispatch } from 'react-redux';
import Loading from '../General/Loading/Loading';
import TagSectionRecipePreview from './TagSectionRecipePreview';
import TagSectionRecipePreviewMore from './TagSectionRecipePreviewMore';

const TagSectionPreview = (props) => {
  const { name, id } = props.tag;
  const [recipes, setRecipes] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setRecipes(getRecipesWithTags([name]));
  }, [])

  const styles = {
    tagSectionPreviewContainer: {
      overflowX: 'scroll'
    }
  }


  return (
    <div className='mt-4'>
      <h2>{name}</h2>
      <div className='d-flex gap-2' style={styles.tagSectionPreviewContainer}>
        {recipes.map((recipe) => <TagSectionRecipePreview recipe={recipe} />)}
        <TagSectionRecipePreviewMore tag={props.tag} />
      </div>
    </div>
  )
}

export default TagSectionPreview;