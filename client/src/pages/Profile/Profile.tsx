import React from 'react';
import ProfileIcon from '../../components/Icons/ProfileIcon/ProfileIcon';
import './Profile.css';
type Props = {};

const Profile = (props: Props) => {
  return (
    <main className="profile-main">
      <header>
        <div className="profile-banner">
          <img
            src="https://source.unsplash.com/random"
            alt="Random Banner"
            width="100%"
          />
        </div>
        <div className="profile-body">
          <ProfileIcon />
          <div>
            <h3>Anthony Mclamb</h3>
            <p>500 Friends</p>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Profile;
