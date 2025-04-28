import React from 'react';
import './styles.css';

function AccountSettings({ user, onLogout }) {
  return (
    <div className="account-container">
      <h1>Account Settings</h1>
      <div className="profile-section">
        <div className="profile-image-container">
          <div className="profile-image">
            {user?.fullName?.charAt(0) || '?'}
          </div>
        </div>
        <div className="profile-info">
          <h2>{user?.fullName}</h2>
          <p>{user?.email}</p>
          <div className="badge">
            <span>P</span>
          </div>
        </div>
      </div>
      <div className="profile-description">
        <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
      </div>
      <button className="btn-secondary logout-btn" onClick={onLogout}>Logout</button>
    </div>
  );
}

export default AccountSettings;