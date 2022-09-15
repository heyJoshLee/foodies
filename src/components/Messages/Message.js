import React from 'react';

const Message = (props) => {
  const { to, from, content, date } = props.message;

  const styles = {
    message: {
      backgroundColor: 'rgb(61, 130, 253)',
      padding: '10px',
      color: 'snow'
    }
  }
  return (
    <div style={styles.message}>
      {from.username} {content}
    </div>
  )
}

export default Message;