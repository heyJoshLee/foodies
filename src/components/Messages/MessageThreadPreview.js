import React from 'react';
import Message from './Message';
import OtherUserPreview from './OtherUserPreview';
import { useDispatch } from 'react-redux';
import { getMessageThread } from '../../reducers/messageThreadSlice';
const MessageThreadPreview = (props) => {
  const { messages, users, _id } = props.messageThread;
  const dispatch = useDispatch();

  const currentUser = {
    username: 'josh'
  }


  const setCurrentMessageThread = () => {
    dispatch(getMessageThread(_id));
  }

  const otherUsers = users.filter((user) => user.username !== currentUser.username);

  const turnOnPointer = () => document.body.style.cursor = 'pointer';
  const turnOffPointer = () => document.body.style.cursor = 'default';

  const lastMessage = messages[0];


  return (
    <div>
      <div className="card mb-3" onClick={setCurrentMessageThread} onMouseEnter={turnOnPointer} onMouseLeave={turnOffPointer}>
        <div className="row g-0">
          <div className="col-md-4">
            {otherUsers.map((otherUser) => <OtherUserPreview user={otherUser} />)}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">{lastMessage.content}</p>
              <p className="card-text"><small className="text-muted">{lastMessage.date}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageThreadPreview;