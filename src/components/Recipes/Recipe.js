import React, { useEffect, useState } from 'react';
import RecipeInfoBox from './RecipeInfoBox';
import StarRating from './StarRating';
import RecipeIngredients from './RecipeIngredients';
import RecipeDirections from './RecipeDirections';
import Reviews from '../Reviews/Reviews';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipe } from '../../reducers/recipeSlice';
import Loading from '../General/Loading/Loading';

const Recipe = () => {
  const dispatch = useDispatch();
  const [recipeState, setRecipeState] = useState(null);
  const { id } = useParams();

  const recipeStore = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(getRecipe(id));
    setRecipeState(recipeStore);
  }, []);


  if (!recipeState) { return <Loading /> }

  const styles = {
    mainImage: {
      height: '300px'
    },
    reviewCount: {
      fontStyle: 'italics'
    }
  }

  return (
    <div className='receipe container text-center'>
      <h1 className='text-center'>{recipeState.name}</h1>
      <div className='row justify-content-md-center'>
        <div className='col'>
          <StarRating rating={recipeState.rating} />
        </div>
        <span className='col  fst-italic'>({recipeState.reviewCount})</span>
      </div>
      <img src={recipeState.image} style={styles.mainImage} className='mx-auto d-block mt-4' />
      <RecipeInfoBox />
      <div className='row'>
        <div className='col'>
          <RecipeIngredients recipe={recipeState} />
        </div>
        <div className='col'>
          <RecipeDirections directions={recipeState.directions} />
        </div>
      </div>
      <Reviews reviews={recipeState.reviews} recipe={recipeState} />
    </div >
  )
}

export default Recipe;