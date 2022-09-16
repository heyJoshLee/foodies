import React from 'react';

const UserPreview = (props) => {

  const { image, username } = props.user;


  const styles = {
    image: {
      maxWidth: '100%',
      maxHeight: '100%'
    }
  }
  return (
    <>
      <img style={styles.image} src={image} />
    </>
  )
}

export default UserPreview;