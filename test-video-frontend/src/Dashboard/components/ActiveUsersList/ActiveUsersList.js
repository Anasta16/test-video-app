import React from 'react';

import './ActiveUsersList.css';
import ActiveUsersListItem from './ActiveUsersListItem';

const activeUsers = [
    {
        socketId: 321,
        username: 'Paul'
    },
    {
        socketId: 333,
        username: 'John'
    },
    {
        socketId: 432,
        username: 'Kate'
    },
    {
        socketId: 345,
        username: 'Adam'
    }
]


const ActiveUsersList = () => {
  return (
    <div className="active_user_list_container">
        {activeUsers.map((activeUser) => (
            <ActiveUsersListItem 
                key={activeUser.socketId} 
                activeUser={activeUser}
            />
        ))}
    </div>
  )
}

export default ActiveUsersList;