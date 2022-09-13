import React from 'react';
import ImagePlaceholder from '../../assets/images/profile-placeholder.png';
import { Link } from 'react-router-dom';
const RecipeInfoBox = () => {

  const receipe = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user: {
      username: 'josh',
      _id: 1,
      image: ImagePlaceholder
    }
  }

  const { description, user } = receipe;


  const styles = {
    recipeInfoBox: {
      height: '20rem'
    },
    image: {
      height: '200px'
    }
  }


  return (
    <div className='receipe-info-box' style={styles.recipeInfoBox}>
      <div className='post m-5' >
        <div className='card mb-3 p-3'>
          <div className='row g-0'>
            <div className='col-md-4'>
              <Link to={`/users/${user._id}`}>
                <img src={user.image} className='img-fluid rounded-start mx-auto d-block' style={styles.image} />
              </Link>
              <Link to={`/users/${user._id}`}>
                <p className='text-center'>{user.username}</p>
              </Link>
            </div>
            <div className='col-md-8'>
              <div className='card-body'>

                <p className='card-text'>{description}</p>
                <Link to={`/users/${user._id}`}>
                  <p className='card-text'><small className='text-muted'>View author's profile</small></p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default RecipeInfoBox;