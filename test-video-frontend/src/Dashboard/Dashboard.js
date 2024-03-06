import React, { useEffect } from 'react';

import logo from '../resources/test-video-app-logo.png';
import './Dashboard.css';
import ActiveUsersList from './components/ActiveUsersList/ActiveUsersList';
import * as webRTCHandler from '../utils/webRTC/webRTCHandler';

const Dashboard = () => {

  useEffect(() => {
    webRTCHandler.getLocalStream();
  }, [])

  return (
    <div className="dashboard_container background_main_color">
      <div className="dashboard_left_section">
        <div className="dashboard_content_container">
          content
        </div>
        <div className="dashboard_rooms_container background_secondary_color">
          rooms
        </div>
      </div>
      <div className="dashboard_right_section background_secondary_color">
        <div className="dashboard_active_users_list">
          <ActiveUsersList />
        </div>
        <div className="dashboard_logo_container">
          <img 
            className="dashboard_logo_image"
            src={logo} 
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;