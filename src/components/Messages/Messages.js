import React from 'react';
import Message from './Message';
const Messages = (props) => {
  const { messages } = props;
  return (
    <div className='d-flex flex-column'>
      {messages.map((message) => <Message key={`message-${message._id}`} message={message} />)}
    </div>
  )
}

export default Messages;