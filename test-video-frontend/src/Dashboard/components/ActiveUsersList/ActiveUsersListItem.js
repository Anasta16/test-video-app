import React from 'react';

import userAvatar from '../../../resources/userAvatar.png';
import { callToOtherUser } from '../../../utils/webRTC/webRTCHandler';

const ActiveUsersListItem = (props) => {

    const { activeUser } = props;

    const handleListItemPressed = () => {
        callToOtherUser(activeUser);
    }

  return (
    <div 
        className="active_user_list_item"
        onClick={handleListItemPressed}
    >
        <div className="active_user_list_image_container">
            <img className="active_user_list_image" src={userAvatar} alt="" />
        </div>
        <span className="active_user_list_text">
            {activeUser.username}
        </span>
    </div>
  )
}

export default ActiveUsersListItem;
