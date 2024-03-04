import React from 'react';
import { connect } from 'react-redux';

import './ActiveUsersList.css';
import ActiveUsersListItem from './ActiveUsersListItem';

const ActiveUsersList = ({ activeUsers }) => {
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

const mapStateToProps = ({ dashboard }) => ({
    ...dashboard,
})

export default connect(mapStateToProps)(ActiveUsersList);