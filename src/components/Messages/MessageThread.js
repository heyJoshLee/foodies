import React from 'react';
import MessagesContainer from './MessagesContainer';
import Loading from '../General/Loading/Loading';
import MessageContainerHeader from './MessageContainerHeader';
import NewMessageForm from './NewMessageForm';
const MessageThread = (props) => {

  const { messageThread } = props;

  if (!messageThread) { return <Loading /> }
  return (
    <div className='col-7'>
      <MessageContainerHeader messageThread={messageThread} />
      <MessagesContainer messageThread={messageThread} />
      <NewMessageForm messageThread={messageThread} />
    </div>
  )
}

export default MessageThread;