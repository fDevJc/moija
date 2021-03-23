import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={{ marginBottom: 20, marginTop: 20 }}>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <li style={{ flex: 1 }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ flex: 5 }}>
          <div>검색</div>
        </li>
        <li style={{ flex: 1 }}>
          <Link to="/login">로그인</Link>
        </li>
        <li style={{ flex: 1 }}>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
