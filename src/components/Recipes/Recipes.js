import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTags } from '../../reducers/tagsSlice';
import TagSectionPreview from '../Tags/TagSectionPreview';
import Loading from '../General/Loading/Loading';
import ExploreBar from '../ExploreBar/ExploreBar'

const Recipes = () => {

  const dispatch = useDispatch();
  const tagsStore = useSelector((state) => state.tags);

  const [tagsState, setTagsState] = useState([]);

  useEffect(() => {
    dispatch(getTags());
    setTagsState(tagsStore)
  }, [])


  if (tagsState.length === 0) { return <Loading /> }


  return (
    <div className='row'>
      <div className='recipes-page col-9 row'>
        <h1 className='text-center'>Hot Recipes</h1>
        {tagsState.map((tag) => <TagSectionPreview key={`tag-section-preview-${tag.name}`} tag={tag} />)}

      </div>
      <div className='col-3'>
        <ExploreBar />
      </div>
    </div>

  )
}

export default Recipes;