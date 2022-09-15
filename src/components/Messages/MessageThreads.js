import React, { useEffect, useState } from 'react';
import MessageThreadPreview from './MessageThreadPreview';
import { useDispatch, useSelector } from 'react-redux';
import { getMessageThreads } from '../../reducers/messageThreadsSlice';
const MessagesThreads = (props) => {

  const { messageThreads } = props.messageThreads;
  return (
    <div>
      {messageThreads.map((messageThread) => <MessageThreadPreview key={messageThread._id} messageThread={messageThread} />)}
    </div>
  )
}

export default MessagesThreads;