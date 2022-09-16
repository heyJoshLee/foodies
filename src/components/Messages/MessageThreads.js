import React, { useEffect, useState } from 'react';
import MessageThreadPreview from './MessageThreadPreview';
import { useDispatch, useSelector } from 'react-redux';
import { getMessageThreads } from '../../reducers/messageThreadsSlice';
const MessagesThreads = (props) => {
  const { messageThreads } = props;

  const [selectedThread, setSelectedThread] = useState(messageThreads[0].id)

  const highlightSelectedThread = (id) => { setSelectedThread(id) }

  return (
    <div>
      {messageThreads.map((messageThread, index) => {
        return (<MessageThreadPreview
          key={messageThread._id}
          index={index}
          messageThread={messageThread}
          selectedThread={selectedThread}
          highlightSelectedThread={highlightSelectedThread}
        />)
      })}
    </div>
  )
}

export default MessagesThreads;