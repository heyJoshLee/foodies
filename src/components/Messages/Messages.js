import React from 'react';
import Message from './Message';
const Messages = (props) => {
  const { messages } = props;
  return (
    <div>

      {messages.map((message) => <Message message={message} />)}
    </div>
  )
}

export default Messages;