import React from 'react';
import ImagePlaceholder from '../../assets/images/profile-placeholder.png';
import HeaderPlaceholder from '../../assets/images/header-placeholder.jpg';
const UserHeader = () => {
  const user = {
    image: ImagePlaceholder,
    username: 'josh',
    bio: 'I am a cool chef that likes making things',
    headerImage: HeaderPlaceholder,
    followers: 200,
    following: 134,
    recipeCount: 200,
    postCount: 300
  }
  const { image, username, recipeCount, postCount, bio,
    followers, following } = user;


  const styles = {
    headerImage: {
      height: '15rem'
    },
    profileImage: {
      height: '10rem',
      position: 'relative',
      top: '-50px',
      border: '2px solid black',
      borderRadius: '100%'
    },
    userHeader: {
      position: 'relative'
    },

  }
  return (
    <div className='user-header' style={styles.userHeader}>
      <h1>{username}</h1>
      <h2>{`${postCount} Posts | ${recipeCount} Recipes`}</h2>
      <img src={HeaderPlaceholder} style={styles.headerImage} className='w-100' />
      <img src={ImagePlaceholder} style={styles.profileImage} />
      <h3>{username}</h3>
      <p>{bio}</p>
      <p>{`${following} Following ${followers} Followers`}</p>
    </div>
  )

}

export default UserHeader;