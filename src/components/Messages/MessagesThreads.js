import React from 'react';
import MessageThreadPreview from './MessageThreadPreview';
import ProfileImagePlaceHolder from '../../assets/images/profile-placeholder.png';

const MessagesThreads = () => {

  const messageThread1 = {
    _id: 1,
    users: [{
      username: 'josh',
      image: ProfileImagePlaceHolder
    },
    {
      username: 'other',
      image: ProfileImagePlaceHolder
    }],
    messages: [
      {
        from: 'other',
        date: new Date(),
        content: 'cool message',
        _id: 1
      }, {
        from: 'josh',
        date: new Date(),
        content: 'cool message',
        _id: 2
      },
      {
        from: 'other',
        date: new Date(),
        content: 'cool message',
        _id: 3
      }, {
        from: 'other',
        date: new Date(),
        content: 'cool message',
        _id: 4
      }
    ]
  }

  const messageThread2 = {
    _id: 2,
    users: [{
      username: 'other',
      image: ProfileImagePlaceHolder
    },
    {
      username: 'josh',
      image: ProfileImagePlaceHolder
    }],
    messages: [
      {
        from: 'other2',
        date: new Date(),
        content: 'cool message',
        _id: 1
      }, {
        from: 'josh',
        date: new Date(),
        content: 'cool message',
        _id: 2
      },
      {
        from: 'other2',
        date: new Date(),
        content: 'cool message',
        _id: 3
      }, {
        from: 'other2',
        date: new Date(),
        content: 'cool message',
        _id: 4
      }
    ]
  }

  const messageThread3 = {
    _id: 3,
    users: [{
      username: 'josh',
      image: ProfileImagePlaceHolder
    },
    {
      username: 'other',
      image: ProfileImagePlaceHolder
    }],
    messages: [
      {
        to: 'josh',
        from: 'other3',
        date: new Date(),
        content: 'cool message',
        _id: 1
      }, {
        to: 'other3',
        from: 'josh',
        date: new Date(),
        content: 'cool message',
        _id: 2
      },
      {
        to: 'josh',
        from: 'other3',
        date: new Date(),
        content: 'cool message',
        _id: 3
      }, {
        to: 'josh',
        from: 'other3',
        date: new Date(),
        content: 'cool message',
        _id: 4
      }
    ]
  }

  const messageThreads = [messageThread1, messageThread2, messageThread3];


  return (
    <div>
      {messageThreads.map((messageThread) => <MessageThreadPreview key={messageThread._id} messageThread={messageThread} />)}
    </div>
  )
}

export default MessagesThreads;