import Axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onLocalLogin = async (event) => {
    event.preventDefault();
    console.log('local-login');
    const data = { email, password };
    const res = await Axios.post(
      'http://localhost:3001/auth/local-login',
      data
    );
    console.log(res.data);
  };
  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 2 }}>이미지</div>
      <div style={{ flex: 1 }}>
        <form onSubmit={onLocalLogin}>
          <div>
            <input
              name="email"
              type="email"
              placeholder="email"
              value={email}
              required
              autoFocus
              onChange={onChange}
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="password"
              value={password}
              required
              onChange={onChange}
            />
          </div>
          <input type="submit" value="로그인" />
        </form>
        <div>
          <a href="/auth/join">회원가입</a>
        </div>
        <div>
          <a href="/auth/kakao-login">카카오</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
