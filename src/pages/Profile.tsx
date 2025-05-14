import React from 'react';
import MainLayout from '../components/templates/MainLayout';

const Profile: React.FC = () => {
  // Mock user data - will be replaced with actual user data and Gravatar
  const mockUser = {
    email: 'user@example.com',
    username: 'cryptotrader',
    joinDate: 'May 2025',
    avatarUrl: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
  };

  return (
    <MainLayout>
      <div className="profile-container">
        <h1>Profile</h1>
        <p>View and manage your profile information</p>
        
        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar-container">
              <img 
                src={mockUser.avatarUrl} 
                alt="User avatar" 
                className="avatar-image" 
              />
            </div>
            <div className="user-info">
              <h2>{mockUser.username}</h2>
              <p>{mockUser.email}</p>
              <p>Member since: {mockUser.joinDate}</p>
            </div>
          </div>
          
          <div className="profile-actions">
            <button>Edit Profile</button>
            <button>Security Settings</button>
            <button>API Keys</button>
          </div>
        </div>
        
        <div className="github-repos">
          <h2>GitHub Repositories</h2>
          <p>Connect your GitHub account to display your repositories here.</p>
          {/* GitHub repositories will be displayed here when integrated */}
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
