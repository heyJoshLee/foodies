import React from 'react';

const Message = (props) => {
  const { to, from, content, date } = props.message;
  return (
    <div>{content}</div>
  )
}

export default Message;