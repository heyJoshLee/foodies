import React from 'react';
import UserPreview from './UserPreview';

const Message = (props) => {
  const { user, content, date } = props.message;
  const currentUser = {
    username: 'josh'
  }

  const styles = {
    message: {
      backgroundColor: 'rgb(61, 130, 253)',
      padding: '10px',
      color: 'snow',
      margin: '10px 0',
      borderRadius: '8px',
      width: 'fit-content',
      height: 'auto'
    },
    messageOther: {
      backgroundColor: 'lightgrey'
    },
    imageContainer: {
      width: '20px'
    }
  }

  const isAuthorsMessage = user.username === currentUser.username;

  if (isAuthorsMessage) {
    return (
      <div className='align-self-end' style={styles.message}>
        {user.username} {content}

        <div style={styles.imageContainer}>
          <UserPreview user={user} />
        </div>
      </div>
    )
  }

  return (
    <div style={{ ...styles.message, ...styles.messageOther }}>
      <div style={styles.imageContainer}>
        <UserPreview user={user} />
      </div>
      {user.username} {content}
    </div>
  )
}

export default Message;