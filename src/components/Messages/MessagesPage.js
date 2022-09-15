import React from 'react';
import MessageThreadsContainer from './MessageThreadsContainer';
import MessagesContainer from './MessagesContainer';
const MessagesPage = () => {
  return (
    <div className='row'>
      <MessageThreadsContainer />
      <MessagesContainer />
    </div>
  )
}

export default MessagesPage;