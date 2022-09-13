import React from 'react';

import UserHeader from './UserHeader';
import UserTabs from './UserTabs';
const User = () => {

  return (
    <div className='user-profile container'>
      <UserHeader />
      <UserTabs />
    </div>
  )
}

export default User;