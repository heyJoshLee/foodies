import React from 'react';

const OtherUserPreview = (props) => {

  const { image, username } = props.user;


  const styles = {
    image: {
      width: '5rem'
    }
  }
  return (
    <div className='other-user-preview'>
      <img src={image} style={styles.image} />
    </div>
  )
}

export default OtherUserPreview;