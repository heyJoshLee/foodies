import React from 'react';
import UserPreview from './UserPreview';
const MessageContainerHeader = (props) => {
  const { users } = props.messageThread;
  const currentUser = { username: 'josh' }


  const styles = {
    header: {
      height: '3rem',
      padding: '10px',
      borderBottom: '1px solid lightgrey'
    }
  }

  return (
    <div style={styles.header}>
      {users.map((user) => <UserPreview user={user} />)}
    </div>

  )
}

export default MessageContainerHeader;