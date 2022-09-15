import React from 'react';
import MessagesThreads from './MessageThreads';
const MessageThreadsContainer = (props) => {
  const { messageThreads } = props;
  return (
    <div className='col-5'>
      <h2>Conversations</h2>
      <MessagesThreads messageThreads={messageThreads} />
    </div>
  )
}

export default MessageThreadsContainer;