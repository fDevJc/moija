import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <div>img</div>
      <div>name</div>
      <Link to="/profileEdit">ProfileEdit</Link>
      <div style={{ display: 'flex', marginTop: 10 }}>
        <div style={{ flex: 1 }}>
          <div>활동사항</div>
        </div>
        <div style={{ flex: 1 }}>
          <div>활동통계</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
