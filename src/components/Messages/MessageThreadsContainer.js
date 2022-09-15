import React from 'react';
import MessagesThreads from './MessageThreads';
const MessageThreadsContainer = () => {
  return (
    <div className='col-5'>
      <h2>Conversations</h2>
      <MessagesThreads />
    </div>
  )
}

export default MessageThreadsContainer;