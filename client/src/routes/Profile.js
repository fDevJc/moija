import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <div>img</div>
      <div>name</div>
      <Link to="/profileEdit">ProfileEdit</Link>
      <button>프로필편집</button>
      <div>
        <div>활동사항</div>
      </div>
      <div>
        <div>활동통계</div>
      </div>
    </>
  );
};

export default Profile;
