import React from 'react';
import RecipePlaceholderImage from '../../assets/images/recipe-image-placeholder.jpg';
import ImagePlaceholder from '../../assets/images/profile-placeholder.png';
import RecipeInfoBox from './RecipeInfoBox';
import StarRating from './StarRating';
import RecipeIngredients from './RecipeIngredients';
import RecipeDirections from './RecipeDirections';
import Reviews from '../Reviews/Reviews';
const Recipe = () => {

  const recipe = {
    name: 'Good Burger',
    user: {
      username: 'josh',
      _id: 1,
      image: ImagePlaceholder
    },
    image: RecipePlaceholderImage,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    servings: 5,
    ingredients: [
      {
        name: 'bun',
        quantity: 3,
        measurement: 'package'
      },
      {
        name: 'ground beef',
        quantity: 1,
        measurement: 'pound'
      },
      {
        name: 'cheese',
        quantity: 1,
        measurement: 'package'
      }
    ],
    directions: [
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq'
    ],
    reviewCount: 123,
    rating: 3.4,
    reviews: [
      {
        user: {
          username: 'josh',
          _id: 1,
          image: ImagePlaceholder
        },
        rating: 3,
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq'
      }, {
        user: {
          username: 'josh',
          _id: 1,
          image: ImagePlaceholder
        },
        rating: 3,
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq'
      }, {
        user: {
          username: 'josh',
          _id: 1,
          image: ImagePlaceholder
        },
        rating: 3,
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq'
      },
    ]
  }

  const { name, user, image, description, servings, ingredients, directions, reviewCount, rating, reviews } = recipe;

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
      <h1 className='text-center'>{name}</h1>
      <div className='row justify-content-md-center'>
        <div className='col'>
          <StarRating rating={rating} />
        </div>
        <span className='col  fst-italic'>({reviewCount})</span>
      </div>
      <img src={image} style={styles.mainImage} className='mx-auto d-block mt-4' />
      <RecipeInfoBox />
      <div className='row'>
        <div className='col'>
          <RecipeIngredients recipe={recipe} />
        </div>
        <div className='col'>
          <RecipeDirections directions={directions} />
        </div>
      </div>
      <Reviews reviews={reviews} />
    </div >
  )
}

export default Recipe;