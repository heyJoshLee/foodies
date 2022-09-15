import React from 'react';
import Messages from './Messages';
const MessagesContainer = (props) => {
  const { messages } = props.messageThread;
  return (
    <div>
      <Messages messages={messages} />
    </div>
  )
}

export default MessagesContainer;