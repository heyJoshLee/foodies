import React from 'react';
import MessagesContainer from './MessagesContainer';
import { useSelector } from 'react-redux';
const MessageThread = (props) => {

  const messageThreadStore = useSelector((state) => state.messageThread);

  return (
    <div className='col-7'>
      <MessagesContainer messageThread={messageThreadStore} />
    </div>
  )
}

export default MessageThread;