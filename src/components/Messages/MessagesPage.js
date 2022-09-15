import React, { useEffect, useState } from 'react';
import MessageThreadsContainer from './MessageThreadsContainer';
import MessageThread from './MessageThread';
import { useDispatch, useSelector } from 'react-redux';
import { getMessageThreads } from '../../reducers/messageThreadsSlice';
const MessagesPage = () => {


  const dispatch = useDispatch();
  const [messageThreadsState, setMessageThreadsState] = useState([]);
  const messageThreadsStore = useSelector((state) => state.messageThreads);

  useEffect(() => {
    dispatch(getMessageThreads());
    setMessageThreadsState(messageThreadsStore);
  }, [])



  return (
    <div className='row'>
      <MessageThreadsContainer messages={messageThreadsState} />
      <MessageThread />
    </div>
  )
}

export default MessagesPage;