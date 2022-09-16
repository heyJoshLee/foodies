import React, { useEffect, useState } from 'react';
import MessageThreadsContainer from './MessageThreadsContainer';
import MessageThread from './MessageThread';
import { useDispatch, useSelector } from 'react-redux';
import { getMessageThreads } from '../../reducers/messageThreadsSlice';
import { getMessageThread } from '../../reducers/messageThreadSlice';
import Loading from '../General/Loading/Loading';
const MessagesPage = () => {

  const dispatch = useDispatch();
  const [messageThreadsState, setMessageThreadsState] = useState(null);
  const [messageThreadState, setMessageThreadState] = useState(null);
  const messageThreadsStore = useSelector((state) => state.messageThreads);
  const messageThreadStore = useSelector((state) => state.messageThread);

  useEffect(() => {
    dispatch(getMessageThreads());

  }, [])

  useEffect(() => {
    if (messageThreadsStore.length > 0) {
      setMessageThreadsState(messageThreadsStore);
      dispatch(getMessageThread(messageThreadsStore[0]._id))
      setMessageThreadState(messageThreadsStore[0]);
    }
  }, [messageThreadsStore])

  if (!messageThreadsState || !messageThreadState) { return <Loading /> }

  return (
    <div className='row'>
      <MessageThreadsContainer messageThreads={messageThreadsState} />
      <MessageThread messageThread={messageThreadStore} />
    </div>
  )
}

export default MessagesPage;