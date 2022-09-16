import React from 'react';
import Messages from './Messages';
const MessagesContainer = (props) => {
  const messages = props.messageThread.messages || [];

  return (
    <div>
      <Messages messages={messages} />
    </div>
  )
}

export default MessagesContainer;